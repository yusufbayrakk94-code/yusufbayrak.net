import { useEffect, useMemo, useState } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// Ad budget planner. Works backwards from a target:
//  - E-commerce: revenue target + AOV + gross margin + conversion rate (+ CPC)
//    → orders, clicks, max affordable budget, break-even / target ROAS, max CPA,
//    and whether the CPC/CR assumptions fit inside that budget.
//  - B2B: new-customer target + funnel rates + CPL + ACV/margin
//    → leads, SQLs, budget, ad CAC, payback months, max CPL for 12-mo payback.

type Mode = "ecom" | "b2b";

const T = {
  tr: {
    modes: { ecom: "E-ticaret (ciro hedefi)", b2b: "B2B (müşteri hedefi)" },
    revenue: "Hedef aylık ciro (KDV hariç)",
    aov: "Ortalama sepet tutarı (KDV hariç)",
    margin: "Brüt kâr marjı",
    cr: "Dönüşüm oranı",
    cpc: "Ortalama tıklama maliyeti (TBM)",
    profit: "Reklam sonrası hedef net kâr",
    customers: "Hedef aylık yeni müşteri",
    leadToSql: "Lead → nitelikli fırsat (SQL) oranı",
    sqlToWin: "SQL → müşteri oranı",
    cpl: "Lead başı maliyet (CPL)",
    acv: "Müşteri başı yıllık gelir (ACV)",
    orders: "Gereken sipariş",
    clicks: "Gereken tıklama",
    maxBudget: "Hedef kâr için maksimum aylık bütçe",
    maxBudgetHint: "Ciro × (brüt marj − hedef kâr)",
    estBudget: "TBM ile tahmini gereken bütçe",
    beRoas: "Başabaş ROAS",
    tRoas: "Hedef ROAS",
    tRoasHint: "Google Ads tROAS için girilecek değer (×100 = %)",
    maxCpa: "Sipariş başı maks. edinme maliyeti (CPA)",
    okVerdict: "Varsayımlarınız hedef kârla uyumlu: tahmini bütçe, kârlı üst sınırın altında.",
    badVerdict: (cpc: string, cr: string) =>
      `Bu TBM ve dönüşüm oranıyla hedef kâr tutmuyor. Kârlı olmak için TBM en fazla ${cpc} olmalı ya da dönüşüm oranı en az ${cr} olmalı.`,
    noMarginVerdict: "Hedef kâr, brüt marjdan büyük ya da eşit: reklama ayrılacak pay kalmıyor. Hedef kârı düşürün veya marjı artırın.",
    scenarios: "Cironun yüzdesi olarak bütçe senaryoları",
    scenarioCols: ["Bütçe payı", "Aylık bütçe", "Gereken ROAS", "Reklam sonrası brüt kâr"],
    leads: "Gereken lead",
    sqls: "Gereken SQL",
    b2bBudget: "Gereken aylık bütçe",
    adCac: "Müşteri başı reklam maliyeti (CAC)",
    payback: "CAC geri ödeme süresi",
    months: "ay",
    maxCpl: "12 ayda geri ödeme için maks. CPL",
    share: "Bu planı paylaş",
    copied: "Link kopyalandı",
  },
  en: {
    modes: { ecom: "E-commerce (revenue target)", b2b: "B2B (customer target)" },
    revenue: "Monthly revenue target (excl. tax)",
    aov: "Average order value (excl. tax)",
    margin: "Gross margin",
    cr: "Conversion rate",
    cpc: "Average cost per click (CPC)",
    profit: "Target net profit after ads",
    customers: "New customers per month",
    leadToSql: "Lead → qualified opportunity (SQL) rate",
    sqlToWin: "SQL → customer rate",
    cpl: "Cost per lead (CPL)",
    acv: "Annual revenue per customer (ACV)",
    orders: "Orders needed",
    clicks: "Clicks needed",
    maxBudget: "Max monthly budget at target profit",
    maxBudgetHint: "Revenue × (gross margin − target profit)",
    estBudget: "Estimated budget at your CPC",
    beRoas: "Break-even ROAS",
    tRoas: "Target ROAS",
    tRoasHint: "Value for Google Ads tROAS (×100 = %)",
    maxCpa: "Max cost per acquisition (CPA)",
    okVerdict: "Your assumptions fit the profit target: the estimated budget is below the profitable ceiling.",
    badVerdict: (cpc: string, cr: string) =>
      `At this CPC and conversion rate the profit target doesn't hold. To be profitable, CPC must be at most ${cpc} or conversion rate at least ${cr}.`,
    noMarginVerdict: "Target profit is greater than or equal to gross margin: nothing is left for ads. Lower the target or raise the margin.",
    scenarios: "Budget scenarios as a share of revenue",
    scenarioCols: ["Budget share", "Monthly budget", "Required ROAS", "Gross profit after ads"],
    leads: "Leads needed",
    sqls: "SQLs needed",
    b2bBudget: "Monthly budget needed",
    adCac: "Ad cost per customer (CAC)",
    payback: "CAC payback period",
    months: "months",
    maxCpl: "Max CPL for 12-month payback",
    share: "Share this plan",
    copied: "Link copied",
  },
} as const;

