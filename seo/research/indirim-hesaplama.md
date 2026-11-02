# SERP / rakip analizi — "indirim hesaplama" (02.11.2026)

Hedef sorgu: **indirim hesaplama** (49.500/ay, Keyword Planner 02.11.2026; takvimde 3 Kas ilk satır, öne alındı). Sitenin en yüksek hacimli konusu. Black Friday: 27 Kas.
Niyet: büyük çoğunluk tüketici/hızlı yüzde hesabı; küçük ama değerli kesim satıcı. Araç ilk ekranda tüketici hesabını çözer, satıcı bloğu altta durur.

## SERP (Türkçe, 02.11.2026)
1. Ofix — https://www.ofix.com/araclar/indirim-hesaplama
2. hesaplama.net — https://indirim.hesaplama.net/
3. Avansas Blog — https://www.avansas.com/blog/iskonto-nedir-nasil-hesaplanir-indirim-hesaplama
4. Kargopek — https://kargopek.com/pages/indirim-hesaplama
5. hesapca — https://hesapca.net/indirim-hesaplama/
6. inurdemirel — https://www.inurdemirel.com/indirim-hesaplama
7. hesaplat, kolayhesapla; ayrıca bloomberght, turkcell blog, gazetevatan araçları

## İncelenen sayfalar
- **Ofix**: 2 mod (fiyat/oran), ~300 kelime, 2 SSS; ardışık indirim, kâr etkisi yok.
- **hesaplama.net**: 3 mod, ~400 kelime; SSS yok, ardışık ve kâr yok.
- **Kargopek**: 3 mod, ~1.500 kelime; %5–80 için tekrar eden örnekler, SSS yok, ardışık/kâr yok.
- **hesapca**: 3 mod + tek ek sepet indirimi, ~1.100 kelime, 5 SSS; "ardışık indirimler toplanmaz" iyi, kâr hesabı yok, X al Y öde yok.
- **inurdemirel**: çoklu iskonto, hazır oranlar, ~1.300 kelime; kâr yok, SSS cevapları metinde yok.

## Boşluk → bizim açımız
1. 4 mod tek araçta: indirimli fiyat, oran, eski fiyat, X al Y öde (rakiplerin hiçbirinde X al Y öde yok).
2. Üst üste 3 kademe indirim + toplam etkin oran.
3. Satıcı bloğu (rakiplerin hiçbirinde yok): birim kâr önce/sonra, gerekli satış artışı (adet), başabaş indirim (komisyonlu), indirimli başabaş ROAS, hazır oran tablosunda kâr + gerekli artış.
4. Hazır oran tablosu, paylaşılabilir link, gömülebilir widget.
5. İçerik: eski fiyat hatası (+%20 → 720), geri zam (%25), marj × indirim tablosu, 30 gün en düşük fiyat kuralı (Black Friday yazısındaki kaynaklı bilgi), iskonto.

## Kısıtlar
- VERGİ: rakiplerin KDV bölümleri bilerek eklenmedi.
- Yamyamlaşma: site içinde indirim aracı yok. Black Friday yazısı ve kar marjı yazısındaki indirim bölümleri araca bağlandı; araç "indirim hesaplama", yazılar kampanya planı.
- Widget: EMBEDDABLE_TOOLS'a eklendi (/embed/indirim-hesaplama/, noindex). Mevcut desene uygun, küçük değişiklik.
Playwright testi 02.11.2026: 1.200/%25 → 900; 750→600 %20; 600/%20 → 750; 1.000 %20+%10 sınaması; 300×3/2 → 600, %33,33; 1.000/%20/600 maliyet → 400→200, %100, maks. %40, ROAS 2,5→4; zam uyarısı; paylaşılabilir link; 390 px taşma yok; konsol hatası yok.
