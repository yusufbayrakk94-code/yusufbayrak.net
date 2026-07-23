import { useState, useMemo } from "react";
import { Copy, Check } from "lucide-react";
import { ToolPage, Field } from "@/components/tools/ToolPage";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLocale } from "@/i18n/useLocale";

const strings = {
  tr: {
    url: "Web Sitesi URL'si *", source: "Kaynak (utm_source) *", medium: "Ortam (utm_medium) *",
    campaign: "Kampanya (utm_campaign) *", term: "Terim (utm_term)", content: "İçerik (utm_content)",
    generated: "Oluşturulan Link", empty: "URL ve gerekli alanları doldurun…",
    copy: "Linki Kopyala", copied: "Kopyalandı", toast: "Link kopyalandı",
    phUrl: "https://ornek.com/sayfa", phSource: "google, newsletter", phMedium: "cpc, email",
    phCampaign: "yaz-kampanyasi", phTerm: "anahtar-kelime", phContent: "banner-a",
  },
  en: {
    url: "Website URL *", source: "Source (utm_source) *", medium: "Medium (utm_medium) *",
    campaign: "Campaign (utm_campaign) *", term: "Term (utm_term)", content: "Content (utm_content)",
    generated: "Generated Link", empty: "Fill URL and required fields…",
    copy: "Copy Link", copied: "Copied", toast: "Link copied",
    phUrl: "https://example.com/page", phSource: "google, newsletter", phMedium: "cpc, email",
    phCampaign: "summer-campaign", phTerm: "keyword", phContent: "banner-a",
  },
};

export default function UtmBuilder() {
  const s = strings[useLocale()];
  const [url, setUrl] = useState(""); const [source, setSource] = useState(""); const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState(""); const [term, setTerm] = useState(""); const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);

  const finalUrl = useMemo(() => {
    if (!url) return "";
    try {
      const base = new URL(url.startsWith("http") ? url : `https://${url}`);
      const params = new URLSearchParams(base.search);
      const set = (k: string, v: string) => v && params.set(k, v.trim());
      set("utm_source", source); set("utm_medium", medium); set("utm_campaign", campaign);
      set("utm_term", term); set("utm_content", content);
      base.search = params.toString();
      return base.toString();
    } catch { return ""; }
  }, [url, source, medium, campaign, term, content]);

  const copy = async () => {
    if (!finalUrl) return;
    await navigator.clipboard.writeText(finalUrl);
    setCopied(true); toast.success(s.toast);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage toolKey="utm">
      <div className="space-y-5">
        <Field label={s.url} value={url} onChange={setUrl} type="text" placeholder={s.phUrl} />
        <div className="grid grid-cols-2 gap-4">
          <Field label={s.source} value={source} onChange={setSource} type="text" placeholder={s.phSource} />
          <Field label={s.medium} value={medium} onChange={setMedium} type="text" placeholder={s.phMedium} />
        </div>
        <Field label={s.campaign} value={campaign} onChange={setCampaign} type="text" placeholder={s.phCampaign} />
        <div className="grid grid-cols-2 gap-4">
          <Field label={s.term} value={term} onChange={setTerm} type="text" placeholder={s.phTerm} />
          <Field label={s.content} value={content} onChange={setContent} type="text" placeholder={s.phContent} />
        </div>
        <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="font-mono text-xs text-muted-foreground mb-2">{"//"} {s.generated}</div>
          <div className="font-mono text-sm text-accent break-all min-h-[1.5rem]">
            {finalUrl || s.empty}
          </div>
        </div>
        <Button onClick={copy} disabled={!finalUrl} className="font-mono w-full">
          {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
          {copied ? s.copied : s.copy}
        </Button>
      </div>
    </ToolPage>
  );
}
