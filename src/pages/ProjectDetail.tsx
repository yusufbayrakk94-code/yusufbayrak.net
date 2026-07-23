import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData: Record<string, {
  name: string;
  description: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  challenges: string[];
  features: string[];
  externalUrl?: string;
}> = {
  adgusto: {
    name: "AdGusto",
    description: "Meta Ads kütüphane entegrasyonuyla rakip analizini ve kreatif yönetimini hızlandıran SaaS projesi.",
    fullDescription: "AdGusto, Meta Ads kütüphane entegrasyonu üzerinden rakiplerin kreatiflerini analiz etmeyi, kendi kreatif süreçlerini yönetmeyi ve ekiplerin reklam üretim hızını artırmayı sağlayan bir SaaS platformudur.",
    stack: ["SaaS", "Meta Ads", "Kreatif Yönetimi", "React", "Node.js"],
    impact: "Rakip analizi ve kreatif yönetimini hızlandırır",
    challenges: [
      "Meta Ads kütüphanesinden yüksek hacimli veriyi düzenli toplamak",
      "Rakip kreatiflerini anlamlı kategorilere ayırmak",
      "Ekipler için hızlı ve karar destekleyici bir arayüz tasarlamak",
      "Ölçeklenebilir SaaS altyapısını maliyet-etkin yönetmek"
    ],
    features: [
      "Rakip kreatif kütüphanesi ve filtreleme",
      "Kreatif yönetim panosu",
      "Meta Ads kütüphane entegrasyonu",
      "Ekip iş birliği araçları"
    ],
    externalUrl: "https://www.adgusto.app"
  },
  "brandog-marka-mcp": {
    name: "Brandog & Marka-MCP",
    description: "TÜRKPATENT Veritabanına Yapay zeka Model Context Protocol (MCP) altyapısıyla bağlanan, güçlendirilmiş; marka tescil ve süreç yönetimini akıllı, otomatize bir yapıda buluşturan platform çözümü.",
    fullDescription: "Brandog & Marka-MCP, TÜRKPATENT veritabanını Yapay Zeka Model Context Protocol (MCP) altyapısıyla güçlendirerek marka tescil araştırma, takip ve süreç yönetimini tek bir platformda birleştiren akıllı bir otomasyon çözümüdür.",
    stack: ["MCP", "Yapay Zeka", "TÜRKPATENT", "Node.js", "PostgreSQL"],
    impact: "Marka tescil süreçlerini otomatize eder",
    challenges: [
      "TÜRKPATENT verileriyle güvenilir ve hızlı entegrasyon kurmak",
      "MCP protokolüne uygun bağlam tabanlı AI akışları tasarlamak",
      "Marka hukuku süreçlerini otomasyona uyarlamak",
      "Kullanıcılar için anlaşılır ve güven veren bir arayüz sunmak"
    ],
    features: [
      "TÜRKPATENT veritabanı entegrasyonu",
      "MCP tabanlı AI destekli araştırma",
      "Marka tescil süreç takibi",
      "Otomatik raporlama ve uyarılar"
    ]
  },
  "buyume-otomasyon-altyapilari": {
    name: "Büyüme & Otomasyon Altyapıları",
    description: "Modern low-code araçlar, otomasyon sistemleri ve veri odaklı stratejilerle markalar için kurguladığım sürdürülebilir büyüme motorları.",
    fullDescription: "Markalar için low-code araçlar, otomasyon sistemleri ve veri odaklı stratejilerle tasarlanmış sürdürülebilir büyüme motorları. Amaç; tekrar eden işleri minimize etmek, veriye dayalı kararları hızlandırmak ve ölçeklenebilir pazarlama & operasyon altyapıları kurmaktır.",
    stack: ["Low-code", "Otomasyon", "Veri Stratejisi", "n8n", "Make", "Airtable"],
    impact: "Sürdürülebilir büyüme motorları kurar",
    challenges: [
      "Farklı veri kaynaklarını tek bir otomasyon akışında birleştirmek",
      "Low-code araçlarla kurumsal ölçekte güvenilir sistemler inşa etmek",
      "Büyüme metriklerini gerçek zamanlı izlenebilir hale getirmek",
      "Süreçleri otomatikleştirirken insan denetimini korumak"
    ],
    features: [
      "Low-code otomasyon akışları",
      "Veri odaklı büyüme panoları",
      "Pazarlama ve operasyon entegrasyonları",
      "Ölçeklenebilir süreç altyapısı"
    ]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Proje Bulunamadı</h1>
              <p className="text-muted-foreground mb-8">Aradığınız proje mevcut değil.</p>
              <Button asChild>
                <Link to="/projeler">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Projelere Dön
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/projeler" 
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Projelere Dön
          </Link>

          {/* Project Header */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {project.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            {/* Impact */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <span className="font-mono text-sm text-primary">
                <span className="text-muted-foreground">{"//"}</span> Etki: {project.impact}
              </span>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Zorluklar" />
          </div>

          {/* Challenges */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-3">
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-3">
            <CodeDivider label="Özellikler" />
          </div>

          {/* Features */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-4">
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-border opacity-0 animate-fade-in-up stagger-4">
            <Button variant="outline" className="font-mono" disabled>
              <Github className="mr-2 h-4 w-4" />
              Kaynak Kod
            </Button>
            {project.externalUrl ? (
              <Button asChild variant="outline" className="font-mono">
                <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Canlı Demo
                </a>
              </Button>
            ) : (
              <Button variant="outline" className="font-mono" disabled>
                <ExternalLink className="mr-2 h-4 w-4" />
                Canlı Demo
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
