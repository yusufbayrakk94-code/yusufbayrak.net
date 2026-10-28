import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Copy, Check, Download } from "lucide-react";
import { ToolPage } from "@/components/tools/ToolPage";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLocale } from "@/i18n/useLocale";
import { pickTools } from "@/content";
import { SITE_URL } from "@/i18n/routes";

const strings = {
  tr: {
    siteName: "Proje / Site Adı *",
    phSiteName: "Yusuf Bayrak",
    shortDesc: "Kısa Açıklama *",
    phShortDesc: "Sitenizi tek cümlede özetleyin (çıktıda blockquote olarak görünür).",
    docs: "Doküman Bağlantıları",
    examples: "Örnekler",
    optional: "Opsiyonel Bağlantılar",
    linksHint: 'Her satır bir bağlantı. Format: [Başlık](URL): Açıklama',
    phDocs: "[Hakkımda](https://yusufbayrak.net/hakkimda): Profesyonel geçmiş ve uzmanlık alanları\n[Projeler](https://yusufbayrak.net/projeler): Tüm projelerin listesi",
    phExamples: "[Blog](https://yusufbayrak.net/blog): Performans pazarlama ve AI otomasyon yazıları",
    phOptional: "[Sitemap](https://yusufbayrak.net/sitemap.xml)",
    preview: "Önizleme (llms.txt)",
    empty: "Alanları doldurdukça çıktı burada görünür…",
    copy: "Metni Kopyala",
    copied: "Kopyalandı",
    download: "Dosyayı İndir (llms.txt)",
    toastCopy: "llms.txt içeriği kopyalandı",
    toastDownload: "llms.txt indirildi",
    sectionsHeading: "Bölümler",
    sectionDocs: "Documentation",
    sectionExamples: "Examples",
    sectionOptional: "Optional",
    fillExample: "Örnekle doldur",
    checksHeading: "Format kontrolü",
    checksOk: "Format llmstxt.org önerisine uygun görünüyor.",
    chkName: "H1 başlık (site adı) zorunludur.",
    chkDesc: "Tek cümlelik açıklama (> blockquote) eklenmesi önerilir.",
    chkNoLinks: "En az bir bölümde bağlantı yok; dosya bir 'site haritası' işlevi görmez.",
    chkFormat: (n: number) => `${n} satır [Başlık](URL): Açıklama biçiminde değil.`,
    chkRelative: (n: number) => `${n} bağlantı göreli veya http:// — tam https:// URL kullanın.`,
    chkDup: (n: number) => `${n} bağlantı birden fazla kez geçiyor.`,
    chkLong: (n: number) => `${n} bağlantı içeren uzun bir liste; en önemli 20-50 sayfayla sınırlamak daha okunaklıdır.`,
    exName: "Örnek Mağaza",
    exDesc: "Türkiye'de el yapımı seramik ürünler satan e-ticaret sitesi; ürün, kargo ve iade bilgileri.",
    exDocs: "[Kargo ve teslimat](https://ornekmagaza.com/kargo): Kargo firmaları, süreler ve ücretler\n[İade ve değişim](https://ornekmagaza.com/iade): 14 günlük iade koşulları\n[Hakkımızda](https://ornekmagaza.com/hakkimizda): Atölye ve üretim süreci",
    exExamples: "[Kupalar](https://ornekmagaza.com/kategori/kupa): Kategori sayfası, ölçü ve bakım bilgisi\n[Bakım rehberi](https://ornekmagaza.com/blog/seramik-bakimi): Seramik ürünler nasıl temizlenir",
    exOptional: "[Blog](https://ornekmagaza.com/blog)\n[Sitemap](https://ornekmagaza.com/sitemap.xml)",
  },
  en: {
    siteName: "Project / Site Name *",
    phSiteName: "Yusuf Bayrak",
    shortDesc: "Short Description *",
    phShortDesc: "Summarise your site in one sentence (rendered as a blockquote).",
    docs: "Documentation Links",
    examples: "Examples",
    optional: "Optional Links",
    linksHint: 'One link per line. Format: [Title](URL): Description',
    phDocs: "[About](https://yusufbayrak.net/en/about): Background and expertise\n[Projects](https://yusufbayrak.net/en/projects): Full project list",
    phExamples: "[Blog](https://yusufbayrak.net/en/blog): Performance marketing and AI automation posts",
    phOptional: "[Sitemap](https://yusufbayrak.net/sitemap.xml)",
    preview: "Preview (llms.txt)",
    empty: "Fill the fields to see the generated output here…",
    copy: "Copy Text",
    copied: "Copied",
    download: "Download File (llms.txt)",
    toastCopy: "llms.txt content copied",
    toastDownload: "llms.txt downloaded",
    sectionsHeading: "Sections",
    sectionDocs: "Documentation",
    sectionExamples: "Examples",
    sectionOptional: "Optional",
    fillExample: "Fill with example",
    checksHeading: "Format check",
    checksOk: "The format looks consistent with the llmstxt.org proposal.",
    chkName: "An H1 heading (site name) is required.",
    chkDesc: "A one-sentence summary (> blockquote) is recommended.",
    chkNoLinks: "No section has links yet, so the file cannot act as a site guide.",
    chkFormat: (n: number) => `${n} line(s) are not in [Title](URL): Description format.`,
    chkRelative: (n: number) => `${n} link(s) are relative or http:// — use full https:// URLs.`,
    chkDup: (n: number) => `${n} link(s) appear more than once.`,
    chkLong: (n: number) => `${n} links in total; keeping the list to the 20-50 most important pages reads better.`,
    exName: "Example Store",
    exDesc: "Online store selling handmade ceramics; product, shipping and returns information.",
    exDocs: "[Shipping](https://examplestore.com/shipping): Carriers, delivery times and costs\n[Returns](https://examplestore.com/returns): 14-day return policy\n[About us](https://examplestore.com/about): Studio and production process",
    exExamples: "[Mugs](https://examplestore.com/category/mugs): Category page with sizes and care info\n[Care guide](https://examplestore.com/blog/ceramic-care): How to clean ceramics",
    exOptional: "[Blog](https://examplestore.com/blog)\n[Sitemap](https://examplestore.com/sitemap.xml)",
  },
};

