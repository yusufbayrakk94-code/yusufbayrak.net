import { useState, useMemo } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// ROAS + break-even ROAS calculator.
//   ROAS            = revenue / spend
//   break-even ROAS = 1 / margin           (margin = gross or contribution margin)
//   profit after ads = revenue × margin − spend
//   POAS            = revenue × margin / spend
//   target ROAS     = 1 / (margin − target profit share of revenue)

const strings = {
  tr: {
    rev: "Reklamdan gelen gelir (KDV hariç)", spend: "Reklam harcaması", margin: "Brüt / katkı marjı (opsiyonel)", target: "Hedef kâr payı (cironun %'si, opsiyonel)",
    roas: "ROAS", hint: "ROAS = Reklam geliri / Reklam harcaması",
    be: "Başabaş ROAS", beHint: "1 / marj — bunun altı zarar",
    status: "Durum", ok: "Kârlı: ROAS başabaşın üzerinde", bad: "Zararda: ROAS başabaşın altında", even: "Tam başabaşta",
    profit: "Reklam sonrası kâr", profitHint: "Gelir × marj − reklam harcaması",
    poas: "POAS (kâr / reklam)", poasHint: "1'in altı zarar",
    tgt: "Hedef kâr için gereken ROAS", tgtHint: "1 / (marj − hedef kâr payı)", none: "Bu marjla ulaşılamaz",
    gross: "Gelir − reklam harcaması", grossHint: "Ürün maliyeti hariç; kâr değildir. Gerçek kâr için marj girin.",
    marginNote: "Marjı girerseniz başabaş ROAS, reklam sonrası kâr ve POAS da hesaplanır. Kargo, ödeme ve komisyon gibi sipariş başı giderleri düşerek katkı marjını kullanmak daha doğru sonuç verir.",
  },
  en: {
    rev: "Ad revenue (excl. VAT)", spend: "Ad spend", margin: "Gross / contribution margin (optional)", target: "Target profit (% of revenue, optional)",
    roas: "ROAS", hint: "ROAS = Ad revenue / Ad spend",
    be: "Break-even ROAS", beHint: "1 / margin — below this you lose money",
    status: "Status", ok: "Profitable: ROAS above break-even", bad: "Losing money: ROAS below break-even", even: "Exactly break-even",
    profit: "Profit after ads", profitHint: "Revenue × margin − ad spend",
    poas: "POAS (profit / ad spend)", poasHint: "Below 1 means a loss",
    tgt: "ROAS needed for target profit", tgtHint: "1 / (margin − target profit share)", none: "Not reachable at this margin",
    gross: "Revenue − ad spend", grossHint: "Excludes product cost; this is not profit. Enter a margin for real profit.",
    marginNote: "Enter your margin to also get break-even ROAS, profit after ads and POAS. Contribution margin (after shipping, payment and marketplace fees per order) gives a more accurate threshold.",
  },
};

export default function RoasCalculator() {
  const locale = useLocale();
  const s = strings[locale];
  const fmt = useCurrencyFormatter();
  const nf = (n: number) => n.toLocaleString(locale === "en" ? "en-US" : "tr-TR", { maximumFractionDigits: 2 });
  const [revenue, setRevenue] = useState("");
  const [spend, setSpend] = useState("");
  const [margin, setMargin] = useState("");
  const [target, setTarget] = useState("");
  const cur = locale === "en" ? "$" : "₺";

  const r = useMemo(() => {
    const rev = parseFloat(revenue) || 0;
    const sp = parseFloat(spend) || 0;
    const m = (parseFloat(margin) || 0) / 100;
    const t = (parseFloat(target) || 0) / 100;
    const roas = sp > 0 ? rev / sp : 0;
    const be = m > 0 ? 1 / m : NaN;
    const profit = rev * m - sp;
    const poas = sp > 0 ? (rev * m) / sp : 0;
    const tgt = m > 0 && t > 0 ? (m - t > 0 ? 1 / (m - t) : Infinity) : NaN;
    return { rev, sp, m, t, roas, be, profit, poas, tgt };
  }, [revenue, spend, margin, target]);

  const status = !Number.isFinite(r.be) ? "" : Math.abs(r.roas - r.be) < 0.005 ? s.even : r.roas > r.be ? s.ok : s.bad;

  return (
    <ToolPage toolKey="roas">
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.rev} value={revenue} onChange={setRevenue} suffix={cur} placeholder="100000" />
          <Field label={s.spend} value={spend} onChange={setSpend} suffix={cur} placeholder="25000" />
          <Field label={s.margin} value={margin} onChange={setMargin} suffix="%" placeholder="40" />
          <Field label={s.target} value={target} onChange={setTarget} suffix="%" placeholder="10" />
        </div>
        <p className="font-mono text-xs text-muted-foreground">{s.marginNote}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Result label={s.roas} value={`${nf(r.roas)}x`} hint={s.hint} />
          {Number.isFinite(r.be) ? (
            <Result label={s.be} value={`${nf(r.be)}x`} hint={r.sp > 0 ? `${s.beHint} · ${status}` : s.beHint} />
          ) : (
            <Result label={s.gross} value={fmt(r.rev - r.sp)} hint={s.grossHint} />
          )}
          {r.m > 0 && r.sp > 0 && <Result label={s.profit} value={fmt(r.profit)} hint={s.profitHint} />}
          {r.m > 0 && r.sp > 0 && <Result label={s.poas} value={`${nf(r.poas)}x`} hint={s.poasHint} />}
          {!Number.isNaN(r.tgt) && (
            <Result label={s.tgt} value={Number.isFinite(r.tgt) ? `${nf(r.tgt)}x` : s.none} hint={s.tgtHint} />
          )}
        </div>
      </div>
    </ToolPage>
  );
}
