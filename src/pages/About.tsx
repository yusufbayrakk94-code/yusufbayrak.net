import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import profileAsset from "@/assets/yusuf-bayrak-profil.jpg.asset.json";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickAbout } from "@/content";

const isLovableHost =
  typeof window !== "undefined" && /lovable\.(app|dev)$/.test(window.location.hostname);
const profileImageSrc = isLovableHost
  ? profileAsset.url
  : `${import.meta.env.BASE_URL}yusuf-bayrak-profil.jpg`;

export default function About() {
  const locale = useLocale();
  const c = pickAbout(locale);
  const isTR = locale !== "en";
  const personLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `https://yusufbayrak.net${c.path}#profilepage`,
    inLanguage: isTR ? "tr-TR" : "en-US",
    mainEntity: {
      "@type": "Person",
      "@id": "https://yusufbayrak.net/#person",
      name: "Yusuf Bayrak",
      jobTitle: isTR ? "Dijital Pazarlama Uzmanı" : "Digital Marketing Specialist",
      description: c.whoAnswer,
      url: "https://yusufbayrak.net/",
      image: "https://yusufbayrak.net/og-image.jpg",
      email: "mailto:yyusufbayrak@gmail.com",
      worksFor: { "@type": "Organization", name: "Sistem Global Danışmanlık" },
      sameAs: ["https://tr.linkedin.com/in/yyusuf-bayrak", "https://x.com/yusuffbayrak"],
      knowsAbout: c.expertise,
    },
  };

  return (
    <Layout>
      <LocaleMeta path={c.path} locale={locale} title={c.seoTitle} description={c.seoDescription} ogType="profile" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(personLd)}</script>
      </Helmet>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.heading}</h1>
          </div>
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="opacity-0 animate-fade-in-up stagger-1">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">{c.whoHeading}</h2>
                <p className="text-lg text-foreground leading-relaxed">{c.whoAnswer}</p>
              </div>
              <div className="mb-8 opacity-0 animate-fade-in-up stagger-1">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-accent/30 transition-all duration-300 hover:border-accent">
                  <img src={profileImageSrc} alt="Yusuf Bayrak" className="w-full h-full object-cover" />
                </div>
              </div>
              {c.paragraphs.map((p, i) => (
                <div key={i} className={`opacity-0 animate-fade-in-up stagger-${Math.min(i + 1, 4)}`}>
                  <p className={i === 0 ? "text-lg text-foreground leading-relaxed" : "text-muted-foreground leading-relaxed"}>{p}</p>
                </div>
              ))}
              <div className="opacity-0 animate-fade-in-up stagger-4"><CodeDivider label={c.approachDivider} /></div>
              <div className="space-y-4 font-mono text-sm opacity-0 animate-fade-in-up stagger-4">
                {c.approach.map((line, i) => (
                  <p key={i} className="text-muted-foreground transition-colors hover:text-foreground">
                    <span className="text-accent">{"//"}</span> {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <h2 className="font-mono text-sm text-accent mb-4">
                  <span className="text-muted-foreground">/*</span> {c.expertiseLabel} <span className="text-muted-foreground">*/</span>
                </h2>
                <ul className="space-y-2">
                  {c.expertise.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <span className="text-accent mr-2">→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <h2 className="font-mono text-sm text-accent mb-4">
                  <span className="text-muted-foreground">/*</span> {c.toolsLabel} <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {c.tools.map((tool) => (<TechTag key={tool}>{tool}</TechTag>))}
                </div>
              </div>
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <h2 className="font-mono text-sm text-accent mb-4">
                  <span className="text-muted-foreground">/*</span> {c.experienceLabel} <span className="text-muted-foreground">*/</span>
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {c.experience.map((e, i) => (<p key={i}>{e}</p>))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
