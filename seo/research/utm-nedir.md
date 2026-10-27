# SERP analizi — "utm nedir" (2026-10-27)

Hedef sorgu: utm nedir (Keyword Planner 390/ay, 26.10.2026 hacim çalışması) · İkincil: utm parametreleri, utm kodu nedir, utm link
Niyet: bilgi (tanım + nasıl kullanılır). Hacim kuralı: sağlandı (390, takvimin bugünkü satırı).

## İlk sonuçlar (WebSearch, TR, 27.10.2026)
1. IdeaSoft — https://www.ideasoft.com.tr/utm-urchin-tracking-module-nedir-nasil-kullanilir/
2. ikas — https://ikas.com/tr/blog/utm-nedir-utm-link-nasil-olusturulur
3. Ticimax — https://www.ticimax.com/blog/utm-nedir
4. Ticimax (2. sayfa) — https://www.ticimax.com/blog/utm-urchin-tracking-module-nedir-neden-onemlidir
5. Hostragons — https://www.hostragons.com/blog/utm-parametreleri-kampanya-takibi/
6. upload-post (araç) — https://www.upload-post.com/tr/tools/utm-builder/
→ Talep kanıtı ayrıca: 5+ farklı Türkçe site konuya sayfa ayırmış.

## İlk 3'ün incelemesi (WebFetch)
- IdeaSoft (~2.000 kelime, güncelleme 11/2025): 5 parametre, küçük harf kuralı, iç link uyarısı, GA4 rapor yolu, 5 kısa SSS.
  Eksik/hata: tam örnek URL yok, tablo yok; utm_medium örneği olarak "organic" veriyor (organik arama UTM'lenmez);
  utm_id / utm_source_platform yok; Google Ads otomatik etiketleme yok; Meta dinamik parametre yok; kanal kuralları yok.
- ikas (~5.000 kelime, güncelleme 18.09.2026): 9 senaryo örnek URL, ~10 SSS, iç link uyarısı.
  Eksik/hata: "Universal Analytics kullanıyorsanız" bölümü (UA kapandı), kaynaksız "UTM linkleri doğal değil, link değeri düşer" iddiası,
  Campaign ID'yi utm_id ile eşlemiyor, otomatik etiketleme / Meta dinamik parametre / GA4 kanal kuralları yok, yazım hataları, ürün tanıtımı.
- Ticimax (~1.100 kelime, güncelleme 11/2025): yalnızca 5 parametre tanımı; örnek URL, tablo, SSS, GA4 rapor yolu yok; tekrarlı.

## Doğrulanan resmî bilgiler
- GA4 URL oluşturucu parametreleri: utm_id, utm_source, utm_medium, utm_campaign, utm_source_platform, utm_term, utm_content,
  utm_creative_format, utm_marketing_tactic; son ikisi "şu an GA4'te raporlanmıyor"; değerler büyük/küçük harfe duyarlı; küçük harf önerilir;
  sıra önemsiz; source/medium/campaign her zaman kullanılmalı; UTM'ler "Page path + query string"de görünmez, "Page location"da görünür.
  https://support.google.com/analytics/answer/10917952
- Otomatik etiketleme + manuel UTM birlikteyse kaynak/aracı ve diğer trafik sınıflandırma boyutları otomatik değerleri kullanır;
  manuel utm_content ve utm_term "Manual ad content" / "Manual term" boyutlarına yine yazılır.
  https://support.google.com/analytics/answer/10723328 · https://support.google.com/google-ads/answer/3095550
- Meta dinamik URL parametreleri: {{campaign.id}}, {{campaign.name}}, {{adset.id}}, {{adset.name}}, {{ad.id}}, {{ad.name}},
  {{placement}}, {{site_source_name}}; Reklam Yöneticisi'nde "URL parametresi oluştur"; yeniden adlandırılan kampanyada eski ad gidebilir.
  https://www.jonloomer.com/url-parameters-facebook-ads/
- GA4 varsayılan kanal kuralları: https://support.google.com/analytics/answer/9756891

## Boşluklar → bizim açımız
1. 9 parametrenin tamamı + hangisi GA4'te hangi boyutta görünüyor (rakipler 5 parametrede kalıyor).
2. Tam örnek URL'nin anatomisi (?, &, sıra, kodlama).
3. Platform bazlı kullanım: Google Ads'te manuel UTM yerine otomatik etiketleme; Meta dinamik parametre şablonu; e-posta, influencer, QR, WhatsApp.
4. İsimlendirme standardı (küçük harf, ASCII, tire/alt çizgi, kampanya adı şablonu) ve GA4 kanal karşılığı (Unassigned riski).
5. GA4'te nerede görülür + yayından önce test (DebugView/Gerçek zamanlı, yönlendirme kontrolü).
6. Hatalar: iç linke UTM (dönüşüm ilişkilendirmesi kendi kampanyanıza yazılır), organik aramaya UTM, yönlendirmede parametre kaybı.
Hiçbirinde olmayan: utm_id / utm_source_platform açıklaması, otomatik etiketleme önceliği, Meta dinamik parametreleri.

## Yamyamlaşma
- /ucretsiz-araclar/utm-link-olusturucu/ (araç niyeti: "utm oluşturucu") → yazı bilgi niyeti; relatedToolKey=utm ile araç yazıya link verir.
- /blog/ga4-unassigned-trafik-nedir-nasil-duzeltilir/ (sorun çözme niyeti) → yazı kanal kurallarını kısa tutar, ayrıntı için Unassigned yazısına link verir.
