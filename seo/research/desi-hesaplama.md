# Desi hesaplama aracı — SERP/rakip analizi (27.10.2026)

Hedef sorgular (Keyword Planner, TR, 26.10): desi hesaplama 14.800 · kargo desi hesaplama 1.600 ·
ptt / aras / yurtiçi kargo desi hesaplama 590 / 480 / 390.

## SERP (Türkçe)
- ikas /tr/desi-hesaplama: 3 alan (en/boy/yükseklik), sonuç alanı; içerik: 3000 bölen, yurt dışı 5000 (DHL/UPS/FedEx),
  "ağırlık mı desi mi, büyük olan", yukarı yuvarlama, dış kutu ölçülür. Eksik: ağırlık girişi yok (karşılaştırmayı araç yapmıyor),
  çoklu koli yok, ücret tahmini yok, "1 desi = 1 kg" kaynaksız iddiası, fiyat çelişkisi (86,90 / 79,90 TL).
- takvim.com.tr: 3 alan, /3000; ağırlık yok, örnek yok, çoklu koli yok; açıklama "kargo ücreti" vaat ediyor ama ücret çıktısı yok.
- Ticimax blog: formül bölümünde "÷100" yazıyor, örnekler ÷3000 ile (çelişki); Excel örneğinde hücre hatası; ağırlık/desi kuralı yok.
- IdeaSoft (rehber + araç), gazetevatan, ikas kargo ücreti sayfası; pazaryeri desi kuralı Paraşüt/Faturaport yazılarında.

## Hiçbir rakipte olmayan (araca eklenenler)
1. Gerçek ağırlık girişi → ücrete esas ağırlık = max(desi, kg) ve hangisinin belirlediği.
2. Çoklu koli: her koli ayrı yuvarlanıp toplanır (gönderi tek koli gibi hesaplanmaz).
3. Bölen seçimi: 3000 (yurt içi yaygın), 4000, 5000 (uluslararası hava, DHL/UPS/FedEx), 6000; özel bölen.
4. Yuvarlama seçimi: yukarı tam sayı / 0,5'e yukarı / yuvarlamasız (anlaşmalar farklı).
5. Kutu optimizasyonu: "kutu her kenarda 1–2 cm küçülürse desi kaç olur", hedef desi için maks. yükseklik.
6. İsteğe bağlı desi başı / ilk desi + ek desi ücretiyle tahmini kargo maliyeti → Trendyol kâr aracına geçiş.
7. Paylaşılabilir link (girdiler URL'de), mm/cm/inç birimi.

## İçerik açısı
Formül + 3 örnek (doğru aritmetik), ağırlık vs desi, yuvarlama, çoklu koli, yurt içi/yurt dışı bölen, kutu küçültme
ile kargo tasarrufu, pazaryerinde desi ve kâr ilişkisi. Firma bazlı fiyat/kural İDDİA EDİLMEZ (doğrulanabilir resmî
kaynak bulunamadı) → "sözleşmenizdeki bölen ve yuvarlama kuralını girin" yaklaşımı.
Yamyamlaşma: Trendyol kâr aracı (kâr niyeti) ile ayrışık; kâr aracındaki desi SSS'i bu araca link verir.
