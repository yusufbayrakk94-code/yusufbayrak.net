import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "AdGusto",
    slug: "adgusto",
    description: "Meta Ads kütüphane entegrasyonuyla rakip analizini ve kreatif yönetimini hızlandıran SaaS projesi.",
    stack: ["SaaS", "Meta Ads", "Kreatif Yönetimi"],
    impact: "Rakip analizi ve kreatif yönetimini hızlandırır",
    href: "https://www.adgusto.app",
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
