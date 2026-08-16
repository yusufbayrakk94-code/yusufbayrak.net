import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: {
    start: "Başlangıç MRR",
    expansion: "Genişleme MRR",
    contraction: "Daralma MRR",
    churned: "Kaybedilen MRR",
    nrr: "NRR (Net Gelir Tutundurma)",
    grr: "GRR (Brüt Gelir Tutundurma)",
    end: "Dönem Sonu MRR (mevcut taban)",
    hint: "NRR = (Başlangıç + Genişleme − Daralma − Kayıp) / Başlangıç × 100",
    grrHint: "GRR genişlemeyi saymaz; %100'ü geçemez.",
    good: "%100 üzeri: mevcut taban kendi kendine büyüyor (negatif churn).",
    bad: "%100 altı: taban eriyor, büyüme tamamen yeni satışa bağımlı.",
    note: "Hesaba yeni kazanılan müşterilerin geliri dahil edilmez; NRR yalnızca dönem başındaki tabanı ölçer.",
  },
  en: {
    start: "Starting MRR",
    expansion: "Expansion MRR",
    contraction: "Contraction MRR",
    churned: "Churned MRR",
    nrr: "NRR (Net Revenue Retention)",
    grr: "GRR (Gross Revenue Retention)",
    end: "Ending MRR (existing base)",
    hint: "NRR = (Starting + Expansion − Contraction − Churned) / Starting × 100",
    grrHint: "GRR excludes expansion and can never exceed 100%.",
    good: "Above 100%: the existing base grows on its own (negative churn).",
    bad: "Below 100%: the base is shrinking, growth depends on new sales.",
    note: "Revenue from newly acquired customers is excluded — NRR only measures the base you started the period with.",
  },
};

export default function NrrCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const [start, setStart] = useState("");
  const [expansion, setExpansion] = useState("");
  const [contraction, setContraction] = useState("");
  const [churned, setChurned] = useState("");

  const { nrr, grr, end, base } = useMemo(() => {
    const b = parseFloat(start) || 0;
    const e = parseFloat(expansion) || 0;
    const c = parseFloat(contraction) || 0;
    const ch = parseFloat(churned) || 0;
    if (b <= 0) return { nrr: 0, grr: 0, end: 0, base: 0 };
    const endMrr = b + e - c - ch;
    return {
      nrr: (endMrr / b) * 100,
      grr: ((b - c - ch) / b) * 100,
      end: endMrr,
      base: b,
    };
  }, [start, expansion, contraction, churned]);

  const suffix = locale === "en" ? "$" : "₺";

  return (
    <ToolPage toolKey="nrr">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.start} value={start} onChange={setStart} suffix={suffix} placeholder="400000" />
          <Field label={s.expansion} value={expansion} onChange={setExpansion} suffix={suffix} placeholder="60000" />
          <Field label={s.contraction} value={contraction} onChange={setContraction} suffix={suffix} placeholder="15000" />
          <Field label={s.churned} value={churned} onChange={setChurned} suffix={suffix} placeholder="25000" />
        </div>
        <Result label={s.nrr} value={`%${nrr.toFixed(1)}`} hint={s.hint} />
        <Result label={s.grr} value={`%${grr.toFixed(1)}`} hint={s.grrHint} />
        <Result label={s.end} value={fmt(end, 0)} />
        {base > 0 && (
          <p className="font-mono text-xs text-muted-foreground leading-relaxed">
            {"//"} {nrr >= 100 ? s.good : s.bad}
          </p>
        )}
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.note}</p>
      </div>
    </ToolPage>
  );
}