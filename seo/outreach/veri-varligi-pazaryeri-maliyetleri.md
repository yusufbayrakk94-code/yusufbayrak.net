# D3 — Veri varlığı: "Türkiye pazaryeri komisyon ve kargo maliyetleri 2026" (taslak v1, 16.11.2026; v0 15.11.2026)

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
| Amazon.com.tr | Paket başı hizmet bedeli YOK; aylık 99 TL üyelik kampanya ile alınmıyor. Komisyon kargo dahil toplam satış fiyatı üzerinden (%6–20). Kampanya: yeni satıcıya kayıttan 90 gün, 2 milyon TL'ye kadar %1 komisyon (30.09–31.12.2026) + 4.000 TL Sponsorlu Ürünler kredisi | FBA: birim başı lojistik ücreti (örnek 53,80 TL küçük zarf 30 g · 63,58 TL standart paket 1,2 kg · 163,93 TL 10 kg TV; tarife 16.04.2026) + depolama 64 / 83 TL/m³ (Oca–Eyl / Eki–Ara), 365 gün üstü 1.500 TL/m³ · Satıcı gönderimi: kendi kargo, alıcıdan ayrı kargo alınamaz | FBA sabit kargo kampanyası: 0–300 TL ürünlerde 25 TL/birim (Seller Flex kategorileri: giyim, ayakkabı, çanta, takı, saat, bavul; sayfada 20 TL de geçiyor, bitiş tarihi yok) | Resmî: satis.amazon.com.tr/ucretlendirme ve /lojistik/sabit-kargo-ucreti-kampanyasi (16.11.2026); kampanya: foreks.com 07.10.2026; seo/research/amazon-satici-olmak-fba.md | Yüksek (ücretler) / Orta (kampanya) |
| Çiçeksepeti | Güvenli ödeme altyapısı bedeli sipariş tutarının %1,5'i; aylık listeleme bedeli satılan adet × birim bedel (kaynakta 3 TL, aynı sayfanın örneğinde 10 TL → çelişkili) | Kamuya açık tarife bulunamadı | Kamuya açık veri bulunamadı | BirFatura (güncelleme 16.10.2026, "tahmini"); ikas (07.11.2025, yalnızca %6–30 aralığı) | Düşük |
| Pazarama | Ayrı hizmet bedeli kaynaklarda yok; mağaza açmak ücretsiz | Anlaşmalı kargo, desi bazlı, hakedişten kesilir; 100 desi üstü "ağır kargo hizmet bedeli" | 0–149,99 TL: 31,90 TL · 150–300 TL: 56,90 TL (Sürat, Aras, DHL eCommerce, PTT, Kolay Gelsin); Yurtiçi: 56,90 / 79,90 TL | Komisyon: sentos 24.04.2026 + mukellef 14.09.2026 (Pazarama resmî komisyon listesine atıf) aynı oranlar; barem: yalnızca mukellef 14.09.2026 | Orta (komisyon) / Düşük (barem) |

### B. Komisyon aralıkları (kamuya açık listeler; kesin oran panelde)
| Kategori | Trendyol | Hepsiburada | n11 | Amazon.com.tr (resmî) | Pazarama | Çiçeksepeti |
|---|---|---|---|---|---|---|
| Giyim | listeler çelişkili (%15–25; örnek %21) | %18 | %18–20,34 | %15,5 | %19 (Moda) | %18–30 (Moda & Aksesuar) |
| Ayakkabı | — | %19,49 | %18–20,34 | %17 (ayakkabı, çanta) | %19 | — |
| Kozmetik | — | %17 | %13–17 | 500 TL'ye kadar %9, üstü %14 | %19 | %15–18 |
| Cep telefonu | düşük tek hane | %7 | ~%5,5'ten başlıyor | %8 | %10 | — |
| Telefon aksesuarı | — | %15–25 | ~%20'ye kadar | %11 (elektronik aksesuar) | %19 | %5–27 (elektronik & aksesuar) |
| Ev & yaşam / ev tekstili | — | %18 (ev tekstili) | %15–21 | %15 (mutfak eşyası, dekorasyon) | %17 | %18–27 |
| Anne & bebek | — | %11–18 | %12–21 | %11,5 (giyim hariç) | %18 | %16–30 |
| Elektronik | — | — | — | %9,5 | %14 | — |
| Gıda | — | — | — | 500 TL'ye kadar %9, üstü %13 | %17 | — |
| Takı | — | — | — | 900 TL'ye kadar %20, üstü %6 | — | — |
Kaynaklar: Paraşüt (Hepsiburada, "Ocak 2026", yayın 29.06.2026), BirFatura (n11, 14.10.2026), Trendyol için seo/research/trendyol-komisyon-oranlari.md (3 kaynak, çelişki notu). Trendyol boş hücreler yayından önce doldurulacak (Paraşüt Trendyol tablosu + panel ekran adı: Ticari Şartlar › Komisyon ve Vade Tablosu). Amazon: satis.amazon.com.tr/ucretlendirme (16.11.2026, resmî, 31 kategori). Pazarama: sentos 24.04.2026 + mukellef 14.09.2026. Çiçeksepeti: BirFatura 16.10.2026 ("tahmini aralık").

