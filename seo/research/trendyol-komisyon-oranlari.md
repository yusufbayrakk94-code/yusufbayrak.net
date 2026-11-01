# SERP / rakip analizi — "trendyol komisyon oranları" (01.11.2026)

Hedef sorgu: **trendyol komisyon oranları** (2.900/ay), **komisyon hesaplama trendyol** (480/ay) — Keyword Planner, 26.10.2026 (takvim, 6 Kas satırı; 01.11'de öne alındı).
Destek: trendyol komisyon hesaplama (18.100/ay) → araç sayfası hedefliyor; yazı araca iç link verir, araç yazıya relatedPost ile döner.
Niyet: bilgi + hesap (kategori oranı ne, kesinti nasıl hesaplanır, kârıma ne kalır).

## SERP (Türkçe, 01.11.2026)
1. IdeaSoft — https://www.ideasoft.com.tr/trendyol-komisyon-oranlari/ (WebFetch: site hatası, açılamadı)
2. BirFatura — https://birfatura.com/trendyol-komisyonu-nedir/
3. Paraşüt — https://www.parasut.com/blog/trendyol-magaza-komisyon-oranlari
4. Dopigo — https://www.dopigo.com/trendyol-komisyon-oranlari-ne-kadar/
5. sellbox — https://sellbox.tr/trendyol-komisyon-hesaplama (araç)
6. Fikri — https://www.fikri-ai.com.tr/blog/trendyol-komisyon-oranlari-2026
7. beekod, buyboxla, stokoloji, emparator (araç/liste)
Talep kanıtı: 10+ Türkçe site konuya sayfa ayırmış + Planner hacmi.

## İncelenen sayfalar
- **BirFatura** (2021, güncelleme 17.07.2026; ~1.100 kelime): kategori tablosu; özet "%3–28" ama tabloda %3 yok; elektronik özette %5–11, tabloda %5–28 (çelişki); kaynak yok; tek örnek (600 TL), kargo sayısal değil.
- **Paraşüt** (01.07.2026; ~3.000 kelime, 11 SSS): oranlar "14 Ocak 2026" tarihli; aynı yazıda giyim için üç farklı aralık (21,5–22,5 / 17–20 / 15–25); barem eşikleri eski (150/300 TL); resmî Trendyol linki yok; SSS'de 2025 ifadesi.
- **Fikri** (16.07.2026; ~1.000 kelime): "yaklaşık" tablo (giyim %18 — diğer listelerden farklı esas); hizmet bedeli "~8 TL" / örnekte 7,99; barem 200/350 eşikleri doğru ama tutarlar belirsiz; SSS yok; resmî kaynak yok.
- Ek: webosentez (30.09.2026 kaynak taraması) — hizmet bedeli gönderi başı 10,99 TL (+vergi), "Bugün Kargoda" koşulunda daha düşük; komisyon tablosu satıcı panelinde (Ticari Şartlar › Komisyon ve Vade Tablosu); akademi.trendyol.com linkleri veriyor. ezv.com.tr: 10.08.2026 Trendyol/TEX/PTT tarifesi (barem 0–199,99 / 200–349,99; desi kademeleri). X (Gökhan Tanrıverdi, arama özeti): 26.03.2026'dan itibaren barem eşikleri 150→200 TL ve 300→350 TL.
- Resmî Trendyol Satıcı Bilgi Merkezi sayfaları (akademi.trendyol.com) JS ile yüklendiği için WebFetch ile okunamadı → yazıda kesin "resmî oran" verilmedi; resmî sayfaya link + "panelden doğrula" ilkesi.

## Boşluk → bizim açımız
1. Neden listeler birbirini tutmuyor: aynı kategori için 3 kaynakta 3 farklı değer (yan yana gösterim) + tarih/esas farkı; tek doğru kaynak satıcı paneli.
2. Komisyon hesabı + tüm kesintiler tek formülde: Kesinti = Fiyat × oran + kargo + hizmet bedeli; komisyon dışı sabit kesintilerin düşük fiyatlı üründe etkisi (300 TL tişört %48 vs 15.000 TL telefon %6,6).
3. Barem eşiği tuzağı: 205 TL → 199,90 TL'ye inmek sipariş başı kârı 0,55 TL'den 28,19 TL'ye çıkarıyor; 345 → 355 TL'de desi tarifesine geçince hakediş 35,39 TL düşüyor. Rakiplerde hesaplanmış örnek yok.
4. Başabaş satış fiyatı formülü: P = (maliyet + kargo + hizmet + paket) / (1 − oran) ve hedef marjlı fiyat.
5. Komisyon indirimli kampanya teklifini değerlendirme: 600 TL/%20 vs 540 TL/%16 → aynı kârı yakalamak için %43,5 daha fazla satış.
6. İade: komisyon iade (kaynaklarda), kargo satıcıda → sipariş başına dağıtım.
7. VERGİ KISITI: KDV/stopaj hesabı yapılmadı; tutarlar "örnek tutarlar". Vergi detayı yalnızca araca bırakıldı.

## Yamyamlaşma
Trendyol Kâr aracı "trendyol komisyon/kar hesaplama" (işlem niyeti) hedefliyor; yazı "komisyon oranları" (bilgi) + barem/kampanya/iade senaryoları. Aracın relatedPost'u ROAS yazısından bu yazıya çevrildi (TR+EN). relatedToolKey=marketplace.
Hesaplar Python ile doğrulandı (01.11.2026).
