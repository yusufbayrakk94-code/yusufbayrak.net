# CTR nedir? — SERP ve rakip analizi (11.11.2026)

## Hedef sorgu ve hacim
- ctr nedir — 720/ay (Keyword Planner, 02.11; CONTENT_CALENDAR.md 10 Kas satırı)
- İkincil: tıklama oranı nedir, ctr hesaplama, iyi ctr kaç olmalı, ctr ne demek
- Talep kanıtı ayrıca: 10+ Türkçe site konuya sayfa ayırmış (ikas, T-Soft, Netlen, dijitalajanslar, camdalio, ansikloji, takipcihizmet, saitkatmerlikaya, Webtures sözlük, Uzman Posta CTOR karşılaştırması).
- Not: ABD merkezli WebSearch "ctr nedir" için kripto token (Creator/Centra) sonuçları döndürdü; Türkçe aramada niyet "tıklama oranı" — Türkçe "ctr nedir tıklama oranı" aramasında ilk 10'un tamamı pazarlama anlamında.

## İlk sonuçlar (Türkçe arama)
1. https://www.webtures.com/tr/blog/sozluk/ctr-nedir/ (fetch'te liste sayfasına düştü; içerik okunamadı)
2. https://www.tsoft.com.tr/blog/ctr-nedir-eticaret-tiklama-orani
3. https://www.netlen.com.tr/blog/ctr-tiklama-orani-nedir-ne-ise-yarar
4. https://ikas.com/tr/blog/ctr-nedir-nasil-artirilir
5. https://www.dijitalajanslar.com/ctr-nedir/
6. https://camdalio.com/ctr-nedir/
7. https://ansikloji.com/nedir/ctr/

## İncelenen 3 sayfa
- **ikas** (~6.000+ kelime, 9 H2, SSS 6): formül + 100 gösterim/5 tıklama örneği; Search Console'da site CTR'si = toplam tıklama ÷ toplam gösterim (ortalama değil) doğru. "İyi CTR" için yalnızca 1. sıra ≈ %22 (2023 verisi). Eksik: sıra bazlı eğri, CTR → TBM/CPM/CPA bağlantısı, reklam CTR benchmark rakamı yok; A/B testi örneklem önerisine alakasız sağlık raporu kaynak gösterilmiş; yoğun ürün tanıtımı.
- **dijitalajanslar** (~2.200 kelime, 10 H2, SSS 5): formül + 3 örnek; kanal bazlı "iyi CTR" tablosu (Arama %2–5, Display %0,3–1, Meta %0,8–1,6, e-posta %2–5, organik 1. sıra %25–35) ama **hiçbir kaynak yok**; e-posta CTR'yi açılana bölüyor (bu CTOR'dur); organik CTR'nin sıralamayı iyileştirdiği iddiası kaynaksız.
- **Webtures**: içerik çekilemedi (yalnızca dizin sayfası).

## Boşluklar → bizim açımız
1. Kaynaklı benchmark: LocaliQ/WordStream 2025 (Nisan 2024–Mart 2025, 16.000+ kampanya, 23 sektör, ağırlıkla ABD) arama reklamı ortalama CTR %6,66; Backlinko (Semrush/Search Console verisi, 4 milyon sonuç; 2019 çalışması, 2025 güncellemesi) organik 1. sıra %27,6, 1. sıra 10. sıradan ~10 kat; Pew (Mart 2025, 900 ABD'li yetişkin) AI özeti olan aramalarda link tıklaması %8, olmayanlarda %15. Hepsi ABD verisi uyarısıyla.
2. CTR'nin maliyet zinciri: TBM = BGBM ÷ (CTR × 1.000) ve EBM (CPA) = TBM ÷ dönüşüm oranı → sayısal örnek (BGBM 60 TL; CTR %0,8 → TBM 7,5 TL; %1,2 → 5 TL).
3. Search Console'da CTR'yi doğru okuma: ortalama sıra ile birlikte, sorgu+sayfa düzeyinde; marka sorgularını ayırma; AI Overviews'ın 'Web' içinde sayılması.
4. Google Ads'te CTR: Kalite Puanı'nın "beklenen TO" bileşeni; Google'ın CTR tanımı; Görüntülü Reklam Ağı/YouTube'da CTR yerine görüntülenme oranı.
5. CTR'nin yanıltıcı olduğu durumlar: clickbait, yüksek CTR + düşük dönüşüm, düşük CTR + yüksek ROAS.
6. E-posta: CTR (tıklama ÷ teslim edilen) vs CTOR (tıklama ÷ açılan) ayrımı (rakipte hatalı).

## Yamyamlaşma
- Mevcut yazılarda CTR geçiyor (Google Ads nedir, landing page, Meta) ama ayrı bir CTR sayfası yok. CPC nedir (12 Kas) yazısı ayrışacak: bu yazı oran, CPC yazısı maliyet.

## Kaynaklar
- Google Ads Yardım — Tıklama oranı (TO): https://support.google.com/google-ads/answer/2615875
- Google Ads Yardım — Kalite Puanı: https://support.google.com/google-ads/answer/6167118
- Search Console Yardım — Performans raporu: https://support.google.com/webmasters/answer/7576553
- LocaliQ/WordStream 2025 benchmark özeti (PPC Land): https://ppc.land/google-ads-costs-rise-12-88/
- Backlinko CTR istatistikleri: https://backlinko.com/google-ctr-stats
- Pew Research (22.07.2025): https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