### C. ÖZGÜN: Komisyon dışı sabit giderin fiyat içindeki payı (kargo + hizmet bedeli; 0–2 desi, örnek tutarlar)
Varsayım: Trendyol desi tarifesi 0–2 desi 81,95 TL (TEX, 10.08.2026); Hepsiburada desi tarifesi 0–2 desi 78,50 TL (HepsiJET, 10.08.2026; 24.08.2026'da güncellendi → yayından önce PDF'ten yenilenecek).
| Satış fiyatı | Trendyol sabit gider | Payı | Hepsiburada sabit gider | Payı | Pazarama barem* | Payı | Amazon FBA** | Payı |
|---|---|---|---|---|---|---|---|---|
| 149,90 TL | 49,73 TL | %33,2 | 54,98 TL | %36,7 | 31,90 TL | %21,3 | 25 TL | %16,7 |
| 199,90 TL | 49,73 TL | %24,9 | 54,98 TL | %27,5 | 56,90 TL | %28,5 | 25 TL | %12,5 |
| 249,90 TL | 81,40 TL | %32,6 | 86,98 TL | %34,8 | 56,90 TL | %22,8 | 25 TL | %10,0 |
| 349,90 TL | 81,40 TL | %23,3 | 86,98 TL | %24,9 | desi tarifesi (veri yok) | — | 63,58 TL | %18,2 |
| 379,90 TL | 92,94 TL | %24,5 | 86,98 TL | %22,9 | desi tarifesi | — | 63,58 TL | %16,7 |
| 399,90 TL | 92,94 TL | %23,2 | 86,98 TL | %21,8 | desi tarifesi | — | 63,58 TL | %15,9 |
| 499,90 TL | 92,94 TL | %18,6 | 89,49 TL | %17,9 | desi tarifesi | — | 63,58 TL | %12,7 |
| 999 TL | 92,94 TL | %9,3 | 89,49 TL | %9,0 | desi tarifesi | — | 63,58 TL | %6,4 |

\* Pazarama: Sürat/Aras/DHL/PTT/Kolay Gelsin baremi, hizmet bedeli kaynaklarda yok (güven düşük). \*\* Amazon FBA: 300 TL'ye kadar sabit kargo kampanyası (yalnızca Seller Flex kategorileri), üstünde Amazon'un 1,2 kg standart paket örnek ücreti; inbound kargo ve depolama hariç. Amazon'da paket başı hizmet bedeli yok.

