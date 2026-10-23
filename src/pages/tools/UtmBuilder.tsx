import { useState, useMemo } from "react";
import { Copy, Check, AlertTriangle } from "lucide-react";
import { ToolPage, Field } from "@/components/tools/ToolPage";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLocale } from "@/i18n/useLocale";

// UTM builder with:
//  - ready-made presets for common TR channels,
//  - normalisation (lowercase, spaces → "-", Turkish chars → ASCII),
//  - a GA4 default channel group prediction based on Google's published
//    manual-traffic rules (support.google.com/analytics/answer/9756891),
//  - warnings for Unassigned, Google Ads auto-tagging, existing UTMs.
// Source lists below are a representative subset of Google's source
// categories; the full lists live in Google's spreadsheet, so the result is
// labelled as a prediction.

const PAID_RE = /^(.*cp.*|ppc|retargeting|paid.*)$/;
const SHOP_CAMPAIGN_RE = /^(.*(([^a-df-z]|^)shop|shopping).*)$/;
const SEARCH = ["google", "bing", "yandex", "yahoo", "duckduckgo", "baidu", "ecosia", "naver", "yandex.com.tr", "google.com", "google.com.tr", "bing.com"];
const SOCIAL = ["facebook", "fb", "m.facebook.com", "facebook.com", "instagram", "ig", "instagram.com", "linkedin", "linkedin.com", "lnkd.in", "twitter", "t.co", "twitter.com", "tiktok", "tiktok.com", "pinterest", "pinterest.com", "reddit", "reddit.com", "snapchat", "whatsapp", "whatsapp.com", "quora"];
const VIDEO = ["youtube", "youtube.com", "m.youtube.com", "vimeo", "vimeo.com", "twitch", "twitch.tv", "dailymotion"];
const SHOPPING = ["amazon", "amazon.com", "amazon.com.tr", "ebay", "etsy", "shopify", "google shopping"];
const SOCIAL_MEDIUMS = ["social", "social-network", "social-media", "sm", "social network", "social media"];
const EMAIL_VALUES = ["email", "e-mail", "e_mail", "e mail"];

type Channel =
  | "Cross-network" | "Paid Shopping" | "Paid Search" | "Paid Social" | "Paid Video" | "Display" | "Paid Other"
  | "Organic Shopping" | "Organic Social" | "Organic Video" | "Organic Search" | "AI Assistant" | "Referral"
  | "Email" | "Affiliates" | "Audio" | "SMS" | "Mobile Push Notifications" | "Unassigned";

function predictChannel(sourceRaw: string, mediumRaw: string, campaignRaw: string): Channel {
  const source = sourceRaw.trim().toLowerCase();
  const medium = mediumRaw.trim().toLowerCase();
  const campaign = campaignRaw.trim().toLowerCase();
  const paid = PAID_RE.test(medium);
  const isShop = SHOPPING.includes(source) || SHOP_CAMPAIGN_RE.test(campaign);
  if (campaign.includes("cross-network")) return "Cross-network";
  if (isShop && paid) return "Paid Shopping";
  if (SEARCH.includes(source) && paid) return "Paid Search";
  if (SOCIAL.includes(source) && paid) return "Paid Social";
  if (VIDEO.includes(source) && paid) return "Paid Video";
  if (["display", "banner", "expandable", "interstitial", "cpm"].includes(medium)) return "Display";
  if (paid) return "Paid Other";
  if (isShop) return "Organic Shopping";
  if (SOCIAL.includes(source) || SOCIAL_MEDIUMS.includes(medium)) return "Organic Social";
  if (VIDEO.includes(source) || /video/.test(medium)) return "Organic Video";
  if (SEARCH.includes(source) || medium === "organic") return "Organic Search";
  if (medium === "ai-assistant") return "AI Assistant";
  if (["referral", "app", "link"].includes(medium)) return "Referral";
  if (EMAIL_VALUES.includes(source) || EMAIL_VALUES.includes(medium)) return "Email";
  if (medium === "affiliate") return "Affiliates";
  if (medium === "audio") return "Audio";
  if (source === "sms" || medium === "sms") return "SMS";
  if (medium.endsWith("push") || medium.includes("mobile") || medium.includes("notification") || source === "firebase") return "Mobile Push Notifications";
  return "Unassigned";
}

