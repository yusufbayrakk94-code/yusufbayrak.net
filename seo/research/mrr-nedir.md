# MRR nedir — SERP ve rakip analizi (2026-10-29)

Hedef sorgu: "mrr nedir" — 390/ay (Keyword Planner, AdGusto hesabı, 26.10.2026; seo/CONTENT_CALENDAR.md). Hedef sorgu #6 (GOALS.md).
Takvimdeki 31 Eki satırı 2 gün öne alındı (29–30 Eki satırları daha önce yapılmıştı).

## TR SERP (WebSearch, 29.10.2026 — "mrr nedir nasıl hesaplanır")
1. ikas.com/tr/blog/mrr-aylik-tekrarlanan-gelir-nedir-nasil-hesaplanir — blog, ~3.000 kelime, güncelleme 02.04.2026
2. ideasoft.com.tr/aylik-duzenli-gelir-mrr/ — sözlük/blog (WebFetch başarısız, site hatası)
3. adapty.io/docs/tr/mrr — ürün dokümanı (~600 kelime)
4. chargebee.com docs (EN), hubifi, coupler, openmeter, dodopayments (EN)
5. dodopayments.com/tr/tools/mrr-calculator — araç + ~500 kelime (2. aramada)
Not: "mrr" kısmen "mean reciprocal rank" anlamında da geçiyor (zilliz) → başlık "aylık yinelenen gelir" bağlamını baştan veriyor.

## İlk 3'ün incelemesi
- ikas: formül yalnızca fiyat × abone (plan bazında); örnek 100/250/500 TL planlar + 10.000 TL eklenti → 235.000 TL. Yıllık plan normalizasyonu YOK; indirim "hesaba katılmalı" deyip yöntem yok; contraction ve reactivation yok; churn formülü yok; tek seferlik/eklenti ayrımı belirsiz; kaynaksız "aylık %15–20 sağlıklı büyüme"; yoğun ürün tanıtımı. 12 SSS, çoğu genel.
- Adapty TR: yıllık plan ÷ 12 (240 $ → 20 $), haftalık plan katsayısı; iade geçmiş MRR'yi düşürür; deneme sürümü ele alınmıyor; çalışılmış örnek yok; ürün dokümanı.
- Dodo Payments TR araç: MRR = abone × ARPU, Net new MRR formülü (contraction dahil); yıllık normalizasyon, indirim, reactivation yok; SSS yok; çeviri kokan terimler.

## Boşluklar (bizim farkımız)
- Tek örnek şirketle tam MRR köprüsü: başlangıç MRR → yeni / genişleme / yeniden aktivasyon / daralma / kayıp → bitiş MRR (rakiplerde reactivation yok, contraction çoğunda yok).
- MRR ≠ tahsilat ≠ ciro: yıllık peşin ödeme ve kurulum ücreti örneği.
- Kenar durumlar: indirim (ödenen tutar), deneme, haftalık/3 aylık plan katsayıları, kullanım bazlı ücret, iade, duraklatılan abonelik.
- Türkiye'ye özgü: USD fiyatlı SaaS'ta kur etkisi → sabit kurla MRR (rakiplerin hiçbiri değinmiyor).
- MRR büyüme oranı, CMGR, SaaS Quick Ratio (ChartMogul/Tunguz kaynaklı), brüt/net MRR churn, logo churn farkı, aylık NRR — aynı rakamlarla.
- E-ticaret abonelik kutusu örneği.
- Vergi konusuna girilmedi (kullanıcı kısıtı).

## Yamyamlaşma
- MRR aracı (/ucretsiz-araclar/mrr-hesaplayici/) "hesaplayıcı" işlem niyeti; 500 müşteri / 420.000 TL örneği var. Yazı farklı örnek (215 hesap, 160.500 TL) ve "nedir + köprü + kenar durumlar" bilgi niyetinde.
- EN: "arr-vs-mrr-difference" (yalnız EN, karşılaştırma niyeti). EN yazı "what is MRR / how to calculate" niyetinde; ARR farkı için o yazıya link veriyor.

## Kaynaklar
- https://ikas.com/tr/blog/mrr-aylik-tekrarlanan-gelir-nedir-nasil-hesaplanir
- https://www.ideasoft.com.tr/aylik-duzenli-gelir-mrr/
- https://adapty.io/docs/tr/mrr
- https://dodopayments.com/tr/tools/mrr-calculator
- https://chartmogul.com/blog/saas-quick-ratio/
- https://tomtunguz.com/what-is-quick-ratio-hiding/
