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
- [ ] Kalan: /projeler/brandog-marka-mcp/ ve EN araç sayfaları için dizine ekleme isteği
- [ ] Marka sorgusu 'yusuf bayrak' ortalama 10. sırada: Person şeması, Hakkımda sayfası ve profil linkleriyle (LinkedIn/X → site) güçlendir
- [ ] EN sayfalar 50-90. sıralarda: EN için öncelik düşük, TR kümesine odaklan

## Araçlar
- [x] Araç ↔ blog otomatik iç link (relatedToolKey ters eşleme) — 2026-10-22
- [x] CAC, LTV, churn sayfaları derinleştirildi + hesaplayıcılar geliştirildi — 2026-10-22
- [ ] UTM oluşturucu: GA4 kanal eşleme + Unassigned uyarısı, küçük harf, TR şablonları, QR, gclid uyarısı
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

## Otorite / dağıtım
- [ ] Türkiye B2B/e-ticaret reklam maliyetleri raporu (veri çalışması)
- [ ] İndirilebilir şablonlar (ICP, kampanya brief, UTM takip tablosu)
- [ ] Marka tescil sorgulama aracı fikri (Brandog/Marka-MCP) — kullanıcıyla değerlendir
