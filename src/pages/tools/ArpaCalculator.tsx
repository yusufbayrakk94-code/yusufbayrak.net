import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: {
    mrr: "Toplam Aylık Yinelenen Gelir (MRR)", accounts: "Aktif Hesap Sayısı",
    arpa: "Hesap Başına Ortalama Gelir (ARPA)", annual: "Yıllık ARPA",
    hint: "ARPA = Toplam MRR / Aktif Hesap Sayısı",
    annualHint: "Yıllık ARPA = ARPA × 12",
    note: "Yalnızca yinelenen abonelik gelirini kullanın; kurulum ve tek seferlik gelirler ortalamayı yapay olarak yükseltir.",
  },
  en: {
    mrr: "Total Monthly Recurring Revenue (MRR)", accounts: "Active Accounts",
    arpa: "Average Revenue Per Account (ARPA)", annual: "Annual ARPA",
    hint: "ARPA = Total MRR / Active Accounts",
    annualHint: "Annual ARPA = ARPA × 12",
    note: "Use recurring subscription revenue only — setup fees and one-off sales inflate the average.",
  },
};

export default function ArpaCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const [mrr, setMrr] = useState("");
  const [accounts, setAccounts] = useState("");

  const arpa = useMemo(() => {
    const m = parseFloat(mrr);
    const a = parseFloat(accounts);
    if (Number.isNaN(m) || Number.isNaN(a) || a <= 0) return 0;
    return m / a;
  }, [mrr, accounts]);

  return (
    <ToolPage toolKey="arpa">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.mrr} value={mrr} onChange={setMrr} suffix={locale === "en" ? "$" : "₺"} placeholder="50000" />
          <Field label={s.accounts} value={accounts} onChange={setAccounts} placeholder="100" />
        </div>
        <Result label={s.arpa} value={fmt(arpa, 2)} hint={s.hint} />
        <Result label={s.annual} value={fmt(arpa * 12, 2)} hint={s.annualHint} />
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.note}</p>
      </div>
    </ToolPage>
  );
}
