import { useState, useMemo } from "react";
import { ToolPage, Field, Result } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: {
    growth: "Gelir Büyüme Oranı (%)",
    margin: "Kâr Marjı (%)",
    score: "Rule of 40 Skoru",
    status: "Durum",
    pass: "Geçti — sağlıklı",
    fail: "Kaldı — 40'ın altında",
    hint: "Rule of 40 = Büyüme Oranı % + Kâr Marjı %",
    gapOver: "Eşiğin üzerindesiniz:",
    gapUnder: "40'a kalan:",
    point: "puan",
    note: "Kâr marjı olarak EBITDA veya serbest nakit akışı marjını kullanın ve dönemler arasında aynı ölçüde kalın. Zarar yazıyorsanız marjı negatif girin (örn. -20).",
  },
  en: {
    growth: "Revenue Growth Rate (%)",
    margin: "Profit Margin (%)",
    score: "Rule of 40 Score",
    status: "Status",
    pass: "Pass — healthy",
    fail: "Fail — below 40",
    hint: "Rule of 40 = Growth Rate % + Profit Margin %",
    gapOver: "Above the threshold by",
    gapUnder: "Points needed to reach 40:",
    point: "points",
    note: "Use EBITDA or free cash flow margin and keep the same measure across periods. If you are burning cash, enter a negative margin (e.g. -20).",
  },
};

export default function RuleOf40Calculator() {
  const locale = useLocale();
  const s = strings[locale];
  const [growth, setGrowth] = useState("");
  const [margin, setMargin] = useState("");

  const { score, filled } = useMemo(() => {
    const g = parseFloat(growth);
    const m = parseFloat(margin);
    const anyValue = !Number.isNaN(g) || !Number.isNaN(m);
    return { score: (Number.isNaN(g) ? 0 : g) + (Number.isNaN(m) ? 0 : m), filled: anyValue };
  }, [growth, margin]);

  const passed = score >= 40;
  const gap = Math.abs(40 - score);

  return (
    <ToolPage toolKey="ruleOf40">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.growth} value={growth} onChange={setGrowth} suffix="%" placeholder="30" />
          <Field label={s.margin} value={margin} onChange={setMargin} suffix="%" placeholder="12" />
        </div>
        <Result label={s.score} value={score.toFixed(1)} hint={s.hint} />
        <Result label={s.status} value={passed ? s.pass : s.fail} />
        {filled && (
          <p className="font-mono text-xs text-muted-foreground leading-relaxed">
            {"//"} {passed ? s.gapOver : s.gapUnder} {gap.toFixed(1)} {s.point}
          </p>
        )}
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.note}</p>
      </div>
    </ToolPage>
  );
}