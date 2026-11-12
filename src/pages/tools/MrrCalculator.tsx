import { useEffect, useMemo, useState } from "react";
import { ToolPage, Field, Result, useCurrencyFormatter } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// MRR calculator with three modes.
//
//   plans:  MRR = Σ (accounts × monthly equivalent of the plan price)
//           monthly equivalent: annual / 12, 6-month / 6, quarterly / 3, weekly × 52 / 12
//   simple: MRR = total, or customers × ARPA
//   moves:  net new = new + expansion + reactivation − contraction − churned
//           quick ratio = (new + expansion + reactivation) / (contraction + churned)
//           gross churn = (contraction + churned) / start
//           net churn   = (contraction + churned − expansion) / start
//           NRR         = (start + expansion − contraction − churned) / start

type Mode = "plans" | "simple" | "moves";
type Billing = "m" | "q" | "s" | "y" | "w";
interface Plan { n: string; p: string; b: Billing }

const BILLINGS: Billing[] = ["m", "q", "s", "y", "w"];
const MAX_PLANS = 6;
const toMonthly: Record<Billing, (price: number) => number> = {
  m: (p) => p,
  q: (p) => p / 3,
  s: (p) => p / 6,
  y: (p) => p / 12,
  w: (p) => (p * 52) / 12,
};

