import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";

interface ToolPageProps {
  title: string;
  description: string;
  path: string;
  intro: string;
  children: React.ReactNode;
}

const SITE = "https://digital-core-labs.lovable.app";

export function ToolPage({ title, description, path, intro, children }: ToolPageProps) {
  const url = `${SITE}${path}`;
  return (
    <Layout>
      <Helmet>
        <title>{`${title} | Yusuf Bayrak`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${title} | Yusuf Bayrak`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Yusuf Bayrak`} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": title,
          "description": description,
          "url": url,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "TRY" }
        })}</script>
      </Helmet>
      <section className="py-20">
        <div className="container max-w-3xl">
          <Link
            to="/ucretsiz-araclar"
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-accent transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ücretsiz Araçlara Dön
          </Link>

          <div className="mb-8 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-muted-foreground leading-relaxed">{intro}</p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Hesaplayıcı" />
          </div>

          <div className="p-6 bg-card border border-border rounded-lg opacity-0 animate-fade-in-up stagger-3">
            {children}
          </div>
        </div>
      </section>
    </Layout>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  placeholder?: string;
  type?: string;
}

export function Field({ label, value, onChange, suffix, placeholder, type = "number" }: FieldProps) {
  return (
    <label className="block">
      <span className="font-mono text-sm text-muted-foreground block mb-2">{label}</span>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-11 px-3 pr-14 bg-background border border-border rounded-md text-foreground font-mono text-sm focus:outline-none focus:border-accent transition-colors"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

interface ResultProps {
  label: string;
  value: string;
  hint?: string;
}

export function Result({ label, value, hint }: ResultProps) {
  return (
    <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
      <div className="font-mono text-xs text-muted-foreground mb-1">{"//"} {label}</div>
      <div className="font-mono text-2xl text-accent break-all">{value}</div>
      {hint && <div className="font-mono text-xs text-muted-foreground mt-2">{hint}</div>}
    </div>
  );
}