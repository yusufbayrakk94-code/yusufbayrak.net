# SEO hedefleri — yusufbayrak.net

Belirlendi: 2026-10-23 (kullanıcı onayıyla). Başlangıç değerleri depo herkese açık olduğu için burada değil, zamanlanmış görevin talimatında tutulur. Her günlük çalışma bu hedeflere göre iş seçer ve raporunda ilerlemeyi gösterir.

## Kuzey yıldızı
Marka dışı organik trafik + araçlardan/iletişim formundan gelen lead.

## 3 aylık hedefler (31 Ocak 2027)
| # | Hedef | Ölçüm |
|---|---|---|
| H1 | Son 28 günde **100+ organik tıklama** | Search Console › Performans |
| H2 | Son 28 günde **3.000+ gösterim** | Search Console › Performans |
| H3 | Aşağıdaki 10 hedef sorgunun **en az 5'inde ilk 10** | Search Console › Sorgular (ortalama konum) |
| H4 | Sitemap'teki önemli sayfaların **tamamı dizinde** ("Keşfedildi - dizine eklenmedi" = 0) | Search Console › Sayfa sayısı |
| H5 | **Her gün en az 1 yeni sayfa** (TR + EN yazı/araç; uygun konu yoksa kapsamlı güncelleme) | seo/LOG.md |
| H6 | Lead ölçümü çalışıyor ve aylık lead trendi raporlanıyor | GA4: generate_lead, form_start, contact_click, tool_use |
| H7 | **10-15 kaliteli yönlendiren alan adı** (ücretli link yok) | Search Console › Bağlantılar |

## 6 aylık hedef (30 Nisan 2027)
- Son 28 günde **500+ organik tıklama**; hedef sorguların çoğunda ilk 5.

## İçerik kısıtı (kullanıcı kararı, 2026-10-24)
Vergi konulu içerik (vergi danışmanlığı, KDV/stopaj/gelir vergisi hesapları ve yorumları) ÜRETİLMEZ, mevcut yazılara vergi bölümü EKLENMEZ.

## Hedef sorgular (27.10.2026'da hacme göre güncellendi — kullanıcı: "agresifleştir")
Eski listedeki hacimsiz sorgular (cac/ltv/churn hesaplama, ga4 unassigned, reklam bütçesi hesaplama; Keyword Planner 0–10)
çıkarıldı: ilk 10'a girseler de tıklama getirmezler. Yeni liste trafik hedefiyle (H1/H2) aynı yöne çalışır.
Aylık TR hacmi: Keyword Planner, 26.10.2026.
1. desi hesaplama (14.800) / kargo desi hesaplama (1.600) — Desi aracı
2. trendyol komisyon hesaplama (18.100) / trendyol kar hesaplama (6.600) — Trendyol aracı
3. kar marjı hesaplama (1.000) / marj hesaplama (140) — Brüt marj aracı + yazı
4. roas nedir (880) / roas hesaplama (170) / başabaş roas — ROAS yazısı + aracı
5. utm nedir (390) / utm oluşturucu (30) — UTM yazısı + aracı
6. mrr nedir (390)
7. cac nedir (320)
8. llms txt (480) / llms txt nedir (110)
9. ltv nedir (210)
10. churn nedir (210) / churn rate nedir (90)

Destek sorguları (hacim düşük, eski listeden; ölçülmeye devam): nrr nedir (40), rule of 40 (30), reklam bütçesi nasıl belirlenir, ga4 unassigned.

## Ara kilometre taşları
| Tarih | Beklenen |
|---|---|
| 30 Kasım 2026 | H4 tamam (tüm önemli sayfalar dizinde); 3+ hedef sorguda ilk 20 |
| 31 Aralık 2026 | 28 günde 40+ tıklama, 1.500+ gösterim; 3+ hedef sorguda ilk 10 |
| 31 Ocak 2027 | H1–H6 |

## Yol haritası (13.11.2026) — hedeflere nasıl ulaşılır
Ham Search Console/GA4 rakamları depo herkese açık olduğu için yazılmaz; durum yalnızca "yolunda / geride" olarak işaretlenir.

### Teşhis (13.11 verisiyle)
1. **Gösterim yolunda, tıklama geride.** Gösterim hızla artıyor (H2 Aralık sonunda tutturulabilir), ama ortalama konum 30'un üstünde; tıklama neredeyse yalnızca ilk 10'dan gelir. Darboğaz: sıralama, üretim değil.
2. **Baş terimlerde (desi 14.800, trendyol komisyon 18.100, trendyol kar 6.600) hiç gösterim yok.** SERP ikas, Ticimax ve kargo firmalarının; sitenin dış otoritesi neredeyse sıfır (Search Console › Bağlantılar: 2 alan adı, biri spam). Bu sorgular içerikle değil otoriteyle açılır → 2027 Q1-Q2 hedefi.
3. **Dizin/kalite sinyali.** Yüksek hacimli TR yazıların bir kısmı (Kar marjı, Google Ads nedir, Churn, GEO, ROI, ARR) "Tarandı - dizine eklenmedi". Düşük otoriteli sitede günde 4 yeni URL (2 TR + 2 EN) tarama bütçesini ve kalite algısını sulandırıyor olabilir.
4. **İç link zayıf.** Yazılar yalnızca blog listesinden ve sayfa sonundaki "Kaynaklar"dan link alıyor; metin içi (bağlamsal) link desteği yok (BlogPost.tsx paragrafları düz metin).
5. **Ölçüm kör.** GA4'te generate_lead / form_start / contact_click / tool_use hiç yok. Kodda olay dataLayer'a düşüyor (13.11 kontrol), yerleşik tarayıcı GA isteğini göndermediği için uçtan uca doğrulanamadı.