Bulgular (dağıtım metinlerinde kullanılacak):
1. 200 TL altı üründe komisyondan önce fiyatın dörtte biri ile üçte biri sabit giderlere gidiyor.
2. 350–399,99 TL bandında Hepsiburada hâlâ baremde, Trendyol desi tarifesinde: bu bantta Hepsiburada'nın sabit gideri daha düşük (379,90 TL'de %22,9'a karşı %24,5).
3. 200 TL eşiğini 50 TL aşmak (249,90 TL) sabit gider payını 199,90 TL'dekinden daha yükseğe çıkarıyor.
4. 21.09.2026 değişikliğiyle Hepsiburada'da 200 TL altı sipariş başı sabit gider 42 TL'den 54,98 TL'ye çıktı (+%31).
5. (v1) Amazon'un FBA sabit kargo kampanyası, 300 TL altı giyim/ayakkabı/takıda sabit gider payını %10–17'ye indiriyor; aynı fiyatlarda Trendyol ve Hepsiburada'da pay %25–37. Kampanyanın bitiş tarihi yok → sayfada "kampanya; panelden doğrulayın" notu.
6. (v1) Amazon'da komisyon basamakları fiyatlamayı barem kadar etkiliyor: kozmetikte 499 → 509 TL fiyat artışı satıcının eline geçen tutarı 16,35 TL azaltıyor (500–528 TL ölü bölge); takıda 900 TL üstü oran %20'den %6'ya düşüyor.
7. (v1) Pazarama'nın barem eşikleri (150 / 300 TL) Trendyol (200 / 350) ve Hepsiburada'dan (200 / 400) farklı: aynı ürünü üç pazaryerinde aynı fiyata satmak üç farklı kargo basamağına düşürebilir (ör. 199,90 TL Pazarama'da üst baremde).

## Dağıtım ve teklif metinleri (gönderim kullanıcıda, sayfa yayınlandıktan sonra)
1. **LinkedIn gönderisi (kullanıcının profili):**
   "Pazaryerinde 199,90 TL'lik bir ürün sattığınızda komisyondan önce fiyatın %25-28'i kargo ve hizmet bedeline gidiyor. Trendyol, Hepsiburada, n11 ve Amazon'un 2026 kesintilerini kaynaklı ve tarihli tek tabloda topladım; barem eşiklerinin fiyatlamaya etkisini de hesapladım. Tablo ücretsiz, istediğiniz yerde kaynak göstererek kullanabilirsiniz: [link]"
2. **E-ticaret yazarlarına / bültenlere kısa e-posta (kişiselleştirilecek):**
   Konu: "Pazaryeri kesintileri 2026 — kaynaklı karşılaştırma tablosu (ücretsiz kullanım)"
   "Merhaba [Ad], [yayın]'daki [yazı] yazınızı okudum; [somut nokta]. Trendyol, Hepsiburada, n11 ve Amazon'un 2026 komisyon, hizmet bedeli ve barem bilgilerini tarihli kaynaklarla tek sayfada topladım; fiyat noktasına göre sabit gider payını gösteren özgün bir tablo da var. Yazınızı güncellerken işinize yararsa kaynak olarak kullanabilirsiniz: [link]. Bir hata görürseniz düzeltirim. — Yusuf Bayrak"
3. **Kaynak düzeltme teklifi (eski rakam kullanan sayfalara):** Hepsiburada hizmet bedelini 10,50 TL ya da barem içinde ücretsiz yazan sayfalara "21.09.2026 itibarıyla 10,99 TL ve barem içinde de alınıyor; kaynaklı tablo: [link]" notu. Hedefler: nitru (11,40 TL / 5,99 TL çelişkisi), ezv.com.tr 30.09 yazısının "önceki uygulama" tablosu, Paraşüt (hizmet bedeli tutarı yok).
4. Hedef liste (D4 teklif tablosuna eklenecek): eticaretmerkezim, zunapro, kargonomi, ezv.com.tr, webrazzi/egirisim (veri haberi), e-ticaret bültenleri.

## Yayından önce yapılacaklar
- [x] Çiçeksepeti ve Pazarama güncel kesintileri — 16.11: Pazarama komisyonu 2 bağımsız 2026 kaynağıyla (orta), barem tek kaynak (düşük); Çiçeksepeti yalnızca "tahmini aralık" (düşük, resmî tablo yok — sayfada açıkça yazılacak)
- [ ] Hepsiburada ve Trendyol güncel desi PDF'leri (C tablosu varsayımları)
- [ ] Trendyol komisyon aralıkları (B tablosu boş hücreler)
- [x] Amazon.com.tr standart (kampanya dışı) satış ücreti kaynağı — 16.11: resmî ücretlendirme sayfası (31 kategori, FBA ücretleri, depolama), güven yüksek
- [~] İndirilebilir CSV/XLSX — 16.11: CSV taslağı hazır (seo/data/pazaryeri-kesintileri-2026.csv; 6 pazaryeri × kategori komisyonları + sabit kesintiler, her satırda kaynak/tarih/güven). Yayın günü public/sablonlar/ altına kopyalanacak; XLSX sürümü yayın günü
- [ ] Yayın günü dağıtım metinlerine 5–7. bulguları ekle ("6 pazaryeri" ifadesiyle güncelle)
