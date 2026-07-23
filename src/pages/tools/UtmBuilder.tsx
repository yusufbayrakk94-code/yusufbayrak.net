import { useState, useMemo } from "react";
import { Copy, Check } from "lucide-react";
import { ToolPage, Field, type Faq } from "@/components/tools/ToolPage";
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
      seoContent={<UtmSeo />}
      faqs={utmFaqs}
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

function UtmSeo() {
  return (
    <>
      <h2>UTM Parametreleri Nedir?</h2>
      <p>
        <strong>UTM parametreleri</strong>, bir URL'nin sonuna eklenen ve trafiğin hangi kaynaktan,
        kanaldan ve kampanyadan geldiğini analitik araçlara söyleyen etiketlerdir. Google Analytics 4,
        Mixpanel, Amplitude ve HubSpot gibi araçların büyük çoğunluğu bu parametreleri otomatik olarak
        yakalar ve raporlarda kanal atıfını (attribution) UTM'lere göre yapar.
      </p>
      <p>
        Beş temel parametre vardır: <strong>utm_source</strong> (trafik kaynağı — örn. google, newsletter),
        <strong> utm_medium</strong> (kanal türü — örn. cpc, email, social), <strong>utm_campaign</strong>
        (kampanya adı), <strong>utm_term</strong> (ücretli aramada anahtar kelime) ve
        <strong> utm_content</strong> (aynı kampanyadaki farklı yaratıcıları/reklamları ayırt etmek için).
        Source, medium ve campaign her zaman doldurulmalı; term ve content ise A/B test ve varyant
        ayrımı için opsiyoneldir.
      </p>
      <p>
        UTM disiplini olmadan pazarlama raporları güvenilirliğini kaybeder. Şirket içinde
        <strong> tutarlı bir isimlendirme standardı</strong> (küçük harf, tire ayırıcı, sabit kısaltmalar)
        oluşturmak; büyük/küçük harf karışıklığı ve yazım farklılıklarından kaynaklanan parçalı
        raporlamayı önler.
      </p>
    </>
  );
}

const utmFaqs: Faq[] = [
  {
    q: "Hangi UTM parametreleri zorunludur?",
    a: "Google Analytics'in doğru atıf yapabilmesi için en az utm_source, utm_medium ve utm_campaign doldurulmalıdır. utm_term ve utm_content opsiyoneldir ve genellikle A/B test veya yaratıcı bazlı analiz için kullanılır.",
  },
  {
    q: "UTM etiketlerinde büyük/küçük harf önemli mi?",
    a: "Evet, Google Analytics UTM değerlerine büyük/küçük harf duyarlı davranır. 'Facebook' ve 'facebook' iki farklı kaynak olarak raporlanır. Bu nedenle tüm ekipte küçük harf standardı uygulanmalıdır.",
  },
  {
    q: "İç link tıklamalarına UTM eklemeli miyim?",
    a: "Hayır. Aynı domain içindeki linklere UTM eklemek oturumu sıfırlar ve atıfı bozar. UTM yalnızca dış kanallardan (reklam, e-posta, sosyal medya) gelen trafik için kullanılmalıdır.",
  },
  {
    q: "UTM linkleri SEO'yu olumsuz etkiler mi?",
    a: "Doğrudan bir cezası yoktur; ancak organik arama linklerinde UTM kullanmak yinelenen içerik ve rel=canonical sorunlarına yol açabilir. Organik trafik için UTM önerilmez.",
  },
];