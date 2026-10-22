import { useEffect, useMemo, useState } from "react";
import { ToolPage, Field, Result } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// Trendyol / Hepsiburada order-level profit calculator.
//
// Model (VAT-registered seller, everything on a KDV-excluded basis because
// input VAT is deductible):
//   netSale   = P / (1 + v)                       P = sale price incl. KDV
//   kept      = netSale − P·k − ship − fee − cost − pack
//   expected  = (1 − r)·kept − r·(ship + returnShip + pack) − ads
// Commission is charged on the KDV-included price; commission, cargo and the
// platform fee are invoiced + %20 KDV (deductible, so excluded from profit).
// Stopaj (%1 of netSale) is withheld from the payout but is a prepaid income
// tax, so it is shown in cash flow, not deducted from profit.
//
// Fee defaults are editable and dated: marketplaces change them often.

const FEE_CHECKED = "22.10.2026";

const PRESETS = {
  trendyol: { fee: "10.99" },
  hepsiburada: { fee: "10.99" },
  other: { fee: "0" },
} as const;
type Market = keyof typeof PRESETS;

const T = {
  tr: {
    market: "Pazaryeri",
    markets: { trendyol: "Trendyol", hepsiburada: "Hepsiburada", other: "Diğer / Kendi sitem" },
    sectionSale: "Satış ve ürün",
    sectionFees: "Pazaryeri kesintileri",
    sectionOps: "Operasyon, iade ve reklam",
    price: "Satış fiyatı (KDV dahil)",
    vat: "Ürün KDV oranı",
    cost: "Ürün maliyeti (KDV hariç)",
    commission: "Komisyon oranı",
    fee: "Platform hizmet bedeli (KDV hariç)",
    ship: "Kargo ücreti (KDV hariç)",
    pack: "Paketleme maliyeti",
    returnRate: "İade oranı",
    returnShip: "İade kargo ücreti (KDV hariç)",
    ads: "Sipariş başı reklam harcaması",
    targetMargin: "Hedef net kâr marjı",
    stopaj: "E-ticaret stopajı (%1) uygulanıyor",
    feeNote: `Varsayılan hizmet bedeli ${FEE_CHECKED} itibarıyla kamuya açık kaynaklardan alınmıştır; komisyon ve kargo kategori, desi ve anlaşmanıza göre değişir. Kesin değerler için satıcı panelinizi esas alın.`,
    profit: "Sipariş başı net kâr",
    profitHint: "İadeler ve reklam dahil, KDV hariç, gelir vergisi öncesi",
    margin: "Net kâr marjı",
    marginHint: "Net kâr / KDV hariç satış",
    breakEven: "Başabaş satış fiyatı (KDV dahil)",
    targetPrice: "Hedef marj için satış fiyatı (KDV dahil)",
    unreachable: "Bu maliyetlerle ulaşılamaz",
    maxAds: "Hedef marjı koruyarak sipariş başı maks. reklam",
    beRoas: "Başabaş ROAS",
    beRoasHint: "KDV dahil ciro / reklam — bunun altı zarar",
    payout: "Hesabınıza yatan (iade edilmeyen sipariş)",
    payoutHint: "Komisyon, kargo, hizmet bedeli (+KDV) ve stopaj düşülmüş",
    breakdown: "Para nereye gidiyor? (sipariş başı ortalama, KDV hariç)",
    rows: {
      netSale: "Satış (KDV hariç)",
      commission: "Komisyon",
      ship: "Kargo",
      fee: "Hizmet bedeli",
      cost: "Ürün maliyeti",
      pack: "Paketleme",
      returnsLost: "İade edilen siparişlerde kaçan kâr",
      returns: "İade kargo ve paketleme maliyeti",
      ads: "Reklam",
      profit: "Net kâr",
    },
    share: "Bu hesabı paylaş",
    copied: "Link kopyalandı",
    disclaimer: "Bu araç Trendyol veya Hepsiburada ile bağlantılı değildir.",
  },
  en: {
    market: "Marketplace",
    markets: { trendyol: "Trendyol", hepsiburada: "Hepsiburada", other: "Other / Own store" },
    sectionSale: "Sale and product",
    sectionFees: "Marketplace deductions",
    sectionOps: "Operations, returns and ads",
    price: "Sale price (incl. VAT)",
    vat: "Product VAT rate",
    cost: "Product cost (excl. VAT)",
    commission: "Commission rate",
    fee: "Platform service fee (excl. VAT)",
    ship: "Shipping fee (excl. VAT)",
    pack: "Packaging cost",
    returnRate: "Return rate",
    returnShip: "Return shipping fee (excl. VAT)",
    ads: "Ad spend per order",
    targetMargin: "Target net margin",
    stopaj: "Apply 1% e-commerce withholding (stopaj)",
    feeNote: `Default service fee taken from public sources as of ${FEE_CHECKED}; commission and shipping vary by category, parcel size and your agreement. Always confirm in your seller panel.`,
    profit: "Net profit per order",
    profitHint: "After returns and ads, excl. VAT, before income tax",
    margin: "Net profit margin",
    marginHint: "Net profit / sales excl. VAT",
    breakEven: "Break-even sale price (incl. VAT)",
    targetPrice: "Sale price for target margin (incl. VAT)",
    unreachable: "Not reachable with these costs",
    maxAds: "Max ad spend per order at target margin",
    beRoas: "Break-even ROAS",
    beRoasHint: "Revenue incl. VAT / ad spend — below this you lose money",
    payout: "Paid out to you (non-returned order)",
    payoutHint: "After commission, shipping, service fee (+VAT) and withholding",
    breakdown: "Where does the money go? (average per order, excl. VAT)",
    rows: {
      netSale: "Sale (excl. VAT)",
      commission: "Commission",
      ship: "Shipping",
      fee: "Service fee",
      cost: "Product cost",
      pack: "Packaging",
      returnsLost: "Profit lost on returned orders",
      returns: "Return shipping and packaging cost",
      ads: "Ads",
      profit: "Net profit",
    },
    share: "Share this calculation",
    copied: "Link copied",
    disclaimer: "This tool is not affiliated with Trendyol or Hepsiburada.",
  },
} as const;

