import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "AdGusto",
    slug: "adgusto",
    description: "Meta Ads kütüphane entegrasyonuyla rakip analizini ve kreatif yönetimini hızlandıran SaaS projesi.",
    stack: ["SaaS", "Meta Ads", "Kreatif Yönetimi"],
    impact: "Rakip analizi ve kreatif yönetimini hızlandırır",
  },
  {
    name: "Brandog & Marka-MCP",
    slug: "brandog-marka-mcp",
    description: "TÜRKPATENT Veritabanına Yapay zeka Model Context Protocol (MCP) altyapısıyla bağlanan, güçlendirilmiş; marka tescil ve süreç yönetimini akıllı, otomatize bir yapıda buluşturan platform çözümü.",
    stack: ["MCP", "Yapay Zeka", "TÜRKPATENT"],
    impact: "Marka tescil süreçlerini otomatize eder",
  },
  {
    name: "Büyüme & Otomasyon Altyapıları",
    slug: "buyume-otomasyon-altyapilari",
    description: "Modern low-code araçlar, otomasyon sistemleri ve veri odaklı stratejilerle markalar için kurguladığım sürdürülebilir büyüme motorları.",
    stack: ["Low-code", "Otomasyon", "Veri Stratejisi"],
    impact: "Sürdürülebilir büyüme motorları kurar",
  },
];

export default function Work() {
  return (
    <Layout>
      <Helmet>
        <title>Projeler | Yusuf Bayrak</title>
        <meta name="description" content="AdGusto, Brandog & Marka-MCP ve Büyüme & Otomasyon Altyapıları başta olmak üzere geliştirdiğim ürün ve projeler." />
        <link rel="canonical" href="https://digital-core-labs.lovable.app/projeler" />
        <meta property="og:title" content="Projeler | Yusuf Bayrak" />
        <meta property="og:description" content="SaaS, AI ve otomasyon odaklı ürün ve projelerimden seçkiler." />
        <meta property="og:url" content="https://digital-core-labs.lovable.app/projeler" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Projeler | Yusuf Bayrak" />
        <meta name="twitter:description" content="SaaS, AI ve otomasyon odaklı ürün ve projelerimden seçkiler." />
      </Helmet>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projeler
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Meta Ads kütüphaneleri, marka tescil otomasyonu ve veri odaklı büyüme
              altyapıları üzerine geliştirdiğim projeler. Her biri gerçek bir sorunu
              ölçülebilir sonuçlarla çözmeyi hedefler.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Projeler" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
