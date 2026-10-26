# SERP analizi — "ltv nedir" / "ltv cac oranı" (2026-10-26)

## Hacim (CONTENT_CALENDAR.md, Keyword Planner 26.10.2026)
- ltv nedir: 210/ay · ltv cac: 30/ay · ltv hesaplama: 10 (aracın başlık sorgusu, hacimsiz) · ltv cac oranı: —
- Takvimin 26 Eki satırı (hacme göre yeniden sıralanmış hali): "LTV nedir? LTV:CAC oranı kaç olmalı?" → hacim kuralı sağlandı.
- Not: Bu çalışmada önce eski takvimdeki konu (LTV:CAC) talep kuralını sağlamadığı için "katkı marjı" hazırlanmıştı; push öncesi
  bilgisayar görevi hacimleri yazdı ve "katkı marjı" 0–10 çıktı → yayınlanmadı (kural). Bkz. LOG 2026-10-26.

## İlk sonuçlar ("ltv nedir", "LTV nedir müşteri yaşam boyu değeri nasıl hesaplanır")
1. tangem.com/tr — Loan-to-Value (kripto/kredi anlamı → sorgu kısmen belirsiz, başlıkta "müşteri yaşam boyu değeri" şart)
2. brandaft.com/ltv-nedir-nasil-hesaplanir/ — ajans rehberi
3. moyduz.com/tr/blog/ltv-nedir — ajans blogu
4. techdatareklam.com/sozluk/ltv-nedir — sözlük
5. d-dat.com/sozluk/ltv-nedir — sözlük
6. withgrower.com/tr — L.T.V. nedir
7. yenibizi.com — soru-cevap
8. yotpo.com/tr/blog/yasam-boyu-deger-hesaplama-basit-kar-rehberiniz/ — çeviri rehber
9. clevertap.com/tr/cltv/

## İlk 3'ün incelemesi
- brandaft.com (~2.500–3.000 kelime, 08.09.2026 güncel): temel LTV = AOV × sıklık × ömür, 500 × 4 × 3 = 6.000 TL; maks. CPA = LTV × %30
  "kabul edilen oran". HATA: ciro LTV'nin yanıltıcı olduğunu söyleyip bütçeyi ciro LTV'den hesaplıyor; marjlı formül sayısal
  örneksiz; geri ödeme süresi, kohort, zaman ufku/iskonto, iade yok; kaynaksız istatistikler; tablo yok; 7 SSS.
- moyduz.com (~700 kelime, 15.02.2026): 200 × 4 × 3 = 2.400 TL, %25 marjla 600 TL; maks. CAC 200 TL (3:1). Kaynaksız sektör LTV
  tablosu. Eksik: müşteri ömrünün nasıl bulunduğu, kohort, geri ödeme, iade/kargo/komisyon, CPA/ROAS'a çeviri.
- yotpo.com/tr (~3.000 kelime, yarısı ürün tanıtımı): APV/PF/CL formülleri, %25 churn → 4 yıl dediği halde örnekte 3 yıl; 3,6:1.
  Eksik: kohort yöntemi, geri ödeme, iskonto, LTV'den CPA/ROAS hedefi; çeviri izleri.

## Niyet ve boşluk
- Niyet: bilgi (tanım + formül + "LTV:CAC kaç olmalı"). Rakiplerin ortak eksikleri:
  (1) LTV'yi baştan katkı marjıyla hesaplamak (kargo, komisyon, iade dahil) ve ciro LTV ile farkı sayıyla göstermek,
  (2) kohort LTV'nin adım adım hesabı (birikimli sipariş eğrisi),
  (3) LTV:CAC'ı geri ödeme süresiyle birlikte okumak (aynı LTV, iki farklı CAC senaryosu),
  (4) LTV'den maks. CAC → reklam CPA → ilk sipariş ROAS hedefine çeviri (politika seçenekleriyle),
  (5) SaaS'ta formül LTV'si vs 36 ay sınırlı LTV,
  (6) sık hatalar listesi.
- Vergi kısıtı: vergi içeriği yok; tutarlar örnek tutar.

## Yamyamlaşma
- /ucretsiz-araclar/ltv-hesaplayici/ "LTV hesaplama" başlıklı hesaplayıcı (işlem niyeti; formül + kısa LTV:CAC bölümü). Yazı
  bilgi niyetini ve kohort/geri ödeme/reklam kararını kapsar; araçla farklı örnek rakamlar kullanıldı; yazı araca relatedToolKey
  ve kaynaklarla bağlanır, araç sayfası "İlgili Yazılar" ile otomatik geri link verir.
- /blog/saas-metrikleri-arr-cac-ltv/ genel bakış (LTV tek bölüm) → çakışma düşük.

## Dış kaynak
- Stripe — Customer lifetime value: https://stripe.com/gb/resources/more/customer-lifetime-value
