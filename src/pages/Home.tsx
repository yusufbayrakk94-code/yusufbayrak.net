import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
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

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Yusuf Bayrak — B2B Lead Gen & AI Otomasyon Uzmanı</title>
        <meta name="description" content="Web sitesi kurulumu ve B2B lead generation kurgularını yapay zeka otomasyonlarıyla uçtan uca inşa eden dijital pazarlama uzmanı." />
        <link rel="canonical" href="https://digital-core-labs.lovable.app/" />
        <meta property="og:title" content="Yusuf Bayrak — B2B Lead Gen & AI Otomasyon Uzmanı" />
        <meta property="og:description" content="Web sitesi kurulumu ve B2B lead generation kurgularını yapay zeka otomasyonlarıyla uçtan uca inşa ediyorum." />
        <meta property="og:url" content="https://digital-core-labs.lovable.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Yusuf Bayrak — B2B Lead Gen & AI Otomasyon Uzmanı" />
        <meta name="twitter:description" content="Web sitesi kurulumu ve B2B lead generation kurgularını yapay zeka otomasyonlarıyla uçtan uca inşa ediyorum." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-grid">
        <div className="container">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            {/* Code-style label */}
            <CodeLabel className="mb-6">Dijital Pazarlama | Lead Generation | Ürün Geliştirme</CodeLabel>

            {/* Headline with typing cursor */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Merhaba, ben Yusuf Bayrak.
              <TypingCursor />
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              Web sitesi kurulumu ve B2B lead generation kurgularını, yapay zeka otomasyonlarıyla uçtan uca inşa ediyorum.
            </p>

            {/* CTA */}
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="font-mono transition-transform hover:scale-105">
                <Link to="/projeler">
                  Projeleri Gör
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="opacity-0 animate-fade-in-up">
            <CodeDivider label="Öne Çıkan Projeler" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.name} 
                className={`opacity-0 animate-fade-in-up stagger-${index + 1}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center opacity-0 animate-fade-in-up stagger-4">
            <Link 
              to="/projeler" 
              className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-accent transition-colors link-underline"
            >
              <span className="text-accent mr-2">{"//"}</span>
              Tüm projeleri gör
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
