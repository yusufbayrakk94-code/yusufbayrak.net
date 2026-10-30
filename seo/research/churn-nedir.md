# SERP / rakip analizi — "churn nedir" (30.10.2026)

Hedef sorgu: **churn nedir** (210/ay), **churn rate nedir** (90/ay) — Keyword Planner, 26.10.2026 (takvim). Hedef sorgu #10.
Niyet: bilgi (tanım + formül + nasıl düşürülür). "churn rate hesaplama" hacimsiz (—) → hesap niyeti mevcut Churn aracında kalıyor.

## SERP (Türkçe arama, 30.10.2026)
1. ikas — https://ikas.com/tr/blog/churn-rate-nedir-nasil-hesaplanir (≈3.500 kelime, 18.09.2026 güncel)
2. Wikipedia (EN) — https://en.wikipedia.org/wiki/Churn_rate
3. Dodo Payments TR araç — https://dodopayments.com/tr/tools/churn-rate-calculator (≈650 kelime)
4. IdeaSoft — https://www.ideasoft.com.tr/churn-rate/ (≈1.200 kelime, tarihsiz)
5. Amplitude, Quantum Metric, CFI vb. (İngilizce sözlükler); useinsider.com

## İlk 3 Türkçe sonucun incelemesi
- **ikas**: tek formül, 2 örnek (50/1.000, 150/2.000), tablo yok, 7 SSS. Hatalar: "negatif churn"u yeni müşterinin kayıptan fazla olması diye tanımlıyor (yanlış: net müşteri artışı; negatif churn gelir churn'ü kavramı); %5–7 "iyi" eşiği kaynaksız, aylık mı yıllık mı belirsiz; dönem içinde kazanılan müşterilerin paydadan çıkarılması söylenmiyor. Eksik: gönüllü/gönülsüz churn, başarısız ödeme (dunning), kohort, gelir churn'ü, yıllıklaştırma, erken uyarı sinyalleri, LTV etkisi.
- **IdeaSoft**: formül var, çalışılmış örnek yok; "churn riski" ile churn oranını karıştırıyor; kaynaksız "%25 / %15 düşüş" başarı hikâyeleri; kayıp müşteri için süre eşiği yok. Eksikler ikas ile aynı.
- **Dodo Payments**: araç sayfası, brüt/net gelir churn formülü var, örnek yok, SSS yok; kaynaksız eşikler (SMB %3, kurumsal %1).

## Boşluk → bizim açımız
- Tek örnekle: doğru formül + 3 yaygın yanlış payda (bitiş sayısı, yeni müşteriler dahil) ve sonuç farkı; ortalama müşteri paydalı alternatif.
- Gönüllü vs gönülsüz churn ayrımı (aynı ay 28 + 12), başarısız ödemeleri tekrar deneme: Stripe Smart Retries resmî belgesi (önerilen varsayılan: 2 haftada 8 deneme; kesin red kodlarında yeni kart gerekir).
- Müşteri vs gelir churn'ü (brüt/net) aynı rakamlarla; negatif churn'ün doğru tanımı.
- Kohort tablosu (100 kişilik Mayıs kohortu, aylık churn %18 → %3) → ilk ay churn'ü onboarding sorunu.
- Churn'ün LTV ve 12 aylık taban üzerindeki etkisi (%5 → %4,25: LTV 7.200 → ≈8.470 TL; 800 müşteri 12 ayda 432 vs 475).
- E-ticaret churn'ü (tekrar satın alma penceresi), telekom/bankacılıkta churn anlamı (SSS).
- Erken uyarı sinyalleri ve churn türüne göre düşürme tablosu. Kaynaksız sektör ortalaması VERİLMEDİ.

## Yamyamlaşma
Churn Rate Hesaplayıcı (/ucretsiz-araclar/churn-rate-hesaplayici/) hesap niyetinde, örnek 1.000/50. Yazı farklı örnek (800/40), bilgi niyeti + gönülsüz churn, kohort ve düşürme planı açısı; relatedToolKey=churn → araç yazıya otomatik link verir. Aracın SSS'leriyle aynı cümleler kullanılmadı.
Hesaplar Python ile doğrulandı (30.10.2026).
