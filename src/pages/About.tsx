import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";

const expertise = [
  "Performans Pazarlaması",
  "B2B Lead Generation",
  "Yapay Zeka & İş Akışı Otomasyonu",
  "Web Geliştirme & Kurulum",
  "Büyüme Stratejisi",
  "SaaS Ürün Geliştirme",
];

const tools = [
  "Google Ads",
  "Meta Ads",
  "LinkedIn Ads",
  "AI APIs / LLMs",
  "n8n",
  "Cursor",
  "Lovable",
  "Web Analytics",
];

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hakkımda
            </h1>
          </div>

          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Developer Photo */}
              <div className="mb-8 opacity-0 animate-fade-in-up stagger-1">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-primary/30 transition-all duration-300 hover:border-primary">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Yusuf Bayrak"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  Veri odaklı dijital pazarlama stratejilerini güçlü bir analitik
                  bakış açısıyla harmanlıyorum. Performans pazarlama, B2B lead
                  generation ve dijital altyapı yönetimi temel odak alanlarımı
                  oluşturuyor.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  Kapsam sadece reklam yönetimiyle sınırlı değil; web sitesi
                  kurulumundan gelişmiş otomasyon kurgularına kadar markaların
                  dijital ekosistemi uçtan uca inşa ediliyor. Operasyonel yükü
                  hafifleten ve bütçe verimliliği sağlayan yapay zeka araçları
                  sürecin merkezinde yer alıyor.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <p className="text-muted-foreground leading-relaxed">
                  AdGusto, Brandog ve Marka-MCP gibi SaaS çözümleriyle dijital
                  pazarlama ekosistemine katkı sunarken; sahada bizzat test edip
                  sonuç aldığım sistemleri, markalar için sürdürülebilir büyüme
                  motorlarına dönüştürüyorum.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Yaklaşım" />
              </div>

              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Veriye dayalı kararlar,
                  sezgisel tahminlerin önünde
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Otomasyonla operasyonel
                  yükü azalt, ölçeklenebilirliği artır
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> SaaS çözümleriyle pazarlama
                  ekosistemini güçlendir
                </p>
                <p className="text-muted-foreground transition-colors hover:text-foreground">
                  <span className="text-primary">{"//"}</span> Sadece kurgula; sahada test
                  et ve sonuç al
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skills */}
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Uzmanlık Alanları{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {expertise.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="text-primary mr-2">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Araçlar{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <TechTag key={tool}>{tool}</TechTag>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-primary mb-4">
                  <span className="text-muted-foreground">/*</span> Deneyim{" "}
                  <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>Performans pazarlama & otomasyon</p>
                  <p>B2B lead generation sistemleri</p>
                  <p>SaaS ürün geliştirme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