type Strings = (typeof strings)["tr"];

// Lightweight checks against the llmstxt.org proposal: H1 required, summary
// blockquote recommended, list items as [Title](URL): note, absolute URLs.
function checkLlmsTxt(input: { name: string; desc: string; blocks: string[] }, s: Strings): string[] {
  const issues: string[] = [];
  if (!input.name.trim()) issues.push(s.chkName);
  if (!input.desc.trim()) issues.push(s.chkDesc);
  const lines = input.blocks.flatMap((b) => b.split(/\r?\n/).map((l) => l.trim().replace(/^- /, "")).filter(Boolean));
  if (lines.length === 0) { issues.push(s.chkNoLinks); return issues; }
  const linkRe = /^\[[^\]]+\]\(([^)\s]+)\)(:\s*.+)?$/;
  let badFormat = 0, relative = 0;
  const urls: string[] = [];
  for (const l of lines) {
    const m = l.match(linkRe);
    if (!m) { badFormat++; continue; }
    urls.push(m[1]);
    if (!/^https:\/\//i.test(m[1])) relative++;
  }
  const dup = urls.length - new Set(urls.map((u) => u.replace(/\/$/, "").toLowerCase())).size;
  if (badFormat) issues.push(s.chkFormat(badFormat));
  if (relative) issues.push(s.chkRelative(relative));
  if (dup > 0) issues.push(s.chkDup(dup));
  if (urls.length > 50) issues.push(s.chkLong(urls.length));
  return issues;
}

// Turn a textarea block into normalised markdown list items. Each non-empty
// line is treated as either `[Title](URL): Description` or a plain URL / text
// line that we pass through verbatim (prefixed with a dash if missing).
function toListItems(raw: string): string[] {
  return raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => (l.startsWith("- ") ? l : `- ${l}`));
}

