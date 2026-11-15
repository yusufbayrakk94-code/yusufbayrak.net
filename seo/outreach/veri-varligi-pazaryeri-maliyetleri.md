# D3 — Veri varlığı: "Türkiye pazaryeri komisyon ve kargo maliyetleri 2026" (taslak v0, 15.11.2026)

Durum: veri toplama + yöntem + ilk özgün tablo hazır. Sayfa henüz yayında değil; yayın, takvimde bir günün "yeni sayfası" olarak (blog yazısı biçiminde, /blog/pazaryeri-komisyon-kargo-maliyetleri-2026/ önerisi) yapılacak — öneri: 22–23 Kas haftası, E-ticaret kârlılık rehberi hub'ından önce ya da hub'la birlikte (hub bu sayfaya link verir).
Kural: vergi yok (KDV/stopaj hesabı, yorumu yok; tüm tutarlar "KDV hariç, örnek tutarlar"). Ham Search Console verisi yok.

## Neden linklenebilir?
- Rakip listeler (Paraşüt, BirFatura, IdeaSoft, Ticimax) tek pazaryerine odaklı, tarihleri karışık ve birbirini tutmuyor (Trendyol giyim için aynı yazıda 3 farklı aralık; Hepsiburada hizmet bedeli için 10,50 / 10,99 / 11,40 TL). Gazeteciler, ajanslar ve e-ticaret yazarları "tek tabloda, tarihli ve kaynaklı" karşılaştırmaya link verir.
- Özgün katkı: **sabit giderin fiyat içindeki payı** (komisyon dışı kargo + hizmet bedeli) fiyat noktası bazında; bu tablo başka yerde yok.

## Yöntem
1. Yalnızca kamuya açık ve tarihli kaynak; her satırda kaynak + tarih + güven (Yüksek: resmî sayfa/PDF · Orta: 2+ bağımsız sektör kaynağı aynı rakam · Düşük: tek kaynak ya da 6 aydan eski).
2. Komisyon için kesin oran iddiası yok: "kamuya açık listelerde görülen aralık" + "kesin oran satıcı panelinde".
3. Sabit giderler (kargo baremi, hizmet bedeli) örnek fiyat noktalarında hesaplanır (Python ile doğrulanır).
4. Ayda bir güncelleme; sayfada "son kontrol" tarihi ve değişiklik günlüğü.

## Veri tablosu v0

