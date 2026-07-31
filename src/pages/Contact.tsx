import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocale } from "@/i18n/useLocale";
import { LocaleMeta } from "@/i18n/LocaleMeta";
import { pickContact } from "@/content";

export default function Contact() {
  const { toast } = useToast();
  const locale = useLocale();
  const c = pickContact(locale);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    try {
      const formData = new FormData(form);
      formData.append("access_key", "fb738921-c491-4be8-8c30-35bed8537da7");
      formData.append("subject", "yusufbayrak.net — yeni iletişim formu mesajı");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        toast({ title: c.toastTitle, description: c.toastDescription });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: c.errorTitle,
          description: c.errorDescription,
        });
      }
    } catch {
      toast({
        variant: "destructive",
        title: c.errorTitle,
        description: c.errorDescription,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { href: "https://tr.linkedin.com/in/yyusuf-bayrak", icon: Linkedin, label: c.linkedinLabel, handle: "/in/yyusuf-bayrak" },
    { href: "mailto:yyusufbayrak@gmail.com", icon: Mail, label: c.emailLabel, handle: "yyusufbayrak@gmail.com" },
  ];

  return (
    <Layout>
      <LocaleMeta path={c.path} locale={locale} title={c.seoTitle} description={c.seoDescription} />
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{c.heading}</h1>
            <p className="text-muted-foreground leading-relaxed">{c.intro}</p>
          </div>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <CodeDivider label={c.formDivider} />
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot spam protection — hidden from users */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-sm"><span className="text-accent">//</span> {c.labelName}</Label>
                  <Input id="name" name="name" placeholder={c.placeholderName} required className="bg-card border-border font-mono text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-sm"><span className="text-accent">//</span> {c.labelEmail}</Label>
                  <Input id="email" name="email" type="email" placeholder={c.placeholderEmail} required className="bg-card border-border font-mono text-sm" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm"><span className="text-accent">//</span> {c.labelMessage}</Label>
                  <Textarea id="message" name="message" placeholder={c.placeholderMessage} rows={6} required className="bg-card border-border font-mono text-sm resize-none" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="font-mono">
                  {isSubmitting ? c.submitting : (<>{c.submit}<Send className="ml-2 h-4 w-4" /></>)}
                </Button>
              </form>
            </div>
            <div>
              <CodeDivider label={c.linksDivider} />
              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label}: ${link.handle}`}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                      <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-foreground group-hover:text-accent transition-colors">{link.label}</p>
                      <p className="font-mono text-xs text-muted-foreground">{link.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-8 p-4 bg-card border border-border rounded-lg">
                <p className="font-mono text-xs text-muted-foreground mb-2">
                  <span className="text-accent">/*</span> {c.statusLabel} <span className="text-accent">*/</span>
                </p>
                <p className="text-sm text-foreground">{c.statusText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
