import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, RotateCcw, Trophy } from "lucide-react";
import { ToolPage } from "@/components/tools/ToolPage";
import { useLocale } from "@/i18n/useLocale";

// Pure client-side quiz: five single-choice questions, each option adds
// weighted points to one or more of six channels. No data leaves the browser.

type ChannelKey = "google" | "meta" | "linkedin" | "tiktok" | "seo" | "email";

type Scores = Record<ChannelKey, number>;

const ZERO: Scores = { google: 0, meta: 0, linkedin: 0, tiktok: 0, seo: 0, email: 0 };

// Answer weights are shared across locales — only the copy differs.
const WEIGHTS: Array<Array<Partial<Scores>>> = [
  // 1. Business type
  [
    { linkedin: 3, google: 2, seo: 2, email: 2 },
    { meta: 3, google: 2, tiktok: 2, email: 2 },
    { google: 3, meta: 2, seo: 1 },
  ],
  // 2. Main goal
  [
    { meta: 3, tiktok: 3, seo: 2 },
    { linkedin: 3, seo: 2, google: 2, email: 2 },
    { google: 3, meta: 2, email: 1 },
  ],
  // 3. Monthly budget
  [
    { seo: 3, email: 3, meta: 1 },
    { google: 2, meta: 3, tiktok: 1 },
    { google: 3, meta: 2, linkedin: 3, tiktok: 2 },
  ],
  // 4. Sales cycle
  [
    { google: 3, meta: 2, tiktok: 2 },
    { google: 2, meta: 2, email: 2 },
    { linkedin: 3, seo: 3, email: 3 },
  ],
  // 5. Audience
  [
    { tiktok: 3, meta: 3 },
    { linkedin: 3, seo: 2, email: 2 },
    { google: 3, meta: 2, seo: 1 },
  ],
];

