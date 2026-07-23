import { useState, useMemo } from "react";
import { Copy, Check } from "lucide-react";
import { ToolPage, Field } from "@/components/tools/ToolPage";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function UtmBuilder() {
  const [url, setUrl] = useState("");
  const [source, setSource] = useState("");
  const [medium, setMedium] = useState("");
  const [campaign, setCampaign] = useState("");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);

  const finalUrl = useMemo(() => {
    if (!url) return "";
    try {
      const base = new URL(url.startsWith("http") ? url : `https://${url}`);
      const params = new URLSearchParams(base.search);
      const set = (k: string, v: string) => v && params.set(k, v.trim());
      set("utm_source", source);
      set("utm_medium", medium);
      set("utm_campaign", campaign);
      set("utm_term", term);
      set("utm_content", content);
      base.search = params.toString();
      return base.toString();
    } catch {
      return "";
    }
  }, [url, source, medium, campaign, term, content]);

  const copy = async () => {
    if (!finalUrl) return;
    await navigator.clipboard.writeText(finalUrl);
    setCopied(true);
    toast.success("Link kopyalandı");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolPage
      title="UTM Link Oluşturucu"
      description="Kampanya takibi için UTM parametreli linkleri hızlıca oluşturun ve pazarlama kanallarınızı doğru ölçün."
      path="/ucretsiz-araclar/utm-link-olusturucu"
      intro="UTM parametreleri, Google Analytics ve diğer analitik araçlarda trafik kaynaklarını doğru izlemenizi sağlar. Aşağıdaki alanları doldurarak kampanya linkinizi oluşturun."
    >
      <div className="space-y-5">
        <Field label="Web Sitesi URL'si *" value={url} onChange={setUrl} type="text" placeholder="https://ornek.com/sayfa" />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Kaynak (utm_source) *" value={source} onChange={setSource} type="text" placeholder="google, newsletter" />
          <Field label="Ortam (utm_medium) *" value={medium} onChange={setMedium} type="text" placeholder="cpc, email" />
        </div>
        <Field label="Kampanya (utm_campaign) *" value={campaign} onChange={setCampaign} type="text" placeholder="yaz-kampanyasi" />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Terim (utm_term)" value={term} onChange={setTerm} type="text" placeholder="anahtar-kelime" />
          <Field label="İçerik (utm_content)" value={content} onChange={setContent} type="text" placeholder="banner-a" />
        </div>

        <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="font-mono text-xs text-muted-foreground mb-2">{"//"} Oluşturulan Link</div>
          <div className="font-mono text-sm text-accent break-all min-h-[1.5rem]">
            {finalUrl || "URL ve gerekli alanları doldurun…"}
          </div>
        </div>
        <Button onClick={copy} disabled={!finalUrl} className="font-mono w-full">
          {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
          {copied ? "Kopyalandı" : "Linki Kopyala"}
        </Button>
      </div>
    </ToolPage>
  );
}