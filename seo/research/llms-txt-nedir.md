# llms.txt nedir, işe yarıyor mu? — SERP, kanıt ve rakip analizi (2026-10-29)

Hedef sorgular: "llms txt" 480/ay, "llms txt nedir" 110/ay (Keyword Planner, AdGusto hesabı, 26.10.2026; seo/CONTENT_CALENDAR.md). Hedef sorgu #8.
Takvimdeki 1 Kas satırı öne alındı (MRR ile aynı gün, günde 2 sayfa).

## TR SERP (WebSearch, 29.10.2026 — "llms.txt nedir işe yarıyor mu", "llms.txt nedir ne işe yarar örnek")
1. ideasoft.com.tr/yardim/llms-txt/ — yardım sayfası (WebFetch başarısız)
2. seocrawl.ai/tr/ucretsiz-seo-araclari/llms-txt-uretici — araç
3. seocrawl.ai/tr/blog/llms-txt — blog (~1.800 kelime, 02.06.2026)
4. flowhunt.io/tr/sozluk/llms-txt/ — sözlük (~1.350 kelime)
5. elogic, joinmassive, coredna, mediawax, engageweb (EN)

## İncelenenler
- seocrawl blog: başlıkta "yeni standart", gövdede "öneri, standart değil" (çelişki); "Claude ve Cursor aktif okuyor", "Claude B2B ajanlarının orantısız payını besliyor" kaynaksız; robots.txt/AI bot bölümü yok; ölçüm = kendi prompt takip ürünü; sunucu logu yok; 10–20 URL önerisi ile aracının 60 sayfası çelişkili.
- FlowHunt sözlük: Jeremy Howard/Answer.AI (Eylül 2024), örnek dosya (FastHTML + varsayımsal Nike); fayda iddiaları kaynaksız; ölçüm yok; AI bot yönetimi yok; kendisi "OpenAI/Google resmî desteklemiyor" diyor.
- IdeaSoft yardım: erişilemedi (tanım düzeyi; 28.10 analizinde de böyle not edilmişti).

## Kanıt (doğrulandı)
- Ahrefs, 15.06.2026 (ahrefs.com/blog/llmstxt-study/): 137.210 alan adı, Mayıs 2026; alan adlarının ~%28'inde llms.txt var (üst sınır); dosyaların %97'si ayda hiç istek almadı; ~22 bin isteğin %96'sı bot; AI kategorileri toplam %19,5 (en cömert okuma); botların %77'si AI aracı değil; AI botları içinde GPTBot %4,51, ClaudeBot %0,8, OAI-SearchBot %0,74; Claude-Code GPTBot dışındaki tüm AI arama/asistan/eğitim botlarından fazla; PerplexityBot Slackbot'tan az; Lighthouse ~22 istek; eksik dosyaya (404) gelen isteklerin %98'i insan, AI bot 0. Öneri: önce kendi loglarınıza bakın; prompt injection riskine karşı dosyayı kod gibi yönetin.
- SE Ranking (SEJ, 20.11.2025): ~300 bin alan adı, benimseme %10,13; llms.txt ile AI alıntı sıklığı arasında ilişki yok; değişkeni modelden çıkarmak doğruluğu artırdı.
- Google: AI arama rehberi (SEJ, 15.05.2026) llms.txt ve özel dosya/markup/şema/chunking gerekmediğini söylüyor; önemli olan dizinde ve snippet'e uygun olmak, "non-commodity" içerik, tarama ve JS SEO iyi uygulamaları. John Mueller (Reddit, SEJ 02.06.2026): "purely speculative for now"; çoğu site için asıl engel ajanları engellememek. Lighthouse 13.3 (Mayıs 2026) deneysel "Agentic Browsing" kategorisinde llms.txt denetimi var ("emerging convention").
- Bot belgeleri: OpenAI (GPTBot eğitim, OAI-SearchBot ChatGPT arama, ChatGPT-User kullanıcı isteği — robots.txt uygulanmayabilir; ayarlar bağımsız); Anthropic (ClaudeBot eğitim, Claude-User kullanıcı isteği, Claude-SearchBot arama; Crawl-delay destekli); Google-Extended (Gemini Apps/Vertex AI; Google Search'te dahil edilme ve sıralamayı etkilemez); Perplexity (PerplexityBot arama; Perplexity-User genellikle robots.txt'yi yok sayar).

## Boşluklar (bizim farkımız)
- Türkçe kaynaklarda kanıt verisi (Ahrefs Haziran 2026, SE Ranking) ve Google'ın 2026 açıklamaları yok → "işe yarıyor mu" sorusuna veriye dayalı cevap.
- Sunucu logunda llms.txt isteklerini ölçme adımları (komut, bot doğrulama, 404 yorumlama, statik barındırma notu).
- robots.txt ile AI botlarını amaca göre yönetme (eğitim / arama / kullanıcı isteği ayrımı) ve 3 hazır politika.
- Ne zaman eklemeli karar listesi (doküman/API/SaaS vs e-ticaret/yerel).
- AI aramada asıl sinyaller (Google rehberi).

## Yamyamlaşma
- llms.txt Oluşturucu (/ucretsiz-araclar/llms-txt-olusturucu/) 28.10'da format/örnek/hangi sayfalar/yükleme bölümleriyle güçlendirildi ve "oluşturucu / örnek" işlem niyetini taşıyor. Yazı format detayına girmiyor (araca link), "nedir + işe yarıyor mu + ölçüm + AI bot yönetimi" bilgi niyetinde. relatedToolKey=llms-txt; araç sayfasına relatedPost eklendi.

## Kaynaklar
- https://seocrawl.ai/tr/blog/llms-txt
- https://www.flowhunt.io/tr/sozluk/llms-txt/
- https://www.ideasoft.com.tr/yardim/llms-txt/
- https://ahrefs.com/blog/llmstxt-study/
- https://www.searchenginejournal.com/llms-txt-shows-no-clear-effect-on-ai-citations-based-on-300k-domains/561542/
- https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/
- https://www.searchenginejournal.com/google-says-llms-txt-is-purely-speculative-for-now/577576/
- https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/
- https://developers.openai.com/api/docs/bots
- https://support.claude.com/en/articles/8896518
- https://docs.perplexity.ai/guides/bots
- https://seroundtable.com/google-extended-seo-36865.html