function buildLlmsTxt(input: {
  name: string;
  desc: string;
  docs: string;
  examples: string;
  optional: string;
  labels: { docs: string; examples: string; optional: string };
}): string {
  const lines: string[] = [];
  const name = input.name.trim();
  const desc = input.desc.trim();
  if (!name && !desc) return "";

  if (name) lines.push(`# ${name}`, "");
  if (desc) {
    for (const l of desc.split(/\r?\n/)) lines.push(`> ${l}`.trimEnd());
    lines.push("");
  }

  const sections: Array<{ heading: string; body: string }> = [
    { heading: input.labels.docs, body: input.docs },
    { heading: input.labels.examples, body: input.examples },
    { heading: input.labels.optional, body: input.optional },
  ];
  for (const s of sections) {
    const items = toListItems(s.body);
    if (items.length === 0) continue;
    lines.push(`## ${s.heading}`, "");
    lines.push(...items);
    lines.push("");
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

export default function LlmsTxtGenerator() {
  const locale = useLocale();
  const s = strings[locale];
  const tool = pickTools(locale).llmsTxt;

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [docs, setDocs] = useState("");
  const [examples, setExamples] = useState("");
  const [optional, setOptional] = useState("");
  const [copied, setCopied] = useState(false);

  const output = useMemo(
    () =>
      buildLlmsTxt({
        name,
        desc,
        docs,
        examples,
        optional,
        labels: {
          docs: s.sectionDocs,
          examples: s.sectionExamples,
          optional: s.sectionOptional,
        },
      }),
    [name, desc, docs, examples, optional, s]
  );

  const issues = useMemo(
    () => (output ? checkLlmsTxt({ name, desc, blocks: [docs, examples, optional] }, s) : []),
    [output, name, desc, docs, examples, optional, s]
  );

  const fillExample = () => {
    setName(s.exName);
    setDesc(s.exDesc);
    setDocs(s.exDocs);
    setExamples(s.exExamples);
    setOptional(s.exOptional);
  };

  const canonical = `${SITE_URL}${tool.path}`;

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success(s.toastCopy);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "llms.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(s.toastDownload);
  };

  return (
    <ToolPage toolKey="llmsTxt">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: tool.title,
          description: tool.description,
          url: canonical,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          inLanguage: locale === "en" ? "en-US" : "tr-TR",
        })}</script>
      </Helmet>

      <div className="space-y-5">
        <div>
          <Button type="button" variant="outline" size="sm" onClick={fillExample} className="font-mono text-xs">
            {s.fillExample}
          </Button>
        </div>
        <Text label={s.siteName} value={name} onChange={setName} placeholder={s.phSiteName} />
        <TextArea label={s.shortDesc} value={desc} onChange={setDesc} placeholder={s.phShortDesc} rows={3} />
        <TextArea label={s.docs} value={docs} onChange={setDocs} placeholder={s.phDocs} rows={4} hint={s.linksHint} />
        <TextArea label={s.examples} value={examples} onChange={setExamples} placeholder={s.phExamples} rows={3} hint={s.linksHint} />
        <TextArea label={s.optional} value={optional} onChange={setOptional} placeholder={s.phOptional} rows={3} hint={s.linksHint} />

        <div className="pt-2">
          <div className="font-mono text-xs text-muted-foreground mb-2">{"//"} {s.preview}</div>
          <pre className="bg-background border border-border rounded-md p-4 text-foreground font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre min-h-[180px]">
            {output || <span className="text-muted-foreground">{s.empty}</span>}
          </pre>
          {output && (
            <div className="mt-3 border border-border rounded-md p-3" aria-live="polite">
              <div className="font-mono text-xs text-muted-foreground mb-1">{"//"} {s.checksHeading}</div>
              {issues.length === 0 ? (
                <p className="font-mono text-xs text-foreground">✓ {s.checksOk}</p>
              ) : (
                <ul className="list-disc pl-5 space-y-1 font-mono text-xs text-foreground">
                  {issues.map((i) => <li key={i}>{i}</li>)}
                </ul>
              )}
            </div>
          )}
          <div className="flex flex-wrap gap-3 mt-4">
            <Button type="button" onClick={handleDownload} disabled={!output} className="font-mono text-sm">
              <Download className="mr-2 h-4 w-4" />
              {s.download}
            </Button>
            <Button type="button" variant="outline" onClick={handleCopy} disabled={!output} className="font-mono text-sm">
              {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? s.copied : s.copy}
            </Button>
          </div>
        </div>
      </div>
    </ToolPage>
  );
}

function Text({
  label, value, onChange, placeholder,
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="block">
      <span className="font-mono text-sm text-muted-foreground block mb-2">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-11 px-3 bg-background border border-border rounded-md text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
      />
    </label>
  );
}

function TextArea({
  label, value, onChange, placeholder, rows = 3, hint,
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; rows?: number; hint?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-sm text-muted-foreground block mb-2">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground font-mono text-xs leading-relaxed focus:outline-none focus:border-accent transition-colors resize-y"
      />
      {hint && <span className="font-mono text-xs text-muted-foreground mt-2 block">{hint}</span>}
    </label>
  );
}