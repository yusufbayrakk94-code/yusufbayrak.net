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
  },
};

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