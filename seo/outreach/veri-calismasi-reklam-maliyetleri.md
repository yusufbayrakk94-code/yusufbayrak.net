# Linklenebilir varlık 2 — "Türkiye'de Google Ads tıklama maliyetleri 2026: e-ticaret ve B2B" veri çalışması

Hazırlandı: 2026-10-31 (günlük otorite işi; takvimde 7–13 Kas işiydi, öne alındı).
Amaç: GOALS.md H7 (10-15 kaliteli yönlendiren alan adı) ve aeo-geo-strategy.md Katman 2 (alıntılanabilir özgün veri).
Neden: Türkçe aramada "google ads tıklama maliyeti", "reklam maliyetleri 2026" sorgularında yöntemi açık, sektör kırılımlı bir Türkçe tablo yok;
gazeteciler, ajans blogları ve AI cevapları alıntılayacak birincil veri arıyor. Kendi verisi olan site, link alan sitedir.

## 1. Kapsam kararı (dürüst veri ilkesi)
- **Kaynak: yalnızca Google Ads Anahtar Kelime Planlayıcı** (AdGusto hesabı, salt okuma — bilgisayar görevinin zaten kullandığı yol).
  Planner'ın "Sayfanın üst kısmı teklif aralığı (düşük / yüksek)" ve "Ortalama aylık arama" alanları. Bunlar Google'ın tahminidir, gerçek ödenen TBM değildir; sayfada açıkça yazılır.
- **Kullanılmayacak:** müşteri hesaplarının gerçek TBM/CPA verisi (gizlilik; kullanıcı ayrıca yazılı onay ve anonimleştirme kararı vermedikçe), Meta (kamuya açık maliyet verisi yok), kaynaksız "sektör ortalaması" tabloları.
- **Vergi yok:** tutarlar Planner'ın gösterdiği TL tahminleridir; vergi yorumu yapılmaz.

## 2. Araştırma soruları
1. Türkiye'de Google Ads'te sektöre göre sayfanın üst kısmı için tahmini tıklama maliyeti (TL) aralığı nedir?
2. B2B sorguları e-ticaret sorgularına göre kaç kat daha pahalı?
3. Bilgi niyetli ("nedir") ve satın alma niyetli ("fiyat", "satın al", "en iyi") sorgular arasında maliyet farkı ne kadar?
4. Hacim ile maliyet arasında ilişki var mı (yüksek hacimli kelimeler daha mı ucuz)?

## 3. Veri toplama protokolü (bilgisayar görevi uygulayacak — kullanıcı onayıyla)
- Araç: Keyword Planner › "Arama hacmi ve tahminleri" (kelime listesini yapıştır). Kampanya/plan KAYDETME; taslak plan oluşursa sil.
- Ayarlar: Konum Türkiye · Dil Türkçe (değiştirilemiyorsa "Tüm diller" notu) · Ağ: Google · Dönem: son 12 ay · Para birimi: hesabın TL'si.
- Kayıt: her kelime için `kelime, sektör, niyet, aylık_ortalama_arama, ust_teklif_dusuk, ust_teklif_yuksek, rekabet, toplama_tarihi` → `seo/data/google-ads-tbm-2026.csv` (depo herkese açık; bu rakamlar Search Console/GA4 verisi değil, Planner tahmini olduğu için yazılabilir — takvimdeki hacim tablosuyla aynı statü).
- Kalite: hacmi "—" veya teklif aralığı boş kelimeler dışarıda; her sektörde en az 12 geçerli kelime kalmazsa sektör raporlanmaz.
- Tekrar: Ocak 2027'de aynı listeyle ikinci ölçüm → "değişim" tablosu (yeniden link sebebi).

## 4. Kelime listesi (taslak tohumlar; sektör başına 20, toplam 200 — Planner önerileriyle tamamlanabilir)
| Sektör | Tür | Örnek tohumlar (niyet: B = bilgi, S = satın alma) |
|---|---|---|
| Moda / giyim | E-ticaret | kadın elbise (S), erkek mont (S), spor ayakkabı fiyatları (S), kombin önerileri (B) |
| Kozmetik / kişisel bakım | E-ticaret | nemlendirici krem (S), güneş kremi en iyi (S), cilt bakım rutini (B) |
| Ev / mobilya | E-ticaret | köşe koltuk (S), yemek masası takımı (S), salon dekorasyonu (B) |
| Elektronik aksesuar | E-ticaret | kablosuz kulaklık (S), telefon kılıfı (S), powerbank nasıl seçilir (B) |
| Gıda / takviye | E-ticaret | protein tozu (S), organik bal (S), kahve çekirdeği (S) |
| Yazılım / SaaS | B2B | crm programı (S), proje yönetim yazılımı (S), crm nedir (B) |
| ERP / kurumsal yazılım | B2B | erp yazılımı (S), stok takip programı (S), erp nedir (B) |
| Lojistik / kargo hizmeti | B2B | e-ticaret kargo anlaşması (S), depo kiralama (S), fulfillment nedir (B) |
| Endüstriyel ekipman | B2B | forklift kiralama (S), kompresör fiyatları (S), endüstriyel raf (S) |
| Dijital pazarlama hizmeti | B2B | google ads ajansı (S), seo hizmeti (S), sosyal medya ajansı (S) |
Not: Vergi/muhasebe hizmeti, sağlık ve finans (kredi, sigorta) sektörleri bilinçli olarak dışarıda (vergi kısıtı + regüle sektör).

