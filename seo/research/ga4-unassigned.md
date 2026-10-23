# SERP analizi — "ga4 unassigned trafik nedir nasıl düzeltilir" (2026-10-23)

Hedef sorgu: ga4 unassigned (GOALS.md hedef sorgu #9) · İkincil: unassigned trafik nedir, ga4 unassigned nasıl düzeltilir, ga4 not set
Niyet: bilgi + sorun çözme → UTM Link Oluşturucu aracına geçiş

## İlk sonuçlar (WebSearch, Türkçe sorgu) — TAMAMI İNGİLİZCE, Türkçe sonuç yok
1. Techmagnate — https://www.techmagnate.com/blog/unassigned-traffic-in-google-analytics-4/
2. Usercentrics — https://usercentrics.com/guides/marketing-measurement/unassigned-traffic-in-ga4/
3. Stape — https://stape.io/helpdesk/knowledgebase/what-is-unassigned-and-not-set-traffic-in-ga4
4. Wholewhale — https://wholewhale.com/tips/other-traffic-google-analytics/
5. Search Engine Land — https://searchengineland.com/fix-unassigned-traffic-ga4-433239

## İnceleme
- Search Engine Land (~850 kelime): nedenleri listeliyor, çoğuna çözüm yok; geçerli medium listesi yok, teşhis adımı yok.
- Stape: Unassigned ile (not set) ayrımı iyi (çift gtag, event'lerin Google etiketinden önce tetiklenmesi, Measurement Protocol client_id/session_id); adım adım çözüm yok, özel kanal grubu anlatılmamış.
- Techmagnate (~1.500-2.000 kelime): tanım, Direct ile fark, teşhis adımları, 5 SSS; geçerli medium tablosu ve kanal kuralları yok.

## Boşluk (bizim açı)
- Türkçe kaynak yok (AEO/GEO için de fırsat).
- Yanlış → doğru utm_medium tablosu, Google'ın kanal kurallarına dayanarak.
- 5 dakikalık teşhis: Trafik edinme raporunda boyutu "Oturum kaynağı/aracı" yapıp Unassigned filtrelemek.
- Unassigned ile (not set) ve Direct farkı.
- Özel kanal grubu ile offline/QR gibi kampanyaları anlamlı kanala almak.
- UTM aracımızdaki kanal tahminine bağlantı.

## Yamyamlaşma
- UTM aracı (/ucretsiz-araclar/utm-link-olusturucu/) işlem niyeti; yazı sorun çözme/bilgi niyeti. relatedToolKey: utm.

## Kaynaklar
- Google kanal kuralları: https://support.google.com/analytics/answer/9756891
- Otomatik etiketleme önceliği: https://support.google.com/analytics/answer/10723328
