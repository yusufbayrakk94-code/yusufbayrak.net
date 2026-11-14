# Pazarlama metrikleri sözlüğü — SERP ve rakip analizi (14.11.2026)

Sayfa tipi: hub (yol haritası C3, ilk hub). Blog yazısı olarak yayınlanır: /blog/pazarlama-metrikleri-sozlugu/

## Hedef sorgular ve talep kanıtı
- Ana: "pazarlama metrikleri", "dijital pazarlama metrikleri"; ikincil: "pazarlama metrikleri sözlüğü", "dijital pazarlama terimleri", "reklam metrikleri", "e-ticaret metrikleri".
- Hacim: Keyword Planner'da henüz ölçülmedi (CONTENT_CALENDAR'da satır yok) → talep kuralı uygulandı.
- Talep kanıtı (Türkçe aramada konuya sayfa ayırmış 3'ten fazla Türkçe site):
  - https://analyticahouse.com/tr/blog/performans-pazarlama-metrikleri
  - https://www.dijitalkafa.com/blog/dijital-pazarlama-metrikleri/
  - https://dcpcrea.com/en-sik-kullanilan-dijital-pazarlama-metrikleri/
  - https://nurettinalabay.com.tr/pazarlama-performansi-kpi-ve-metrikleri/
  - https://mayatavision.com/dijital-pazarlama-sozlugu/
  - https://www.cozumpark.com/dijital-pazarlama-terimleri-sozlugu/
  - https://www.adworld.com.tr/bilgi-bankasi/sozluk
  - https://medyavadisi.com/google-ads-ve-dijital-reklam-terimleri-sozlugu/
- Sonraki Planner turunda ölçülecek: pazarlama metrikleri, dijital pazarlama metrikleri, dijital pazarlama terimleri, reklam terimleri.

## İlk 3 inceleme
1. AnalyticaHouse — "Performans Pazarlamada En Sık Takip Edilen 15 Metrik" (2022, ~1.400 kelime). 15 H3; yalnızca 3 formül ve 3 sayısal örnek; ROAS/CPC/CTR formülü yok; başabaş ROAS yok; CAC, LTV, MRR, churn, NRR yok; hemen çıkma oranının GA4'teki yeni tanımı yok; tablo/SSS yok; dönüşüm değeri tanımı ile formülü çelişiyor.
2. Dijital Kafa — "Dijital Pazarlama Metrikleri: 6 Kanalda 5'er Metrik" (Ağustos 2026, ~4.700 kelime). Kanal bazlı yapı + özet tablo; formül yok (yalnız düzyazı), başabaş ROAS/EBM hesabı yok, SaaS metrikleri yok, CPC tanımsız, kaynaksız eşikler.
3. Mayata Vision — "Dijital Pazarlama Sözlüğü: KOBİ'ler İçin 60 Terim" (Ağustos/Eylül 2026, ~5.200 kelime). 7 tablo, iyi kaynakça; ama formül notasyonu yok, başabaş ROAS yalnızca tek örnek, MRR/ARR/churn/NRR/LTV yok, gösterim payı örneği yanlış ("pazarın üçte biri"), terim sayısı başlık/meta arasında tutarsız.

## Niyet
Bilgi / referans. Kullanıcı terimin ne demek olduğunu ve nasıl hesaplandığını hızlıca bulmak istiyor; "X nedir" sorgularının toplayıcı sayfası.

## Boşluklar → farkımız
- Her metrik için: tanım (2-3 cümle) + formül + aynı örnek işletmenin rakamlarıyla sayısal örnek + ayrıntılı rehbere metin içi link.
- Tek örnek mağaza ve tek örnek SaaS üzerinden metrik zinciri: gösterim → CPM → CTR → CPC → dönüşüm oranı → EBM → ROAS → başabaş ROAS → POAS/ROI → CAC → LTV; MRR → churn → NRR/GRR → LTV → geri ödeme süresi (rakamlar birbirini tutuyor, Python ile doğrulandı).
- SaaS/abonelik metrikleri (MRR, ARR, ARPA, müşteri ve gelir churn'ü, NRR, GRR, Quick Ratio, Rule of 40) — rakiplerin hiçbirinde yok.
- Karıştırılan çiftler tablosu (ROAS–ROI, CPA–CAC, CTR–dönüşüm oranı, erişim–gösterim, MRR–ARR, NRR–GRR, hemen çıkma–etkileşim oranı).
- GA4 tanımları resmî kaynaktan: etkileşimli oturum (10 sn+, anahtar etkinlik veya 2+ sayfa görüntüleme), hemen çıkma oranı = etkileşimsiz oturum yüzdesi.
- Gösterim payının doğru tanımı (uygun gösterimlerin payı, pazar payı değil).
- Ücretsiz hesaplayıcılara bağlantı (ROAS, CAC, LTV, churn, MRR, ARR, ARPA, NRR, Rule of 40, CAC geri ödeme, dönüşüm oranı, kar marjı).

## Yamyamlaşma kontrolü
- KPI nedir yazısı: KPI belirleme/KPI ağacı odaklı; sözlük terim tanımı + formül odaklı → hub KPI yazısına "hangisini KPI seçmeli" için link verir.
- SaaS Metrikleri 101 yazısı: yorum odaklı uzun yazı; sözlük her metriğe 2-3 cümle verir ve detay için o yazıya/“nedir” yazılarına gönderir. İleride C3'ün "SaaS metrikleri" hub'ı ayrı URL açmak yerine bu yazının güçlendirilmesiyle yapılabilir (öneri).
- Takvimdeki MER (21 Kas), ARPU (18 Kas), POAS (24 Kas), dönüşüm oranı (23 Kas) yazılarıyla çakışmayı önlemek için bu metriklere yalnızca tanım + formül verildi; ayrıntılı rehber o yazılara kalıyor.

## Kaynaklar
- GA4 metrik tanımları: https://support.google.com/analytics/answer/12195621?hl=tr
- Google Ads Yardım (ortalama TBM): https://support.google.com/google-ads/answer/14074
