# SERP / rakip analizi — "roi nedir" (06.11.2026)

Hedef sorgu: **roi nedir** (1.600/ay), **roi hesaplama** (140/ay) — Keyword Planner 02.11.2026; takvimde 7 Kas, bugüne öne alındı (günde 2 sayfa).
Niyet: tanım + formül + örnek. SERP finans/yatırım ve pazarlama karışık.

## SERP (Türkçe, 06.11.2026)
1. multinet — https://multinet.com.tr/blog/inovasyon-girisimcilik/roi-nedir-nasil-hesaplanir
2. İş Portföy — https://www.isportfoy.com.tr/medya-ve-blog/yatirim-getirisi-roi-nedir-nasil-hesaplanir
3. eleman.net — https://www.eleman.net/is-rehberi/nedir/roi-nedir-ve-nasil-hesaplanir-h8001
4. IdeaSoft — https://www.ideasoft.com.tr/roi-nedir-nasil-hesaplanir/ (okunamadı)
5. Garanti BBVA Yatırım — https://www.garantibbvayatirim.com.tr/blog/finansal-okuryazarlik/roi-hesaplama-nedir
6. Ticimax — https://www.ticimax.com/blog/roi-nedir-roi-nasil-hesaplanir
7. kontentino, appmaster, indigodergisi, plisio, tangem
Talep: Planner 1.600 + 10+ Türkçe sayfa.

## İncelenen sayfalar
- **Ticimax** (10.03.2021, güncelleme 05.11.2025, ~1.100 kelime): formül bozuk ("Gelir – Yatırım Masrafı: Yatırım Masrafı"), yüzde dediği halde "1'in üzerinde" eşiği; gelir mi kâr mı belirsiz; sayısal örnek yok; ROAS farkı yok; yıllıklandırma yok; SSS yok.
- **İş Portföy** (19.11.2024, ~1.200 kelime): formül ve 3 örnek doğru; yatırımcı odaklı; ROAS yok, pazarlama yok, yıllıklandırma yok (293 günlük örnekte yıllık getiri gösterilmiyor), SSS yok.
- **IdeaSoft**: içerik alınamadı.
- ClickUp TR (KPI analizinden): %400 ROI'yi "1 $ için 4 $ kazanç" diye yanlış okuyor (net kazanç 4 $, brüt 5 $).

## Boşluk → bizim açımız
1. Pazarlama ROI'sinde getiri = brüt kâr (ciro değil): 60.000 TL maliyet, 250.000 TL ciro, %40 marj → ROI %66,7; ciroyla yanlış hesap %316,7.
2. ROI ↔ ROAS: yalnızca reklam maliyetinde ROI = ROAS × marj − 1 (5 × 0,4 − 1 = %100); başabaş ROAS = 1/marj = 2,5; hedef ROI %50 → ROAS 3,75.
3. Zaman: 6 ayda %30 → yıllık (1,3)² − 1 = %69; geri ödeme süresi.
4. İlk sipariş vs LTV ROI: CAC 600, ilk sipariş brüt kâr 480 → %−20; 12 ay brüt kâr 1.200 → %100.
5. Artımsallık: satışların %40'ı kampanyasız da gelecekse → artımsal ciro 150.000, ROI %0.
6. Yazılım/otomasyon ROI: 80.000 TL maliyet, 10 saat/hafta × 52 × 400 TL = 208.000 TL → %160 (zaman tasarrufu nakde dönmezse uyarısı).
7. Vergi yorumu yok (kullanıcı kısıtı); tutarlar örnek. Hesaplar Python ile doğrulandı.

## Yamyamlaşma
ROAS yazısında tek SSS (ROAS vs ROI) var; ROI yazısı ROI'nin kendisini ve pazarlama/yatırım hesaplarını işler, ROAS yazısına link verir. ROAS aracı relatedToolKey.

## 07.11.2026 yeniden kontrol
Türkçe SERP aynı (multinet, İş Portföy, eleman.net, IdeaSoft, Garanti BBVA Yatırım, multinet, kontentino, appmaster, indigodergisi, Ticimax, plisio, tangem). Yayınlandı: /blog/roi-nedir-nasil-hesaplanir/ + /en/blog/what-is-roi-how-to-calculate/. Ek açı: ROI vs geri dönüş katsayısı (Ticimax'ın "1'in üzerinde" karışıklığı), %100 ROI'nin doğru okunması (ClickUp hatası), hedef ROI → hedef ROAS formülü. Ayrı ROI aracı açılmadı (ROAS aracı ve Reklam Bütçesi aracı hedef ROI → ROAS dönüşümünü karşılıyor; yamyamlaşma riski).
