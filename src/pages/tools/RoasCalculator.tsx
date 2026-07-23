import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: { rev: "Reklamdan Gelen Gelir", spend: "Reklam Harcaması", roas: "ROAS", profit: "Net Kâr", roi: "ROI", hint: "ROAS = Reklam Geliri / Reklam Harcaması" },
  en: { rev: "Ad Revenue", spend: "Ad Spend", roas: "ROAS", profit: "Net Profit", roi: "ROI", hint: "ROAS = Ad Revenue / Ad Spend" },
};

export default function RoasCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const [revenue, setRevenue] = useState(""); const [spend, setSpend] = useState("");
  const { roas, roi } = useMemo(() => {
    const r = parseFloat(revenue) || 0; const sp = parseFloat(spend);
    if (!sp || sp <= 0) return { roas: 0, roi: 0 };
    return { roas: r / sp, roi: ((r - sp) / sp) * 100 };
  }, [revenue, spend]);

  return (
    <ToolPage toolKey="roas">
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label={s.rev} value={revenue} onChange={setRevenue} suffix={locale === "en" ? "$" : "₺"} placeholder="100000" />
          <Field label={s.spend} value={spend} onChange={setSpend} suffix={locale === "en" ? "$" : "₺"} placeholder="25000" />
        </div>
        <Result label={s.roas} value={`${roas.toFixed(2)}x`} hint={s.hint} />
        <Result label={s.profit} value={fmt((parseFloat(revenue) || 0) - (parseFloat(spend) || 0))} />
        <Result label={s.roi} value={`%${roi.toFixed(2)}`} />
      </div>
    </ToolPage>
  );
}