### Strateji: 100 tıklamaya en kısa yol "nedir" kümesi
Zaten 5-30 bandında olan bilgi sorguları baş terimlerden çok daha hızlı açılır. Keyword Planner hacimleri: google ads nedir 1.900, geo nedir 1.000, roas nedir 880, ctr nedir 720, mrr nedir 390, utm nedir 390, cac nedir 320, ltv nedir 210, churn nedir 210 → toplam ~6.000/ay. Bunların yarısında ilk 3-5'e girmek (~%8-10 TO) tek başına ayda ~200 tıklama potansiyeli demek; H1 (100+) bu kümeyle tutturulur, baş terimler H1'in değil 30.04 hedefinin (500+) işidir.

### İş akışları
| # | İş | Sahibi | Bitiş | Başarı ölçütü |
|---|---|---|---|---|
| A | **Dizin temizliği:** "Tarandı/Keşfedildi" listesindeki her önemli TR sayfaya özgün bölüm (örnek hesap, tablo, ters hesap) + yeniden dizin isteği; günde 5 kota TR'ye öncelikli | Veri görevi | 30.11 | Önemli TR sayfaların tamamı dizinde (H4) |
| B | **"Nedir" kümesini ilk 5'e taşıma:** sıra = sırası 8-30 olanlar önce (cac nedir, mrr ne demek, ltv nedir, utm nedir), sonra roas / google ads / ctr / churn / geo nedir. Her sayfada: ilk paragrafta 40-50 kelimelik doğrudan tanım (öne çıkan snippet), "X ne demek / açılımı" varyantları H2 + SSS'te, karşılaştırma tablosu, başlık sorguyla başlar | Veri görevi (günde 2 sayfa) | 31.12 | 3+ hedef sorgu ilk 10 (31.12), 5+ ilk 10 (31.01) |
| C | **İç link mimarisi:** (1) yazı paragraflarında `[metin](/yol/)` biçiminde metin içi link desteği; (2) her "nedir" sayfasına 3-5 ilgili yazıdan sorgu metniyle bağlamsal link; (3) 3 hub sayfası: "Pazarlama metrikleri sözlüğü" (ROAS, CAC, LTV, CTR, CPL, MRR, churn…), "E-ticaret kârlılık rehberi" (desi, komisyon, kar marjı, kargo), "SaaS metrikleri" | (1)-(2) veri görevi, (3) içerik görevi | 30.11 | Hedef sayfaların iç link sayısı ↑ (Bağlantılar raporu), konum ↑ |
| D | **Otorite (H7: 10-15 alan adı):** (1) kendi mülkler: AdGusto ve Brandog sitelerinden araçlara/yazılara link, LinkedIn/X/GitHub/Medium profilleri; (2) araç dizinleri (seo/outreach/arac-dizinleri.md); (3) widget ve şablon dağıtımı, eticaretmerkezim/zunapro hatırlatması, konuk yazı; (4) linklenebilir veri varlığı: "Türkiye pazaryeri komisyon ve kargo maliyetleri 2026" veri sayfası + basın/LinkedIn dağıtımı. Haftalık hedef: 5 kişiselleştirilmiş teklif | Taslaklar Claude, gönderim kullanıcı | 31.01 | Aralık sonu 5, Ocak sonu 10+ alan adı |
| E | **Üretim temposu (kullanıcı kararı 13.11.2026):** günde 1 yeni TR sayfa; EN sürüm yalnızca TR sürüm dizine girdikten sonra yazılır. Boşalan kapasite A-B-C-D'ye (hub sayfaları, linklenebilir varlıklar). H5 (günde en az 1 sayfa) korunur | İçerik görevi | 13.11'den itibaren | "Tarandı-dizinde değil" oranı ↓ |
| F | **Ölçüm:** kullanıcı kendi tarayıcısında bir araç kullanıp GA4 › Gerçek zamanlı'da tool_use'u görür; görünmezse kod düzeltilir. Lead raporu haftalık | Kullanıcı (2 dk) + Claude | 20.11 | H6 |
| G | **CTR ve marka:** ilk 10'da tıklamasız sayfalarda başlık/açıklama (EN dahil, düşük çaba); 'yusuf bayrak' marka sorgusu için Hakkımda sayfası + sameAs profilleri | Veri görevi | Sürekli | Marka sorgusu ilk 3, TO ↑ |

### Kilometre taşları ve erken uyarı
| Tarih | Beklenen | Gerideyse |
|---|---|---|
| 30.11 | Önemli TR sayfalar dizinde; 3+ hedef sorgu ilk 20; metin içi link + 1 hub canlı; 2-3 yeni alan adı | Yeni sayfa üretimini durdur, tüm kapasite A'ya |
| 31.12 | 28 günde 40+ tıklama, 1.500+ gösterim; 3+ hedef sorgu ilk 10; 5 alan adı | B'de en yakın 3 sorguya yoğunlaş, D'de veri varlığını öne al |
| 31.01 | H1-H7 | Hedefi revize etme kararı kullanıcıyla |
| 30.04 | 500+ tıklama | Baş terimler (desi, Trendyol) için otorite + araç geliştirme |

## Lead ölçümü (GA4 olayları, 2026-10-23'te eklendi)
- `generate_lead` — iletişim formu başarıyla gönderildi
- `form_start` — iletişim formuna ilk etkileşim
- `contact_click` — e-posta / LinkedIn / X / Instagram linki tıklandı
- `tool_use` — bir ücretsiz araçta ilk etkileşim (tool_name parametresiyle)
