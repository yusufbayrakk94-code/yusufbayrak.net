import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Home,
  Mail,
  RefreshCw,
  Globe,
  Server,
  Wifi,
  AlertTriangle,
  Lightbulb,
  ArrowLeft,
  Search,
} from "lucide-react";

const statusFacts = [
  {
    code: "404",
    title: "Kayıp Sayfa",
    desc: "İstediğiniz içerik sunucuda bulunamadı. Belki taşındı, belki de adını değiştirdik.",
  },
  {
    code: "301",
    title: "Kalıcı Taşıma",
    desc: "Bir sayfanın kalıcı olarak yeni bir adrese yönlendirildiğini gösterir. SEO açısından en sağlıklı taşıma türüdür.",
  },
  {
    code: "503",
    title: "Bakım Modu",
    desc: "Sunucu geçici olarak hizmet veremiyor olabilir. DNS güncellemelerinde sık görülür.",
  },
  {
    code: "200",
    title: "Her Şey Yolunda",
    desc: "Sunucu isteği başarıyla karşıladı. Her gün binlerce kez sessiz sedasız çalışır.",
  },
];

const dnsSteps = [
  {
    icon: Globe,
    title: "Tarayıcı Önbelleği",
    desc: "Tarayıcınız eski DNS kaydını hâlâ tutuyor olabilir. Ctrl+Shift+R (Windows) veya Cmd+Shift+R (Mac) ile sert yenileme yapın.",
  },
  {
    icon: Server,
    title: "DNS Sunucuları",
    desc: "Google DNS (8.8.8.8) veya Cloudflare (1.1.1.1) gibi hızlı bir DNS kullanmak güncellemeyi hızlandırabilir.",
  },
  {
    icon: Wifi,
    title: "Yayılım Süresi",
    desc: "DNS değişikliklerinin tüm dünyaya yayılması 24-48 saate kadar sürebilir. Çoğu zaman 1-2 saat içinde toparlanır.",
  },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchPath, setSearchPath] = useState(location.pathname);
  const [currentFact, setCurrentFact] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    console.error(
      "404 Hatası: Kullanıcı ulaşmaya çalıştığı rota:",
      location.pathname
    );
  }, [location.pathname]);

  const handleRetry = useCallback(() => {
    setIsRetrying(true);
    setCountdown(5);
  }, []);

  useEffect(() => {
    if (!isRetrying) return;
    if (countdown <= 0) {
      window.location.reload();
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [isRetrying, countdown]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = searchPath.replace(/\//g, "").toLowerCase();
    const routes: Record<string, string> = {
      hakkimda: "/hakkimda",
      hakkinda: "/hakkimda",
      about: "/hakkimda",
      projeler: "/projeler",
      projects: "/projeler",
      work: "/projeler",
      iletisim: "/iletisim",
      contact: "/iletisim",
      araclar: "/ucretsiz-araclar",
      tools: "/ucretsiz-araclar",
      ucretsiz: "/ucretsiz-araclar",
      arr: "/ucretsiz-araclar/arr-hesaplayici",
      cac: "/ucretsiz-araclar/cac-hesaplayici",
      churn: "/ucretsiz-araclar/churn-rate-hesaplayici",
      ltv: "/ucretsiz-araclar/ltv-hesaplayici",
      roas: "/ucretsiz-araclar/roas-hesaplayici",
      utm: "/ucretsiz-araclar/utm-link-olusturucu",
    };
    const target = routes[normalized] || "/";
    navigate(target);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border px-6 py-20 sm:py-28">
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-slate-600">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <span>HTTP 404 — Sayfa Bulunamadı</span>
          </div>

          <h1 className="mb-4 text-7xl font-bold tracking-tight text-slate-900 sm:text-9xl">
            4<span className="text-accent">0</span>4
          </h1>
          <p className="mb-2 text-2xl font-semibold text-slate-900">
            Kayıp Paket! 🚀
          </p>
          <p className="mx-auto mb-8 max-w-xl text-lg text-slate-600">
            Aradığınız sayfa başka bir galakside. Ama endişelenmeyin, bu
            ekranı hem eğlenceli hem öğretici hale getirdik. DNS güncellemesi
            sırasında da burada size yardımcı olacak araçlar var.
          </p>

          <form
            onSubmit={handleSearch}
            className="mx-auto mb-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={searchPath}
                onChange={(e) => setSearchPath(e.target.value)}
                placeholder="Örn: projeler, iletisim, arr..."
                className="h-12 border-slate-200 bg-white pl-10 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <Button
              type="submit"
              className="h-12 bg-accent text-white hover:bg-accent/90"
            >
              Git
            </Button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Geri Dön
            </Button>
            <Button
              variant="outline"
              onClick={handleRetry}
              disabled={isRetrying}
              className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw
                className={`mr-2 h-4 w-4 ${isRetrying ? "animate-spin" : ""}`}
              />
              {isRetrying ? `Yeniden deneniyor ${countdown}s` : "Yeniden Dene"}
            </Button>
            <Button
              onClick={() => navigate("/")}
              className="bg-slate-900 text-white hover:bg-slate-800"
            >
              <Home className="mr-2 h-4 w-4" />
              Ana Sayfa
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Educational Status Code Facts */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-accent" />
              <h2 className="text-xl font-semibold text-slate-900">
                HTTP Durum Kodlarından Birini Öğrenin
              </h2>
            </div>
            <div className="mb-6 rounded-xl bg-slate-900 p-6 text-white">
              <div className="mb-2 text-sm uppercase tracking-wider text-slate-400">
                Kod: {statusFacts[currentFact].code}
              </div>
              <h3 className="mb-3 text-2xl font-bold">
                {statusFacts[currentFact].title}
              </h3>
              <p className="text-slate-300">
                {statusFacts[currentFact].desc}
              </p>
            </div>
            <div className="flex gap-2">
              {statusFacts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentFact(idx)}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    idx === currentFact ? "bg-accent" : "bg-slate-200"
                  }`}
                  aria-label={`${idx + 1}. bilgi kartına git`}
                />
              ))}
            </div>
          </div>

          {/* DNS Propagation Guide */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <Globe className="h-6 w-6 text-accent" />
              <h2 className="text-xl font-semibold text-slate-900">
                DNS Güncellemesi mi Yaptınız?
              </h2>
            </div>
            <p className="mb-6 text-slate-600">
              Alan adınız yeni bir sunucuya yönlendirildiyse, bu değişikliğin
              her yerde görünür olması biraz zaman alabilir. İşte hızlandırmak
              için yapabilecekleriniz:
            </p>
            <div className="space-y-4">
              {dnsSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-border bg-white p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <step.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-semibold text-slate-900">
            Sıkça Sorulan Sorular
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "Bu sayfa neden açıldı?",
                a: "Girmeye çalıştığınız adres sunucuda bulunamadı. Sayfa kaldırılmış, taşınmış veya adres yanlış yazılmış olabilir. DNS güncellemesi sırasında da geçici olarak 404 görebilirsiniz.",
              },
              {
                q: "DNS güncellemesi ne kadar sürer?",
                a: "Genellikle birkaç saat içinde tamamlanır. Ancak TTL (Time To Live) değerine bağlı olarak 24-48 saat sürebilir. Tarayıcı ve yerel DNS önbelleğini temizlemek bu süreyi kısaltabilir.",
              },
              {
                q: "Yanlış adresi nasıl doğru sayfaya yönlendirebilirim?",
                a: "Yukarıdaki arama kutusuna gitmek istediğiniz sayfanın adını yazın. Örneğin 'projeler', 'iletisim' veya 'arr' gibi kısayollar çalışır. İsterseniz ana sayfadan da menüyü kullanabilirsiniz.",
              },
              {
                q: "Bir sayfanın taşındığını arama motorlarına nasıl bildiririm?",
                a: "301 yönlendirmesi kullanın. Eski adresten yeni adrese kalıcı yönlendirme yapmak, hem kullanıcıları doğru yere ulaştırır hem de SEO değerini korur.",
              },
            ].map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="rounded-xl border border-border bg-card px-4"
              >
                <AccordionTrigger className="text-left text-slate-900 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Navigation Links */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Ana Sayfa", path: "/", icon: Home },
            { label: "Hakkımda", path: "/hakkimda", icon: Search },
            { label: "Projeler", path: "/projeler", icon: Lightbulb },
            { label: "İletişim", path: "/iletisim", icon: Mail },
          ].map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/30 hover:bg-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-accent/10">
                <link.icon className="h-5 w-5 text-slate-600 group-hover:text-accent" />
              </div>
              <span className="font-medium text-slate-900">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
