import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Wrench } from "lucide-react";

const tools = [
  {
    name: "Slug Oluşturucu",
    description: "Başlıklarınızı SEO uyumlu URL slug'larına dönüştürün.",
    status: "Yakında",
  },
  {
    name: "JSON Formatlayıcı",
    description: "JSON verilerini okunabilir formata getirin ve doğrulayın.",
    status: "Yakında",
  },
  {
    name: "Renk Paleti Üretici",
    description: "Projeleriniz için uyumlu renk paletleri oluşturun.",
    status: "Yakında",
  },
  {
    name: "Meta Etiket Üretici",
    description: "SEO için meta ve Open Graph etiketleri oluşturun.",
    status: "Yakında",
  },
];

export default function FreeTools() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ücretsiz Araçlar
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Geliştiriciler ve içerik üreticileri için hazırladığım küçük, pratik araçlar.
              Hepsi ücretsiz, hepsi tarayıcıda çalışır.
            </p>
          </div>

          <CodeDivider label="Araçlar" />

          <div className="grid gap-6 md:grid-cols-2">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-lg shrink-0">
                    <Wrench className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-mono text-base text-foreground">{tool.name}</h3>
                      <span className="font-mono text-xs text-accent border border-accent/40 px-2 py-0.5 rounded">
                        {tool.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}