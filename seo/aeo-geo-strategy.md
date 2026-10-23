# AEO / GEO stratejisi — yusufbayrak.net (2026-10-23)

Amaç: Google AI Overviews, ChatGPT, Perplexity, Gemini ve Claude gibi yapay zekâ cevap motorlarının pazarlama metrikleri, reklam bütçesi ve B2B büyüme sorularında yusufbayrak.net'i kaynak göstermesi.
Not: Depo herkese açık; ham Search Console rakamları bu dosyaya yazılmaz.

## 1. Mevcut AI görünürlüğü (2026-10-23)

AI ürünlerine doğrudan sorgu atılamadı; vekil olarak web arama sonuçları kontrol edildi (AI motorlarının çoğu kaynaklarını arama indekslerinden seçer).

| Sorgu | Kimler çıkıyor | Bulgu |
|---|---|---|
| başabaş ROAS nasıl hesaplanır | iienstitu, multinet, İngilizce rehberler | Türkçe sonuçlar formül derinliğinde zayıf → ROAS yazımız için fırsat |
| NRR nedir / net revenue retention hesaplama | Yalnızca İngilizce sözlük sayfaları | Türkçe kaynak boşluğu; NRR yazımız Search Console'da ilk sayfanın altında gösterim alıyor |
| GA4 unassigned trafik nedir nasıl düzeltilir | Yalnızca İngilizce (Search Engine Land, stape, Techmagnate) | Türkçe içerik yok → UTM destek yazısı için net boşluk |
| yusufbayrak.net (marka) | Site çıkmıyor; başka "Yusuf" profilleri | Varlık (entity) sinyali zayıf; bağımsız indekslerde site yeterince tanınmıyor |

## 2. 5 katman puan kartı (1-5)

| Katman | Puan | Durum |
|---|---|---|
| 1. Çıkarılabilir içerik yapısı | 3 | Yeni yazılar (ROAS, reklam bütçesi) cevapla başlıyor, tablo/madde/HowTo var. Eski araç sayfalarının metinleri kısa, başlıklar soru biçiminde değil (ör. ROAS aracı, dönüşüm oranı, brüt/net marj). |
| 2. Alıntılanabilirlik | 2 | Özgün veri yok; formüller ve örnekler iyi. Yazar sayfası var. Araç sayfalarında görünür güncelleme tarihi yok. |
| 3. Yapısal veri derinliği | 4 (bugün 3'ten) | Person + WebSite grafiği, BlogPosting, FAQPage, HowTo, SoftwareApplication, BreadcrumbList var. Bugün düzeltildi: tüm JSON-LD URL'leri sondaki "/" ile canonical'a eşitlendi; BlogPosting yazarı ve araçların yayıncısı #person varlığına bağlandı; Person görseli gerçek profil fotoğrafı yapıldı. |
| 4. AI erişilebilirliği | 5 | robots.txt AI tarayıcılarına açık, llms.txt otomatik üretiliyor, tüm sayfalar SSG ile önceden render ediliyor, semantik main/article etiketleri var. |
| 5. Gerçek dünya varlık sinyalleri | 1 | sameAs yalnızca LinkedIn, X, Instagram. Bağımsız sitelerde marka anılması çok az. AdGusto/Brandog ürün siteleriyle karşılıklı bağ zayıf. |

## 3. Öncelikli sorgular (sitenin kaynak gösterilmesi gerekenler)

1. ROAS nedir, nasıl hesaplanır / başabaş ROAS
2. Reklam bütçesi nasıl belirlenir / reklam bütçesi ne kadar olmalı
3. NRR nedir, nasıl hesaplanır
4. CAC nasıl hesaplanır / CAC geri ödeme süresi
5. LTV nasıl hesaplanır / LTV:CAC oranı
6. Churn rate nasıl hesaplanır / aylık churn yıllığa çevirme
7. GA4 Unassigned trafik nedir / UTM nasıl oluşturulur
8. Trendyol / Hepsiburada kâr hesaplama (komisyon, kargo, iade dahil)
9. Rule of 40 nedir
10. ARR ile MRR farkı
11. Meta Ads öğrenme aşaması nasıl geçilir
12. B2B lead generation maliyeti nasıl düşürülür
13. ICP (ideal müşteri profili) nasıl çıkarılır
14. llms.txt nedir, nasıl oluşturulur
15. Yusuf Bayrak kimdir (marka/varlık sorgusu)

## 4. Katman katman iyileştirme planı

### Katman 1 — Çıkarılabilir yapı
- Araç sayfalarının metinlerini yeni standarda getir: her bölüm soru başlığı + ilk cümlede net cevap + formül + sayısal örnek. Öncelik: ROAS aracı, dönüşüm oranı, brüt/net kâr marjı, MRR, ARPA.
- Eski blog yazılarında "ilk paragraf doğrudan cevap" kontrolü (NRR, ARR/CAC/LTV yazısı, freemium).

### Katman 2 — Alıntılanabilirlik
- Özgün veri: "Türkiye'de e-ticaret ve B2B reklam maliyetleri" mini araştırması (anonim, açıklanmış metodoloji). AI'nın en çok alıntıladığı içerik türü birincil veridir.
- Araç sayfalarına görünür "Son güncelleme" tarihi + SoftwareApplication'a dateModified.
- Her yazıda kullanılan resmî kaynaklara link vermeye devam (Google/Meta yardım sayfaları).

### Katman 3 — Yapısal veri
- [x] JSON-LD URL tutarlılığı, author/publisher @id bağlantısı, profil görseli (2026-10-23)
- Person'a worksFor/founder (AdGusto, Brandog) ve hasOccupation ekle.
- Proje sayfalarında SoftwareApplication'ı creator → #person ile bağla.

### Katman 4 — Erişilebilirlik
- Durum iyi. İsteğe bağlı: llms-full.txt (blog yazılarının tam metni). Düşük öncelik.

### Katman 5 — Varlık sinyalleri (en zayıf halka — kullanıcı aksiyonu gerekiyor)
- LinkedIn, X ve Instagram profillerinin "web sitesi" alanında yusufbayrak.net olsun.
- (AdGusto/Brandog altbilgi linki kullanıcı kararıyla kapsam dışı — 2026-10-23.)
- Yeni yazıları LinkedIn'de özetleyip linklemek (marka anılması + dağıtım).
- Türkçe pazarlama topluluklarında / konuk yazılarda araçlara atıf.
- Wikipedia/Wikidata: kayda değerlik şartı oluşmadan zorlanmaz.

## 5. Yol haritası

| Zaman | İş |
|---|---|
| Bu hafta | Şema düzeltmeleri (yapıldı) · UTM/GA4 Unassigned Türkçe destek yazısı · NRR yazısında cevap-önce kontrolü |
| 2 hafta | Araç sayfası metin yenilemeleri (ROAS, dönüşüm, marj) · araçlara görünür güncelleme tarihi |
| 1 ay | Person şemasını genişletme · profil linkleri (kullanıcı) |
| 1-2 ay | Özgün veri çalışması (reklam maliyetleri) |

## 6. Yeniden test takvimi

Her çeyrek başında (bir sonraki: Ocak 2027) bölüm 3'teki 15 sorgu web aramasında ve erişilebilen AI ürünlerinde yeniden denenir; hangi kaynakların gösterildiği bu dosyaya eklenir.
