import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { TrendingUp, Users, UserMinus, HeartHandshake, Target, Link2, ArrowRight } from "lucide-react";

const tools = [
  {
    name: "ARR Hesaplayıcı",
    description: "Yıllık yinelenen gelir (Annual Recurring Revenue) hesaplama aracı.",
    slug: "arr-hesaplayici",
    icon: TrendingUp,
  },
  {
    name: "CAC Hesaplayıcı",
    description: "Müşteri edinme maliyetini (Customer Acquisition Cost) analiz edin.",
    slug: "cac-hesaplayici",
    icon: Users,
  },
  {
    name: "Churn Rate Hesaplayıcı",
    description: "Müşteri kayıp oranınızı ve elde tutma performansınızı ölçün.",
    slug: "churn-rate-hesaplayici",
    icon: UserMinus,
  },
  {
    name: "LTV Hesaplayıcı",
    description: "Müşteri yaşam boyu değerini hesaplayın ve CAC ile karşılaştırın.",
    slug: "ltv-hesaplayici",
    icon: HeartHandshake,
  },
  {
    name: "ROAS Hesaplayıcı",
    description: "Reklam harcaması getiri oranınızı ve kampanya kârlılığını ölçün.",
    slug: "roas-hesaplayici",
    icon: Target,
  },
  {
    name: "UTM Link Oluşturucu",
    description: "Kampanya takibi için UTM parametreli linkler oluşturun.",
    slug: "utm-link-olusturucu",
    icon: Link2,
  },
];

export default function FreeTools() {
  return (
    <Layout>
      <Helmet>
        <title>Ücretsiz Pazarlama Araçları | Yusuf Bayrak</title>
        <meta
          name="description"
          content="ARR, CAC, Churn, LTV, ROAS hesaplayıcıları ve UTM link oluşturucu — pazarlama ve SaaS metriklerinizi hesaplayın."
        />
        <link rel="canonical" href="https://digital-core-labs.lovable.app/ucretsiz-araclar" />
        <meta property="og:title" content="Ücretsiz Pazarlama Araçları | Yusuf Bayrak" />
        <meta
          property="og:description"
          content="ARR, CAC, Churn, LTV, ROAS hesaplayıcıları ve UTM link oluşturucu."
        />
        <meta property="og:url" content="https://digital-core-labs.lovable.app/ucretsiz-araclar" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ücretsiz Araçlar
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Pazarlama, SaaS ve büyüme metriklerinizi saniyeler içinde hesaplayan pratik araçlar.
              Hepsi ücretsiz, hepsi tarayıcıda çalışır — veri sunucuya gönderilmez.
            </p>
          </div>

          <CodeDivider label="Araçlar" />

          <div className="grid gap-6 md:grid-cols-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  to={`/ucretsiz-araclar/${tool.slug}`}
                  aria-label={`${tool.name}: ${tool.description}`}
                  className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors block"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-lg shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-mono text-base text-foreground group-hover:text-accent transition-colors">
                          {tool.name}
                        </h3>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}