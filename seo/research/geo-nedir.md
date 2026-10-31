# GEO nedir — SERP/rakip analizi (2026-10-31)

Hedef sorgu: **geo nedir** (1.000/ay, Keyword Planner 26.10.2026). İkincil: generative engine optimization nedir, yapay zeka seo, GEO ile SEO farkı.
Niyet kontrolü: Türkçe SERP'te ilk 10 sonucun tamamı "Generative Engine Optimization" anlamında (coğrafi anlam yok) → niyet bilgi/rehber. Talep kanıtı: 10+ Türkçe sayfa.

## SERP (Türkçe, 31.10.2026)
1. dot.tr Akademi — https://dot.tr/akademi/seo-audit/geo-nedir
2. dot.tr blog — https://dot.tr/blog/geo-nedir-ai-arama-optimizasyonu
3. upgraphics — https://upgraphics.com.tr/geo-nedir/
4. simur — https://simur.org/seo-blog/geo-nedir-yapay-zeka-caginda-seonun-yeni-adi/ (WebFetch hata verdi)
5. roipublic — https://www.roipublic.com/geo-nedir/
6. codionis, eadamakademi, unidigitalgroup, oguzerol, roicool

## İlk 3'ün incelemesi
- **dot.tr blog** (16.08.2026, güncelleme 28.08, ~1.600 kelime, 11 H2, 5 SSS): Princeton çalışmasına atıf yok; ölçüm bölümü belirsiz (GA4 kurulumu, tekrar örnekleme yok); robots.txt/AI botları yok; FAQ/HowTo zengin sonuç iddiası 2023 kısıtlamalarından habersiz; kendi ücretli aracını tanıtıyor.
- **upgraphics** (22.06.2026, güncelleme 06.09, ~5.000 kelime, 12 H2, 10 SSS, kaynak listesi): en güçlü rakip. Princeton'ı doğru anlatıyor, GA4 regex veriyor (çapasız), robots.txt örneği var. Eksik: Google-Extended'in Search kontrolü olmadığı, AI Overviews tıklamalarının Search Console'da "Web" içinde ayrılamadığı, ölçümde tekrar sayısı/örnekleme ve formül, Türkçe pazara özgü gözlem.
- **simur**: alınamadı; dot.tr Akademi kısa sözlük sayfası.

## Doğrulanan kaynaklar
- Aggarwal vd., "GEO: Generative Engine Optimization" (arXiv 2311.09735, KDD 2024): en iyi yöntemlerle görünürlükte %40'a varan artış; alıntı ekleme, istatistik ekleme, kaynak gösterme en etkili; anahtar kelime doldurma temel düzeyin altında; Perplexity'de %37'ye varan artış; etkinlik alana göre değişiyor.
- Google Search Central "AI features and your website": AI Overviews/AI Mode için ek gereksinim yok; yeni makine okunur dosya, "AI metin dosyası" ya da özel şema gerekmiyor; query fan-out; trafik Search Console'da "Web" türünde; kontrol: nosnippet, data-nosnippet, max-snippet, noindex. Google-Extended Search kontrolü değil.
- OpenAI bot dokümanı: OAI-SearchBot = ChatGPT arama görünürlüğü; GPTBot = model eğitimi; ChatGPT-User = kullanıcı tetikli ziyaret; ayarlar bağımsız.

## Yazının farkı
- Kanıt düzeyine göre sıralı tablo (resmî doküman / araştırma / iddia).
- **Ölçülebilir panel**: soru × motor × tekrar, alıntılanma oranı ve alıntı payı formülü + sayısal örnek.
- Çapalı GA4 regex + özel kanal grubunda sıra kuralı; Search Console sınırı.
- Türkçe boşluk gözlemi (seo/aeo-geo-strategy.md, 23.10: "NRR nedir", "GA4 unassigned" Türkçe aramalarında yalnızca İngilizce kaynak).
- 30 günlük uygulama planı; sayfa düzeyinde "alıntılanabilir paragraf" örneği (önce/sonra).

## Yamyamlaşma
- llms.txt yazısı: llms.txt, robots.txt bot tablosu ve sunucu logu ölçümü orada → GEO yazısında kısa tutulup link verilir.
- llms.txt aracı: relatedToolKey=llms-txt ile yazıya otomatik link.