const T = {
  tr: {
    modes: { plans: "Planlara göre", simple: "Müşteri × ortalama fiyat", moves: "MRR hareketleri" },
    planLabel: (i: number) => `Plan ${i}`,
    accounts: "Aktif hesap",
    planPrice: "Plan fiyatı",
    billing: "Faturalama",
    billings: { m: "Aylık", q: "3 aylık", s: "6 aylık", y: "Yıllık", w: "Haftalık" },
    add: "+ Plan ekle",
    remove: "Planı kaldır",
    planLine: (monthly: string, mrr: string) => `Aylık karşılık ${monthly} · Plan MRR ${mrr}`,
    total: "Toplam Aylık Yinelenen Gelir",
    or: "— veya —",
    customers: "Aktif Müşteri Sayısı",
    price: "Ortalama Aylık Abonelik Bedeli (ARPA)",
    mrr: "Aylık Yinelenen Gelir (MRR)",
    arr: "Yıllık Yinelenen Gelir (ARR)",
    arpa: "Hesap başına ortalama gelir (ARPA)",
    hint: "MRR = Müşteri Sayısı × Ortalama Aylık Bedel",
    hintPlans: "MRR = Σ (Hesap sayısı × Planın aylık karşılığı)",
    arrHint: "ARR = MRR × 12 — aynı gelirin yıllık ölçekteki karşılığı.",
    note: "Yıllık ödenen planları 12'ye bölerek aylık karşılığıyla ekleyin; kurulum ve tek seferlik gelirleri MRR'ye dahil etmeyin.",
    notePlans: "Fiyata müşterinin gerçekten ödediği tutarı yazın (indirim sonrası). Yıllık planda yıllık bedeli girin; araç 12'ye böler. Kurulum, eğitim gibi tek seferlik gelirler ve ücretsiz deneme hesapları MRR'ye girmez.",
    start: "Ay başı MRR",
    newM: "Yeni MRR",
    expansion: "Genişleme MRR",
    reactivation: "Yeniden aktivasyon MRR",
    contraction: "Daralma MRR",
    churned: "Kayıp (churn) MRR",
    netNew: "Net yeni MRR",
    end: "Ay sonu MRR",
    growth: "Aylık MRR büyümesi",
    quick: "SaaS Quick Ratio",
    grossChurn: "Brüt MRR churn",
    netChurn: "Net MRR churn",
    nrr: "Aylık NRR",
    hintNet: "Yeni + Genişleme + Yeniden aktivasyon − Daralma − Kayıp",
    hintQuick: "(Yeni + Genişleme + Yeniden aktivasyon) / (Daralma + Kayıp)",
    hintGross: "(Daralma + Kayıp) / Ay başı MRR",
    hintNetChurn: "(Daralma + Kayıp − Genişleme) / Ay başı MRR",
    hintNrr: "(Ay başı + Genişleme − Daralma − Kayıp) / Ay başı",
    vShrink: "MRR küçülüyor: kaybedilen gelir kazanılandan fazla. Önce kayıp ve daralmanın nedenini bulun.",
    vLeak: "MRR büyüyor ama kova sızdırıyor: her kazanılan birim gelirin önemli bölümü kaybı kapatmaya gidiyor. 4 ve üzeri Quick Ratio verimli büyüme kabul edilir.",
    vGood: "Büyüme verimli görünüyor: Quick Ratio 4 ve üzeri. Bir ayla karar vermeyin, oranı en az 3 ay izleyin.",
    vNoLoss: "Bu ay kayıp ve daralma yok, Quick Ratio hesaplanamaz. Kaybı sıfır olan ay nadirdir; birkaç aylık ortalamaya bakın.",
    vNrr: "Mevcut müşteri tabanı küçülüyor (aylık NRR %100'ün altında): yeni satış yavaşladığı ay MRR de düşer.",
    vNeg: "Negatif net churn: genişleme, kaybı aşıyor. Mevcut müşteriler yeni satış olmadan da büyüyor.",
    share: "Bu hesabı paylaş",
    copied: "Link kopyalandı",
    na: "—",
  },
  en: {
    modes: { plans: "By plan", simple: "Customers × average price", moves: "MRR movements" },
    planLabel: (i: number) => `Plan ${i}`,
    accounts: "Active accounts",
    planPrice: "Plan price",
    billing: "Billing",
    billings: { m: "Monthly", q: "Quarterly", s: "6-month", y: "Annual", w: "Weekly" },
    add: "+ Add plan",
    remove: "Remove plan",
    planLine: (monthly: string, mrr: string) => `Monthly equivalent ${monthly} · Plan MRR ${mrr}`,
    total: "Total Monthly Recurring Revenue",
    or: "— or —",
    customers: "Active Customers",
    price: "Average Monthly Price (ARPA)",
    mrr: "Monthly Recurring Revenue (MRR)",
    arr: "Annual Recurring Revenue (ARR)",
    arpa: "Average revenue per account (ARPA)",
    hint: "MRR = Customers × Average Monthly Price",
    hintPlans: "MRR = Σ (Accounts × Plan's monthly equivalent)",
    arrHint: "ARR = MRR × 12 — the same revenue on an annual scale.",
    note: "Normalise annual plans by dividing them by 12, and keep setup fees or one-off sales out of MRR.",
    notePlans: "Enter what customers actually pay (after discounts). For annual plans enter the annual amount; the tool divides it by 12. One-off setup or training fees and free trials do not count toward MRR.",
    start: "Starting MRR",
    newM: "New MRR",
    expansion: "Expansion MRR",
    reactivation: "Reactivation MRR",
    contraction: "Contraction MRR",
    churned: "Churned MRR",
    netNew: "Net new MRR",
    end: "Ending MRR",
    growth: "Monthly MRR growth",
    quick: "SaaS Quick Ratio",
    grossChurn: "Gross MRR churn",
    netChurn: "Net MRR churn",
    nrr: "Monthly NRR",
    hintNet: "New + Expansion + Reactivation − Contraction − Churned",
    hintQuick: "(New + Expansion + Reactivation) / (Contraction + Churned)",
    hintGross: "(Contraction + Churned) / Starting MRR",
    hintNetChurn: "(Contraction + Churned − Expansion) / Starting MRR",
    hintNrr: "(Starting + Expansion − Contraction − Churned) / Starting",
    vShrink: "MRR is shrinking: you are losing more revenue than you add. Find the cause of churn and contraction first.",
    vLeak: "MRR is growing but the bucket leaks: a large share of each unit of new revenue only replaces what you lost. A Quick Ratio of 4 or more is considered efficient growth.",
    vGood: "Growth looks efficient: Quick Ratio is 4 or more. Do not judge from one month; watch the ratio for at least 3 months.",
    vNoLoss: "No churn or contraction this month, so Quick Ratio cannot be calculated. A zero-loss month is rare; check a multi-month average.",
    vNrr: "Your existing customer base is shrinking (monthly NRR below 100%): the month new sales slow down, MRR falls too.",
    vNeg: "Negative net churn: expansion exceeds losses. Existing customers grow even without new sales.",
    share: "Share this calculation",
    copied: "Link copied",
    na: "—",
  },
};

