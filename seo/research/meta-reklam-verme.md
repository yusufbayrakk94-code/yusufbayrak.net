# SERP / rakip analizi — "meta reklam verme" (30.10.2026)

Hedef sorgu: **meta reklam verme** (590/ay), **meta reklam** (4.400/ay) — Keyword Planner, 26.10.2026 (takvim).
Niyet: nasıl yapılır (adım adım kurulum) + bütçe. "meta reklam" genel/navigasyonel karışık; yazı "verme" niyetini hedefliyor.

## SERP (Türkçe arama, 30.10.2026)
1. Adapty dokümanı (uygulama tanıtımı, ürün dokümanı) — https://adapty.io/docs/tr/meta-create-campaign
2. Webrazzi 2022 — https://webrazzi.com/2022/05/13/isletmeler-icin-meta-reklam-rehberi/
3. Ticimax hedef kitle rehberi — https://www.ticimax.com/egitim/meta-reklamlariniz-icin-hedef-kitle-rehberi
4. IdeaSoft reklam kütüphanesi; BOEnstitü eğitim; Shopify TR piksel; braverytechnology (robots engelli, açılamadı)
Ek arama "instagram/facebook reklam verme 2026": ikas (instagramda-reklam-vermek), Ticimax (instagrama-reklam-nasil-verilir), IdeaSoft, Webtekno, ShiftDelete.

## İncelenen sayfalar
- **Webrazzi (2022)**: ≈600 kelime; bütçe hesabı, kampanya amaçları, öğrenme aşaması, piksel/CAPI, Advantage+ ve SSS yok; 2022 arayüzüne dayalı iddialar (3 vs 11 kampanya modeli).
- **ikas (25.07.2025, güncelleme 23.05.2026)**: ≈2.500 kelime, 10 adım + 14 SSS. Bütçe örneği yok (yalnızca "günlük 1 USD"), 2014/2019 istatistikleri güncel gibi sunulmuş, amaçlar 3 kategoriye indirgenmiş (Meta'nın 6 amacıyla uyuşmuyor), öğrenme aşaması / piksel-CAPI / Advantage+ yok; vergi SSS'leri çelişkili.
- **Ticimax (2020, değişiklik 10.2025)**: ≈700 kelime; "Power Editor" gibi eski arayüz adımları, bütçe rakamı yok, SSS yok, yazım hataları.

## Boşluk → bizim açımız
- Bütçeyi hedeften geriye hesaplama: katkı marjından başabaş ROAS ve maks. CPA → öğrenme aşaması için gereken haftalık bütçe (50 olay / 7 gün) → bütçe yetmiyorsa üst huni olay (ödeme başlatma) seçimi. Sayısal örnek (AOV 1.200 TL, %40 marj → başabaş ROAS 2,5; hedef CPA 360 TL; reklam seti başına ≈2.571 TL/gün; 700 TL/gün ile ≈13,6 satın alma vs ≈54 ödeme başlatma).
- B2B lead için maks. CPL hesabı (24.000 TL brüt kâr × %50 × %5 = 600 TL).
- Meta'nın 6 kampanya amacı ve hangisi ne zaman.
- Advantage+ kampanya deneyimi: 29.05.2025'te satış/uygulama kampanyalarına geldi; bütçe + kitle + yerleşim kaldıraçları; ASC/AAC eski akışının 2026 Q1 (v25.0) itibarıyla kaldırılması — Meta for Developers resmî blogu:
  https://developers.facebook.com/blog/post/2025/06/03/advantage-plus-campaign-experience-for-sales-and-app/
  https://developers.facebook.com/blog/post/2025/10/08/upcoming-asc-and-aac-mapi-deprecation-migration-options-to-advantage-plus/
- Piksel + Dönüşümler API birlikte (Meta önerisi), event_id + event_name ile 48 saat içinde tekilleştirme:
  https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events
- Öne çıkar (boost) vs Reklam Yöneticisi; ölçüm (UTM + GA4, Meta atıf farkı), ilk 14 gün kontrol listesi.
- Vergi/fatura konusuna GİRİLMEDİ (kullanıcı kısıtı); tutarlar "örnek tutarlar".
- Not: Meta yardım merkezi sayfaları (facebook.com/business/help) robots nedeniyle okunamadı; öğrenme aşaması eşiği (≈50 optimizasyon olayı / 7 gün, son önemli düzenlemeden sonra) yardım merkezi sayfasına bağlantıyla ve "yaklaşık" ifadesiyle verildi.

## Yamyamlaşma
Mevcut "Meta Ads öğrenme aşamasından çıkma" yazısı dar bir alt konu; yeni yazı öğrenme aşamasını bir bölümde özetleyip ona link veriyor. Reklam bütçesi yazısı genel (kanal bağımsız); yeni yazı Meta'ya özgü kurulum + olay hacmi açısında. relatedToolKey=ad-budget.
Hesaplar Python ile doğrulandı (30.10.2026).