const num = (x: string) => {
  const n = parseFloat(String(x).replace(",", "."));
  return Number.isFinite(n) ? n : 0;
};

export default function AdBudgetCalculator() {
  const locale = useLocale();
  const s = T[locale];
  const fmt = useCurrencyFormatter();
  const nf = (n: number, d = 0) => n.toLocaleString(locale === "en" ? "en-US" : "tr-TR", { maximumFractionDigits: d });
  const cur = locale === "en" ? "$" : "₺";

  const [mode, setMode] = useState<Mode>("ecom");
  const [revenue, setRevenue] = useState("");
  const [aov, setAov] = useState("");
  const [margin, setMargin] = useState("");
  const [cr, setCr] = useState("");
  const [cpc, setCpc] = useState("");
  const [profit, setProfit] = useState("10");
  const [customers, setCustomers] = useState("");
  const [leadToSql, setLeadToSql] = useState("");
  const [sqlToWin, setSqlToWin] = useState("");
  const [cpl, setCpl] = useState("");
  const [acv, setAcv] = useState("");
  const [copied, setCopied] = useState(false);

  const fields: Record<string, [string, (v: string) => void]> = {
    rv: [revenue, setRevenue], ao: [aov, setAov], mg: [margin, setMargin], cr: [cr, setCr],
    cp: [cpc, setCpc], pf: [profit, setProfit], cu: [customers, setCustomers],
    ls: [leadToSql, setLeadToSql], sw: [sqlToWin, setSqlToWin], cl: [cpl, setCpl], ac: [acv, setAcv],
  };

  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      if (q.get("mode") === "b2b") setMode("b2b");
      for (const [k, [, set]] of Object.entries(fields)) {
        const v = q.get(k);
        if (v !== null) set(v);
      }
    } catch { /* ignore */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      const q = new URLSearchParams();
      q.set("mode", mode);
      for (const [k, [v]] of Object.entries(fields)) if (v !== "") q.set(k, v);
      window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`);
    } catch { /* ignore */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, revenue, aov, margin, cr, cpc, profit, customers, leadToSql, sqlToWin, cpl, acv]);

  const ecom = useMemo(() => {
    const R = num(revenue), A = num(aov), g = num(margin) / 100, c = num(cr) / 100, k = num(cpc), p = num(profit) / 100;
    if (!(R > 0 && A > 0 && g > 0)) return null;
    const room = g - p;
    const orders = R / A;
    const clicks = c > 0 ? orders / c : NaN;
    const maxBudget = R * room;
    const est = Number.isFinite(clicks) && k > 0 ? clicks * k : NaN;
    const maxCpc = Number.isFinite(clicks) && clicks > 0 ? maxBudget / clicks : NaN;
    const minCr = k > 0 && maxBudget > 0 ? (orders * k) / maxBudget : NaN;
    const scen = [0.05, 0.1, 0.15, 0.2].map((share) => ({
      share, budget: R * share, roas: 1 / share, profit: R * g - R * share,
    }));
    return {
      room, orders, clicks, maxBudget, est, maxCpc, minCr,
      beRoas: 1 / g, tRoas: room > 0 ? 1 / room : NaN,
      maxCpa: A * room, scen,
    };
  }, [revenue, aov, margin, cr, cpc, profit]);

  const b2b = useMemo(() => {
    const N = num(customers), ls = num(leadToSql) / 100, sw = num(sqlToWin) / 100, L = num(cpl), V = num(acv), g = num(margin) / 100;
    if (!(N > 0 && ls > 0 && sw > 0)) return null;
    const sqls = N / sw;
    const leads = sqls / ls;
    const budget = L > 0 ? leads * L : NaN;
    const cac = Number.isFinite(budget) ? budget / N : NaN;
    const monthlyGp = V > 0 && g > 0 ? (V * g) / 12 : NaN;
    const payback = Number.isFinite(cac) && monthlyGp > 0 ? cac / monthlyGp : NaN;
    const maxCpl = monthlyGp > 0 ? (monthlyGp * 12) * ls * sw : NaN;
    return { sqls, leads, budget, cac, payback, maxCpl };
  }, [customers, leadToSql, sqlToWin, cpl, acv, margin]);

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  };

  return (
    <ToolPage toolKey="adBudget">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-2" role="radiogroup">
          {(["ecom", "b2b"] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              role="radio"
              aria-checked={mode === m}
              onClick={() => setMode(m)}
              className={`min-h-11 px-2 py-2 rounded-md border font-mono text-xs transition-colors ${
                mode === m ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:border-accent"
              }`}
            >
              {s.modes[m]}
            </button>
          ))}
        </div>

        {mode === "ecom" ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label={s.revenue} value={revenue} onChange={setRevenue} suffix={cur} placeholder="500000" />
              <Field label={s.aov} value={aov} onChange={setAov} suffix={cur} placeholder="750" />
              <Field label={s.margin} value={margin} onChange={setMargin} suffix="%" placeholder="40" />
              <Field label={s.profit} value={profit} onChange={setProfit} suffix="%" />
              <Field label={s.cr} value={cr} onChange={setCr} suffix="%" placeholder="1.5" />
              <Field label={s.cpc} value={cpc} onChange={setCpc} suffix={cur} placeholder="4" />
            </div>
            {ecom && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Result label={s.maxBudget} value={fmt(Math.max(ecom.maxBudget, 0), 0)} hint={s.maxBudgetHint} />
                  <Result label={s.maxCpa} value={fmt(Math.max(ecom.maxCpa, 0))} />
                  <Result label={s.beRoas} value={`${nf(ecom.beRoas, 2)}x`} />
                  <Result label={s.tRoas} value={Number.isFinite(ecom.tRoas) ? `${nf(ecom.tRoas, 2)}x` : "—"} hint={s.tRoasHint} />
                  <Result label={s.orders} value={nf(Math.ceil(ecom.orders))} />
                  {Number.isFinite(ecom.clicks) && <Result label={s.clicks} value={nf(Math.ceil(ecom.clicks))} />}
                  {Number.isFinite(ecom.est) && <Result label={s.estBudget} value={fmt(ecom.est, 0)} />}
                </div>
                <p className="p-4 rounded-lg border border-border font-mono text-xs text-foreground leading-relaxed">
                  {ecom.room <= 0
                    ? s.noMarginVerdict
                    : Number.isFinite(ecom.est)
                      ? ecom.est <= ecom.maxBudget
                        ? s.okVerdict
                        : s.badVerdict(fmt(ecom.maxCpc), `%${nf(ecom.minCr * 100, 2)}`)
                      : null}
                </p>
                <div className="border border-border rounded-lg overflow-x-auto">
                  <div className="px-4 py-3 font-mono text-xs text-foreground border-b border-border">{s.scenarios}</div>
                  <table className="w-full font-mono text-sm">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground text-xs">
                        {s.scenarioCols.map((c) => <th key={c} className="px-3 py-2 text-left font-normal">{c}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {ecom.scen.map((r) => (
                        <tr key={r.share} className="border-b border-border last:border-0">
                          <td className="px-3 py-2 text-muted-foreground">%{nf(r.share * 100)}</td>
                          <td className="px-3 py-2 whitespace-nowrap">{fmt(r.budget, 0)}</td>
                          <td className="px-3 py-2">{nf(r.roas, 1)}x</td>
                          <td className={`px-3 py-2 whitespace-nowrap ${r.profit < 0 ? "text-destructive" : "text-accent"}`}>{fmt(r.profit, 0)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label={s.customers} value={customers} onChange={setCustomers} placeholder="10" />
              <Field label={s.cpl} value={cpl} onChange={setCpl} suffix={cur} placeholder="900" />
              <Field label={s.leadToSql} value={leadToSql} onChange={setLeadToSql} suffix="%" placeholder="25" />
              <Field label={s.sqlToWin} value={sqlToWin} onChange={setSqlToWin} suffix="%" placeholder="20" />
              <Field label={s.acv} value={acv} onChange={setAcv} suffix={cur} placeholder="120000" />
              <Field label={s.margin} value={margin} onChange={setMargin} suffix="%" placeholder="70" />
            </div>
            {b2b && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Result label={s.leads} value={nf(Math.ceil(b2b.leads))} />
                <Result label={s.sqls} value={nf(Math.ceil(b2b.sqls))} />
                {Number.isFinite(b2b.budget) && <Result label={s.b2bBudget} value={fmt(b2b.budget, 0)} />}
                {Number.isFinite(b2b.cac) && <Result label={s.adCac} value={fmt(b2b.cac, 0)} />}
                {Number.isFinite(b2b.payback) && <Result label={s.payback} value={`${nf(b2b.payback, 1)} ${s.months}`} />}
                {Number.isFinite(b2b.maxCpl) && <Result label={s.maxCpl} value={fmt(b2b.maxCpl, 0)} />}
              </div>
            )}
          </>
        )}

        {(ecom || b2b) && (
          <button
            type="button"
            onClick={share}
            className="h-10 px-4 rounded-md border border-accent text-accent font-mono text-xs hover:bg-accent/10 transition-colors"
          >
            {copied ? s.copied : s.share}
          </button>
        )}
      </div>
    </ToolPage>
  );
}
