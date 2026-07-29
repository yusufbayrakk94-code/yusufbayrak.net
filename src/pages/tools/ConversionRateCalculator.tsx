import { useState, useMemo } from "react";
import { ToolPage, Field, Result } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: {
    visitors: "Toplam Ziyaretçi", conversions: "Dönüşüm Sayısı",
    target: "Hedef Dönüşüm Oranı (opsiyonel)",
    rate: "Dönüşüm Oranı", gap: "Hedefe Fark", need: "Gereken Ek Dönüşüm",
    hint: "Dönüşüm Oranı = (Dönüşüm / Ziyaretçi) × 100",
    needHint: "Aynı ziyaretçi sayısıyla hedefe ulaşmak için gereken ilave dönüşüm.",
    reached: "Hedefe ulaşıldı",
    bench: "Referans: e-ticaret genelde %1-4, B2B form %2-5, landing page kampanyaları %5-15 bandında görülür. Kesin hedef değil, kıyas için yönlendirici aralıklardır.",
  },
  en: {
    visitors: "Total Visitors", conversions: "Conversions",
    target: "Target Conversion Rate (optional)",
    rate: "Conversion Rate", gap: "Gap to Target", need: "Extra Conversions Needed",
    hint: "Conversion Rate = (Conversions / Visitors) × 100",
    needHint: "Additional conversions required to hit the target at the same visitor volume.",
    reached: "Target reached",
    bench: "Reference: e-commerce typically 1-4%, B2B forms 2-5%, landing page campaigns 5-15%. Orientation only, not a fixed target.",
  },
};

export default function ConversionRateCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const [visitors, setVisitors] = useState("");
  const [conversions, setConversions] = useState("");
  const [target, setTarget] = useState("");

  const { rate, gap, needed, hasTarget } = useMemo(() => {
    const v = parseFloat(visitors);
    const c = parseFloat(conversions) || 0;
    const t = parseFloat(target);
    const r = !v || v <= 0 ? 0 : (c / v) * 100;
    const valid = !Number.isNaN(t) && t > 0;
    const g = valid ? t - r : 0;
    const need = valid && v > 0 && g > 0 ? Math.ceil((t / 100) * v - c) : 0;
    return { rate: r, gap: g, needed: need, hasTarget: valid };
  }, [visitors, conversions, target]);

  const pct = (n: number) => (locale === "en" ? `${n.toFixed(2)}%` : `%${n.toFixed(2)}`);

  return (
    <ToolPage toolKey="conversionRate">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.visitors} value={visitors} onChange={setVisitors} placeholder="10000" />
          <Field label={s.conversions} value={conversions} onChange={setConversions} placeholder="250" />
        </div>
        <Field label={s.target} value={target} onChange={setTarget} suffix="%" placeholder="4" />
        <Result label={s.rate} value={pct(rate)} hint={s.hint} />
        {hasTarget && (
          <>
            <Result label={s.gap} value={gap > 0 ? pct(gap) : s.reached} />
            <Result label={s.need} value={needed > 0 ? needed.toLocaleString(locale === "en" ? "en-US" : "tr-TR") : "0"} hint={s.needHint} />
          </>
        )}
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.bench}</p>
      </div>
    </ToolPage>
  );
}
