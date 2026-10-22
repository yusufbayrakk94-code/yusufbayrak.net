# Araç SERP / rakip analizi — 2026-10-22

Yöntem: Türkçe sorgularla WebSearch (ABD tabanlı; google.com.tr sıralaması,
featured snippet ve PAA birebir görülemedi) + ilk sayfaların WebFetch ile
incelenmesi. Sıralamalar tahminidir; Search Console / TR rank tracker ile
doğrulanmalı.

Ana bulgu: Hiçbir sorguda ilk sonuçlar "çalışan araç + doğru formül + TL ile
örnek + kaynaklı kıyas + SSS" birleşimini sunmuyor. Sonuçlar ya içeriksiz
hesaplayıcılar, ya araçsız uzun bloglar, ya da makine çevirisi yabancı
sayfalar. yusufbayrak.net bu sorgularda görünmüyor.

## 1. CAC hesaplama — rekabet: düşük-orta
Rakipler: ikas (küçük hesaplayıcı, 2024), ideasoft, Yotpo TR (çeviri),
popupsmart/kontentino/braverytechnology sözlükleri.
Boşluklar: blended vs ücretli vs tam yüklü CAC; B2B CAC (satış ekibi,
MQL→SQL→müşteri); CAC geri ödeme süresi; aynı araçta LTV:CAC; kanal kırılımı;
Türkiye'ye özel (USD faturalı reklam/TL gelir, KDV, SGK); kaynaklı kıyaslar; SSS.
Kelimeler: CAC hesaplama · müşteri edinme maliyeti hesaplama · CAC formülü ·
LTV CAC oranı · B2B müşteri edinme maliyeti.
SSS: maaşlar dahil mi, iyi CAC kaç, CAC vs CPA, B2B CAC, kanal bazlı CAC, iyi LTV:CAC.

## 2. LTV hesaplama — rekabet: düşük-orta
Rakipler: Yotpo TR, CleverTap TR, ideasoft (formülü CAC'a bölerek yanlış;
marj yok), QuestionPro, Ticimax, Stripe.
Boşluklar: e-ticaret (AOV × sıklık × ömür × marj) ve SaaS (ARPA × marj ÷ churn)
formülleri ayrı; ciro vs marj bazlı LTV; enflasyon için iskonto oranı;
LTV:CAC + geri ödeme birlikte; çalışan Türkçe hesaplayıcı.
Kelimeler: LTV hesaplama · müşteri yaşam boyu değeri hesaplama · CLV hesaplama ·
LTV formülü · e-ticaret LTV.

## 3. Churn rate hesaplama — rekabet: düşük-orta
Rakipler: Dodo Payments TR aracı (en güçlü: logo/gelir churn, net churn;
SSS ve örnek yok), ikas (uzun, kaynaksız kıyas), ideasoft.
Boşluklar: aylık → yıllık churn [1−(1−m)^12] hiçbir TR sayfada yok; dönem
içi kazanılan müşteriler/ortalama müşteri; abonelik dışı e-ticarette churn
tanımı; negatif net gelir churn'ü.
Kelimeler: churn rate hesaplama · müşteri kayıp oranı hesaplama · aylık yıllık
churn · gelir churn · iyi churn oranı.

## 4. UTM oluşturucu — rekabet: orta
Rakipler: tamamı çeviri yabancı araçlar (replug, u2l.ai, creatorflow,
mailsoftly, upload-post, seomator); TR blog: ideasoft.
Boşluklar: GA4 varsayılan kanal eşlemesi + "Unassigned" uyarısı; küçük harf
zorlaması; TR hazır şablonları (Meta, Google Ads, Instagram bio, WhatsApp,
e-posta, pazaryeri reklamları, QR/basılı); QR çıktısı; gclid otomatik
etiketleme uyarısı; toplu CSV.
Kelimeler: UTM oluşturucu · UTM link oluşturma · UTM parametreleri · GA4 UTM.

## 5. ARR hesaplama — rekabet: düşük (hacim de düşük) → düşük öncelik
Rakipler: İngilizce sözlükler (Stripe, Chargebee, Salesforce), TR: Ticimax, ikas, tl;dv.
Boşluklar: yeni/genişleme/daralma/kayıp bileşenleriyle ARR; neler dahil
(kurulum ücreti, kullanım bazlı, yıllık sözleşme, TL/USD); ARR vs ciro vs CARR.