const num = (v: string) => {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
};

const emptyPlans = (): Plan[] => [
  { n: "", p: "", b: "m" },
  { n: "", p: "", b: "y" },
];

const encodePlans = (plans: Plan[]) => plans.map((x) => `${x.n}~${x.p}~${x.b}`).join("_");
const decodePlans = (raw: string): Plan[] =>
  raw
    .split("_")
    .slice(0, MAX_PLANS)
    .map((row) => {
      const [n = "", p = "", b = "m"] = row.split("~");
      return { n, p, b: (BILLINGS as string[]).includes(b) ? (b as Billing) : "m" };
    });

export default function MrrCalculator() {
  const locale = useLocale();
  const s = T[locale];
  const fmt = useCurrencyFormatter();
  const money = locale === "en" ? "$" : "₺";
  const numberLocale = locale === "en" ? "en-US" : "tr-TR";
  const pct = (v: number) => {
    const n = v.toLocaleString(numberLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    return locale === "en" ? `${n}%` : `%${n}`;
  };
  const dec = (v: number) => v.toLocaleString(numberLocale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const [mode, setMode] = useState<Mode>("plans");
  const [plans, setPlans] = useState<Plan[]>(emptyPlans);
  const [total, setTotal] = useState("");
  const [customers, setCustomers] = useState("");
  const [price, setPrice] = useState("");
  const [start, setStart] = useState("");
  const [newM, setNewM] = useState("");
  const [expansion, setExpansion] = useState("");
  const [reactivation, setReactivation] = useState("");
  const [contraction, setContraction] = useState("");
  const [churned, setChurned] = useState("");
  const [copied, setCopied] = useState(false);

  const moveFields: Array<[string, string, (v: string) => void]> = [
    ["s", start, setStart],
    ["n", newM, setNewM],
    ["e", expansion, setExpansion],
    ["ra", reactivation, setReactivation],
    ["co", contraction, setContraction],
    ["ch", churned, setChurned],
  ];

  // Restore a shared calculation from the URL (client only, after hydration).
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const m = q.get("m");
      if (m === "plans" || m === "simple" || m === "moves") setMode(m);
      const pl = q.get("pl");
      if (pl) setPlans(decodePlans(pl));
      const single: Array<[string, (v: string) => void]> = [
        ["t", setTotal],
        ["c", setCustomers],
        ["a", setPrice],
        ["s", setStart],
        ["n", setNewM],
        ["e", setExpansion],
        ["ra", setReactivation],
        ["co", setContraction],
        ["ch", setChurned],
      ];
      single.forEach(([key, fn]) => {
        const v = q.get(key);
        if (v !== null) fn(v);
      });
    } catch {
      /* ignore malformed query */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasPlanInput = plans.some((x) => x.n || x.p);
  const hasMoveInput = moveFields.some(([, v]) => v);
  const hasSimpleInput = Boolean(total || customers || price);
  const hasInput = mode === "plans" ? hasPlanInput : mode === "moves" ? hasMoveInput : hasSimpleInput;

  // Keep the URL shareable; only touched once something was entered.
  useEffect(() => {
    try {
      if (!hasInput) return;
      const q = new URLSearchParams();
      q.set("m", mode);
      if (mode === "plans") q.set("pl", encodePlans(plans));
      if (mode === "simple") {
        if (total) q.set("t", total);
        if (customers) q.set("c", customers);
        if (price) q.set("a", price);
      }
      if (mode === "moves") moveFields.forEach(([k, v]) => v && q.set(k, v));
      window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`);
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, plans, total, customers, price, start, newM, expansion, reactivation, contraction, churned]);

  const planRows = useMemo(
    () =>
      plans.map((x) => {
        const monthly = toMonthly[x.b](num(x.p));
        return { monthly, mrr: num(x.n) * monthly };
      }),
    [plans]
  );
  const planMrr = planRows.reduce((sum, x) => sum + x.mrr, 0);
  const planAccounts = plans.reduce((sum, x) => sum + num(x.n), 0);

  const simpleMrr = useMemo(() => {
    const t = parseFloat(total);
    if (!Number.isNaN(t) && t > 0) return t;
    const c = parseFloat(customers);
    const p = parseFloat(price);
    if (!Number.isNaN(c) && !Number.isNaN(p)) return c * p;
    return 0;
  }, [total, customers, price]);

  const mv = useMemo(() => {
    const st = num(start);
    const gains = num(newM) + num(expansion) + num(reactivation);
    const losses = num(contraction) + num(churned);
    const netNew = gains - losses;
    const quick = losses > 0 ? gains / losses : null;
    const growth = st > 0 ? (netNew / st) * 100 : null;
    const gross = st > 0 ? (losses / st) * 100 : null;
    const net = st > 0 ? ((losses - num(expansion)) / st) * 100 : null;
    const nrr = st > 0 ? ((st + num(expansion) - losses) / st) * 100 : null;
    return { st, gains, losses, netNew, end: st + netNew, quick, growth, gross, net, nrr };
  }, [start, newM, expansion, reactivation, contraction, churned]);

  const verdicts: string[] = [];
  if (hasMoveInput && mv.gains + mv.losses > 0) {
    if (mv.quick === null) verdicts.push(s.vNoLoss);
    else if (mv.quick < 1) verdicts.push(s.vShrink);
    else if (mv.quick < 4) verdicts.push(s.vLeak);
    else verdicts.push(s.vGood);
    if (mv.net !== null && mv.net < 0) verdicts.push(s.vNeg);
    else if (mv.nrr !== null && mv.nrr < 100) verdicts.push(s.vNrr);
  }

  const setPlan = (i: number, patch: Partial<Plan>) =>
    setPlans((prev) => prev.map((x, j) => (j === i ? { ...x, ...patch } : x)));

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const tabClass = (active: boolean) =>
    `h-10 px-3 rounded-md border font-mono text-xs transition-colors ${
      active ? "border-accent text-accent bg-accent/10" : "border-border text-muted-foreground hover:border-accent hover:text-accent"
    }`;

  return (
    <ToolPage toolKey="mrr">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-2" role="group">
          {(Object.keys(s.modes) as Mode[]).map((m) => (
            <button key={m} type="button" onClick={() => setMode(m)} aria-pressed={mode === m} className={tabClass(mode === m)}>
              {s.modes[m]}
            </button>
          ))}
        </div>

        {mode === "plans" && (
          <>
            {plans.map((plan, i) => (
              <fieldset key={i} className="space-y-2">
                <legend className="font-mono text-xs text-foreground mb-2">{"//"} {s.planLabel(i + 1)}</legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Field label={s.accounts} value={plan.n} onChange={(v) => setPlan(i, { n: v })} placeholder={i === 0 ? "150" : "60"} />
                  <Field label={s.planPrice} value={plan.p} onChange={(v) => setPlan(i, { p: v })} suffix={money} placeholder={plan.b === "y" ? "9600" : "600"} />
                  <label className="block">
                    <span className="font-mono text-sm text-muted-foreground block mb-2">{s.billing}</span>
                    <select
                      value={plan.b}
                      onChange={(e) => setPlan(i, { b: e.target.value as Billing })}
                      className="w-full h-11 px-3 bg-background border border-border rounded-md text-foreground font-mono text-sm focus:outline-none focus:border-accent"
                    >
                      {BILLINGS.map((b) => (
                        <option key={b} value={b}>{s.billings[b]}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {planRows[i].mrr > 0 ? s.planLine(fmt(planRows[i].monthly), fmt(planRows[i].mrr, 0)) : ""}
                  </span>
                  {plans.length > 1 && (
                    <button
                      type="button"
                      onClick={() => setPlans((prev) => prev.filter((_, j) => j !== i))}
                      className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
                    >
                      {s.remove}
                    </button>
                  )}
                </div>
              </fieldset>
            ))}
            {plans.length < MAX_PLANS && (
              <button type="button" onClick={() => setPlans((prev) => [...prev, { n: "", p: "", b: "m" }])} className={tabClass(false)}>
                {s.add}
              </button>
            )}
            <Result label={s.mrr} value={fmt(planMrr, 0)} hint={s.hintPlans} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Result label={s.arr} value={fmt(planMrr * 12, 0)} hint={s.arrHint} />
              <Result label={s.arpa} value={planAccounts > 0 ? fmt(planMrr / planAccounts, 0) : s.na} />
            </div>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.notePlans}</p>
          </>
        )}

        {mode === "simple" && (
          <>
            <Field label={s.total} value={total} onChange={setTotal} suffix={money} placeholder="50000" />
            <div className="text-center font-mono text-xs text-muted-foreground">{s.or}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label={s.customers} value={customers} onChange={setCustomers} placeholder="100" />
              <Field label={s.price} value={price} onChange={setPrice} suffix={money} placeholder="500" />
            </div>
            <Result label={s.mrr} value={fmt(simpleMrr, 0)} hint={s.hint} />
            <Result label={s.arr} value={fmt(simpleMrr * 12, 0)} hint={s.arrHint} />
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {s.note}</p>
          </>
        )}

        {mode === "moves" && (
          <>
            <Field label={s.start} value={start} onChange={setStart} suffix={money} placeholder="160500" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Field label={s.newM} value={newM} onChange={setNewM} suffix={money} placeholder="12400" />
              <Field label={s.expansion} value={expansion} onChange={setExpansion} suffix={money} placeholder="4500" />
              <Field label={s.reactivation} value={reactivation} onChange={setReactivation} suffix={money} placeholder="1200" />
              <Field label={s.contraction} value={contraction} onChange={setContraction} suffix={money} placeholder="2700" />
              <Field label={s.churned} value={churned} onChange={setChurned} suffix={money} placeholder="6200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Result label={s.netNew} value={fmt(mv.netNew, 0)} hint={s.hintNet} />
              <Result label={s.end} value={fmt(mv.end, 0)} />
              <Result label={s.growth} value={mv.growth === null ? s.na : pct(mv.growth)} />
              <Result label={s.quick} value={mv.quick === null ? s.na : dec(mv.quick)} hint={s.hintQuick} />
              <Result label={s.grossChurn} value={mv.gross === null ? s.na : pct(mv.gross)} hint={s.hintGross} />
              <Result label={s.netChurn} value={mv.net === null ? s.na : pct(mv.net)} hint={s.hintNetChurn} />
              <Result label={s.nrr} value={mv.nrr === null ? s.na : pct(mv.nrr)} hint={s.hintNrr} />
              <Result label={s.arr} value={fmt(mv.end * 12, 0)} hint={s.arrHint} />
            </div>
            {verdicts.map((v) => (
              <p key={v} className="font-mono text-xs text-muted-foreground leading-relaxed">{"//"} {v}</p>
            ))}
          </>
        )}

        {hasInput && (
          <button type="button" onClick={share} className={tabClass(false)}>
            {copied ? s.copied : s.share}
          </button>
        )}
      </div>
    </ToolPage>
  );
}
