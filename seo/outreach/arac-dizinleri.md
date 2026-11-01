# Araç dizinleri ve listeler — hedef listesi ve başvuru metinleri (2026-11-01)

Haftalık plan "14–20 Kas: Ücretsiz araç dizinleri listesi + başvuru metinleri" işi öne alındı (31 Eki–6 Kas ve 7–13 Kas işleri tamamlanmıştı).
Amaç: ücretsiz araçlar için konuyla ilgili, editoryal olarak seçilen dizin/listelerden yönlendiren alan adı (GOALS.md H7).
Kurallar: ücretli listeleme, "300 dizine tek tıkla gönder" servisleri ve link çiftlikleri YOK. **Başvuruyu kullanıcı yapar**;
Claude hiçbir forma bir şey göndermez, hesap açmaz, PR açmaz.

## Hedef listesi (01.11.2026 WebSearch/WebFetch ile incelendi)
| # | Hedef | Tür / nasıl başvurulur | Önerilecek araç | Durum / not |
|---|---|---|---|---|
| 1 | TripleDart — Free Marketing Tools Directory: https://www.tripledart.com/hub/free-marketing-tools | Elle seçilen, çok markalı (CoSchedule, Portent, Klaviyo…) ücretsiz araç dizini; sayfada başvuru formu var | ROAS Hesaplayıcı (EN) — başabaş ROAS, POAS, reklam sonrası kâr. UTM'yi önerme: TripleDart'ın kendi UTM aracı var | Doğrulandı: çok markalı, form var. EN başvuru metni A |
| 2 | llmstxt.site (generaltranslation/llmstxt-site, GitHub) | llms.txt yayınlayan sitelerin dizini; başvuru `data.json`'a PR ile (ad, site URL, llms.txt URL, llms-full.txt boş) | Sitenin kendi https://yusufbayrak.net/llms.txt dosyası | Doğrulandı: PR akışı repo README'sinde. Kullanıcı GitHub hesabıyla PR açar (metin C). Bakım durumu: PR açmadan önce son commit tarihine bakın |
| 3 | llmstxtdirectory.org (Product Hunt'ta listelenmiş) | llms.txt dizini | Sitenin llms.txt'i | Kontrol gerekli: ücretsiz başvuru var mı? Ücretliyse BAŞVURMA |
| 4 | AlternativeTo — https://alternativeto.net | Kullanıcı katkılı yazılım alternatifleri; ücretsiz web uygulaması eklenebilir (hesap gerekir) | UTM Link Oluşturucu ("Google Campaign URL Builder" alternatifi) ve llms.txt Oluşturucu | Kullanıcı hesabıyla ekler; açıklama metni B. Spam algılanmaması için tek araçla başlayın |
| 5 | SaaSHub — https://www.saashub.com | Yazılım dizini (ücretsiz listeleme + doğrulama) | "yusufbayrak.net free marketing & e-commerce calculators" tek kayıt | Kontrol gerekli: ücretsiz listeleme koşulları |
| 6 | gauravtiwari.org/tools/category/marketing-calculators/ | 28.10 listesinden; kişisel araç sitesi | ROAS / Reklam bütçesi | Kontrol gerekli: üçüncü taraf araçları listeliyor mu, yoksa yalnızca kendi araçları mı? Kendi araçlarıysa hedef değil |
| 7 | size.ly/tr/tools ("Satıcılar için ücretsiz araçlar") | Türkçe satıcı araçları sayfası | Desi / Trendyol kâr | Büyük olasılıkla yalnızca kendi araçları → hedef değil; yalnızca kontrol edin |

Elenenler (gerekçe): searchlab.nl "best free marketing tools" (öneri/başvuru yolu yok, ajans kendi ürününü öneriyor, hesaplayıcı içermiyor);
embeddable.co "best calculator widgets" (kendi ürününü tanıtan liste, başvuru yok); onescales gumroad llms.txt "Directory Submission" (ücretli → kural dışı);
"submit to 240+/300+ directories" servisleri (toplu, düşük kalite).
Türkçe tarafta editoryal "ücretsiz pazarlama araçları" derleme sayfası bulunamadı (sonuçlar Semrush, Shopify gibi kendi araç sayfaları);
Türkçe dağıtım widget teklifleri (seo/outreach/widget-dagitimi.md) ve konuk yazılarla sürüyor.

## Başvuru metni A — TripleDart (form, İngilizce)
Tool name: ROAS Calculator (Break-Even ROAS & POAS)
URL: https://yusufbayrak.net/en/free-tools/roas-calculator/
Category: Calculators / Paid media
Short description (≤200 karakter):
Free ROAS calculator that also returns break-even ROAS from your margin, profit after ads, POAS and the target ROAS for a profit goal. No sign-up, runs in the browser.
Why it's useful (gerekirse):
Most ROAS calculators stop at revenue ÷ spend. This one adds your gross or contribution margin and returns break-even ROAS (1 ÷ margin), whether the campaign is profitable, profit after ads, POAS (profit on ad spend) and the ROAS needed for a chosen profit target. Free, no email gate, no ads.
Maker: Yusuf Bayrak — performance marketing consultant (yusufbayrak.net)

## Başvuru metni B — AlternativeTo / SaaSHub (İngilizce açıklama)
UTM Builder with GA4 channel preview — free, no sign-up.
Build UTM-tagged links and see which GA4 default channel group (Paid Social, Organic Social, Email, Unassigned…) the link will land in, based on Google's published channel rules. Warns about uppercase letters, spaces, Turkish characters, missing parameters and existing gclid; 12 ready-made templates for Google, Meta, LinkedIn, email and influencer links. Also available in Turkish.
URL: https://yusufbayrak.net/en/free-tools/utm-builder/
Alternatif olarak işaretlenecek: Google Campaign URL Builder (ga-dev-tools), UTM.io

## Başvuru metni C — llmstxt.site PR (GitHub)
data.json'a eklenecek kayıt (mevcut kayıtların biçimine birebir uyun, token alanlarını boş bırakın):
- name: Yusuf Bayrak
- website: https://yusufbayrak.net
- llms-txt: https://yusufbayrak.net/llms.txt
- llms-full-txt: (boş)
PR başlığı: Add yusufbayrak.net
PR açıklaması: Adds yusufbayrak.net (performance marketing and SaaS metrics guides plus free calculators, Turkish + English). llms.txt is generated from the site's route inventory at build time and lists each page with a one-line description. Entry follows the existing format; token fields left blank.

## Kullanıcının yapacakları (sırayla, ~20 dk)
1. TripleDart formu (#1) → metin A.
2. GitHub'da generaltranslation/llmstxt-site → son commit tarihine bakın; aktifse fork → data.json → metin C ile PR.
3. AlternativeTo'da hesap açıp UTM Builder'ı ekleyin (#4) → metin B.
4. #3, #5, #6, #7 için "Kontrol gerekli" notuna bakın; ücretsiz ve editoryal değilse geçin.
Sonuç takibi: Search Console › Bağlantılar (aylık) ve yönlendirme trafiği (GA4 › Referral).