const strings = {
  tr: {
    progress: (a: number, b: number) => `Soru ${a} / ${b}`,
    back: "Geri",
    restart: "Tekrar Çöz",
    resultLabel: "Size en uygun kanal",
    alt: "Alternatif öneri",
    ctaLabel: "Sonraki adım",
    scoreNote: "Puanlama, verdiğiniz 5 cevabın kanal bazlı ağırlıklı toplamıdır.",
    share: "Sonucu ekran görüntüsü alıp paylaşabilirsiniz.",
    questions: [
      { q: "İşletme türünüz?", a: ["B2B", "E-ticaret / B2C", "Yerel işletme"] },
      { q: "Ana hedefiniz?", a: ["Marka bilinirliği", "Lead toplama", "Direkt satış"] },
      { q: "Aylık reklam bütçeniz?", a: ["Düşük (<10.000₺)", "Orta (10.000-50.000₺)", "Yüksek (50.000₺+)"] },
      { q: "Satış döngünüz ne kadar sürüyor?", a: ["Anlık", "Kısa (birkaç gün)", "Uzun (haftalar-aylar)"] },
      { q: "Hedef kitleniz kim?", a: ["Genç / görsel odaklı tüketici", "Profesyonel / karar verici", "Geniş kitle"] },
    ],
    channels: {
      google: { name: "Google Ads", why: "Talebin zaten var olduğu, insanların çözümünüzü aktif olarak aradığı bir konumdasınız. Google Ads bu niyeti doğrudan yakalar ve dönüşüme kadar geçen süreyi kısaltır. Dar bir marka dışı anahtar kelime setiyle başlayıp arama terimleri raporuyla haftalık budama yapın." },
      meta: { name: "Meta Ads", why: "Kitlenizi görsel keşif üzerinden yakalamanız gerekiyor; Facebook ve Instagram bu talebi yaratmanın en ölçeklenebilir yeri. Geniş hedefleme + güçlü kreatif rotasyonu ile başlayın, öğrenme aşamasını bölmemek için kampanya sayısını düşük tutun." },
      linkedin: { name: "LinkedIn Ads", why: "Karar vericiye ünvan, şirket büyüklüğü ve sektör kırılımıyla ulaşmanız gerekiyor. Tıklama maliyeti yüksek ama bilet fiyatınız bunu taşır. Lead form reklamları + değerli bir içerik teklifiyle (rapor, şablon) başlayın." },
      tiktok: { name: "TikTok Ads", why: "Genç ve trend odaklı bir kitleye görsel bir ürün satıyorsunuz; TikTok keşif tarafında hâlâ en ucuz erişimi veriyor. Reklam gibi görünmeyen, ilk 3 saniyede kanca kuran native videolarla çalışın ve kreatifi haftalık yenileyin." },
      seo: { name: "SEO & İçerik", why: "Satış döngünüz uzun ve bütçeniz her ay yeniden harcanacak reklama değil, birikmeye ihtiyaç duyuyor. Arama niyetine göre kurgulanmış içerik, reklamı durdurduğunuzda kaybolmayan tek kanaldır. Alt-orta huni sorularıyla başlayın, marka bilinirliği içeriğiyle değil." },
      email: { name: "E-posta Pazarlama", why: "Elinizde tekrar temas edilebilecek bir kitle var ve edinme maliyetini düşürmenin en hızlı yolu bu kitleyi tekrar tekrar dönüştürmek. Segmentli otomasyonlar (hoş geldin, sepet terk, yeniden aktivasyon) reklamdan bağımsız kâr üretir." },
    } as Record<ChannelKey, { name: string; why: string }>,
    ctas: {
      roas: { label: "ROAS Hesaplayıcı ile kampanya getirinizi ölçün", href: "/ucretsiz-araclar/roas-hesaplayici" },
      utm: { label: "UTM Link Oluşturucu ile kanal bazlı ölçümleme kurun", href: "/ucretsiz-araclar/utm-link-olusturucu" },
      blog: { label: "Blog: içerik ve büyüme yazılarını inceleyin", href: "/blog" },
    },
  },
  en: {
    progress: (a: number, b: number) => `Question ${a} / ${b}`,
    back: "Back",
    restart: "Retake Quiz",
    resultLabel: "Your best-fit channel",
    alt: "Alternative suggestion",
    ctaLabel: "Next step",
    scoreNote: "Scoring is the weighted sum of your five answers across channels.",
    share: "Feel free to screenshot and share this result.",
    questions: [
      { q: "What type of business do you run?", a: ["B2B", "E-commerce / B2C", "Local business"] },
      { q: "What is your main goal?", a: ["Brand awareness", "Lead generation", "Direct sales"] },
      { q: "What is your monthly ad budget?", a: ["Low", "Medium", "High"] },
      { q: "How long is your sales cycle?", a: ["Instant", "Short (a few days)", "Long (weeks to months)"] },
      { q: "Who is your target audience?", a: ["Young / visual-first consumer", "Professional / decision maker", "Broad audience"] },
    ],
    channels: {
      google: { name: "Google Ads", why: "Demand already exists and people are actively searching for your solution. Google Ads captures that intent directly and shortens time to conversion. Start with a narrow non-brand keyword set and prune weekly using the search terms report." },
      meta: { name: "Meta Ads", why: "You need to reach your audience through visual discovery, and Facebook plus Instagram is the most scalable place to create that demand. Start with broad targeting and strong creative rotation, keeping campaign count low so the learning phase is not fragmented." },
      linkedin: { name: "LinkedIn Ads", why: "You need to reach decision makers by job title, company size, and industry. Clicks are expensive, but your deal size absorbs it. Start with lead form ads paired with a genuinely useful content offer such as a report or template." },
      tiktok: { name: "TikTok Ads", why: "You sell a visual product to a young, trend-driven audience, and TikTok still offers the cheapest discovery reach. Use native videos that hook in the first three seconds and refresh creative weekly." },
      seo: { name: "SEO & Content", why: "Your sales cycle is long and your budget needs to compound rather than be re-spent every month. Search-intent content is the only channel that does not disappear when you pause ads. Start with mid- and bottom-funnel questions, not awareness pieces." },
      email: { name: "Email Marketing", why: "You have an audience you can reach again, and converting it repeatedly is the fastest way to lower blended acquisition cost. Segmented automations (welcome, abandoned cart, reactivation) generate profit independent of ad spend." },
    } as Record<ChannelKey, { name: string; why: string }>,
    ctas: {
      roas: { label: "Measure campaign return with the ROAS Calculator", href: "/en/free-tools/roas-calculator" },
      utm: { label: "Set up channel tracking with the UTM Builder", href: "/en/free-tools/utm-builder" },
      blog: { label: "Blog: read the content and growth articles", href: "/en/blog" },
    },
  },
};