const TR_MAP: Record<string, string> = { ç: "c", ğ: "g", ı: "i", İ: "i", ö: "o", ş: "s", ü: "u", Ç: "c", Ğ: "g", Ö: "o", Ş: "s", Ü: "u" };
function normalize(v: string, lower: boolean, ascii: boolean) {
  let out = v.trim();
  if (ascii) out = out.replace(/[çğıİöşüÇĞÖŞÜ]/g, (c) => TR_MAP[c] ?? c);
  if (lower) out = out.toLocaleLowerCase("tr-TR");
  return out.replace(/\s+/g, "-");
}

type Preset = { key: string; source: string; medium: string };
const PRESETS: Preset[] = [
  { key: "meta", source: "facebook", medium: "paid_social" },
  { key: "ig", source: "instagram", medium: "social" },
  { key: "liAds", source: "linkedin", medium: "paid_social" },
  { key: "li", source: "linkedin", medium: "social" },
  { key: "tiktok", source: "tiktok", medium: "paid_social" },
  { key: "gads", source: "google", medium: "cpc" },
  { key: "yt", source: "youtube", medium: "paid_video" },
  { key: "mail", source: "newsletter", medium: "email" },
  { key: "wa", source: "whatsapp", medium: "social" },
  { key: "sms", source: "sms", medium: "sms" },
  { key: "aff", source: "influencer-adi", medium: "affiliate" },
  { key: "qr", source: "qr", medium: "referral" },
];

