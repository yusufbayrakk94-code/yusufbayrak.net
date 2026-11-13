# Kendi mülklerden link ve profil bağlantıları (D1) — 13.11.2026

Yol haritası D1 (seo/GOALS.md): Search Console › Bağlantılar'da yalnızca 2 yönlendiren alan adı var (biri spam).
En hızlı, en garantili ilk linkler kullanıcının kendi kontrolündeki sitelerden ve profillerden gelir. Bu dosya
hazır metin ve yerleşim önerisidir; **uygulamayı kullanıcı yapar** (Claude dış sitelere/profillere bir şey göndermez).

Kurallar:
- Her sitede **tek, bağlamsal ve faydalı** bir link yeterli; sitewide (her sayfada) tam eşleşmeli anahtar kelime linkinden kaçının.
- Kendi sitelerinizden verilen linklerde `nofollow` gerekmez (sponsorlu/ücretli değil); ama çapa metni marka ya da doğal ifade olsun.
- Mümkünse link sayfanın HTML'inde sunucudan gelsin (Lovable/SPA sitelerde metin JS ile çiziliyorsa Google yine okur, ama footer'a koymak en güvenlisi).

## 1) AdGusto (https://adgusto.app) — öncelik: YÜKSEK
Durum (13.11 kontrol): Türkçe; footer'da Gizlilik/KVKK/Koşullar var; kurucu/ekip bölümü yok; menüde Blog bağlantısı var; yusufbayrak.net'e link yok.

a) **Footer — kurucu satırı** (en kolay, 5 dk):
```
© 2026 AdGusto. Tüm hakları saklıdır. · Kurucu: <a href="https://yusufbayrak.net/hakkimda/">Yusuf Bayrak</a>
```

b) **SSS'e bir soru (bağlamsal, en değerli link):**
> **Reklam bütçemi nasıl belirlemeliyim?**
> Bütçeyi cironun yüzdesiyle değil, hedef satıştan geriye hesaplayın: hedef sipariş × ödeyebileceğiniz maksimum edinme maliyeti. Ücretsiz [reklam bütçesi hesaplayıcısı](https://yusufbayrak.net/ucretsiz-araclar/reklam-butcesi-hesaplama/) başabaş ROAS'ı ve gereken tıklama maliyetini de gösterir. AdGusto, belirlediğiniz bütçeyi Meta, Google ve LinkedIn arasında takip etmenizi sağlar.

c) **Blog (açıldığında) — "Ücretsiz reklam hesaplayıcıları" kutusu ya da ilk yazıda kaynak:**
- [ROAS hesaplama](https://yusufbayrak.net/ucretsiz-araclar/roas-hesaplayici/)
- [CPC nedir? Tıklama başı maliyet ve başabaş TBM](https://yusufbayrak.net/blog/cpc-nedir-tiklama-basi-maliyet/)
- [UTM link oluşturucu](https://yusufbayrak.net/ucretsiz-araclar/utm-link-olusturucu/)

## 2) Brandog (https://brandog.lovable.app) — öncelik: ORTA
Durum (13.11 kontrol): Türkçe; meta-author "Brandog"; geliştirici bilgisi yok; tek dış link Lovable rozeti.

a) **Footer:**
```
Geliştiren: <a href="https://yusufbayrak.net/projeler/brandog-marka-mcp/">Yusuf Bayrak</a>
```
b) İsteğe bağlı "Hakkında" metni: "Brandog, TÜRKPATENT verilerini yapay zekâyla tarayan bir marka risk aracıdır. Projenin teknik hikâyesi: [Brandog proje sayfası](https://yusufbayrak.net/projeler/brandog-marka-mcp/)."
Not: Brandog kendi alan adına taşınırsa link değeri artar (lovable.app alt alan adı zayıf ama yine de ayrı bir alan adı sayılır).

## 3) Profiller (sameAs + yönlendiren alan adı) — öncelik: YÜKSEK, 10 dk
Profil linkleri çoğunlukla nofollow'dur; sıralamaya doğrudan etkileri sınırlı ama marka sorgusu ("yusuf bayrak"), Google'ın kişi/varlık tanıması ve AI asistanlarının sizi doğru tanıması için önemlidir (yol haritası G).

| Profil | Nereye | Metin |
|---|---|---|
| LinkedIn (linkedin.com/in/yyusuf-bayrak/) | İletişim bilgileri › Web sitesi: `https://yusufbayrak.net/` (tür: Kişisel). Öne çıkanlar (Featured) bölümüne 2 link: Reklam Bütçesi aracı ve Trendyol Kâr aracı | Öne çıkan başlığı: "Ücretsiz reklam ve e-ticaret hesaplayıcıları" |
| X (x.com/yusuffbayrak) | Profil › Web sitesi alanı: `yusufbayrak.net` | Bio: "Performans pazarlama · B2B lead · AdGusto kurucusu · ücretsiz araçlar: yusufbayrak.net" |
| Instagram (instagram.com/yusufdijital/) | Profil linki: `https://yusufbayrak.net/ucretsiz-araclar/` | — |
| GitHub (github.com/yusufbayrakk94-code) | Profil › Website: `https://yusufbayrak.net/`; isteğe bağlı profil README'si (aşağıda) | — |

GitHub profil README taslağı (`yusufbayrakk94-code/yusufbayrakk94-code` adlı herkese açık depoya README.md):
```
### Yusuf Bayrak
Performans pazarlama ve B2B lead üretimi. AdGusto kurucusu.

- 🌐 [yusufbayrak.net](https://yusufbayrak.net/) — ücretsiz pazarlama ve e-ticaret hesaplayıcıları
- 🧮 [Reklam bütçesi hesaplama](https://yusufbayrak.net/ucretsiz-araclar/reklam-butcesi-hesaplama/) · [Desi hesaplama](https://yusufbayrak.net/ucretsiz-araclar/desi-hesaplama/) · [llms.txt oluşturucu](https://yusufbayrak.net/ucretsiz-araclar/llms-txt-olusturucu/)
```

## Sonraki adım (Claude)
- Kullanıcı uyguladıktan sonra: sitenin Person şemasındaki `sameAs` listesinin bu profillerle eşleştiğini kontrol et (GitHub eklenmediyse ekle).
- Search Console › Bağlantılar'da adgusto.app ve brandog.lovable.app'in görünmesi 2-6 hafta sürebilir; Aralık başı ölçümünde kontrol.
