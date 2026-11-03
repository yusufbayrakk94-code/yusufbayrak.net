# SERP / rakip analizi — "kargo ücreti hesaplama" (03.11.2026)

Hedef sorgu: **kargo ücreti hesaplama** (9.900/ay), **kargo fiyat hesaplama** (3.600/ay) — Keyword Planner, 02.11.2026 (takvim).
Niyet: araç + "kaç lira tutar". Satıcı kesimi: teklif karşılaştırma, ücretsiz kargo eşiği.

## SERP (Türkçe, 03.11.2026)
1. IdeaSoft desi rehberi/aracı — https://www.ideasoft.com.tr/desi-nasil-hesaplanir/
2. ikas Kargo Ücreti Hesaplama — https://ikas.com/tr/kargo-ucreti-hesaplama
3. kobitime desi aracı — https://kobitime.com/desi-hesaplama-araci/
4. DHL teklif sayfası (yurt dışı) — https://www.dhl.com/discover/tr-tr/ship-with-dhl/services/get-a-rate-quote-and-transit-time
5. FedEx yurt içi fiyat PDF; SeaRates; Basit Kargo (Shopify)
"kargo fiyat hesaplama desi tarife 2026": ikas, IdeaSoft, Paraşüt, karekod, Dopigo, Sentos, kargonomi.

## İncelenen sayfalar
- **ikas**: ≈1.300 kelime, 14 SSS. Girdi yalnızca en/boy/yükseklik; ağırlık, hat, hizmet ve firma yok; örnek çıktı ve sayısal örnek yok; "yasal limit" tutarı yok; kampanya odaklı.
- **Dopigo (07.2026)**: ≈900 kelime; ek maliyetleri sayar (posta bedeli ≈%2,35, SMS, ağır kargo, dağıtım dışı alan, iade), tutar ve araç mantığı yok, kaynaksız "46 TL", "%40" iddiaları.
- **Sentos Yurtiçi (14.09.2026)**: firma tablosu, mesafe sütunları, bazı ek hizmetler; karşılaştırma ve kâr bağlantısı yok; hat tanımlarında tutarsızlık. Kısa sürede eskir.
- **kargorehberi PTT (21.07.2026)**: bireysel liste; iki kademe (il içi/iller arası).
- **IdeaSoft fiyat yazısı**: site açılmadı (client_error), SERP başlığından fiyat listesi yazısı olduğu görüldü.

## Boşluk → bizim açımız
1. Kullanıcının kendi tarifesiyle çalışan kademe tablosu (rakipler ya ölçü alıyor ya statik liste veriyor). Fiyat listesi yazılmadı (takvim kuralı, hızlı eskime).
2. 3 tarife/teklif yan yana + aylık fark.
3. En ucuz firma desiye göre değişir (8 desi B, 15 desi A) — ürün karması mantığı hiçbir rakipte yok.
4. Kademe analizi: bir alt kademe tasarrufu ve gereken yükseklik; son kademe üstü + ek birim.
5. Satıcı bloğu: kargo/sepet, kargo sonrası kâr, ücretsiz kargo eşiği formülü (rakiplerde yok).
6. Paylaşılabilir link, gömülebilir widget.

## Resmî kaynaklar
- Yurtiçi Kargo ücret rehberi (hatlar, 0,50 yuvarlama, %2,35 posta hizmet bedeli, 6475 sayılı Kanun): https://www.yurticikargo.com/en/shipping-guides/how-is-the-shipping-cost-calculated
- FedEx ek ücret türleri: https://www.fedex.com/tr-tr/how-to/calculate-costs/what-extra-charges-can-be-added.html

## Kısıtlar
- VERGİ: rakiplerdeki KDV açıklamaları eklenmedi; %2,35 kargo faturası kalemi olarak geçer.
- Yamyamlaşma: Desi aracının başlığı/açıklaması "kargo ücreti" ifadesinden temizlendi ("Desi Hesaplama: Kargo Desi Hesaplama Aracı"); URL aynı. Desi = "kaç desi", yeni araç = "kaç TL, hangi teklif". İki araç karşılıklı bağlı.
- Örnek tarifeler gerçek firma değildir, sayfada açıkça yazıyor.
Playwright testi 03.11.2026: 40×30×20, 3 kg → 8 desi; A 189,35, B 168,88; fark 20,47; sepet 600/%30/60 → %28,1, 11,12 TL, eşik 762,93; 500 gönderi fark 10.235; son kademe üstü, ağırlık engeli; paylaşılabilir link; EN; embed; 390 px taşma yok.
