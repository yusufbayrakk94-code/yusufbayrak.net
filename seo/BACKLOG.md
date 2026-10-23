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
- [ ] Dizine ekleme isteği (kota açılınca): /blog/reklam-butcesi-nasil-belirlenir/, /ucretsiz-araclar/utm-link-olusturucu/, /en/blog/how-to-set-advertising-budget/, /en/free-tools/utm-builder/ (2026-10-23 kota aşıldı)
- [ ] Kalan: /projeler/brandog-marka-mcp/ ve EN araç sayfaları için dizine ekleme isteği
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
- [ ] Destek yazısı: "UTM parametreleri nedir, GA4 Unassigned nasıl düzelir" (relatedToolKey: utm)
- [ ] ARR sayfası: bileşenlerle ARR (yeni/genişleme/daralma/kayıp), CARR (düşük öncelik)
      (analiz: seo/research/arac-serp-analizi.md)
- [x] Yeni araç: Pazaryeri (Trendyol/Hepsiburada) kâr & komisyon hesaplayıcı — 2026-10-22
- [ ] Pazaryeri aracı v2: Trendyol vs Hepsiburada yan yana karşılaştırma, desi→kargo yardımcısı, çoklu ürün
- [ ] Destek yazısı: "Trendyol komisyon oranları ve kâr hesaplama" (aracı besleyen bilgi içeriği) — not: SERP çok kalabalık (ikas, Paraşüt, Sentos, Dopigo + 10+ araç sitesi); "kâr hesaplama örnekleri / iade ve reklam dahil net kâr" gibi uzun kuyruk açıyla gir
- [x] Yeni araç: Reklam bütçesi planlayıcı (e-ticaret + B2B modu) — 2026-10-22
- [x] Destek yazısı: "Reklam bütçesi nasıl belirlenir?" (relatedToolKey: ad-budget) — 2026-10-23
- [~] Paylaşılabilir sonuç linki (girdiler URL'de) — yeni 2 araçta var, eski araçlara yayılacak
- [ ] Sonucu e-postayla/PDF gönder (yumuşak lead yakalama)
- [ ] Gömülebilir widget + backlink ("Bu aracı sitene ekle")
- [ ] Araçlar arası akış (brüt marj → başabaş ROAS → bütçe planlayıcı)
- [ ] Yeni araç: Otomasyon ROI hesaplayıcı
- [ ] Yeni araçlar (GEO): AI crawler robots.txt kontrolü, FAQ/Schema JSON-LD oluşturucu
- [ ] Yeni araç: B2B lead skor kartı / ICP testi

## İçerik kümeleri (her araca bir "X nedir / nasıl hesaplanır" yazısı)
- [x] ROAS nedir, nasıl hesaplanır — 2026-10-22
- [x] NRR nedir (mevcut)
- [ ] CAC nedir, nasıl hesaplanır
- [ ] LTV nedir, nasıl hesaplanır
- [ ] Churn rate nedir, nasıl hesaplanır
- [ ] UTM parametreleri nedir, nasıl kullanılır
- [ ] Brüt kâr marjı / net kâr marjı hesaplama
- [ ] CAC geri ödeme süresi nedir
- [ ] Rule of 40 nedir
- [ ] llms.txt nedir (GEO)

- [ ] Kasım sonrası: reklam bütçesi yazısındaki Black Friday bölümünü Aralık başında güncelle (evergreen kalmalı)

## AEO / GEO (plan: seo/aeo-geo-strategy.md)
- [x] JSON-LD URL tutarlılığı (sondaki "/"), BlogPosting/araç author-publisher → #person, profil görseli — 2026-10-23
- [ ] Destek yazısı: "GA4 Unassigned trafik nedir, nasıl düzeltilir" (Türkçe SERP'te hiç Türkçe sonuç yok) — UTM destek yazısıyla birleştir
- [ ] Araç sayfası metinlerini cevap-önce + soru başlığı standardına getir (ROAS, dönüşüm, brüt/net marj, MRR, ARPA)
- [ ] Araç sayfalarına görünür "Son güncelleme" + dateModified
- [ ] Person şeması: worksFor/founder (AdGusto, Brandog)
- [ ] Kullanıcı aksiyonu: sosyal profillerde ve adgusto.app/Brandog'da yusufbayrak.net linki
- [ ] Çeyreklik AI görünürlük testi (Ocak 2027)

## Otorite / dağıtım
- [ ] Türkiye B2B/e-ticaret reklam maliyetleri raporu (veri çalışması)
- [ ] İndirilebilir şablonlar (ICP, kampanya brief, UTM takip tablosu)
- [ ] Marka tescil sorgulama aracı fikri (Brandog/Marka-MCP) — kullanıcıyla değerlendir