export default function MarketingChannelQuiz() {
  const locale = useLocale();
  const s = strings[locale];
  const total = s.questions.length;
  const [answers, setAnswers] = useState<Array<number | null>>(Array(total).fill(null));
  const [step, setStep] = useState(0);

  const done = step >= total;

  const ranked = useMemo(() => {
    const scores: Scores = { ...ZERO };
    answers.forEach((choice, qi) => {
      if (choice === null) return;
      const weights = WEIGHTS[qi][choice];
      (Object.keys(weights) as ChannelKey[]).forEach((k) => {
        scores[k] += weights[k] ?? 0;
      });
    });
    return (Object.keys(scores) as ChannelKey[])
      .map((k) => ({ key: k, score: scores[k] }))
      .sort((a, b) => b.score - a.score);
  }, [answers]);

  const select = (i: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = i;
      return next;
    });
    setStep((prev) => prev + 1);
  };

  const restart = () => {
    setAnswers(Array(total).fill(null));
    setStep(0);
  };

  const ctaFor = (k: ChannelKey) =>
    k === "seo" ? s.ctas.blog : k === "linkedin" ? s.ctas.utm : k === "email" ? s.ctas.utm : s.ctas.roas;

  const winner = ranked[0];
  const runnerUp = ranked[1];
  const pct = Math.round((Math.min(step, total) / total) * 100);

  return (
    <ToolPage toolKey="channelQuiz">
      <div className="space-y-6">
        {/* Progress */}
        <div>
          <div className="flex items-center justify-between font-mono text-xs text-muted-foreground mb-2">
            <span>{done ? `${total} / ${total}` : s.progress(step + 1, total)}</span>
            <span>{pct}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {!done && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">{s.questions[step].q}</h2>
            <div className="grid gap-3">
              {s.questions[step].a.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => select(i)}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-4 py-3 text-left text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <span>
                    <span className="font-mono text-xs text-muted-foreground mr-2">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                </button>
              ))}
            </div>
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep((p) => p - 1)}
                className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
              >
                ← {s.back}
              </button>
            )}
          </div>
        )}

        {done && winner && runnerUp && (
          <div className="space-y-5">
            <div className="rounded-lg border border-accent/40 bg-accent/5 p-6 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {s.resultLabel}
              </p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <Trophy className="h-6 w-6 text-accent" aria-hidden="true" />
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  {s.channels[winner.key].name}
                </p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
                {s.channels[winner.key].why}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-4">
              <p className="font-mono text-xs text-muted-foreground">{s.alt}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {s.channels[runnerUp.key].name}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-4">
              <p className="font-mono text-xs text-muted-foreground mb-2">{s.ctaLabel}</p>
              <Link
                to={ctaFor(winner.key).href}
                className="group inline-flex items-start gap-2 text-sm text-foreground hover:text-accent transition-colors"
              >
                <ArrowUpRight className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                {ctaFor(winner.key).label}
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs text-muted-foreground">{"//"} {s.share}</p>
              <button
                type="button"
                onClick={restart}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-mono text-xs text-foreground hover:border-accent hover:text-accent transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                {s.restart}
              </button>
            </div>
            <p className="font-mono text-xs text-muted-foreground">{"//"} {s.scoreNote}</p>
          </div>
        )}
      </div>
    </ToolPage>
  );
}