const KEYS = ["m", "p", "v", "c", "k", "f", "s", "pk", "r", "rs", "a", "t", "st"] as const;

const num = (x: string) => {
  const n = parseFloat(String(x).replace(",", "."));
  return Number.isFinite(n) ? n : 0;
};

export default function MarketplaceProfitCalculator() {
  const locale = useLocale();
  const s = T[locale];
  const fmt = (n: number) =>
    new Intl.NumberFormat(locale === "en" ? "en-US" : "tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 2,
    }).format(n);

  const [market, setMarket] = useState<Market>("trendyol");
  const [price, setPrice] = useState("");
  const [vat, setVat] = useState("20");
  const [cost, setCost] = useState("");
  const [commission, setCommission] = useState("");
  const [fee, setFee] = useState<string>(PRESETS.trendyol.fee);
  const [ship, setShip] = useState("");
  const [pack, setPack] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [returnShip, setReturnShip] = useState("");
  const [ads, setAds] = useState("");
  const [target, setTarget] = useState("10");
  const [stopaj, setStopaj] = useState(true);
  const [copied, setCopied] = useState(false);

  // Restore inputs from the URL so results can be shared.
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      const m = q.get("m");
      if (m && m in PRESETS) setMarket(m as Market);
      const set: Record<string, (v: string) => void> = {
        p: setPrice, v: setVat, c: setCost, k: setCommission, f: setFee, s: setShip,
        pk: setPack, r: setReturnRate, rs: setReturnShip, a: setAds, t: setTarget,
      };
      for (const [key, fn] of Object.entries(set)) {
        const val = q.get(key);
        if (val !== null) fn(val);
      }
      if (q.get("st") === "0") setStopaj(false);
    } catch {
      /* ignore */
    }
  }, []);

  const values: Record<(typeof KEYS)[number], string> = {
    m: market, p: price, v: vat, c: cost, k: commission, f: fee, s: ship, pk: pack,
    r: returnRate, rs: returnShip, a: ads, t: target, st: stopaj ? "1" : "0",
  };

  // Keep the URL in sync (no history spam).
  useEffect(() => {
    try {
      const q = new URLSearchParams();
      for (const k of KEYS) if (values[k] !== "" && values[k] !== undefined) q.set(k, values[k]);
      const url = `${window.location.pathname}?${q.toString()}`;
      window.history.replaceState(null, "", url);
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [market, price, vat, cost, commission, fee, ship, pack, returnRate, returnShip, ads, target, stopaj]);

  const pickMarket = (m: Market) => {
    setMarket(m);
    setFee(PRESETS[m].fee);
  };

  const r = useMemo(() => {
    const P = num(price);
    const v = num(vat) / 100;
    const k = num(commission) / 100;
    const C = num(cost);
    const F = num(fee);
    const S = num(ship);
    const PK = num(pack);
    const rr = Math.min(Math.max(num(returnRate) / 100, 0), 0.99);
    const RS = returnShip === "" ? S : num(returnShip);
    const A = num(ads);
    const m = num(target) / 100;

    const netSale = P / (1 + v);
    const comm = P * k;
    const kept = netSale - comm - S - F - C - PK;
    const returnCost = rr * (S + RS + PK);
    const expected = (1 - rr) * kept - returnCost - A;
    const margin = netSale > 0 ? expected / netSale : 0;

    // Linear in P → closed-form solutions.
    const perPrice = (1 - rr) * (1 / (1 + v) - k);
    const fixed = (1 - rr) * (S + F + C + PK) + rr * (S + RS + PK) + A;
    const breakEven = perPrice > 0 ? fixed / perPrice : NaN;
    const denomTarget = perPrice - m / (1 + v);
    const targetPrice = denomTarget > 0 ? fixed / denomTarget : NaN;

    const maxAds0 = (1 - rr) * kept - returnCost;
    const maxAdsTarget = maxAds0 - m * netSale;
    const beRoas = maxAds0 > 0 ? P / maxAds0 : NaN;

    const payout = P - comm * 1.2 - S * 1.2 - F * 1.2 - (stopaj ? 0.01 * netSale : 0);

    const lostOnReturns = rr * kept;
    return {
      ready: P > 0, lostOnReturns,
      netSale, comm, S, F, C, PK, perOrderReturn: returnCost, A,
      expected, margin, breakEven, targetPrice, maxAdsTarget, beRoas, payout,
    };
  }, [price, vat, commission, cost, fee, ship, pack, returnRate, returnShip, ads, target, stopaj]);

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const money = (n: number) => (Number.isFinite(n) ? fmt(n) : s.unreachable);
  const tl = "₺";

  return (
    <ToolPage toolKey="marketplace">
      <div className="space-y-6">
        <div>
          <span className="font-mono text-sm text-muted-foreground block mb-2">{s.market}</span>
          <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label={s.market}>
            {(Object.keys(PRESETS) as Market[]).map((m) => (
              <button
                key={m}
                type="button"
                role="radio"
                aria-checked={market === m}
                onClick={() => pickMarket(m)}
                className={`h-11 px-2 rounded-md border font-mono text-xs transition-colors ${
                  market === m
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:border-accent"
                }`}
              >
                {s.markets[m]}
              </button>
            ))}
          </div>
        </div>

        <fieldset className="space-y-4">
          <legend className="font-mono text-xs text-foreground mb-2">{"//"} {s.sectionSale}</legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label={s.price} value={price} onChange={setPrice} suffix={tl} placeholder="599" />
            <label className="block">
              <span className="font-mono text-sm text-muted-foreground block mb-2">{s.vat}</span>
              <select
                value={vat}
                onChange={(e) => setVat(e.target.value)}
                className="w-full h-11 px-3 bg-background border border-border rounded-md text-foreground font-mono text-sm focus:outline-none focus:border-accent"
              >
                <option value="20">%20</option>
                <option value="10">%10</option>
                <option value="1">%1</option>
                <option value="0">%0</option>
              </select>
            </label>
            <Field label={s.cost} value={cost} onChange={setCost} suffix={tl} placeholder="220" />
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="font-mono text-xs text-foreground mb-2">{"//"} {s.sectionFees}</legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label={s.commission} value={commission} onChange={setCommission} suffix="%" placeholder="15" />
            <Field label={s.fee} value={fee} onChange={setFee} suffix={tl} />
            <Field label={s.ship} value={ship} onChange={setShip} suffix={tl} placeholder="65" />
          </div>
          <label className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <input type="checkbox" checked={stopaj} onChange={(e) => setStopaj(e.target.checked)} />
            {s.stopaj}
          </label>
          <p className="font-mono text-xs text-muted-foreground">{s.feeNote}</p>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="font-mono text-xs text-foreground mb-2">{"//"} {s.sectionOps}</legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field label={s.pack} value={pack} onChange={setPack} suffix={tl} placeholder="8" />
            <Field label={s.returnRate} value={returnRate} onChange={setReturnRate} suffix="%" placeholder="8" />
            <Field label={s.returnShip} value={returnShip} onChange={setReturnShip} suffix={tl} placeholder={ship || "65"} />
            <Field label={s.ads} value={ads} onChange={setAds} suffix={tl} placeholder="40" />
            <Field label={s.targetMargin} value={target} onChange={setTarget} suffix="%" />
          </div>
        </fieldset>

        {r.ready && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Result label={s.profit} value={fmt(r.expected)} hint={s.profitHint} />
              <Result label={s.margin} value={`%${(r.margin * 100).toLocaleString(locale === "en" ? "en-US" : "tr-TR", { maximumFractionDigits: 1 })}`} hint={s.marginHint} />
              <Result label={s.breakEven} value={money(r.breakEven)} />
              <Result label={s.targetPrice} value={money(r.targetPrice)} />
              <Result label={s.maxAds} value={r.maxAdsTarget > 0 ? fmt(r.maxAdsTarget) : fmt(0)} />
              <Result
                label={s.beRoas}
                value={Number.isFinite(r.beRoas) ? `${r.beRoas.toLocaleString(locale === "en" ? "en-US" : "tr-TR", { maximumFractionDigits: 2 })}x` : s.unreachable}
                hint={s.beRoasHint}
              />
            </div>
            <Result label={s.payout} value={fmt(r.payout)} hint={s.payoutHint} />

            <div className="border border-border rounded-lg overflow-hidden">
              <div className="px-4 py-3 font-mono text-xs text-foreground border-b border-border">{s.breakdown}</div>
              <table className="w-full font-mono text-sm">
                <tbody>
                  {[
                    [s.rows.netSale, r.netSale],
                    [s.rows.commission, -r.comm],
                    [s.rows.ship, -r.S],
                    [s.rows.fee, -r.F],
                    [s.rows.cost, -r.C],
                    [s.rows.pack, -r.PK],
                    [s.rows.returnsLost, -r.lostOnReturns],
                    [s.rows.returns, -r.perOrderReturn],
                    [s.rows.ads, -r.A],
                  ].map(([label, val]) => (
                    <tr key={label as string} className="border-b border-border last:border-0">
                      <td className="px-4 py-2 text-muted-foreground">{label}</td>
                      <td className="px-4 py-2 text-right text-foreground whitespace-nowrap">{fmt(val as number)}</td>
                    </tr>
                  ))}
                  <tr className="bg-accent/5">
                    <td className="px-4 py-2 text-foreground">{s.rows.profit}</td>
                    <td className="px-4 py-2 text-right text-accent whitespace-nowrap">{fmt(r.expected)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              type="button"
              onClick={share}
              className="h-10 px-4 rounded-md border border-accent text-accent font-mono text-xs hover:bg-accent/10 transition-colors"
            >
              {copied ? s.copied : s.share}
            </button>
          </div>
        )}
        <p className="font-mono text-[11px] text-muted-foreground">{s.disclaimer}</p>
      </div>
    </ToolPage>
  );
}
