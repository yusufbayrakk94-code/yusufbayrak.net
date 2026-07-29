import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: {
    rev: "Toplam Gelir", cogs: "Satılan Malın Maliyeti (COGS)",
    margin: "Brüt Kar Marjı", profit: "Brüt Kar",
    hint: "Brüt Kar Marjı = ((Gelir − COGS) / Gelir) × 100",
    bench: "Referans: e-ticaret genelde %20-50, hizmet %40-60, SaaS %70-90 bandında görülür. Kesin hedef değil, kıyas için yönlendirici aralıklardır.",
  },
  en: {
    rev: "Total Revenue", cogs: "Cost of Goods Sold (COGS)",
    margin: "Gross Profit Margin", profit: "Gross Profit",
    hint: "Gross Profit Margin = ((Revenue − COGS) / Revenue) × 100",
    bench: "Reference: e-commerce typically 20-50%, services 40-60%, SaaS 70-90%. Orientation only, not a fixed target.",
  },
};

export default function GrossMarginCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const [revenue, setRevenue] = useState("");
  const [cogs, setCogs] = useState("");

  const { margin, profit } = useMemo(() => {
    const r = parseFloat(revenue);
    const c = parseFloat(cogs) || 0;
    if (!r || r <= 0) return { margin: 0, profit: 0 };
    return { margin: ((r - c) / r) * 100, profit: r - c };
  }, [revenue, cogs]);

  return (
    <ToolPage toolKey="grossMargin">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.rev} value={revenue} onChange={setRevenue} suffix={locale === "en" ? "$" : "₺"} placeholder="250000" />
          <Field label={s.cogs} value={cogs} onChange={setCogs} suffix={locale === "en" ? "$" : "₺"} placeholder="150000" />
        </div>
        <Result label={s.margin} value={`${locale === "en" ? "" : "%"}${margin.toFixed(2)}${locale === "en" ? "%" : ""}`} hint={s.hint} />
        <Result label={s.profit} value={fmt(profit)} />
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.bench}</p>
      </div>
    </ToolPage>
  );
}