## 6. Pazaryeri kâr/komisyon hesaplayıcı (YENİ) — rekabet: yüksek, talep en yüksek
Rakipler: Paraşüt, Faturaport (araçsız rehberler), Ticimax/ikas/ideasoft
(basit araçlar: stopaj, desi, hizmet bedeli, iade, reklam yok), NİTRU (en
güçlü; iade/reklam/paylaşım yok), trendyolhesaplama.com (ters hesap, içerik yok), Sopyo.
Farklılaşma: Trendyol + Hepsiburada yan yana; %1 stopaj; platform hizmet
bedeli; kargo; İADE ORANI ve SİPARİŞ BAŞI REKLAM (kimsede yok); hedef marjdan
satış fiyatı + maksimum reklam bütçesi (ters hesap); KDV kuralının net
anlatımı; para nereye gidiyor dökümü; paylaşılabilir URL; tarihli ücret kaynak tablosu.
Ücret verileri (hepsi DÜZENLENEBİLİR alan + "son kontrol" tarihiyle gösterilmeli):
- E-ticaret stopajı %1, KDV hariç brüt satış üzerinden (GİB 330 sıra no.lu
  tebliğ, 01.01.2025'ten itibaren) — yüksek güven.
  https://gib.gov.tr/sites/default/files/fileadmin/mevzuatek/mevzuatbilginotu/gelirvergisiteblig330not.pdf
- Trendyol platform hizmet bedeli: 10,99 TL + KDV/paket (hızlı teslimatta
  daha düşük; 6,99 / 4,99 kaynaklar arasında çelişkili) — belirsiz.
- Hepsiburada hizmet bedeli: 21.09.2026'dan itibaren 10,99 TL + KDV/teslimat (EZV) — orta güven.
- Komisyon: Trendyol ~%5-27, Hepsiburada ~%6-25 kategoriye göre; kesin oran
  satıcı panelinde → kullanıcı girer.
- Kargo/barem: sık değişiyor, kaynaklar çelişkili → kullanıcı girer.
KDV kuralı: satış ve maliyet ürünün KDV oranıyla; komisyon, kargo, hizmet
bedeli %20 KDV'li.
Kelimeler: trendyol kar hesaplama (birincil) · trendyol komisyon hesaplama ·
hepsiburada kar hesaplama · hepsiburada komisyon hesaplama · pazaryeri kar hesaplama.
SSS: komisyon KDV dahil fiyattan mı, stopaj nasıl hesaplanır/geri alınır mı,
hizmet bedeli ne kadar, desi nasıl hesaplanır, barem nedir, iadede ne olur,
iyi kâr marjı, sipariş başı ne kadar reklam harcanabilir.

## 7. Reklam bütçesi planlayıcı (YENİ) — rekabet: düşük-orta, araç YOK
Rakipler: ikas (uzun rehber, sadece ROAS formülü, kaynaksız "%5-15"),
Ticimax (kısa), Yandex Direct yardım, Amazon Ads TR rehberleri.
Boşluk: Türkçe "hedef ciro → bütçe" aracı yok. Girdi: hedef ciro, AOV, brüt
marj, dönüşüm oranı, (ops.) TBM. Çıktı: gereken sipariş, tıklama, bütçe,
başabaş ROAS, hedef ROAS, maks. CPA; cironun %5/10/15'i senaryoları; B2B modu
(lead → MQL → SQL → kapanış). Kur ve sezon (Efsane Kasım) notu.
Kelimeler: reklam bütçesi hesaplama · reklam bütçesi nasıl belirlenir ·
başabaş ROAS hesaplama · maksimum CPA hesaplama.

## Öncelik
1. Pazaryeri kâr hesaplayıcı · 2. Reklam bütçesi planlayıcı (ROAS aracına bağlı) ·
3. CAC/LTV/Churn sayfalarını 1.200-1.800 kelimeye derinleştir · 4. UTM'e GA4
eşleme/şablon/QR · 5. ARR düşük öncelik. İndekslenme GSC'de kontrol edilmeli.
