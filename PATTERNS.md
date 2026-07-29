# PATTERNS.md — kalıcı proje kuralları

Bu dosya, projeye eklenen **her yeni araç veya sayfa** için ayrıca talep
edilmese bile otomatik uygulanması gereken kuralları tanımlar. Yeni bir sayfa
eklerken bu kontrol listesinin tamamı tamamlanmadan iş bitmiş sayılmaz.

## 1. Zorunlu kurallar (her yeni araç/sayfa)

1. **SSG prerender** — sayfa `scripts/routes.mjs` içindeki route envanterine
   eklenir; `npm run build` sonrası `dist/<route>/index.html` olarak fiziksel
   HTML üretilmelidir.
2. **Canonical + karşılıklı hreflang** — sayfa `LocaleMeta` bileşenini render
   eder (`path`, `locale`, `title`, `description`). Canonical kendi URL'sini
   gösterir; `tr`/`en`/`x-default` alternatifleri otomatik basılır.
3. **TR/EN route çifti** — her route iki dilde de var olur ve iki yere birden
   eklenir: `src/i18n/routes.ts` (`STATIC_ROUTE_PAIRS`, `STATIC_TR_ROUTES`,
   `STATIC_EN_ROUTES`) ve `scripts/routes.mjs` (`STATIC_TR`, `STATIC_EN`,
   `ROUTE_PAIRS`).
4. **Otomatik sitemap + llms.txt** — `generate-sitemap.mjs` ve
   `generate-llms-txt.mjs` verilerini route envanteri ile içerik dosyalarından
   okur. Bu dosyalara **elle URL yazılmaz**; route envanterine ekleme yapmak
   yeterlidir.
5. **JSON-LD** —
   - Araç sayfaları: `WebApplication`/`SoftwareApplication` + `FAQPage` +
     `BreadcrumbList` (Ana Sayfa > Ücretsiz Araçlar > Kategori > Araç).
   - Kategori/hub sayfaları: `BreadcrumbList` (+ kategori için `ItemList`).
   - Blog yazıları: `BlogPosting` + `FAQPage` (+ uygunsa `HowTo`) +
     `BreadcrumbList`.
6. **Tutarlı URL kalıbı** —
   - TR araç: `/ucretsiz-araclar/<turkce-slug>`
   - EN araç: `/en/free-marketing-tools/<english-slug>`
   - TR kategori: `/ucretsiz-araclar/<kategori-slug>`
   - EN kategori: `/en/free-marketing-tools/<kategori-slug>`
   Slug'lar dile göre çevrilir; aynı içerik tek bir canonical URL'de kalır.

## 2. İçerik yapısı

- Tüm metinler `src/content/tr/*` ve `src/content/en/*` altında; bileşenlerde
  hardcode metin yok.
- Araç metinleri `ToolContent` tipine uyar (`src/content/types.ts`).
- Araç kategorileri `src/content/{tr,en}/freeTools.ts` içindeki
  `toolCategories` dizisinde tanımlıdır — kategori sayfaları, hub sayfası,
  breadcrumb'lar ve llms.txt bu tek kaynaktan beslenir.
- Bir araç **tek bir birincil kategoriye** aittir (duplicate content olmasın).
  Diğer kategorilerde yalnızca "ayrıca bakınız" linki olarak geçebilir.

## 3. Yeni araç ekleme kontrol listesi

- [ ] `src/content/tr/tools.ts` + `src/content/en/tools.ts` → `ToolContent`
- [ ] `src/content/{tr,en}/freeTools.ts` → `cards` girdisi + ilgili
      `toolCategories[].tools` dizisine key eklenmesi
- [ ] `src/components/tools/toolIcons.ts` → ikon
- [ ] `src/pages/tools/<Tool>.tsx` → sadece hesaplama mantığı, kabuk `ToolPage`
- [ ] `src/App.tsx` → TR + EN route
- [ ] `src/i18n/routes.ts` + `scripts/routes.mjs` → route çifti ve envanter
- [ ] `npm run build` → prerender + sitemap + llms.txt doğrulaması

## 4. Tasarım

- Tema tokenları `src/index.css` üzerinden; bileşenlerde `text-white`,
  `bg-[#...]` gibi sabit renk sınıfı kullanılmaz.
- Araç ve kategori kartları `src/components/tools/ToolCard.tsx` pattern'ini
  kullanır.