### A. Sabit kesintiler
| Pazaryeri | Hizmet / işlem bedeli | Kargo modeli | Barem (sabit kargo) | Kaynak, tarih | Güven |
|---|---|---|---|---|---|
| Trendyol | 10,99 TL / gönderi ("Bugün Kargoda" koşulunda daha düşük) | Anlaşmalı kargo; 350 TL üstü desi tarifesi | 0–199,99 TL: 38,74 TL · 200–349,99 TL: 70,41 TL (Trendyol Express, 1 gün; 26.03.2026'dan beri eşikler 200/350) | webosentez 30.09.2026; ezv.com.tr 10.08.2026 tarifesi; seo/research/trendyol-komisyon-oranlari.md | Orta |
| Hepsiburada | 10,99 TL / teslimat (21.09.2026'dan beri barem içinde de) | Anlaşmalı kargo; 400 TL üstü desi tarifesi | 0–199,99 TL: 43,99 TL · 200–399,99 TL: 75,99 TL (HepsiJET/Sürat, 0–1 gün, %90 zamanında) | ezv.com.tr 21.08 ve 30.09.2026; kargonomi 22.10.2026; seo/research/hepsiburada-kar-hesaplama.md | Orta |
| n11 | Pazarlama katkı payı (örnekte %0,92) + hizmet bedeli (tutar kamuya açık değil) | — | Kamuya açık veri bulunamadı | BirFatura 16.10.2026 (oranlar 14.10.2026, "tahmini"); resmî: magazadestek.n11.com/s/komisyon-oranlari | Düşük |
| Amazon.com.tr | Kampanya: yeni satıcıya 2 milyon TL satışa kadar %1 satış komisyonu (kayıttan 90 gün; 30.09–31.12.2026), Sponsorlu Ürünler için 4.000 TL reklam kredisi | FBA (Amazon Lojistik) veya satıcı gönderimi | — | foreks.com 07.10.2026 (Amazon Türkiye duyurusu) | Orta (duyuru haberi) |
| Çiçeksepeti | Doğrulanacak | Doğrulanacak | — | ideasoft / zunapro sayfaları 15.11'de açılmadı → sonraki tur | — |
| Pazarama | Doğrulanacak | Doğrulanacak | — | Ticimax listesi 22.07.2024 (eski) → kullanılmayacak | Düşük |

### B. Komisyon aralıkları (kamuya açık listeler; kesin oran panelde)
| Kategori | Trendyol | Hepsiburada | n11 |
|---|---|---|---|
| Giyim | listeler çelişkili (%15–25; örnek %21) | %18 | %18–20,34 |
| Ayakkabı | — | %19,49 | %18–20,34 |
| Kozmetik | — | %17 | %13–17 |
| Cep telefonu | düşük tek hane | %7 | ~%5,5'ten başlıyor |
| Telefon aksesuarı | — | %15–25 | ~%20'ye kadar |
| Ev & yaşam / ev tekstili | — | %18 (ev tekstili) | %15–21 |
| Anne & bebek | — | %11–18 | %12–21 |
Kaynaklar: Paraşüt (Hepsiburada, "Ocak 2026", yayın 29.06.2026), BirFatura (n11, 14.10.2026), Trendyol için seo/research/trendyol-komisyon-oranlari.md (3 kaynak, çelişki notu). Trendyol boş hücreler yayından önce doldurulacak (Paraşüt Trendyol tablosu + panel ekran adı: Ticari Şartlar › Komisyon ve Vade Tablosu).

### C. ÖZGÜN: Komisyon dışı sabit giderin fiyat içindeki payı (kargo + hizmet bedeli; 0–2 desi, örnek tutarlar)
Varsayım: Trendyol desi tarifesi 0–2 desi 81,95 TL (TEX, 10.08.2026); Hepsiburada desi tarifesi 0–2 desi 78,50 TL (HepsiJET, 10.08.2026; 24.08.2026'da güncellendi → yayından önce PDF'ten yenilenecek).
| Satış fiyatı | Trendyol sabit gider | Payı | Hepsiburada sabit gider | Payı |
|---|---|---|---|---|
| 149,90 TL | 49,73 TL | %33,2 | 54,98 TL | %36,7 |
| 199,90 TL | 49,73 TL | %24,9 | 54,98 TL | %27,5 |
| 249,90 TL | 81,40 TL | %32,6 | 86,98 TL | %34,8 |
| 349,90 TL | 81,40 TL | %23,3 | 86,98 TL | %24,9 |
| 379,90 TL | 92,94 TL | %24,5 | 86,98 TL | %22,9 |
| 399,90 TL | 92,94 TL | %23,2 | 86,98 TL | %21,8 |
| 499,90 TL | 92,94 TL | %18,6 | 89,49 TL | %17,9 |
| 999 TL | 92,94 TL | %9,3 | 89,49 TL | %9,0 |

Bulgular (dağıtım metinlerinde kullanılacak):
1. 200 TL altı üründe komisyondan önce fiyatın dörtte biri ile üçte biri sabit giderlere gidiyor.
2. 350–399,99 TL bandında Hepsiburada hâlâ baremde, Trendyol desi tarifesinde: bu bantta Hepsiburada'nın sabit gideri daha düşük (379,90 TL'de %22,9'a karşı %24,5).
3. 200 TL eşiğini 50 TL aşmak (249,90 TL) sabit gider payını 199,90 TL'dekinden daha yükseğe çıkarıyor.
4. 21.09.2026 değişikliğiyle Hepsiburada'da 200 TL altı sipariş başı sabit gider 42 TL'den 54,98 TL'ye çıktı (+%31).

## Dağıtım ve teklif metinleri (gönderim kullanıcıda, sayfa yayınlandıktan sonra)
1. **LinkedIn gönderisi (kullanıcının profili):**
   "Pazaryerinde 199,90 TL'lik bir ürün sattığınızda komisyondan önce fiyatın %25-28'i kargo ve hizmet bedeline gidiyor. Trendyol, Hepsiburada, n11 ve Amazon'un 2026 kesintilerini kaynaklı ve tarihli tek tabloda topladım; barem eşiklerinin fiyatlamaya etkisini de hesapladım. Tablo ücretsiz, istediğiniz yerde kaynak göstererek kullanabilirsiniz: [link]"
2. **E-ticaret yazarlarına / bültenlere kısa e-posta (kişiselleştirilecek):**
   Konu: "Pazaryeri kesintileri 2026 — kaynaklı karşılaştırma tablosu (ücretsiz kullanım)"
   "Merhaba [Ad], [yayın]'daki [yazı] yazınızı okudum; [somut nokta]. Trendyol, Hepsiburada, n11 ve Amazon'un 2026 komisyon, hizmet bedeli ve barem bilgilerini tarihli kaynaklarla tek sayfada topladım; fiyat noktasına göre sabit gider payını gösteren özgün bir tablo da var. Yazınızı güncellerken işinize yararsa kaynak olarak kullanabilirsiniz: [link]. Bir hata görürseniz düzeltirim. — Yusuf Bayrak"
3. **Kaynak düzeltme teklifi (eski rakam kullanan sayfalara):** Hepsiburada hizmet bedelini 10,50 TL ya da barem içinde ücretsiz yazan sayfalara "21.09.2026 itibarıyla 10,99 TL ve barem içinde de alınıyor; kaynaklı tablo: [link]" notu. Hedefler: nitru (11,40 TL / 5,99 TL çelişkisi), ezv.com.tr 30.09 yazısının "önceki uygulama" tablosu, Paraşüt (hizmet bedeli tutarı yok).
4. Hedef liste (D4 teklif tablosuna eklenecek): eticaretmerkezim, zunapro, kargonomi, ezv.com.tr, webrazzi/egirisim (veri haberi), e-ticaret bültenleri.

## Yayından önce yapılacaklar
- [ ] Çiçeksepeti ve Pazarama güncel kesintileri (ikinci kaynak denemesi; bulunamazsa tabloya "kamuya açık güncel veri yok" yaz)
- [ ] Hepsiburada ve Trendyol güncel desi PDF'leri (C tablosu varsayımları)
- [ ] Trendyol komisyon aralıkları (B tablosu boş hücreler)
- [ ] Amazon.com.tr standart (kampanya dışı) satış ücreti kaynağı
- [ ] İndirilebilir CSV/XLSX (public/sablonlar/) — "tabloyu indir" linklenebilirliği artırır
