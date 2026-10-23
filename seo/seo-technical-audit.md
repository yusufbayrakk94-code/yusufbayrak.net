# Teknik SEO denetimi — yusufbayrak.net (2026-10-23)

## 1. Kapsam ve yöntem
- Tüm site (108 HTML çıktısı: 86 prerender rota + 22 eski URL yönlendirme sayfası).
- `npm run build` çıktısı (dist/) üzerinde özel tarayıcı betiği: durum, canonical, noindex, başlık/açıklama, H1, iç linkler, sitemap tutarlılığı, yetim sayfalar, JSON-LD.
- Search Console: Dizin oluşturma raporu ve "Yeniden yönlendirme hatası" listesi (yerleşik tarayıcı ile).
- Sınır: Bu ortamdan canlı siteye HTTP isteği atılamıyor; HTTP başlıkları (HSTS vb.) ve Core Web Vitals sahada ölçülemedi (Search Console'da CWV için henüz veri yok).

## 2. Yönetici özeti
1. **Taranabilirlik ve dizine eklenebilirlik temiz.** Kırık iç link yok, sondaki "/" olmayan iç link yok, sitemap'teki 85 URL'nin tamamı 200 + kendine canonical; sitemap'te noindex veya yönlendirme yok; yetim sayfa yok (stil rehberi hariç, o da noindex).
2. **Search Console'daki "Yeniden yönlendirme hatası" (9 URL) eski taramalardan.** Örnek: /en, /hakkimda, /ucretsiz-araclar/nrr-hesaplayici — son tarama Ağustos başı, yani sondaki "/" düzeltmesinden önce. Bugünkü yapıda bu URL'ler hosting tarafından tek adımda "/"lu sürüme 301 ediliyor. Düzeltilmesi gereken bir şey kalmadı; Search Console'da "Düzeltmeyi doğrula" ile yeniden doğrulama başlatılmalı (kullanıcı aksiyonu).
3. **Düzeltildi — sunucu paketi herkese açık yayınlanıyordu.** dist/server/ (entry-server.js ile sitemap.xml, robots.txt, llms.txt kopyaları) GitHub Pages'e yükleniyordu: gereksiz tarama yüzeyi ve kopya dosyalar. Artık derleme sonunda siliniyor.
4. **Düzeltildi — 404 sayfası yoktu.** Bilinmeyen URL'lerde GitHub'ın jenerik 404'ü çıkıyordu. Artık markalı, noindex'li dist/404.html üretiliyor (gerçek 404 durum koduyla sunulur, site içi linkler içerir).
5. **Önemli — tek JavaScript paketi ~970 KB (gzip ~300 KB).** Her sayfa tüm araçları ve tüm blog içeriğini indiriyor. HTML önceden üretildiği için içerik görünürlüğü etkilenmiyor, ancak mobilde etkileşim (INP) ve ana iş parçacığı yükü için risk. Rota bazlı kod bölme önerilir (aşağıda).

## 3. 6 katman puanı (1-5)

| Katman | Puan | Not |
|---|---|---|
| 1. Taranabilirlik | 5 | robots.txt doğru, sitemap robots.txt'de, CSS/JS engeli yok. |
| 2. Dizine eklenebilirlik | 5 | Tek canonical, ?tag= filtreleri noindex,follow, yönlendirme sayfaları noindex + canonical. |
| 3. Render | 5 | Tüm rotalar SSG ile HTML olarak üretiliyor, hydrateRoot ile canlanıyor. |
| 4. Site mimarisi | 4 | Hub → kategori → araç, blog ↔ araç otomatik iç link; breadcrumb şemalı. Eksik: 404 sayfası (düzeltildi). |
| 5. Yapısal veri | 5 | 2026-10-23'te URL tutarlılığı ve #person bağlantıları düzeltildi (bkz. aeo-geo-strategy.md). |
| 6. Sayfa deneyimi / güvenlik | 3 | HTTPS (GitHub Pages). JS paketi büyük; CWV saha verisi yok; HSTS doğrulanamadı. |

## 4. Kritik sorunlar
Yok.

## 5. Önemli sorunlar
- **Kod bölme yok (JS ~300 KB gzip).** Öneri: blog yazı içerikleri ve araç sayfaları için `React.lazy` + rota bazlı chunk; SSG ile uyum için hydrate öncesi mevcut rotanın chunk'ını önceden yüklemek (`await import(...)` sonra `hydrateRoot`). Blog verisi (blogPosts.ts, tüm yazılar tek dosyada) ayrıca yazı başına bölünebilir. Mimari değişiklik olduğundan ayrı bir iş olarak, ölçüm (Lighthouse önce/sonra) ile yapılmalı.
- **Search Console doğrulamaları "Başarısız" durumda** (Yönlendirmeli sayfa, Yeniden yönlendirme hatası, Alternatif sayfa). Kodda düzeltildi; doğrulamayı yeniden başlatmak kullanıcı aksiyonu.

## 6. İyileştirme (polish)
- /projeler/adgusto/ açıklaması 164 karakter (adgusto.app ile birebir tutulması bilinçli tercih; SERP'te sondan birkaç karakter kesilebilir).
- Araç sayfalarına dateModified ve görünür güncelleme tarihi (AEO planında da var).
- Görseller: n8n diyagramı 71 KB JPG — WebP/AVIF ile ~%50 küçülebilir.

## 7. Uygulama sırası
1. [x] dist/server'ı yayından çıkar (2026-10-23)
2. [x] Markalı, noindex'li 404.html (2026-10-23)
3. [ ] Kullanıcı: Search Console'da üç başarısız doğrulamayı yeniden başlat
4. [x] Rota bazlı kod bölme (2026-10-23): sayfa başına JS (gzip) ana sayfa ~295 → ~126 KB, blog ~295 → ~197 KB, araçlar ~295 → ~261 KB. Sonraki adım: araç metinlerini dil/araç bazında bölmek ve araç sayfalarının blog verisini yüklemesini önlemek (hafif yazı-araç dizini).
5. [ ] Görsel optimizasyonu, dateModified
