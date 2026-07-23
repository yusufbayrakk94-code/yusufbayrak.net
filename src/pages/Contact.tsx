import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    href: "https://tr.linkedin.com/in/yyusuf-bayrak",
    icon: Linkedin,
    label: "LinkedIn",
    handle: "/in/yyusuf-bayrak",
  },
  {
    href: "mailto:yyusufbayrak@gmail.com",
    icon: Mail,
    label: "E-posta",
    handle: "yyusufbayrak@gmail.com",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mesaj gönderildi",
      description: "Mesajınız için teşekkürler. En kısa sürede dönüş yapacağım.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              İletişim
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Yeni bir proje, iş birliği veya danışmanlık görüşmesi için
              iletişime geçebilirsiniz. Dijital pazarlama, lead generation ve
              ürün geliştirme konularında konuşmaktan memnuniyet duyarım.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <CodeDivider label="Mesaj Gönder" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-sm">
                    <span className="text-accent">//</span> Ad Soyad
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Adınız ve soyadınız"
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-sm">
                    <span className="text-accent">//</span> E-posta
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="siz@ornek.com"
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm">
                    <span className="text-accent">//</span> Mesaj
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Projenizden kısaca bahsedin..."
                    rows={6}
                    required
                    className="bg-card border-border font-mono text-sm resize-none"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="font-mono">
                  {isSubmitting ? (
                    "Gönderiliyor..."
                  ) : (
                    <>
                      Mesaj Gönder
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <CodeDivider label="Bağlantılar" />

              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                      <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-foreground group-hover:text-accent transition-colors">
                        {link.label}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {link.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 bg-card border border-border rounded-lg">
                <p className="font-mono text-xs text-muted-foreground mb-2">
                  <span className="text-accent">/*</span> Durum{" "}
                  <span className="text-accent">*/</span>
                </p>
                <p className="text-sm text-foreground">
                  Ürün ve çözümler için iletişime geçebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
