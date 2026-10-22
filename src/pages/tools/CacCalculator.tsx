import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// Blended CAC (all marketing + sales cost / all new customers), optional
// paid CAC (ad spend / customers from paid channels), and — when monthly
// revenue per customer and gross margin are given — CAC payback in months.

const strings = {
  tr: {
    m: "Pazarlama Gideri (reklam, ajans, araçlar)", s: "Satış Gideri (maaş, prim)", c: "Kazanılan Yeni Müşteri",
    cac: "Blended CAC", hint: "CAC = (Pazarlama + Satış Gideri) / Yeni Müşteri Sayısı",
    paidTitle: "Ücretli kanal CAC'ı (opsiyonel)",
    ads: "Bunun reklam harcaması kısmı", paidCustomers: "Ücretli kanallardan gelen müşteri",
    paid: "Paid CAC", paidHint: "Reklam harcaması / Ücretli kanallardan gelen müşteri",
    econTitle: "Geri ödeme süresi (opsiyonel)",
    arpa: "Müşteri başı aylık gelir", margin: "Brüt kâr marjı",
    payback: "CAC Geri Ödeme Süresi", months: "ay", paybackHint: "CAC / (Aylık gelir × Brüt marj). B2B SaaS için hedef: < 12 ay",
  },
  en: {
    m: "Marketing Spend (ads, agency, tools)", s: "Sales Spend (salaries, commission)", c: "New Customers Acquired",
    cac: "Blended CAC", hint: "CAC = (Marketing + Sales) / New Customers",
    paidTitle: "Paid-channel CAC (optional)",
    ads: "Of which ad spend", paidCustomers: "Customers from paid channels",
    paid: "Paid CAC", paidHint: "Ad spend / Customers from paid channels",
    econTitle: "Payback period (optional)",
    arpa: "Monthly revenue per customer", margin: "Gross margin",
    payback: "CAC Payback Period", months: "months", paybackHint: "CAC / (Monthly revenue × Gross margin). B2B SaaS target: < 12 months",
  },
};

export default function CacCalculator() {
  const locale = useLocale();
  const t = strings[locale];
  const fmt = useCurrencyFormatter();
  const cur = locale === "en" ? "$" : "₺";
  const [marketing, setMarketing] = useState(""); const [sales, setSales] = useState(""); const [customers, setCustomers] = useState("");
  const [ads, setAds] = useState(""); const [paidCustomers, setPaidCustomers] = useState("");
  const [arpa, setArpa] = useState(""); const [margin, setMargin] = useState("");

  const r = useMemo(() => {
    const m = parseFloat(marketing) || 0; const s = parseFloat(sales) || 0; const c = parseFloat(customers);
    const cac = c && c > 0 ? (m + s) / c : 0;
    const a = parseFloat(ads); const pc = parseFloat(paidCustomers);
    const paid = a > 0 && pc > 0 ? a / pc : NaN;
    const rev = parseFloat(arpa); const g = (parseFloat(margin) || 0) / 100;
    const payback = cac > 0 && rev > 0 && g > 0 ? cac / (rev * g) : NaN;
    return { cac, paid, payback };
  }, [marketing, sales, customers, ads, paidCustomers, arpa, margin]);

  return (
    <ToolPage toolKey="cac">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={t.m} value={marketing} onChange={setMarketing} suffix={cur} placeholder="50000" />
          <Field label={t.s} value={sales} onChange={setSales} suffix={cur} placeholder="30000" />
        </div>
        <Field label={t.c} value={customers} onChange={setCustomers} placeholder="100" />
        <Result label={t.cac} value={fmt(r.cac)} hint={t.hint} />

        <div className="pt-2 font-mono text-xs text-foreground">{"//"} {t.paidTitle}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={t.ads} value={ads} onChange={setAds} suffix={cur} placeholder="35000" />
          <Field label={t.paidCustomers} value={paidCustomers} onChange={setPaidCustomers} placeholder="60" />
        </div>
        {Number.isFinite(r.paid) && <Result label={t.paid} value={fmt(r.paid)} hint={t.paidHint} />}

        <div className="pt-2 font-mono text-xs text-foreground">{"//"} {t.econTitle}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={t.arpa} value={arpa} onChange={setArpa} suffix={cur} placeholder="150" />
          <Field label={t.margin} value={margin} onChange={setMargin} suffix="%" placeholder="75" />
        </div>
        {Number.isFinite(r.payback) && (
          <Result
            label={t.payback}
            value={`${r.payback.toLocaleString(locale === "en" ? "en-US" : "tr-TR", { maximumFractionDigits: 1 })} ${t.months}`}
            hint={t.paybackHint}
          />
        )}
      </div>
    </ToolPage>
  );
}