## 5. Analiz ve çıktı
- Sektör başına: medyan düşük teklif, medyan yüksek teklif, hacim ağırlıklı orta nokta ((düşük+yüksek)/2 × hacim ağırlığı), en pahalı 3 kelime.
- Karşılaştırmalar: B2B / e-ticaret medyan oranı; S / B niyet oranı; hacim–maliyet dağılımı (Spearman korelasyonu, yalnızca yön olarak yorumlanır).
- Türetilmiş, yazının asıl değeri: "Bu TBM ile 1 satış/lead kaç TL'ye gelir?" tablosu → örnek dönüşüm oranlarıyla (%1, %2, %3) CPA = TBM / dönüşüm oranı. Reklam Bütçesi ve ROAS araçlarına bağlanır.
- Yayın biçimi: TR + EN blog yazısı (`/blog/google-ads-tiklama-maliyetleri-2026/` önerisi) + indirilebilir CSV + gömülebilir tablo görseli; "Yöntem" bölümü ve "Bu veriyi kullanırken" atıf cümlesi:
  "Kaynak: Yusuf Bayrak, Türkiye'de Google Ads tıklama maliyetleri 2026 (yusufbayrak.net)".
- Hacim kontrolü (kural): yayından önce "google ads tıklama maliyeti", "google reklam maliyeti", "tıklama başı maliyet" hacmi Planner'dan alınır; hepsi 0–10 çıkarsa yazı yayınlanmaz, veri yalnızca CPC nedir (26 Kas takvim konusu) yazısında tablo olarak kullanılır.

## 6. Sınırlamalar (sayfada aynen yazılacak)
- Planner teklif aralıkları geçmiş açık artırma verisinden üretilmiş tahminlerdir; gerçek TBM hesap kalitesi, kalite puanı, saat/cihaz ve rekabete göre değişir.
- Tek ölçüm tarihi; Kasım indirim sezonunda maliyetler yükselir (toplama tarihi açıkça yazılır).
- Sektör başına 20 kelime örneklemdir, sektörün tamamını temsil etmez.

## 7. Dağıtım (yayından sonra — gönderimi kullanıcı yapar)
| # | Hedef | Neden | Teklif |
|---|---|---|---|
| 1 | Konuk yazı listesindeki ajans/e-ticaret blogları (konuk-yazi.md #1, #3, #4) | Reklam bütçesi içerikleri var, birincil veri yok | "Tablonun tamamını atıf linkiyle kullanabilirsiniz" |
| 2 | Pazarlama yayınları (Marketing Türkiye, Webrazzi, MediaCat haber masası) | Sezon haberi: "Black Friday öncesi tıklama maliyetleri" | 3 bulgu + yöntem linki, kısa basın notu |
| 3 | LinkedIn (kullanıcının profili) | Varlık sinyali + yönlendirme | 3 bulgu + tablo görseli + link |
| 4 | Topluluklar (ör. e-ticaret satıcı grupları, r/PPC için EN sürüm) | Faydalı veri paylaşımı | Spam yok; soruya cevap olarak |

### Kısa basın/teklif metni taslağı (kullanıcı kişiselleştirip gönderir)
Konu: Türkiye'de Google Ads tıklama maliyetleri 2026 — 10 sektör, 200 kelime, açık yöntem

Merhaba [Ad],
[Yayın]'daki [ilgili yazı] yazınızı okudum. Türkiye'de Google Ads tıklama maliyetlerini 10 sektörde 200 anahtar kelime üzerinden,
Google Anahtar Kelime Planlayıcı tahminleriyle derledim. Öne çıkan üç bulgu: [bulgu 1], [bulgu 2], [bulgu 3].
Yöntem, sınırlamalar ve ham CSV açık: [link]. Tabloları kaynak göstererek yazılarınızda kullanabilirsiniz; isterseniz
sektörünüze özel kısa bir yorum da hazırlayabilirim.
Yusuf Bayrak — yusufbayrak.net

## 8. Sıradaki adımlar
- [ ] Kullanıcı onayı: veri toplamayı bilgisayar görevine ekleme (Planner salt okuma, plan kaydetmeden) — rapora yazıldı (31.10).
- [ ] Bilgisayar görevi: 200 kelimeyi topla → `seo/data/google-ads-tbm-2026.csv` (önerilen tarih: 7–13 Kas haftası).
- [ ] İçerik görevi: analiz + TR/EN yazı + CSV indirme + tablo görseli; dağıtım listesi güncellemesi.
