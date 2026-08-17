import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: {
    cac: "Müşteri Edinme Maliyeti (CAC)",
    revenue: "Müşteri Başına Aylık Gelir",
    margin: "Brüt Marj (%)",
    months: "Geri Ödeme Süresi",
    monthUnit: "ay",
    profit: "Aylık Brüt Kâr",
    hint: "Geri Ödeme Süresi = CAC / (Aylık Gelir × Brüt Marj)",
    empty: "—",
    good: "Sağlıklı aralık: SMB SaaS 6-12 ay, mid-market 12-18 ay, enterprise 18-24 ay, e-ticaret 3 ayın altı.",
    note: "Brüt marjı boş bırakırsanız %100 kabul edilir ve süre olduğundan kısa görünür.",
  },
  en: {
    cac: "Customer Acquisition Cost (CAC)",
    revenue: "Monthly Revenue per Customer",
    margin: "Gross Margin (%)",
    months: "Payback Period",
    monthUnit: "months",
    profit: "Monthly Gross Profit",
    hint: "Payback = CAC / (Monthly Revenue × Gross Margin)",
    empty: "—",
    good: "Healthy ranges: SMB SaaS 6-12 months, mid-market 12-18, enterprise 18-24, ecommerce under 3.",
    note: "Leaving gross margin empty assumes 100% and makes the payback look shorter than it is.",
  },
};

export default function CacPaybackCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const [cac, setCac] = useState("");
  const [revenue, setRevenue] = useState("");
  const [margin, setMargin] = useState("");

  const { months, grossProfit } = useMemo(() => {
    const c = parseFloat(cac) || 0;
    const r = parseFloat(revenue) || 0;
    const mRaw = parseFloat(margin);
    const m = Number.isNaN(mRaw) ? 100 : mRaw;
    const gp = r * (m / 100);
    if (!c || gp <= 0) return { months: 0, grossProfit: gp };
    return { months: c / gp, grossProfit: gp };
  }, [cac, revenue, margin]);

  return (
    <ToolPage toolKey="cacPayback">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.cac} value={cac} onChange={setCac} suffix={locale === "en" ? "$" : "₺"} placeholder="18000" />
          <Field label={s.revenue} value={revenue} onChange={setRevenue} suffix={locale === "en" ? "$" : "₺"} placeholder="2000" />
        </div>
        <Field label={s.margin} value={margin} onChange={setMargin} suffix="%" placeholder="75" />
        <Result
          label={s.months}
          value={months > 0 ? `${months.toFixed(1)} ${s.monthUnit}` : s.empty}
          hint={s.hint}
        />
        <Result label={s.profit} value={fmt(grossProfit)} />
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.good}</p>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.note}</p>
      </div>
    </ToolPage>
  );
}