const strings = {
  tr: {
    url: "Web Sitesi URL'si *", source: "Kaynak (utm_source) *", medium: "Ortam (utm_medium) *",
    campaign: "Kampanya (utm_campaign) *", term: "Terim (utm_term)", content: "İçerik (utm_content)",
    generated: "Oluşturulan Link", empty: "URL ve gerekli alanları doldurun…",
    copy: "Linki Kopyala", copied: "Kopyalandı", toast: "Link kopyalandı",
    phUrl: "https://ornek.com/sayfa", phSource: "google, newsletter", phMedium: "cpc, email",
    phCampaign: "kasim-indirim-2026", phTerm: "anahtar-kelime", phContent: "video-a",
    presets: "Hazır şablonlar (kaynak + ortam)",
    presetNames: {
      meta: "Meta Ads", ig: "Instagram organik", liAds: "LinkedIn Ads", li: "LinkedIn organik", tiktok: "TikTok Ads",
      gads: "Google Ads (manuel)", yt: "YouTube Ads", mail: "E-posta bülteni", wa: "WhatsApp", sms: "SMS",
      aff: "Influencer / affiliate", qr: "QR kod / basılı",
    } as Record<string, string>,
    lower: "Küçük harfe çevir", ascii: "Türkçe karakterleri dönüştür (ç→c, ş→s…)",
    channel: "GA4 varsayılan kanal grubu (tahmin)",
    channelHint: "Google'ın manuel trafik kurallarına göre hesaplanır; kaynak listeleri Google'ın tam listesinin bir alt kümesidir.",
    warnUnassigned: "Bu kaynak/ortam kombinasyonu GA4'te 'Unassigned' (atanmamış) olarak raporlanır. Ortamı email, social, paid_social, cpc, referral, affiliate gibi tanınan bir değere çevirin.",
    warnGads: "Google Ads'te otomatik etiketleme (gclid) açıksa GA4 kaynak/ortam için otomatik değerleri kullanır; manuel utm_source/utm_medium yok sayılır. Google Ads için otomatik etiketlemeyi tercih edin.",
    warnCase: "Değerlerde büyük harf var. GA4 'Facebook' ve 'facebook'u ayrı kaynak olarak raporlar.",
    warnSpace: "Değerlerde boşluk var; link kodlanınca %20 olur ve raporları parçalar. Tire (-) kullanın.",
    warnTr: "Türkçe karakterler linkte kodlanır (%C3%A7…). Raporlamada tutarlılık için ASCII karakter önerilir.",
    warnExisting: "URL'de zaten UTM parametresi vardı; yeni değerlerle değiştirildi.",
    warnMissing: "utm_source, utm_medium ve utm_campaign birlikte doldurulmalı; eksik parametre GA4'te (not set) üretir.",
    warnInvalid: "Geçerli bir URL girin (ör. https://ornek.com/sayfa).",
    warnings: "Uyarılar",
  },
  en: {
    url: "Website URL *", source: "Source (utm_source) *", medium: "Medium (utm_medium) *",
    campaign: "Campaign (utm_campaign) *", term: "Term (utm_term)", content: "Content (utm_content)",
    generated: "Generated Link", empty: "Fill URL and required fields…",
    copy: "Copy Link", copied: "Copied", toast: "Link copied",
    phUrl: "https://example.com/page", phSource: "google, newsletter", phMedium: "cpc, email",
    phCampaign: "black-friday-2026", phTerm: "keyword", phContent: "video-a",
    presets: "Presets (source + medium)",
    presetNames: {
      meta: "Meta Ads", ig: "Instagram organic", liAds: "LinkedIn Ads", li: "LinkedIn organic", tiktok: "TikTok Ads",
      gads: "Google Ads (manual)", yt: "YouTube Ads", mail: "Email newsletter", wa: "WhatsApp", sms: "SMS",
      aff: "Influencer / affiliate", qr: "QR code / print",
    } as Record<string, string>,
    lower: "Convert to lowercase", ascii: "Convert accented characters to ASCII",
    channel: "GA4 default channel group (prediction)",
    channelHint: "Based on Google's manual-traffic rules; source lists are a subset of Google's full lists.",
    warnUnassigned: "This source/medium combination will be reported as 'Unassigned' in GA4. Use a recognised medium such as email, social, paid_social, cpc, referral or affiliate.",
    warnGads: "If Google Ads auto-tagging (gclid) is on, GA4 uses the auto-tagged source/medium and ignores manual utm_source/utm_medium. Prefer auto-tagging for Google Ads.",
    warnCase: "Values contain uppercase letters. GA4 reports 'Facebook' and 'facebook' as different sources.",
    warnSpace: "Values contain spaces, which become %20 and fragment reports. Use hyphens (-).",
    warnTr: "Accented characters get percent-encoded. ASCII is recommended for consistent reporting.",
    warnExisting: "The URL already had UTM parameters; they were replaced with the new values.",
    warnMissing: "Set utm_source, utm_medium and utm_campaign together; missing parameters show up as (not set) in GA4.",
    warnInvalid: "Enter a valid URL (e.g. https://example.com/page).",
    warnings: "Warnings",
  },
};

