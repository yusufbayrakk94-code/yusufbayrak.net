# SERP analizi — "utm link oluşturucu" (2026-10-23)

Hedef sorgu: utm link oluşturucu · İkincil: utm oluşturma, utm parametresi nedir, ga4 unassigned, utm builder
Niyet: araç (işlem) + bilgi

## İlk sonuçlar (WebSearch, TR)
1. u2l.ai — https://u2l.ai/tr/tools/utm-builder
2. creatorflow — https://creatorflow.so/tr/tools/utm-link-generator
3. IdeaSoft — https://www.ideasoft.com.tr/utm-urchin-tracking-module-nedir-nasil-kullanilir/
4. mailsoftly — https://mailsoftly.com/tr/tools/utm-builder/
5. techsy (UTM QR) — https://techsy.io/tr/topluluk/yapay-zeka-otomasyonlari/utm-qr-generator

## İnceleme
- u2l.ai: 9 platform şablonu, kopyala, geçmiş; ~5.000 kelime, ~20 SSS. GA4 kanal tahmini YOK, küçük harf zorlaması belirsiz, araç içinde QR yok.
- IdeaSoft: ~2.000-2.500 kelime blog; büyük/küçük harf var. GA4 kanal kuralları, Unassigned, gclid/otomatik etiketleme YOK.
- Rakiplerin hiçbiri linkin GA4'te hangi kanala düşeceğini göstermiyor → farklılaştırıcı özellik.

## Uygulanan
- Google'ın manuel trafik kurallarıyla kanal tahmini (https://support.google.com/analytics/answer/9756891); kaynak listeleri Google tablosunun alt kümesi → "tahmin" olarak etiketlendi.
- gclid + manuel UTM birlikteyse GA4 otomatik değerleri kullanır (https://support.google.com/analytics/answer/10723328) → uyarı.
- Uyarılar: Unassigned, eksik parametre, büyük harf, boşluk, Türkçe karakter, mevcut UTM.

## Yamyamlaşma
- /ucretsiz-araclar/ hub SSS'inde UTM sorusu var (kısa, araca link veriyor). Blog'da UTM yazısı yok; destek yazısı backlog'da.
