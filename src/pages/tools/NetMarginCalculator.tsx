import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: {
    rev: "Toplam Gelir", exp: "Toplam Giderler",
    margin: "Net Kar Marjı", profit: "Net Kar",
    hint: "Net Kar Marjı = ((Gelir − Toplam Giderler) / Gelir) × 100",
    bench: "Toplam giderlere COGS, personel, kira, pazarlama, yazılım, faiz ve vergi dahil edilmelidir. Referans: perakende %2-10, hizmet %10-20, olgun SaaS %15-25.",
  },
  en: {
    rev: "Total Revenue", exp: "Total Expenses",
    margin: "Net Profit Margin", profit: "Net Profit",
    hint: "Net Profit Margin = ((Revenue − Total Expenses) / Revenue) × 100",
    bench: "Total expenses should include COGS, payroll, rent, marketing, software, interest and tax. Reference: retail 2-10%, services 10-20%, mature SaaS 15-25%.",
  },
};

export default function NetMarginCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const [revenue, setRevenue] = useState("");
  const [expenses, setExpenses] = useState("");

  const { margin, profit } = useMemo(() => {
    const r = parseFloat(revenue);
    const e = parseFloat(expenses) || 0;
    if (!r || r <= 0) return { margin: 0, profit: 0 };
    return { margin: ((r - e) / r) * 100, profit: r - e };
  }, [revenue, expenses]);

  return (
    <ToolPage toolKey="netMargin">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.rev} value={revenue} onChange={setRevenue} suffix={locale === "en" ? "$" : "₺"} placeholder="250000" />
          <Field label={s.exp} value={expenses} onChange={setExpenses} suffix={locale === "en" ? "$" : "₺"} placeholder="205000" />
        </div>
        <Result label={s.margin} value={`${locale === "en" ? "" : "%"}${margin.toFixed(2)}${locale === "en" ? "%" : ""}`} hint={s.hint} />
        <Result label={s.profit} value={fmt(profit)} />
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.bench}</p>
      </div>
    </ToolPage>
  );
}
