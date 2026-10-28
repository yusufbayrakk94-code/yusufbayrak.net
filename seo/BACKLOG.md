# SEO büyüme backlog'u — yusufbayrak.net

Günlük SEO görevi bu dosyayı okur, en üstteki uygun işi alır, bitince durumunu
günceller ve `seo/LOG.md`'ye kayıt düşer. Sıra, etki/çaba oranına göredir;
Search Console verisi geldikçe yeniden önceliklendirilir.

Kural: Connector (MCP bağlantısı) kullanılmaz; veri Search Console (servis hesabı/dışa aktarım), WebSearch ve WebFetch ile toplanır.
Kural: İçerik konularını Claude seçer (Search Console + SERP + gündem). seo/BRIEFS.md kullanıcının isteğe bağlı fikir kutusudur.
Kural: Hiçbir yazı veya sayfa SERP/rakip analizi yapılmadan girilmez. Analiz
notları `seo/research/<konu>.md` altına kaydedilir.

## Durum anahtarı
- [ ] yapılacak · [~] devam ediyor · [x] tamamlandı · [!] engelli (sebebiyle)

## Altyapı / veri
- [x] Search Console erişimi: kullanıcının masaüstü uygulamasındaki tarayıcı üzerinden (2026-10-22)
- [x] Dizine ekleme isteği gönderildi (10 URL: 2 yeni araç, ROAS yazısı/aracı, llms.txt, kanal quiz, AdGusto, CAC, LTV, churn, NRR) — 2026-10-22
- [x] 2026-10-23 kuyruğu: BF TR, GA4 Unassigned TR, Reklam bütçesi TR, UTM aracı TR, Reklam bütçesi EN zaten dizinde (26.10 URL Denetimi); /en/free-tools/utm-builder/ için istek gönderildi — 2026-10-26
- [x] Dizine ekleme isteği gönderildi: /blog/hedef-roas-nasil-belirlenir/, /en/blog/how-to-set-target-roas-google-ads/, /projeler/brandog-marka-mcp/, /en/blog/black-friday-2026-ad-plan/, /en/free-tools/utm-builder/ — 2026-10-26 (5/5)
- [x] Dizine ekleme isteği gönderildi: /blog/ltv-nedir-ltv-cac-orani/, /en/blog/what-is-ltv-ltv-cac-ratio/, /blog/utm-nedir-utm-parametreleri/, /en/blog/what-are-utm-parameters/, /en/free-tools/ltv-calculator/ — 2026-10-27 (5/5)
- [ ] Dizine ekleme isteği (27.10 itibarıyla "Keşfedildi" listesinde kalan EN araçlar): /en/free-tools/conversion-rate-calculator/, /en/free-tools/llms-txt-generator/, /en/free-tools/marketing-channel-quiz/, /en/free-tools/net-profit-margin-calculator/, /en/free-tools/saas-tools/ (utm-builder ve brandog projesi 26.10'da istendi; tarama bekleniyor)
- [ ] Dizine ekleme isteği (2026-10-27 yeni, ÖNCELİKLİ): /ucretsiz-araclar/desi-hesaplama/, /ucretsiz-araclar/roas-hesaplayici/ (yeniden yazıldı), /en/free-tools/dimensional-weight-calculator/, /en/free-tools/roas-calculator/, /en/blog/what-is-roas-how-to-calculate/ (güncellendi)
- [ ] Dizine ekleme isteği (2026-10-28 yeni): /blog/cac-nedir-musteri-edinme-maliyeti/, /blog/kar-marji-nasil-hesaplanir/, /en/blog/what-is-cac-customer-acquisition-cost/, /en/blog/how-to-calculate-profit-margin/
- [ ] Her gün yeni yayınlanan TR/EN yazılar (TR önce)
- [ ] "Tarandı - dizine eklenmedi" (24.10 taraması): /blog/ga4-unassigned-trafik-nedir-nasil-duzeltilir/, /blog/reklam-butcesi-nasil-belirlenir/, /en/blog/what-is-roas-how-to-calculate/ — 1 hafta izle; devam ederse içerik/iç link güçlendir (yeni yazılardan link ver)
- [ ] Keyword Planner: takvimin 23 Kas – 22 Ara bölümü için keşif + hacim turu (22.11'den önce; tüm mevcut konuların hacmi 26.10'da alındı)
- [ ] Marka sorgusu 'yusuf bayrak' ortalama 10. sırada: Person şeması, Hakkımda sayfası ve profil linkleriyle (LinkedIn/X → site) güçlendir
- [ ] EN sayfalar 50-90. sıralarda: EN için öncelik düşük, TR kümesine odaklan

## Teknik (rapor: seo/seo-technical-audit.md)
- [x] dist/server (SSR paketi + kopya sitemap/robots/llms) yayından çıkarıldı — 2026-10-23
- [x] Markalı, noindex'li 404.html — 2026-10-23
- [x] Rota bazlı kod bölme — 2026-10-23 (ana sayfa JS ~295 → ~126 KB gzip)
- [ ] Kod bölme v2: araç metinlerini (tr/en tools.ts) araç bazında böl; araç sayfaları için hafif blog-araç dizini (blogPosts yüklenmesin)
- [x] Search Console "Yeniden yönlendirme hatası" doğrulaması yeniden başlatıldı (9 URL beklemede) — 2026-10-23. Yönlendirmeli sayfa / Alternatif sayfa beklenen durum, doğrulama başlatılmadı.
- [ ] n8n diyagramını WebP'ye çevir

## Araçlar
- [x] Araç ↔ blog otomatik iç link (relatedToolKey ters eşleme) — 2026-10-22
- [x] CAC, LTV, churn sayfaları derinleştirildi + hesaplayıcılar geliştirildi — 2026-10-22
- [x] UTM oluşturucu: GA4 kanal tahmini + Unassigned uyarısı, küçük harf/ASCII, 12 hazır şablon, gclid uyarısı — 2026-10-23
- [ ] UTM v2: QR kod üretimi (harici servis/kütüphane gerektirir, kullanıcıya sor), toplu UTM (CSV), paylaşılabilir link
- [x] Destek yazısı: UTM — GA4 Unassigned yazısı + "UTM nedir" yazısı (/blog/utm-nedir-utm-parametreleri/) — 2026-10-27
- [ ] ARR sayfası: bileşenlerle ARR (yeni/genişleme/daralma/kayıp), CARR (düşük öncelik)
      (analiz: seo/research/arac-serp-analizi.md)
- [x] Yeni araç: Pazaryeri (Trendyol/Hepsiburada) kâr & komisyon hesaplayıcı — 2026-10-22
- [ ] Pazaryeri aracı v2: Trendyol vs Hepsiburada yan yana karşılaştırma, çoklu ürün (desi → takvimde ayrı araç, 28 Eki; "desi hesaplama" 14.800/ay)
- [x] Hacme göre başlık: Trendyol aracı "Trendyol Komisyon ve Kâr Hesaplama (+ Hepsiburada)" ("trendyol komisyon hesaplama" 18.100/ay); Brüt marj aracı "Kar Marjı Hesaplama: ..." ("kar marjı hesaplama" 1.000/ay) + kar marjı/markup SSS — 2026-10-26
- [ ] Destek yazısı: "Trendyol komisyon oranları ve kâr hesaplama" (aracı besleyen bilgi içeriği) — not: SERP çok kalabalık (ikas, Paraşüt, Sentos, Dopigo + 10+ araç sitesi); "kâr hesaplama örnekleri / iade ve reklam dahil net kâr" gibi uzun kuyruk açıyla gir
- [x] Yeni araç: Reklam bütçesi planlayıcı (e-ticaret + B2B modu) — 2026-10-22
- [x] Destek yazısı: "Reklam bütçesi nasıl belirlenir?" (relatedToolKey: ad-budget) — 2026-10-23
- [~] Paylaşılabilir sonuç linki (girdiler URL'de) — yeni 2 araçta var, eski araçlara yayılacak
- [ ] Sonucu e-postayla/PDF gönder (yumuşak lead yakalama)
- [x] Gömülebilir widget + backlink ("Bu aracı sitene ekle") — 2026-10-27 (ROAS, Reklam Bütçesi, Trendyol Kâr, Desi; TR + EN)
- [ ] Widget dağıtımı: e-ticaret/pazaryeri blogları, araç dizinleri, ajans kaynak sayfaları hedef listesi + teklif metni (kullanıcı gönderir)
- [ ] Araçlar arası akış (brüt marj → başabaş ROAS → bütçe planlayıcı)
- [ ] Yeni araç: Otomasyon ROI hesaplayıcı
- [ ] Yeni araçlar (GEO): AI crawler robots.txt kontrolü, FAQ/Schema JSON-LD oluşturucu
- [ ] Yeni araç: B2B lead skor kartı / ICP testi

## İçerik kümeleri (her araca bir "X nedir / nasıl hesaplanır" yazısı)
- [x] ROAS nedir, nasıl hesaplanır — 2026-10-22
- [x] NRR nedir (mevcut)
- [x] CAC nedir, nasıl hesaplanır — 2026-10-28 (/blog/cac-nedir-musteri-edinme-maliyeti/)
- [x] LTV nedir, nasıl hesaplanır — 2026-10-26 (/blog/ltv-nedir-ltv-cac-orani/)
- [ ] Churn rate nedir, nasıl hesaplanır
- [x] UTM parametreleri nedir, nasıl kullanılır — 2026-10-27 (/blog/utm-nedir-utm-parametreleri/)
- [x] Kar marjı nasıl hesaplanır (brüt/katkı/faaliyet, markup) — 2026-10-28 (/blog/kar-marji-nasil-hesaplanir/)
- [ ] CAC geri ödeme süresi nedir
- [ ] Rule of 40 nedir
- [ ] llms.txt nedir (GEO)

- [ ] Kasım sonrası: reklam bütçesi yazısındaki Black Friday bölümünü Aralık başında güncelle (evergreen kalmalı)

## AEO / GEO (plan: seo/aeo-geo-strategy.md)
- [x] JSON-LD URL tutarlılığı (sondaki "/"), BlogPosting/araç author-publisher → #person, profil görseli — 2026-10-23
- [x] Destek yazısı: "GA4 Unassigned trafik nedir, nasıl düzeltilir" — 2026-10-23 (/blog/ga4-unassigned-trafik-nedir-nasil-duzeltilir/)
- [ ] Araç sayfası metinlerini cevap-önce + soru başlığı standardına getir (ROAS, dönüşüm, brüt/net marj, MRR, ARPA)
- [ ] Araç sayfalarına görünür "Son güncelleme" + dateModified
- [ ] Person şeması: worksFor/founder (AdGusto, Brandog)
- [x] Sosyal profillerde (LinkedIn, X) yusufbayrak.net linki zaten ekli — kullanıcı teyidi, 2026-10-23
- [-] AdGusto/Brandog altbilgisinden yusufbayrak.net linki — kullanıcı istemedi (2026-10-23)
- [ ] Çeyreklik AI görünürlük testi (Ocak 2027)

## Backlink planı (hedef: 31.01.2027'ye kadar 10-15 kaliteli yönlendiren alan adı; ücretli link/PBN YOK)
- [x] Linklenebilir varlık 1 (2026-10-27): Gömülebilir araç widget'ı ("Bu aracı sitene ekle" + yusufbayrak.net atfı) — ROAS, reklam bütçesi, Trendyol kâr
- [ ] Linklenebilir varlık 2: "Türkiye'de B2B ve e-ticaret reklam maliyetleri 2026" özgün veri çalışması (metodoloji açık, alıntılanabilir tablolar)
- [ ] Linklenebilir varlık 3: İndirilebilir şablonlar (UTM takip tablosu, kampanya brief'i, ICP şablonu)
- [ ] Konuk yazı / uzman görüşü hedef listesi: Türkçe pazarlama ve e-ticaret yayınları (taslak yazıları Claude hazırlar, kullanıcı gönderir)
- [ ] Araç dizinleri ve listeler: ücretsiz pazarlama aracı derleme sayfaları, "free tools" listeleri (hedef listesi + başvuru metinleri)
- [ ] Topluluk: soru-cevap ve topluluklarda (LinkedIn, Reddit r/PPC, Indie Hackers) gerçekten faydalı cevaplarla araç linki — spam yok
- [ ] Yeni yazıların LinkedIn'de özetle paylaşımı (kullanıcı)
- [ ] Ölçüm: Search Console › Bağlantılar raporu (aylık)

## Otorite / dağıtım
- [ ] Türkiye B2B/e-ticaret reklam maliyetleri raporu (veri çalışması)
- [ ] İndirilebilir şablonlar (ICP, kampanya brief, UTM takip tablosu)
- [ ] Marka tescil sorgulama aracı fikri (Brandog/Marka-MCP) — kullanıcıyla değerlendir
