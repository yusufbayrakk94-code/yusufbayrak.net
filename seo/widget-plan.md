# Gömülebilir araç widget'ı — uygulama planı (haftalık otorite işi, 24–30 Eki)

Durum: YAYINDA (2026-10-27; kullanıcı "agresifleştir" diyerek onayladı). Araçlar: ROAS, Reklam Bütçesi, Trendyol Kâr, Desi (TR + EN). Uygulama: ToolPage embed modu (/embed/<slug>/, /en/embed/<slug>/), EMBED_ROUTES (scripts/routes.mjs; sitemap/llms dışı), tool_use olayına embed=true + embed_referrer. Sonraki adım: dağıtım (araç dizinleri, e-ticaret/pazaryeri blogları, konuk yazılar).

İlk plan (2026-10-25): Amaç: başka sitelerin araçlarımızı sayfalarına eklemesi ve doğal atıf linki vermesi.
Ücretli link yok; atıf linki takip edilebilir (dofollow) ama zorunlu tutulmaz, yalnızca varsayılan kodda bulunur.

## Kapsam (ilk sürüm)
- Araçlar: ROAS Hesaplayıcı, Reklam Bütçesi Hesaplama, Trendyol & Hepsiburada Kâr Hesaplama (TR + EN).
- Yöntem: iframe. Her araç için `/embed/<arac-slug>/` (TR) ve `/en/embed/<tool-slug>/` (EN) — yalnızca hesaplayıcı
  bileşeni, site başlığı/altbilgisi yok, `noindex,follow`, canonical asıl araç sayfasına.
- Gömme kodu (araç sayfasında "Bu aracı sitene ekle" kutusu, kopyala düğmesi):
  ```html
  <iframe src="https://yusufbayrak.net/embed/roas-hesaplayici/" width="100%" height="620" style="border:0" loading="lazy" title="ROAS Hesaplayıcı"></iframe>
  <p style="font-size:12px">Araç: <a href="https://yusufbayrak.net/ucretsiz-araclar/roas-hesaplayici/">ROAS Hesaplayıcı – Yusuf Bayrak</a></p>
  ```
- iframe içinde küçük "yusufbayrak.net ile hesaplandı" bağlantısı (target=_blank).
- GA4: `tool_use` olayına `embed=true` parametresi (hangi sitelerde kullanıldığını görmek için referrer).

## Uygulama adımları (PATTERNS.md'ye uygun)
1. `src/pages/embed/EmbedTool.tsx`: araç anahtarına göre hesaplayıcı bileşenini kabuksuz render eder.
2. `scripts/routes.mjs` + `src/i18n/routes.ts`: embed rotaları; sitemap'e EKLENMEZ (noindex), llms.txt'e eklenmez.
3. `public/_headers` yok (GitHub Pages) → iframe'e izin için ek ayar gerekmez; X-Frame-Options gönderilmiyor (kontrol edilecek).
4. Araç sayfalarına "Bu aracı sitene ekle" bölümü (tasarım tokenlarıyla, mevcut ToolPage kabuğunda).
5. Dağıtım: araç dizinleri ve konuk yazı hedef listesinde (31 Eki–6 Kas haftası) gömme kodu teklif edilir.

## Not
Yeni rota türü ve araç sayfası arayüzüne ekleme içerdiği için uygulama kullanıcı onayına sunulacak (rapor).