export default function UtmBuilder() {
  const s = strings[useLocale()];
  const [url, setUrl] = useState(""); const [source, setSource] = useState(""); const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState(""); const [term, setTerm] = useState(""); const [content, setContent] = useState("");
  const [lower, setLower] = useState(true); const [ascii, setAscii] = useState(true);
  const [copied, setCopied] = useState(false);

  const n = (v: string) => normalize(v, lower, ascii);

  const { finalUrl, hadUtm, invalid } = useMemo(() => {
    if (!url.trim()) return { finalUrl: "", hadUtm: false, invalid: false };
    try {
      const raw = url.trim();
      const base = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
      const params = new URLSearchParams(base.search);
      let had = false;
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
        if (params.has(k)) { had = true; params.delete(k); }
      });
      const set = (k: string, v: string) => { const val = normalize(v, lower, ascii); if (val) params.set(k, val); };
      set("utm_source", source); set("utm_medium", medium); set("utm_campaign", campaign);
      set("utm_term", term); set("utm_content", content);
      base.search = params.toString();
      return { finalUrl: base.toString(), hadUtm: had, invalid: false };
    } catch { return { finalUrl: "", hadUtm: false, invalid: true }; }
  }, [url, source, medium, campaign, term, content, lower, ascii]);

  const hasCore = source.trim() && medium.trim();
  const channel = hasCore ? predictChannel(n(source), n(medium), n(campaign)) : null;

  const warnings: string[] = [];
  if (invalid) warnings.push(s.warnInvalid);
  const values = [source, medium, campaign, term, content];
  const filledCore = [source, medium, campaign].filter((v) => v.trim()).length;
  if (filledCore > 0 && filledCore < 3) warnings.push(s.warnMissing);
  if (channel === "Unassigned") warnings.push(s.warnUnassigned);
  if (n(source) === "google" && PAID_RE.test(n(medium))) warnings.push(s.warnGads);
  if (!lower && values.some((v) => /[A-ZÇĞİÖŞÜ]/.test(v))) warnings.push(s.warnCase);
  if (values.some((v) => /\S\s+\S/.test(v.trim()))) warnings.push(s.warnSpace);
  if (!ascii && values.some((v) => /[çğıöşüÇĞİÖŞÜ]/.test(v))) warnings.push(s.warnTr);
  if (hadUtm) warnings.push(s.warnExisting);

  const copy = async () => {
    if (!finalUrl) return;
    try { await navigator.clipboard.writeText(finalUrl); } catch { return; }
    setCopied(true); toast.success(s.toast);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage toolKey="utm">
      <div className="space-y-5">
        <Field label={s.url} value={url} onChange={setUrl} type="text" placeholder={s.phUrl} />

        <div>
          <div className="font-mono text-xs text-muted-foreground mb-2">{"//"} {s.presets}</div>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => {
              const active = n(source) === p.source && n(medium) === p.medium;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => { setSource(p.source); setMedium(p.medium); }}
                  className={`min-h-9 px-3 py-1.5 rounded-md border font-mono text-xs transition-colors ${
                    active ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:border-accent"
                  }`}
                >
                  {s.presetNames[p.key]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.source} value={source} onChange={setSource} type="text" placeholder={s.phSource} />
          <Field label={s.medium} value={medium} onChange={setMedium} type="text" placeholder={s.phMedium} />
        </div>
        <Field label={s.campaign} value={campaign} onChange={setCampaign} type="text" placeholder={s.phCampaign} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label={s.term} value={term} onChange={setTerm} type="text" placeholder={s.phTerm} />
          <Field label={s.content} value={content} onChange={setContent} type="text" placeholder={s.phContent} />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <label className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <input type="checkbox" checked={lower} onChange={(e) => setLower(e.target.checked)} />
            {s.lower}
          </label>
          <label className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <input type="checkbox" checked={ascii} onChange={(e) => setAscii(e.target.checked)} />
            {s.ascii}
          </label>
        </div>

        <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="font-mono text-xs text-muted-foreground mb-2">{"//"} {s.generated}</div>
          <div className="font-mono text-sm text-accent break-all min-h-[1.5rem]">
            {finalUrl || s.empty}
          </div>
        </div>

        {channel && (
          <div className="p-4 border border-border rounded-lg">
            <div className="font-mono text-xs text-muted-foreground mb-1">{"//"} {s.channel}</div>
            <div className={`font-mono text-xl ${channel === "Unassigned" ? "text-destructive" : "text-accent"}`}>{channel}</div>
            <div className="font-mono text-xs text-muted-foreground mt-2">{s.channelHint}</div>
          </div>
        )}

        {warnings.length > 0 && (
          <div className="p-4 border border-destructive/40 rounded-lg space-y-2" role="status">
            <div className="font-mono text-xs text-foreground flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" /> {s.warnings}
            </div>
            <ul className="list-disc pl-5 space-y-1">
              {warnings.map((w) => (
                <li key={w} className="font-mono text-xs text-muted-foreground">{w}</li>
              ))}
            </ul>
          </div>
        )}

        <Button onClick={copy} disabled={!finalUrl} className="font-mono w-full">
          {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
          {copied ? s.copied : s.copy}
        </Button>
      </div>
    </ToolPage>
  );
}
