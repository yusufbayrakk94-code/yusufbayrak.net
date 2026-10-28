import type { ToolContent } from "../types";

// Per-calculator EN content. Number formatting for the EN pages uses USD/en-US
// so results look native to English-speaking users. Formulas stay identical.

export const toolBackLabel = "Back to Free Tools";
export const toolBackHref = "/en/free-tools";
export const toolCalculatorDivider = "Calculator";
export const toolGuideDivider = "Guide";
export const toolFaqDivider = "Frequently Asked Questions";
export const currency = "USD" as const;
export const numberLocale = "en-US" as const;

export const arr: ToolContent = {
  slug: "arr",
  path: "/en/free-tools/arr-calculator",
  title: "ARR Calculator",
  description: "Calculate Annual Recurring Revenue (ARR) from MRR or from customer count and ARPU in seconds.",
  intro: "ARR (Annual Recurring Revenue) shows the annualised recurring revenue of a subscription business. Enter MRR, or derive it from customer count and average revenue per user.",
  seoParagraphs: [
    { heading: "What is ARR and why does it matter?", body: "ARR (Annual Recurring Revenue) is the sum of contractual, recurring revenue a subscription business expects over a year. One-off sales, setup fees and variable usage revenue are excluded — only predictable, recurring line items are counted. That's why ARR is the primary financial metric for SaaS growth, health and predictability." },
    { body: "Investors use ARR as both a valuation anchor and an operational KPI. Compared to monthly MRR, ARR gives a de-seasoned view and provides a more stable reference for annual planning, budgeting and goal setting. Sub-breakdowns like Net New ARR, Expansion ARR and Churned ARR reveal where growth is actually coming from." },
    { body: "ARR shouldn't be read in isolation. Interpret it alongside growth rate, net revenue retention (NRR) and CAC payback. Strong ARR growth becomes a sustainable SaaS business only when it is paired with healthy unit economics." },
  ],
  faqs: [
    { q: "What's the difference between ARR and MRR?", a: "MRR is monthly recurring revenue; ARR is its annualised form. The simple relationship is ARR = MRR × 12, but ARR is the standard for annual planning, cohort analysis and investor communication." },
    { q: "Do one-time revenues count toward ARR?", a: "No. Setup fees, consulting, one-off licence sales and variable usage revenue are excluded. ARR only includes contractual, recurring subscription revenue." },
    { q: "What is a healthy ARR growth rate?", a: "Early-stage SaaS targets 100%+ annual ARR growth; scale-ups treat 40-60% as good. It varies with sector, TAM and customer segment." },
    { q: "What is Net New ARR?", a: "New ARR added in a period plus expansion ARR from existing customers, minus churn and contraction ARR. It shows the true quality of growth." },
  ],
};

export const cac: ToolContent = {
  slug: "cac",
  path: "/en/free-tools/cac-calculator",
  title: "CAC Calculator: Customer Acquisition Cost",
  description: "Calculate blended and paid customer acquisition cost (CAC) and your CAC payback period. Formula, worked example and FAQ.",
  intro: "CAC (Customer Acquisition Cost) is the average cost to acquire a customer. It's critical for measuring channel efficiency and growth sustainability.",
  seoParagraphs: [
    { heading: "What is CAC (Customer Acquisition Cost)?", body: "CAC is calculated by dividing total marketing and sales cost in a given period by the number of customers acquired in that period. Ad budget, team salaries, tool licences, agency fees and campaign production costs — every direct and indirect line item — belongs in this calculation." },
    { body: "CAC on its own isn't good or bad; it only becomes meaningful next to LTV (Lifetime Value) and CAC payback period. The widely accepted rule is that LTV / CAC of 3x or higher signals healthy unit economics; a ratio below 1 means every new customer loses money for the business." },
    { body: "The best strategies for optimising CAC are channel-level attribution, conversion rate optimisation, shortening the sales cycle and strengthening organic and referral channels. Alignment between marketing and sales is one of the most decisive operational factors." },
    { heading: "Worked example: blended CAC, paid CAC and payback", body: "A company spending $5,000 on marketing (of which $3,500 on ads) and $3,000 on sales in a month, winning 100 new customers, has a blended CAC of $80. If 60 of them came from paid ads, paid CAC is $3,500 / 60 ≈ $58. With $15 monthly revenue per customer and a 75% gross margin, each customer contributes $11.25 a month, so CAC pays back in about 7.1 months." },
    { heading: "CAC in B2B", body: "Because B2B sales cycles span weeks or months, this month's spend often wins next quarter's customers. Lag spend by your average sales cycle or use a 3-month rolling average, and track cost per lead, per SQL and per customer separately to find the bottleneck." },
  ],
  faqs: [
    { q: "What should be included in CAC?", a: "Ad spend, marketing and sales team salaries and bonuses, tool/software licences, agency and third-party fees and campaign production costs all belong in CAC." },
    { q: "What's a good CAC value?", a: "There is no absolute good CAC — it's judged against LTV. Aim for LTV / CAC ≥ 3x and CAC payback under 12 months for B2B SaaS." },
    { q: "How do you lower CAC?", a: "Conversion rate optimisation (CRO), re-balancing channel mix by efficiency, strengthening organic/SEO and referral programmes, and shortening the sales cycle are the highest-impact levers." },
    { q: "Blended CAC vs. Paid CAC — what's the difference?", a: "Blended CAC includes all customers (organic + paid). Paid CAC counts only those acquired through paid channels — better for judging channel efficiency." },
    { q: "Should salaries be included in CAC?", a: "For fully loaded CAC, yes — include sales and marketing salaries, commission and payroll taxes. For channel efficiency, paid CAC (ad spend only) is more useful. State which version you report." },
    { q: "How do I calculate CAC payback?", a: "CAC payback = CAC / (Monthly revenue per customer × Gross margin). An $80 CAC with $15 monthly revenue at 75% margin pays back in about 7.1 months." },
  ],
};

export const churn: ToolContent = {
  slug: "churn",
  path: "/en/free-tools/churn-rate-calculator",
  title: "Churn Rate Calculator: Monthly, Annual & Revenue Churn",
  description: "Calculate monthly churn, compounded annual churn, average customer lifetime and gross/net revenue churn. Formula, example and FAQ.",
  intro: "Churn Rate is the percentage of customers you lose in a given period. Low churn is one of the strongest signals of healthy SaaS growth.",
  seoParagraphs: [
    { heading: "What is Churn Rate and why is it critical?", body: "Churn Rate is the percentage of the customers you had at the start of a period who left during that period. In SaaS and subscription models churn is the silent killer of growth — every lost customer offsets a chunk of new sales and lowers real net growth." },
    { body: "Churn is measured two main ways: Customer Churn on customer count, Revenue Churn on lost MRR/ARR. Enterprise tends to prefer Revenue Churn because it reflects the impact of larger accounts. Healthy SaaS targets monthly churn of 3-5% at SMB, below 1% at enterprise." },
    { body: "The most effective ways to reduce churn are strengthening onboarding, tracking in-product activation metrics, running a proactive customer success motion and using predictive models like churn risk scoring to catch at-risk accounts early." },
    { heading: "Monthly to annual churn: why not ×12?", body: "Churn compounds because the customer base shrinks each month: Annual churn = 1 − (1 − monthly churn)^12. A 5% monthly churn is about 46% annually, not 60%. Average customer lifetime is roughly 1 / monthly churn — 20 months at 5%." },
    { heading: "Customer churn vs revenue churn", body: "Gross revenue churn = (Cancelled + Contraction MRR) / Starting MRR. Net revenue churn also subtracts expansion MRR. If net revenue churn is negative, growth from existing customers outweighs losses — the same as NRR above 100%." },
  ],
  faqs: [
    { q: "What is a good monthly churn rate?", a: "For SMB-focused SaaS, 3-5% monthly is acceptable. Mid-market targets 1-2%; enterprise, below 1%. Annually, sub-5-7% is considered good." },
    { q: "Customer Churn vs. Revenue Churn?", a: "Customer Churn measures the number of lost customers; Revenue Churn measures lost MRR/ARR. Because larger accounts have outsized revenue impact, Revenue Churn is usually the more critical view." },
    { q: "What is negative churn?", a: "When upsell and expansion revenue from existing customers exceeds lost revenue. Net revenue retention (NRR) then climbs above 100% and the company grows even without new customers." },
    { q: "First step to reduce churn?", a: "Do a cohort analysis to see when churn happens. Early churn usually points to onboarding; late churn points to gaps in value delivery." },
    { q: "How do I convert monthly churn to annual churn?", a: "Annual churn = 1 − (1 − monthly churn)^12. 5% monthly is about 46% annually." },
    { q: "What is negative churn?", a: "When expansion revenue from existing customers exceeds revenue lost to cancellations and downgrades, net revenue churn is negative and you grow even without new customers." },
  ],
};

export const ltv: ToolContent = {
  slug: "ltv",
  path: "/en/free-tools/ltv-calculator",
  title: "LTV Calculator: Customer Lifetime Value (SaaS & E-commerce)",
  description: "Calculate margin-based customer lifetime value (LTV) for SaaS or e-commerce and compare it with CAC. Formulas, example and FAQ.",
  intro: "LTV (Lifetime Value) is the present value of total revenue a customer produces over the length of the relationship. Target an LTV/CAC ratio of 3x or more.",
  seoParagraphs: [
    { heading: "What is LTV (Lifetime Value)?", body: "LTV is the present value of the total net revenue a customer generates over their relationship with the company. The most common formula is LTV = (ARPU × Gross Margin) / Churn — a single number that combines how long a customer stays with how profitably they contribute." },
    { body: "LTV becomes most powerful when compared to CAC. LTV / CAC of 3x or higher signals healthy unit economics. Getting close to 1 means growth is unprofitable; above 5 usually means the business is under-investing in growth. CAC payback under 12 months is a critical threshold for cash-flow sustainability." },
    { body: "The most effective ways to grow LTV are lowering churn, expanding ARPU via upsell and cross-sell and improving gross margin. When product, pricing and customer success share LTV as a KPI, growth becomes more sustainable." },
    { heading: "LTV for e-commerce", body: "Without subscriptions, LTV = Average order value × Orders per year × Customer lifespan (years) × Gross margin. A customer with a $65 AOV ordering 3 times a year for 2 years brings $390 in revenue; at a 40% margin LTV is $156." },
    { heading: "Always use margin, not revenue", body: "Revenue-based LTV overstates customer value — especially at low margins — and leads to overspending on acquisition. The calculator shows both, but base decisions on margin-based LTV." },
  ],
  faqs: [
    { q: "How is LTV calculated?", a: "The most common formula: LTV = (Monthly ARPU × Gross Margin %) / Monthly Churn. It combines per-customer profitability and expected tenure into one figure." },
    { q: "What is the ideal LTV / CAC ratio?", a: "3x or higher is healthy. 1x-2x means weak unit economics; above 5x usually means you could invest more aggressively in growth." },
    { q: "Why use gross margin in LTV?", a: "Because real profit — not top-line revenue — is what matters. Gross margin after hosting, payment fees and support cost reflects LTV's true financial value." },
    { q: "Fastest way to grow LTV?", a: "Reducing churn is usually the highest-leverage move: cutting monthly churn from 5% to 3% grows LTV by roughly 67%. Growing ARPU via upsell comes next." },
    { q: "What is the difference between LTV and CLV?", a: "They describe the same concept: the total value a customer brings over the relationship. Some sources reserve CLV for discounted, predictive versions." },
    { q: "How do I calculate e-commerce LTV?", a: "LTV = AOV × Orders per year × Lifespan in years × Gross margin." },
  ],
};

export const roas: ToolContent = {
  slug: "roas",
  path: "/en/free-tools/roas-calculator",
  title: "ROAS Calculator: ROAS, Break-Even ROAS & POAS",
  description: "Free ROAS calculator: ROAS formula, break-even ROAS from your margin, profit after ads, POAS (profit ROAS) and the target ROAS for your profit goal.",
  intro: "Enter ad revenue and ad spend to calculate ROAS. Add your gross or contribution margin and the calculator also returns break-even ROAS, whether the campaign is profitable, profit after ads, POAS (profit on ad spend) and the ROAS you need for a target profit share. Most ROAS calculators stop at the ratio; profitability is decided by the break-even threshold.",
  seoParagraphs: [
    { heading: "What is ROAS and how do you read it?", body: "ROAS is a performance marketing metric that measures the direct return of ad investment. The formula is simple: ROAS = Ad Revenue / Ad Spend. A 4x ROAS means every $1 spent produces $4 of revenue. It is the primary optimisation target on Meta Ads, Google Ads and LinkedIn Ads." },
    { body: "Because ROAS is measured on revenue, it doesn't guarantee profit. With product cost, shipping, refund rate and operating costs factored in, break-even ROAS is different for every business. For example, an e-commerce brand with 30% gross margin needs roughly 3.33x break-even ROAS — any campaign below that is losing money. That's why ROAS should be tracked alongside POAS (Profit on Ad Spend)." },
    { body: "The best ways to improve ROAS: tighten audience targeting, rotate creatives faster, lift landing page conversion rate and move bidding strategies to value-based models." },
    { heading: "ROAS formula with an example", body: "ROAS = Ad revenue / Ad spend. Spend $25,000 and generate $100,000 of revenue (excluding VAT/sales tax and refunds) and ROAS is 4. Break-even ROAS = 1 / margin: at a 30% contribution margin it is 3.33, so a 4 ROAS is profitable — profit after ads = 100,000 × 0.30 − 25,000 = $5,000. Target ROAS = 1 / (margin − target profit share): to keep 10% of revenue as profit at a 30% margin you need 1 / 0.20 = 5." },
    { heading: "Gross ROAS vs net ROAS vs profit ROAS (POAS)", body: "Gross ROAS is the ratio ad platforms report: total attributed revenue, often including tax and later-refunded orders, divided by spend. Net ROAS uses revenue after tax and refunds and is the version to manage the business on. Profit ROAS, also called POAS, divides the gross profit generated by ads by spend (POAS = revenue × margin / spend); 1.0 is break-even, so it can be read without knowing the margin. A campaign with 4 gross ROAS can have about 3.3 net ROAS after 20% VAT and refunds, and 1.0 POAS at a 30% margin — exactly break-even." },
  ],
  faqs: [
    { q: "What's a good ROAS value?", a: "It depends on sector and margin. For e-commerce, 4x is a common baseline; with low gross margin you may need 5-6x, and high-margin digital products can be profitable at 2-3x. Always benchmark against your own break-even ROAS." },
    { q: "ROAS vs. ROI — what's the difference?", a: "ROAS only compares ad revenue to ad spend. ROI divides net profit (revenue - total cost) by investment and shows real profitability. ROAS is a marketing metric; ROI is a finance one." },
    { q: "What is the ROAS formula?", a: "ROAS = Ad revenue / Ad spend. $100,000 of revenue from $25,000 of spend is a 4 ROAS. Use revenue excluding tax and refunds." },
    { q: "How do you calculate break-even ROAS?", a: "Break-even ROAS = 1 / Gross Margin. So at 25% gross margin, break-even is 4x; anything below is a loss. Contribution margin (after shipping and fees) gives a more accurate threshold." },
    { q: "What is profit ROAS (POAS)?", a: "POAS = gross profit from ads / ad spend = revenue × margin / spend. Unlike ROAS, its break-even point is always 1.0, so above 1 the campaign is profitable after product cost." },
    { q: "Why track ROAS alongside POAS?", a: "ROAS looks at revenue; POAS looks at profit. Once product cost, refunds and shipping are included, the two can diverge sharply. Profitable growth is decided with POAS." },
    { q: "How do you improve ROAS?", a: "There are three levers: raise conversion rate (landing page, offer, page speed), grow average order value (bundles, cross-sell, free-shipping threshold) and lower click cost (search-term cleanup, creative refresh, tighter audiences). Measure conversion rate and AOV separately to see which one is holding the campaign back." },
    { q: "How often should ROAS be reviewed?", a: "Daily ROAS is noisy and drives bad decisions. Evaluate on a rolling window of at least 7 days so the attribution delay is covered; for budget-shifting decisions, 14-28 days of data is far safer." },
  ],
  relatedTools: [
    { label: "Conversion Rate Calculator", href: "/en/free-tools/conversion-rate-calculator", note: "The strongest ROAS lever" },
    { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator", note: "Break-even ROAS = 1 / gross margin" },
    { label: "UTM Link Builder", href: "/en/free-tools/utm-builder", note: "Accurate channel-level measurement" },
  ],
  relatedPost: { label: "What Is ROAS & How to Calculate It?", href: "/en/blog/what-is-roas-how-to-calculate/" },
};

export const utm: ToolContent = {
  slug: "utm",
  path: "/en/free-tools/utm-builder",
  title: "UTM Builder: Create UTM Links With GA4 Channel Check",
  description: "Build UTM links and see which GA4 channel (Paid Social, Email, Unassigned…) they'll land in before you share them. Presets plus lowercase and accent clean-up.",
  intro: "Enter your URL and campaign details or pick a preset. The tool lowercases and cleans your values, predicts which GA4 default channel group the traffic will be reported in, and flags mistakes that cause 'Unassigned' traffic before you share the link.",
  seoParagraphs: [
    { heading: "What are UTM parameters?", body: "UTM parameters are tags appended to a URL that tell analytics tools which source, channel type and campaign a visitor came from. There are five: utm_source (facebook, newsletter), utm_medium (channel type: paid_social, email, cpc), utm_campaign (campaign name), utm_term (paid search keyword) and utm_content (ad or creative variant). Always set source, medium and campaign together; a missing parameter shows up as (not set) in GA4 reports." },
    { heading: "How does GA4 map UTMs to channels?", body: "GA4 assigns each session's source and medium to default channel groups (Paid Social, Paid Search, Email, Organic Social, Referral and so on) using rules Google publishes. utm_medium usually decides: mediums starting with 'paid' or containing 'cp' (cpc, cpm, paid_social) go to paid channels, 'email' to Email, 'social' to Organic Social, 'referral' to Referral and 'affiliate' to Affiliates. Source matters for paid splits: facebook + paid_social lands in Paid Social, google + cpc in Paid Search. Combinations that match no rule (e.g. source=march-digest with medium=story, or source=trade-show with medium=offline) are reported as 'Unassigned' and disappear from budget decisions. This tool predicts the channel instantly using Google's rules." },
    { heading: "How to avoid Unassigned traffic", body: "The most common cause is a non-standard medium (story, bio, influencer, offline) combined with a source GA4 doesn't recognise. The rule is simple: platform in utm_source, channel type in utm_medium, using mediums GA4 recognises (paid_social, cpc, social, email, referral, affiliate, sms): source=instagram and medium=paid_social for an Instagram ad, source=whatsapp and medium=social for a WhatsApp share. For QR codes on printed material, a recognised medium such as referral keeps the traffic out of Unassigned; create a custom channel group in GA4 if you want to track offline separately." },
    { heading: "A UTM naming convention", body: "GA4 treats UTM values as case-sensitive: 'Facebook' and 'facebook' are reported as two sources. Use one standard across the team: lowercase only, hyphens between words, ASCII instead of accented characters and a fixed list of sources. Add the period to campaign names (black-friday-2026) so you can compare year over year, and keep utm_content short and consistent for creative tests (video-a, video-b)." },
    { heading: "Google Ads: UTMs or auto-tagging?", body: "With auto-tagging on, Google Ads appends a gclid parameter to ad clicks. According to Google's GA4 help, when gclid and manual UTMs are both present, source, medium and other traffic-classification dimensions use the auto-tagged values, while manual utm_term and utm_content still populate separate 'manual' dimensions. For Google Ads, keep auto-tagging on and link GA4 to your Ads account; use manual UTMs for Meta, LinkedIn, TikTok, email, influencers and SMS." },
    { heading: "Where not to use UTMs", body: "Don't add UTMs to internal links on your own site: reading new campaign data mid-visit overwrites the visitor's original source and breaks attribution. Don't expose UTM URLs to organic search either; canonical tags should point to the clean URL. If long UTM links look messy on social, use a link shortener — it keeps the parameters through the redirect." },
  ],
  faqs: [
    { q: "How do you create a UTM link?", a: "Append ?utm_source=...&utm_medium=...&utm_campaign=... to the page URL. In this tool, enter the URL and fill in source, medium and campaign or pick a preset; the link is built automatically and copied with one click." },
    { q: "Which UTM parameters are required?", a: "For accurate reporting set utm_source, utm_medium and utm_campaign together. utm_term and utm_content are optional and used for keywords and creative/variant splits." },
    { q: "Why does GA4 show Unassigned traffic?", a: "A session is reported as Unassigned when its source/medium combination matches none of GA4's default channel rules. The usual cause is a non-standard value in utm_medium (story, bio, offline). Switch to a recognised medium such as email, social, paid_social, cpc, referral or affiliate." },
    { q: "What UTMs should I use for Meta (Facebook/Instagram) ads?", a: "Use facebook or instagram as the source and paid_social as the medium; GA4 assigns this to Paid Social. You can fill utm_campaign and utm_content automatically with Meta's dynamic URL parameters." },
    { q: "Are UTM tags case-sensitive?", a: "Yes. GA4 reports 'Facebook' and 'facebook' as different sources. The tool lowercases all values and converts accented characters to ASCII by default." },
    { q: "Should I add UTMs to Google Ads links?", a: "If auto-tagging (gclid) is on, GA4 uses auto-tagged values for source and medium and ignores manual UTMs for those dimensions. Keep auto-tagging on and link GA4 to Google Ads; use manual UTMs for other channels." },
  ],
  relatedTools: [
    { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator/", note: "Return by channel" },
    { label: "Ad Budget Calculator", href: "/en/free-tools/ad-budget-calculator/", note: "Plan channel budgets" },
    { label: "Conversion Rate Calculator", href: "/en/free-tools/conversion-rate-calculator/", note: "Campaign conversions" },
  ],
  externalSource: { label: "Google Analytics Help: Default channel group rules", href: "https://support.google.com/analytics/answer/9756891" },
};

export const llmsTxt: ToolContent = {
  slug: "llms-txt",
  path: "/en/free-tools/llms-txt-generator",
  title: "llms.txt Generator",
  description:
    "Create and download a free llms.txt file to help AI bots (ClaudeBot, GPTBot, Perplexity) understand your website better.",
  intro:
    "Enter your site name, a short description and the important documentation, example and optional links. The tool converts your input into a Markdown file that follows the llmstxt.org standard, with a live preview and a one-click .txt download.",
  seoParagraphs: [
    { heading: "What Is llms.txt and Why Does It Matter?", body: "llms.txt is a small Markdown file placed at the root of a website that tells large language models what the site is about, which pages matter, and how the content is organised. AI crawlers such as ClaudeBot, GPTBot and PerplexityBot check this file to build a fast, structured map of your documentation, examples and key resources — before diving into the raw HTML." },
    { body: "robots.txt tells crawlers where they may go; sitemap.xml gives them a machine-readable list of URLs to index. llms.txt does not replace either — it complements them. Its job is to provide a human-written 'site guide': project name, a one-sentence summary, curated documentation links, examples and optional resources. That context helps LLMs cite your site more accurately when they answer user questions." },
    { body: "SaaS products, documentation sites, personal portfolios and content-heavy projects benefit the most from adding llms.txt. It is the fastest way to be represented correctly in generative search engines (Generative Engine Optimization / GEO). Preparing the file takes minutes, but it directly shapes how AI systems discover and quote your site." },
  ],
  faqs: [
    { q: "Where should I upload the llms.txt file?", a: "It must be placed at the root of your domain and reachable at https://yourdomain.com/llms.txt. Placing it in a sub-directory or a sub-domain means AI crawlers may not find it." },
    { q: "What is the difference between robots.txt and llms.txt?", a: "robots.txt defines which paths crawlers are allowed to fetch. llms.txt describes what your site is about and which resources matter, written for LLMs as a short human-written guide. One controls access, the other provides context — they do not replace each other." },
    { q: "Does this file affect my SEO ranking?", a: "No. llms.txt is not a ranking signal for classic search engines like Google or Bing. Its purpose is to help LLM-based systems (ChatGPT, Claude, Perplexity) understand and cite your site accurately. It targets generative search visibility (GEO), not traditional SEO." },
    { q: "What information should llms.txt include?", a: "At a minimum: the project or site name, a single-sentence description and links to the most important documentation pages. Optionally you can list examples, blog posts, API references and optional resources. Keep it concise — the detail lives in the pages you link to." },
  ],
};

export const enTools = { arr, cac, churn, ltv, roas, utm, llmsTxt };

export const grossMargin: ToolContent = {
  slug: "gross-profit-margin",
  path: "/en/free-tools/gross-profit-margin-calculator",
  title: "Gross Profit Margin Calculator",
  description:
    "Calculate your gross profit margin instantly. Enter your revenue and cost of goods sold to see profitability at a glance.",
  intro:
    "Gross profit margin shows what share of your revenue is left after the cost of goods sold (COGS). Enter total revenue and COGS to see the result as both a percentage and an absolute amount.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "How is gross profit margin calculated?", body: "The formula is simple: Gross Profit Margin = ((Revenue − COGS) / Revenue) × 100. COGS covers the direct costs of producing or sourcing what you sell — raw materials, production labour, supplier invoices, and shipping or packaging directly attributable to the product. Operating costs such as marketing, rent and management salaries are excluded; those belong in net profit margin." },
    { body: "Gross margin is the most direct read on your pricing power and sourcing efficiency. When it falls, either your selling price is under pressure or unit costs are rising. Track margin per product or category to separate the two — a blended figure hides the mix of profitable and unprofitable SKUs." },
    { heading: "Industry reference ranges", body: "There is no universal target; it varies with the business model. As rough guidance: e-commerce and retail typically land in the 20-50% band, services and agencies around 40-60%, and SaaS or digital products in the 70-90% range. Treat these as orientation rather than hard claims — your own period-over-period trend is a more meaningful benchmark than any industry average." },
  ],
  faqs: [
    { q: "What is gross profit margin?", a: "Gross profit margin is the share of revenue left after subtracting the cost of goods sold: ((Revenue − COGS) / Revenue) × 100. It measures the underlying profitability of your product or service, independent of operating expenses." },
    { q: "What is a good gross profit margin?", a: "It depends on the model. Rough ranges: e-commerce 20-50%, services 40-60%, SaaS 70-90%. Rather than chasing a fixed threshold, watch your own trend — a declining margin signals price pressure or rising unit costs." },
    { q: "What is included in COGS?", a: "Direct costs of making a product sellable: raw materials, production labour, supplier and contract-manufacturing invoices, plus product-attributable shipping, packaging and payment fees. Rent, marketing budget, management salaries and taxes are not part of COGS." },
    { q: "What is the difference between gross and net profit margin?", a: "Gross margin subtracts only COGS and measures product-level profitability. Net margin subtracts every cost — operating expenses, marketing, interest and tax — showing the true profitability of the business. Read them together using the Net Profit Margin Calculator." },
  ],
  relatedTools: [
    { label: "Net Profit Margin Calculator", href: "/en/free-tools/net-profit-margin-calculator", note: "True profitability, all costs included" },
    { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator", note: "Return on ad spend" },
    { label: "CAC Calculator", href: "/en/free-tools/cac-calculator", note: "Customer acquisition cost" },
  ],
  relatedPost: { label: "How to Calculate Profit Margin (Margin vs Markup)", href: "/en/blog/how-to-calculate-profit-margin/" },
  externalSource: { label: "Source: Investopedia — Gross Profit Margin", href: "https://www.investopedia.com/terms/g/gross_profit_margin.asp" },
};

export const netMargin: ToolContent = {
  slug: "net-profit-margin",
  path: "/en/free-tools/net-profit-margin-calculator",
  title: "Net Profit Margin Calculator",
  description:
    "Calculate your net profit margin instantly. Enter your revenue and total expenses to see your business's true profitability.",
  intro:
    "Net profit margin shows what share of revenue you keep after every cost — COGS, operating expenses, interest and tax. Enter total revenue and total expenses to see the result as a percentage and an amount.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "How is net profit margin calculated?", body: "The formula: Net Profit Margin = ((Revenue − Total Expenses) / Revenue) × 100. Unlike gross margin, total expenses cover the entire cost base: COGS, payroll, rent, software subscriptions, marketing and advertising, accounting and consulting, depreciation, loan interest and taxes." },
    { body: "Net margin is the ultimate efficiency read on a business. A high gross margin paired with a thin net margin says the problem is not production or sourcing but the cost structure — usually bloated marketing spend, an inefficient team shape or financing costs. Reading both margins side by side is far more informative than either alone." },
    { heading: "Reading the margin carefully", body: "Net margin swings with timing: one-off investments, tax schedules or FX effects can distort a single quarter. Track a 3-12 month rolling average rather than a single month, and where possible strip out one-off items to compute a normalised margin as well." },
  ],
  faqs: [
    { q: "What is net profit margin?", a: "Net profit margin is net profit as a share of revenue after all expenses: ((Revenue − Total Expenses) / Revenue) × 100. It shows how much of every 100 units of revenue the business actually keeps." },
    { q: "What is a good net profit margin?", a: "It varies by sector. As guidance, 2-10% is common in retail and e-commerce, 10-20% in services and 15-25% in mature SaaS. Growth-stage companies may run negative net margin deliberately; what matters is the direction of travel and the cash runway." },
    { q: "Why is net profit margin lower than gross profit margin?", a: "Because gross margin subtracts only COGS, while net margin also removes marketing, payroll, rent, software, interest and tax. The gap between the two measures your operating cost load." },
    { q: "What should be included in total expenses?", a: "Everything: COGS plus payroll and benefits, rent and utilities, software subscriptions, marketing and ad spend, consulting and accounting, depreciation, loan interest and taxes. If you want to isolate direct product cost, use the Gross Profit Margin Calculator." },
  ],
  relatedTools: [
    { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator", note: "Profitability after COGS only" },
    { label: "CAC Calculator", href: "/en/free-tools/cac-calculator", note: "Customer acquisition cost" },
    { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator", note: "Return on ad spend" },
  ],
  relatedPost: { label: "How to Calculate Profit Margin (Margin vs Markup)", href: "/en/blog/how-to-calculate-profit-margin/" },
  externalSource: { label: "Source: Investopedia — Net Profit Margin", href: "https://www.investopedia.com/terms/n/net_margin.asp" },
};

export const conversionRate: ToolContent = {
  slug: "conversion-rate",
  path: "/en/free-tools/conversion-rate-calculator",
  title: "Marketing Conversion Rate Calculator",
  description:
    "Calculate your marketing or e-commerce campaign's conversion rate instantly — free online tool for websites, ads, and retail funnels.",
  intro:
    "Enter your total visitors and conversions to see your conversion rate instantly. Add a target rate and the tool also shows the gap and how many extra conversions you need to hit it.",
  seoParagraphs: [
    { heading: "How is conversion rate calculated?", body: "The formula is simple: Conversion Rate = (Conversions / Total Visitors) × 100. A 'conversion' is whatever valuable action you define on the page: a purchase, form submission, demo request, quote request, app install or newsletter signup. If a page carries several conversion types, track a separate rate for each — rolling them into one number hides the real bottleneck." },
    { body: "Conversion rate is the bridge between traffic and revenue. Lifting the rate without adding traffic means more customers from the same ad budget, which is why conversion rate optimisation (CRO) is usually the fastest way to bring CAC down. Always segment by source, device and campaign — a two-fold gap between mobile and desktop is common." },
    { heading: "Measuring conversion rate on an e-commerce site", body: "To measure sales per visitor on your e-commerce site, define the conversion as a completed order and check the rate per unique visitor as well as per session. In retail a single blended rate is misleading: category pages, product detail pages and the cart-to-checkout steps each need their own rate. A typical funnel loses most visitors before the product page, then 60-80% of the people who add to cart drop out during checkout. Late shipping-cost disclosure, forced account creation, limited payment options and a slow mobile experience are the four most common causes. Track mobile and desktop separately, and treat sale periods as their own cohort." },
    { heading: "Benchmark ranges by sector", body: "There is no universal target. As orientation: e-commerce sites typically land at 1-4%, B2B lead forms at 2-5%, dedicated landing page campaigns at 5-15%, and email-driven traffic often higher. These are rough references — your own historical trend and in-channel variant tests are the benchmarks that matter." },
  ],
  faqs: [
    { q: "What is a good conversion rate?", a: "It depends on the sector and the quality of the traffic. Rough ranges: e-commerce 1-4%, B2B form fills 2-5%, dedicated landing page campaigns 5-15%. Rather than chasing a fixed threshold, watch your own trend and the differences between channels." },
    { q: "What is a good conversion rate for e-commerce?", a: "The common reference range for e-commerce is 1-4%, and 2-3% is considered healthy for most retail stores. It varies widely by category and traffic quality: high-ticket or long-consideration products often sit below 1%, while fast-moving categories with strong repeat purchase can exceed 5%. Branded search traffic converts several times better than generic paid traffic, so watch the channel and device breakdown rather than a single blended number." },
    { q: "How do you improve conversion rate?", a: "The highest-impact moves: improve page speed, use a single clear call to action, cut form fields, keep message match between ad and landing page, add social proof and trust signals, and run continuous A/B tests. Test one change at a time so you can attribute the lift." },
    { q: "What is the difference between conversion rate and CTR?", a: "CTR (click-through rate) measures the share of people who saw an ad or link and clicked it. Conversion rate measures the share of people who arrived on the site and completed the target action. CTR reflects ad creative performance; conversion rate reflects the landing page and the offer." },
    { q: "Which tools measure conversion rate?", a: "Google Analytics 4 (key events), Google Tag Manager, the Google Ads and Meta Ads dashboards, CRMs such as HubSpot, and behaviour tools like Hotjar or Microsoft Clarity. Tag your campaign links with UTM parameters so source-level attribution stays accurate." },
  ],
  relatedTools: [
    { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator", note: "Return on ad spend" },
    { label: "CAC Calculator", href: "/en/free-tools/cac-calculator", note: "Customer acquisition cost" },
    { label: "UTM Link Builder", href: "/en/free-tools/utm-builder", note: "Accurate campaign tagging" },
  ],
  relatedPost: { label: "7 Ways to Multiply Google Ads Performance", href: "/en/blog/google-ads-performance-optimization" },
  externalSource: { label: "Source: Google Analytics Help — Conversion rate", href: "https://support.google.com/analytics/answer/12966437" },
};

export const mrr: ToolContent = {
  slug: "mrr",
  path: "/en/free-tools/mrr-calculator",
  title: "MRR Calculator",
  description:
    "Calculate your Monthly Recurring Revenue from customer count and average subscription price in seconds.",
  intro:
    "MRR (Monthly Recurring Revenue) is the revenue your subscription business can expect every month. Enter your customer count and average monthly price, or type the monthly total directly — MRR and the matching ARR are calculated instantly.",
  seoParagraphs: [
    { heading: "What is MRR and how is it calculated?", body: "MRR (Monthly Recurring Revenue) is the total contracted revenue a subscription business expects to repeat each month. The simplest formula is MRR = Active Customers × Average Monthly Subscription Price (ARPA). Annual plans are normalised by dividing the yearly amount by 12; setup fees, consulting and one-off sales are excluded from MRR." },
    { heading: "The MRR × 12 = ARR relationship", body: "MRR and ARR are the same revenue on two time scales: ARR = MRR × 12. The monthly view drives operational decisions — campaigns, pricing, team capacity — while the annual view supports planning, budgeting and investor communication. For the relationship to hold, MRR must be normalised so every billing cycle is expressed monthly. Use the ARR Calculator to see the annual side." },
    { body: "Tracking MRR as a single total is not enough. Breaking it into New MRR, Expansion MRR, Contraction MRR and Churned MRR shows where growth comes from and where it leaks. Net New MRR = New + Expansion − Contraction − Churned is the most honest indicator of growth quality." },
    { heading: "Worked example: MRR for a SaaS with 500 customers", body: "Say your product has 500 active customers: 400 on an $80/month Pro plan and 100 on a Business plan billed at $1,200 per year. Monthly plans contribute 400 × 80 = $32,000. Annual plans are normalised: 1,200 / 12 = $100, so 100 × 100 = $10,000. Total MRR = $42,000 and ARR = 42,000 × 12 = $504,000. If the same month also produced $6,000 of setup and training revenue, that amount stays out of MRR." },
    { body: "In the same example, if the month brought $2,500 new MRR, $1,800 expansion, $600 contraction and $1,400 churn, then Net New MRR = 2,500 + 1,800 − 600 − 1,400 = $2,300. MRR moves from $42,000 to $44,300, roughly 5.5% monthly growth. Without that breakdown, a single total hides the months where churn is simply masked by new sales." },
  ],
  faqs: [
    { q: "What is the difference between MRR and ARR?", a: "MRR is monthly recurring revenue, ARR is annual recurring revenue, and ARR = MRR × 12. Monthly tracking supports operating decisions; annual tracking supports planning and investor reporting." },
    { q: "What is MRR and how is it calculated?", a: "MRR (Monthly Recurring Revenue) is the contracted revenue a subscription business expects to repeat every month. The formula is MRR = Active Customers × Average Monthly Price (ARPA); with multiple plans, sum each plan's customers × price and divide annual plans by 12." },
    { q: "How do you calculate MRR for a SaaS with 500 customers?", a: "Add the plans separately. Example: 400 customers × $80/month = $32,000; 100 customers × ($1,200 annual / 12) = $10,000. Total MRR is $42,000 and ARR is $504,000. One-off revenue such as setup or consulting is excluded." },
    { q: "How do annual subscriptions count towards MRR?", a: "Divide the annual contract value by 12 and add the monthly equivalent to MRR. Booking the full annual amount in the month it was paid inflates the metric and breaks trend analysis." },
    { q: "Are one-off revenues included in MRR?", a: "No. Setup fees, training, consulting and one-off licence sales are not recurring, so they stay out of MRR. Only contracted, repeating subscription revenue counts." },
    { q: "What is Net New MRR?", a: "Net New MRR = New MRR + Expansion MRR − Contraction MRR − Churned MRR. It shows how much revenue you actually added in a period; a positive and stable figure is the sign of healthy growth." },
    { q: "How does MRR growth relate to NRR?", a: "MRR growth includes new customer sales; NRR (Net Revenue Retention) measures only expansion, contraction and churn inside the existing base. NRR tells you what happens to the business if new sales stop — the NRR Calculator works it out for you." },
  ],
  relatedTools: [
    { label: "ARR Calculator", href: "/en/free-tools/arr-calculator", note: "Annual recurring revenue via MRR × 12" },
    { label: "ARPA Calculator", href: "/en/free-tools/arpa-calculator", note: "Average revenue per account" },
    { label: "NRR Calculator", href: "/en/free-tools/nrr-calculator", note: "Net revenue retention" },
    { label: "CAC Calculator", href: "/en/free-tools/cac-calculator", note: "Customer acquisition cost" },
    { label: "SaaS Tools", href: "/en/free-tools/saas-tools", note: "All SaaS metric calculators" },
  ],
  relatedPost: { label: "SaaS Metrics: ARR, CAC and LTV", href: "/en/blog/saas-metrics-arr-cac-ltv" },
};

export const arpa: ToolContent = {
  slug: "arpa",
  path: "/en/free-tools/arpa-calculator",
  title: "ARPA Calculator",
  description:
    "Calculate average revenue per account from total MRR and active account count in seconds.",
  intro:
    "ARPA (Average Revenue Per Account) shows the average monthly revenue each active account brings in. Enter your total MRR and active accounts — ARPA and its annual equivalent are calculated instantly.",
  seoParagraphs: [
    { heading: "What is ARPA and how is it calculated?", body: "ARPA (Average Revenue Per Account) is total monthly recurring revenue divided by the number of active accounts: ARPA = Total MRR / Active Accounts. Some teams call the same metric ARPU (Average Revenue Per User); the difference is whether the unit is a user or an account (a company). In B2B SaaS the correct unit is usually the account." },
    { body: "ARPA mirrors your pricing strategy and customer segment. A rising ARPA means successful upsell, plan upgrades or a shift towards larger customers. A falling ARPA points to discount pressure, a drift towards smaller accounts or contraction. That is why segment- and cohort-level ARPA is far more informative than a single blended average." },
    { body: "ARPA only becomes meaningful next to CAC and LTV. Using LTV = ARPA × gross margin / churn rate, ARPA directly drives lifetime value: lifting ARPA by 20% improves unit economics markedly at the same CAC. For many SaaS businesses the cheapest growth lever is not a new customer but more revenue per existing account." },
    { heading: "Worked example: ARPA for a SaaS with 500 accounts", body: "A SaaS with $42,000 total MRR across 500 active accounts has ARPA = 42,000 / 500 = $84, or $1,008 per year. If next quarter it upgrades 40 accounts, lifts MRR to $47,000 and account count stays at 505, ARPA rises to $93 — meaning the revenue growth came from going deeper with existing customers, not from new logos." },
    { body: "That distinction matters: MRR growing while ARPA stays flat is volume growth; MRR and ARPA growing together is value growth. In the same example, with a CAC of $600, moving ARPA from $84 to $93 shortens CAC payback from roughly 7.1 months to 6.5 months." },
  ],
  faqs: [
    { q: "What is the difference between ARPA and ARPU?", a: "Both measure average revenue; ARPA is per account (company) and ARPU is per user. For B2B SaaS products where one account holds many seats, ARPA is normally the right metric." },
    { q: "What is ARPA and how is it calculated?", a: "ARPA (Average Revenue Per Account) is the average monthly recurring revenue per active account: ARPA = Total MRR / Active Accounts. For example, $42,000 MRR across 500 accounts gives an ARPA of $84." },
    { q: "How does ARPA relate to MRR?", a: "MRR = ARPA × Active Accounts. So there are two ways to grow MRR: win more accounts (volume) or earn more per account (value). Tracking ARPA separates those two sources of growth." },
    { q: "Which revenues belong in ARPA?", a: "Only recurring subscription revenue (MRR). Setup fees, consulting and one-off sales are excluded — including them inflates the average artificially." },
    { q: "What is a good ARPA?", a: "There is no absolute threshold; it depends on your segment. SMB-focused products often sit at a few hundred per month while enterprise runs into the thousands. The meaningful comparison is your own ARPA trend and its ratio to CAC." },
    { q: "How do you increase ARPA?", a: "Revisit packaging and price architecture, offer usage-based add-ons, incentivise annual plans, build upsell and cross-sell flows, and reduce focus on the lowest-value segment." },
  ],
  relatedTools: [
    { label: "MRR Calculator", href: "/en/free-tools/mrr-calculator", note: "Monthly recurring revenue" },
    { label: "ARR Calculator", href: "/en/free-tools/arr-calculator", note: "Annual recurring revenue" },
    { label: "NRR Calculator", href: "/en/free-tools/nrr-calculator", note: "Growth from existing accounts" },
    { label: "CAC Calculator", href: "/en/free-tools/cac-calculator", note: "Customer acquisition cost" },
    { label: "SaaS Tools", href: "/en/free-tools/saas-tools", note: "All SaaS metric calculators" },
  ],
  relatedPost: { label: "SaaS Metrics: ARR, CAC and LTV", href: "/en/blog/saas-metrics-arr-cac-ltv" },
};

export const nrr: ToolContent = {
  slug: "nrr",
  path: "/en/free-tools/nrr-calculator",
  title: "NRR Calculator",
  description:
    "Calculate Net Revenue Retention from starting, expansion, contraction and churned MRR — free, instant, no signup.",
  intro:
    "NRR (Net Revenue Retention) shows how much your existing customer base grows on its own. Enter starting MRR plus expansion, contraction and churned MRR — NRR and gross retention are calculated instantly.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "What is Net Revenue Retention (NRR)?", body: "NRR is the revenue produced at the end of a period by the customers you had at the start, divided by their starting revenue. The formula is NRR = (Starting MRR + Expansion MRR − Contraction MRR − Churned MRR) / Starting MRR × 100. The critical detail: newly acquired customers are excluded. That makes NRR the one metric that tells you whether the business would still grow if you switched the sales engine off." },
    { heading: "Worked example", body: "A SaaS starts the month with $40,000 MRR. During the month it books $6,000 of expansion (upsell, extra seats), $1,500 of contraction (downgrades) and $2,500 of churn. NRR = (40,000 + 6,000 − 1,500 − 2,500) / 40,000 × 100 = 105%. Revenue grew 5% without a single new customer. Gross retention (GRR) in the same period = (40,000 − 1,500 − 2,500) / 40,000 × 100 = 90%; the 15-point gap is pure expansion." },
    { heading: "Healthy NRR benchmarks", body: "Common reference ranges: 90-100% for SMB-focused SaaS, 100-110% for mid-market, and 120%+ for enterprise or usage-based pricing models. Below 100% the existing base is shrinking and growth depends entirely on new sales, which keeps pushing CAC pressure up. Above 120% is the profile investors reward with the highest multiples." },
    { body: "Improving NRR usually runs through product and customer success rather than sales: faster onboarding, usage-based pricing tiers, frictionless seat and module expansion, and health scores that surface churn risk early. Tracking NRR by cohort and segment reveals which customer profile actually expands." },
  ],
  faqs: [
    { q: "What is NRR and how is it calculated?", a: "NRR (Net Revenue Retention) is the net change in revenue from your existing customers over a period: NRR = (Starting MRR + Expansion MRR − Contraction MRR − Churned MRR) / Starting MRR × 100. Revenue from new customers is not included." },
    { q: "What is a good NRR?", a: "100% is the neutral line — the base is neither growing nor shrinking. 90-100% is acceptable in SMB, 100-110% is good in mid-market, and 120%+ is excellent for enterprise and usage-based models. Below 100% means growth depends entirely on new sales." },
    { q: "What is the difference between NRR and GRR?", a: "GRR (Gross Revenue Retention) counts losses only and can never exceed 100%: (Starting − Contraction − Churn) / Starting. NRR adds expansion, so it can go above 100%. GRR measures product stickiness; NRR measures growth potential." },
    { q: "Why is NRR considered more important than ARR?", a: "ARR tells you the size of the revenue; NRR tells you its quality. High ARR with low NRR means new sales are covering a leaking bucket — the moment acquisition slows, growth stops. That is why NRR is one of the strongest drivers of SaaS valuation multiples." },
    { q: "What does negative churn mean?", a: "It means expansion revenue exceeds lost revenue, i.e. NRR is above 100%. Companies in that position grow even with zero new customers and can afford a more aggressive acquisition budget." },
    { q: "How often should NRR be measured?", a: "The common practice is to compute it monthly on MRR and report it on a trailing 12-month basis. With a small customer base a single large account can swing monthly NRR wildly, so quarterly measurement is more reliable." },
  ],
  relatedTools: [
    { label: "ARR Calculator", href: "/en/free-tools/arr-calculator", note: "Annual recurring revenue" },
    { label: "Churn Rate Calculator", href: "/en/free-tools/churn-rate-calculator", note: "Loss rate and retention" },
    { label: "MRR Calculator", href: "/en/free-tools/mrr-calculator", note: "Monthly recurring revenue" },
    { label: "Rule of 40 Calculator", href: "/en/free-tools/rule-of-40-calculator", note: "Growth vs. profitability balance" },
  ],
  relatedPost: { label: "What Is NRR and Why It Beats ARR in SaaS", href: "/en/blog/what-is-nrr-saas-growth-metric" },
};

export const ruleOf40: ToolContent = {
  slug: "rule-of-40",
  path: "/en/free-tools/rule-of-40-calculator",
  title: "Rule of 40 Calculator",
  description:
    "Add your revenue growth rate and profit margin to score your SaaS against the Rule of 40 — free instant pass/fail check.",
  intro:
    "The Rule of 40 says a healthy SaaS company's growth rate plus profit margin should be at least 40. Enter your annual revenue growth rate and profit margin to see your score and whether you pass.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "What is the Rule of 40?", body: "The Rule of 40 compresses SaaS health into one number: Annual Revenue Growth Rate (%) + Profit Margin (%) ≥ 40. The logic is that a fast-growing company is allowed to burn cash in the short term, while a slower-growing company is expected to be profitable. Below 40 the company is neither growing fast enough nor running efficiently enough." },
    { heading: "Worked example", body: "A company growing ARR 55% while running a −20% free cash flow margin scores 55 + (−20) = 35, which fails the rule. A company growing 18% with a 25% profit margin scores 43 and passes. Investors generally treat those two very different profiles — aggressive growth or disciplined profitability — as equivalent when the score is the same." },
    { heading: "Which profit margin should you use?", body: "Three measures are common: EBITDA margin, free cash flow (FCF) margin or operating margin. Whichever you pick, stay consistent between periods; switching the measure to flatter the score is the most frequent mistake. On the growth side use ARR or annualised revenue growth — plugging in a monthly growth rate inflates the score artificially." },
    { body: "The Rule of 40 is a balance test, not a strategy. Scoring above 40 does not guarantee sustainable unit economics, so read it next to NRR, LTV:CAC and CAC payback. In early-stage companies (under $1M ARR) the small base makes growth percentages huge and the score misleading." },
  ],
  faqs: [
    { q: "What is the Rule of 40 and how is it calculated?", a: "Rule of 40 = Annual Revenue Growth Rate (%) + Profit Margin (%). A total of 40 or above is considered a healthy balance of growth and profitability. Example: 30% growth + 12% profit margin = 42, which passes." },
    { q: "Which profit margin belongs in the Rule of 40?", a: "EBITDA margin and free cash flow margin are the most widely used; operating margin is also accepted. The key is applying the same measure consistently across periods, otherwise the trend is not comparable." },
    { q: "Which companies is the Rule of 40 meaningful for?", a: "Typically companies past roughly $1M ARR whose growth rate has started to stabilise. Very early stage growth percentages are inflated by a tiny base, so the score does not reflect real health." },
    { q: "What should I do if my score is below 40?", a: "Identify the weak component first. If growth is low, work on pricing, expansion revenue (NRR) and acquisition channels; if profitability is low, work on gross margin, infrastructure cost and sales efficiency (CAC payback). Pushing both at once usually breaks both." },
    { q: "How do the Rule of 40 and NRR relate?", a: "High NRR is the cheapest source of growth: expansion revenue from existing accounts carries little acquisition cost, so it lifts the growth and margin components at the same time. Improving NRR is usually the most efficient way to raise a Rule of 40 score." },
  ],
  relatedTools: [
    { label: "NRR Calculator", href: "/en/free-tools/nrr-calculator", note: "Net revenue retention" },
    { label: "ARR Calculator", href: "/en/free-tools/arr-calculator", note: "Annual recurring revenue" },
    { label: "Net Profit Margin Calculator", href: "/en/free-tools/net-profit-margin-calculator", note: "The margin component" },
    { label: "SaaS Tools", href: "/en/free-tools/saas-tools", note: "All SaaS metric calculators" },
  ],
  relatedPost: { label: "SaaS Metrics: ARR, CAC and LTV", href: "/en/blog/saas-metrics-arr-cac-ltv" },
};

export const cacPayback: ToolContent = {
  slug: "cac-payback",
  path: "/en/free-tools/cac-payback-period-calculator",
  title: "CAC Payback Period Calculator",
  description:
    "Calculate how many months it takes to recover your customer acquisition cost, gross margin included — free instant CAC payback calculator.",
  intro:
    "CAC payback period shows how long it takes to earn back what you spent acquiring a customer. Enter your CAC, monthly revenue per customer and gross margin to see the payback in months.",
  applicationCategory: "FinanceApplication",
  seoParagraphs: [
    { heading: "What is CAC payback period?", body: "CAC payback period measures how many months of gross profit from a customer it takes to recover the sales and marketing cost of acquiring them. The formula is simple: CAC Payback = CAC / (Monthly Revenue per Customer × Gross Margin). Skipping gross margin is the most common mistake — without deducting hosting, support and transaction costs the payback looks far shorter than it really is." },
    { heading: "Worked example", body: "Say CAC is $1,800, monthly revenue per customer is $200 and gross margin is 75%. Monthly gross profit is 200 × 0.75 = $150. Payback = 1,800 / 150 = 12 months. If the customer churns before month 12, that account loses money; profit only starts from month 13 onward." },
    { heading: "What is a healthy payback period?", body: "Common benchmarks: 6-12 months for SMB-focused SaaS, 12-18 months for mid-market and 18-24 months for enterprise sales. Ecommerce and subscription-box models usually target under 3 months because churn is much faster. Anything beyond 24 months locks up cash — every new customer accelerates growth while draining the bank account." },
    { body: "Payback period is a cash-flow metric, while LTV:CAC is a profitability metric. You can have a 4x LTV:CAC ratio and still be in trouble if payback takes 30 months, because growth then has to be financed externally. Read the two together rather than in isolation." },
    { heading: "How to shorten CAC payback", body: "Three levers: lower CAC (conversion rate optimisation, reallocating channel mix toward efficiency, organic and referral), raise revenue per customer (pricing, packaging, upsell, annual prepay incentives) and improve gross margin (infrastructure cost, support efficiency, self-serve onboarding). Annual upfront billing does not change the accounting payback, but it fixes the cash cycle immediately." },
  ],
  faqs: [
    { q: "How is CAC payback period calculated?", a: "CAC Payback = CAC / (Monthly Revenue per Customer × Gross Margin). With a $1,800 CAC, $200 monthly revenue and 75% gross margin, monthly gross profit is $150 and payback is 12 months." },
    { q: "What is a good CAC payback period?", a: "6-12 months is healthy for SMB SaaS, 12-18 months for mid-market and 18-24 months for enterprise. Ecommerce usually targets under 3 months. Beyond 24 months you carry a serious cash-flow risk." },
    { q: "Do I need to include gross margin?", a: "Yes. Without gross margin every dollar of revenue is treated as profit and the payback looks artificially short. Deduct hosting, payment fees, support and fulfilment costs and calculate on gross profit." },
    { q: "How does payback differ from the LTV:CAC ratio?", a: "LTV:CAC tells you how much profit a customer leaves over their lifetime; payback tells you how quickly that money comes back. A strong LTV:CAC ratio does not compensate for a long payback period." },
    { q: "Does annual prepayment change the payback?", a: "In cash terms, yes. With annual upfront billing the CAC is effectively recovered in month one, even though the accounting payback stays the same. That is why most SaaS companies discount annual plans." },
    { q: "How does churn relate to payback period?", a: "Average customer lifetime equals 1 / monthly churn rate. If that lifetime is shorter than your payback period, the model loses money: 5% monthly churn means a 20-month average lifetime, which cannot support a 24-month payback." },
  ],
  relatedTools: [
    { label: "CAC Calculator", href: "/en/free-tools/cac-calculator", note: "Customer acquisition cost" },
    { label: "LTV Calculator", href: "/en/free-tools/ltv-calculator", note: "Lifetime value" },
    { label: "Churn Rate Calculator", href: "/en/free-tools/churn-rate-calculator", note: "Average customer lifetime" },
    { label: "ARPA Calculator", href: "/en/free-tools/arpa-calculator", note: "Average revenue per account" },
  ],
  relatedPost: { label: "SaaS Metrics: ARR, CAC and LTV", href: "/en/blog/saas-metrics-arr-cac-ltv" },
};

export const channelQuiz: ToolContent = {
  slug: "marketing-channel-quiz",
  path: "/en/free-tools/marketing-channel-quiz",
  title: "Which Marketing Channel Fits Your Business? (Quiz)",
  description:
    "Find the right advertising channel for your business in 30 seconds. Get a personalized recommendation across Google, Meta, LinkedIn, and TikTok.",
  intro:
    "Answer five short questions and get the advertising channel that best fits your business type, goal, budget, sales cycle, and audience — plus a runner-up worth testing. Everything runs in your browser; no data is stored.",
  seoParagraphs: [
    { heading: "How do you choose a marketing channel?", body: "Channel choice is the intersection of four variables: the nature of demand (are you capturing existing demand or creating it), the length of your sales cycle, the click cost your unit economics can absorb, and where your audience actually spends time. Products with real search volume and immediate purchase intent favour Google Ads; visual discovery and impulse buying favour Meta and TikTok; high-ticket B2B sales that require reaching a specific decision maker favour LinkedIn Ads." },
    { heading: "How budget changes the answer", body: "At small budgets, splitting channels is the most expensive mistake you can make. Under roughly $500-1,000 per month, finishing the learning phase on a single channel almost always beats spreading across three, because algorithms cannot optimise without enough conversion data. As budget grows, a channel mix starts to make sense: paid channels drive short-term sales while SEO and email marketing build compounding assets that lower acquisition cost over time." },
    { heading: "How to read your result", body: "The primary channel is the one that accumulated the highest weight from your answers; the secondary suggestion is the next best candidate worth testing. Treat the recommendation as a starting hypothesis: run it for four to six weeks with a test budget, measure ROAS and conversion rate, and confirm it with your own data. A quiz narrows the options — measurement makes the decision." },
  ],
  faqs: [
    { q: "Which marketing channel is best for B2B?", a: "LinkedIn Ads is usually the most accurate B2B channel because it targets decision makers by job title, company size, and industry. Click costs are high, but so are deal sizes. The most balanced mix pairs it with Google Ads to capture active search intent and with SEO/content plus email marketing to nurture long sales cycles." },
    { q: "Which ad platform should you pick on a small budget?", a: "Under a small monthly budget, focus on one channel. If demand already exists and people search for your product, start with Google Ads on a narrow non-brand keyword set. If you have to create demand, start with Meta Ads using a single campaign and broad targeting. In parallel, run SEO and email marketing as compounding channels that do not disappear when you pause spend." },
    { q: "What is the best advertising channel for e-commerce?", a: "For most e-commerce brands the backbone is Meta Ads (catalog and Advantage+ campaigns) combined with Google Ads (Performance Max and brand search). In visual, trend-driven categories aimed at younger buyers, TikTok Ads is strong at the discovery stage. Where repeat purchase is likely, email marketing is the most profitable channel for lowering blended acquisition cost." },
    { q: "Why does channel selection matter so much?", a: "Because the wrong channel makes a good product with good creative look unprofitable. The channel determines click cost, the purchase intent of the audience, and the time it takes to convert. Budget spent on the wrong channel costs you learning time as well as money: the conversion data the algorithm needs never accumulates." },
    { q: "Should you advertise on several channels at once?", a: "Only if each channel can produce roughly 30-50 conversions per month. Below that volume the algorithm cannot learn and you cannot statistically tell which channel worked. Build profitable unit economics on one channel first, then scale into a second." },
  ],
  relatedTools: [
    { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator", note: "Return on ad spend" },
    { label: "UTM Builder", href: "/en/free-tools/utm-builder", note: "Channel-level tracking" },
    { label: "Conversion Rate Calculator", href: "/en/free-tools/conversion-rate-calculator", note: "Compare channel performance" },
    { label: "Marketing Tools", href: "/en/free-tools/marketing-tools", note: "All marketing calculators" },
  ],
  relatedPost: { label: "How to Reduce B2B Lead Generation Costs", href: "/en/blog/how-to-reduce-b2b-lead-generation-costs" },
};

export const marketplace: ToolContent = {
  slug: "marketplace-profit-calculator",
  path: "/en/free-tools/marketplace-profit-calculator",
  title: "Trendyol & Hepsiburada Profit Calculator",
  description:
    "Net profit per order on Trendyol and Hepsiburada after commission, shipping, service fee, withholding tax, returns and ads — plus your break-even price.",
  intro:
    "Enter your sale price, product cost, commission and shipping; the calculator shows net profit per order, profit margin, break-even and target sale price, the maximum ad spend per order and the amount paid out to you. Unlike most calculators it also accounts for returns and advertising. Everything runs in your browser and the result can be shared as a link.",
  seoParagraphs: [
    {
      heading: "How to calculate profit on Trendyol and Hepsiburada",
      body:
        "Real marketplace profit is not just sale price minus commission. First strip VAT (KDV) out of the VAT-inclusive price, then deduct commission, shipping, the platform service fee, product cost and packaging. Formula: Net profit = Sale price / (1 + VAT rate) − Commission − Shipping − Service fee − Product cost − Packaging. That is for a single non-returned order; to see the real picture you also need return costs and advertising. The calculator works on a VAT-excluded basis because a VAT-registered seller can deduct input VAT — VAT is passed through to the state, not profit.",
    },
    {
      heading: "Worked example: what does a 599 TL product really earn?",
      body:
        "Take a product with 20% VAT sold for 599 TL. Sales excluding VAT are 499.17 TL. With a 15% commission charged on the VAT-inclusive price, commission is 89.85 TL. After 65 TL shipping, a 10.99 TL service fee, 220 TL product cost and 8 TL packaging, a non-returned order makes 105.33 TL net profit — about a 21% margin. Add an 8% return rate and 40 TL ad spend per order and average net profit drops to 45.86 TL per order, a 9.2% margin: returns and ads eat more than half of the paper profit. For this product the break-even price is about 526 TL and the price needed for a 10% net margin is about 606 TL.",
    },
    {
      heading: "Is commission charged on the VAT-inclusive price?",
      body:
        "Marketplaces generally calculate commission on the VAT-inclusive price the customer pays and add 20% VAT to the commission invoice. So a '15% commission' is a bigger share of your VAT-excluded revenue — about 18% in the example above. Rates vary by category, seller tier and campaign agreements; take your exact rate from the agreement details in your seller panel.",
    },
    {
      heading: "Does the 1% e-commerce withholding tax reduce profit?",
      body:
        "Since 1 January 2025, Turkish marketplaces withhold 1% of the VAT-excluded sale amount from seller payouts as income tax withholding (stopaj). It is a prepaid tax, not a cost: it is offset against the income tax calculated in your returns. The calculator therefore does not deduct it from profit, but does remove it from the payout. Some sellers, such as those taxed under the simplified regime, are exempt — untick the box if that applies to you.",
    },
    {
      heading: "Why returns and ads matter so much",
      body:
        "A returned order earns no revenue, but outbound shipping, return shipping and packaging usually stay with the seller. The calculator spreads that loss across orders using your return rate, and shows how much ad spend per order you can afford while keeping your target margin, along with your break-even ROAS. In the example, profit before ads after returns is about 85.86 TL per order, so break-even ROAS is roughly 7 — any campaign below that loses money on this product.",
    },
  ],
  faqs: [
    { q: "How do I calculate Trendyol profit?", a: "Divide the VAT-inclusive price by (1 + VAT rate) to get sales excluding VAT, then subtract commission (VAT-inclusive price × commission rate), shipping, the platform service fee, product cost and packaging. For real profit, also include return costs and ad spend per order. This calculator does all of it automatically." },
    { q: "Is the e-commerce withholding tax refundable?", a: "The 1% withholding is a prepaid income tax that is offset against tax calculated on your return; amounts that cannot be offset can generally be reclaimed. Check your situation with your accountant." },
    { q: "How is parcel size (desi) calculated?", a: "Desi = Width × Length × Height (cm) / 3000. Shipping is billed on the greater of weight and desi, so smaller packaging directly lowers shipping cost." },
    { q: "How much can I spend on ads per order?", a: "Your profit before ads, after returns, is the ceiling; subtract your target profit to keep your margin. The calculator shows this amount and your break-even ROAS." },
    { q: "What is a good marketplace profit margin?", a: "It depends on the category, but a net margin below 10% of VAT-excluded sales after returns and ads leaves little room for campaign discounts and currency swings. Enter your target margin and the calculator shows the required price." },
  ],
  relatedTools: [
    { label: "Dimensional Weight (Desi) Calculator", href: "/en/free-tools/dimensional-weight-calculator", note: "Shipping desi and cost" },
    { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator", note: "Measure return on ad spend" },
    { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator", note: "Product-level margin" },
    { label: "Net Profit Margin Calculator", href: "/en/free-tools/net-profit-margin-calculator", note: "Store-level profitability" },
    { label: "E-Commerce Tools", href: "/en/free-tools/ecommerce-tools", note: "All e-commerce calculators" },
  ],
  relatedPost: { label: "What Is ROAS & How to Calculate It?", href: "/en/blog/what-is-roas-how-to-calculate/" },
};

export const adBudget: ToolContent = {
  slug: "ad-budget-calculator",
  path: "/en/free-tools/ad-budget-calculator",
  title: "Ad Budget Calculator",
  description:
    "Work backwards from your revenue or customer target to a monthly ad budget, break-even and target ROAS, max CPA and max cost per lead.",
  intro:
    "Set your ad budget from your own numbers instead of a 'percent of revenue' rule of thumb. In e-commerce mode, start from a revenue target, average order value, gross margin and conversion rate; in B2B mode, start from a new-customer target and your funnel rates. See the maximum budget that keeps you profitable, the target ROAS to enter in Google Ads and the most you can pay per order or per lead. Share your plan as a link.",
  seoParagraphs: [
    {
      heading: "How to calculate an ad budget",
      body:
        "A sound ad budget is calculated backwards from the goal. For e-commerce: Max ad budget = Revenue target × (Gross margin − Target net profit rate). With a 40% margin and a 10% profit target you can spend up to 30% of revenue — $150,000 on a $500,000 monthly target. That is a profitability ceiling, not a spending goal. Then check feasibility: Orders needed = Revenue target / AOV; Clicks needed = Orders / Conversion rate; Estimated budget = Clicks × CPC. If the estimate exceeds the ceiling, the calculator tells you the maximum CPC or minimum conversion rate that would make the plan work.",
    },
    {
      heading: "Break-even ROAS, target ROAS and max CPA",
      body:
        "Break-even ROAS = 1 / Gross margin (2.5 at a 40% margin). Target ROAS = 1 / (Gross margin − Target profit rate), about 3.33 in the example — enter 333% in Google Ads' Target ROAS bidding. Max CPA = AOV × (Gross margin − Target profit rate). These three numbers decide which campaigns to cut and which to scale.",
    },
    {
      heading: "Planning a B2B ad budget",
      body:
        "In B2B the budget comes from the customer target and the funnel. Ten new customers a month at a 25% lead-to-SQL rate and 20% SQL-to-customer rate requires 50 SQLs and 200 leads; at $90 per lead that is an $18,000 monthly budget and $1,800 ad CAC. The calculator shows the CAC payback period from annual revenue per customer and gross margin, and the maximum cost per lead that keeps payback within 12 months.",
    },
  ],
  faqs: [
    { q: "How much should I spend on ads per month?", a: "The profitable ceiling is Revenue target × (Gross margin − Target net profit rate). Then check whether that budget can buy the traffic you need at your CPC and conversion rate." },
    { q: "What percentage of revenue should go to advertising?", a: "It depends on margin. Spending 10% of revenue requires a 10 ROAS and 20% requires a 5 ROAS; the share is right for you if your margin can carry that ROAS." },
    { q: "How do I set a Target ROAS in Google Ads?", a: "Target ROAS = 1 / (Gross margin − Target profit rate); multiply by 100 and enter it as a percentage. A 40% margin and 10% profit target gives roughly 333%." },
    { q: "How do I set a B2B ad budget?", a: "Divide the customer target by your SQL-to-customer rate, then by your lead-to-SQL rate to get leads needed, and multiply by cost per lead. Check that CAC pays back within about 12 months of gross profit." },
  ],
  relatedTools: [
    { label: "ROAS Calculator", href: "/en/free-tools/roas-calculator", note: "Measure actual ROAS" },
    { label: "Trendyol & Hepsiburada Profit Calculator", href: "/en/free-tools/marketplace-profit-calculator", note: "Net profit per order" },
    { label: "CAC Payback Period Calculator", href: "/en/free-tools/cac-payback-period-calculator", note: "B2B payback" },
    { label: "Conversion Rate Calculator", href: "/en/free-tools/conversion-rate-calculator", note: "Conversion targets" },
  ],
  relatedPost: { label: "What Is ROAS & How to Calculate It?", href: "/en/blog/what-is-roas-how-to-calculate/" },
};

export const desi: ToolContent = {
  slug: "dimensional-weight-calculator",
  path: "/en/free-tools/dimensional-weight-calculator",
  title: "Dimensional Weight (Desi) Calculator — Multi-Box",
  description:
    "Calculate dimensional weight (desi): L × W × H / 3000 or 5000, compare with actual weight, get the chargeable weight and estimated shipping cost for one or many boxes.",
  intro:
    "Enter your box dimensions and the calculator returns its dimensional (volumetric) weight, compares it with the actual weight and shows the chargeable weight your carrier will bill. Add multiple boxes, pick the divisor (3000 for Turkish domestic shipping, 5000 for international air express) and rounding rule from your contract, and enter your rate to estimate the cost. It also shows how much shrinking the box by a few centimetres saves. Everything runs in your browser and the result can be shared as a link.",
  seoParagraphs: [
    {
      heading: "What is desi (dimensional weight)?",
      body:
        "Desi is the Turkish shipping term for dimensional or volumetric weight: the weight equivalent of the space a parcel occupies. Because vans and aircraft fill up by volume, a light but bulky parcel uses as much capacity as a heavy one. Carriers therefore measure both actual weight and dimensional weight and bill whichever is greater. In Turkish domestic shipping one desi equals 3,000 cm³ — a 30 × 20 × 5 cm box is exactly 1 desi.",
    },
    {
      heading: "How to calculate desi: formula and examples",
      body:
        "Formula: Desi = Length (cm) × Width (cm) × Height (cm) / 3000. Example 1: a 40 × 30 × 20 cm box is 24,000 cm³; 24,000 / 3000 = 8 desi. If it weighs 3 kg, the chargeable weight is 8 because volume is larger. Example 2: a 60 × 40 × 40 cm box is 32 desi, but if the product inside weighs 35 kg the chargeable weight is 35. Example 3: a 30 × 20 × 10 cm box is exactly 2 desi; at 2.4 kg the weight decides and, since fractions are usually rounded up, it is billed as 3. Always measure the outer box at its widest points; empty space inside does not change the result.",
    },
    {
      heading: "Multiple boxes: why per-box rounding matters",
      body:
        "Carriers usually measure and round each box separately, then add them up. Dividing the total volume once can understate the charge. Example: three 25 × 20 × 13 cm boxes are 6,500 cm³ or 2.17 desi each; rounded individually that is 3 each, 9 in total. Calculated from total volume it would be 19,500 / 3000 = 6.5, rounded to 7. The 2-desi gap repeats on every shipment.",
    },
    {
      heading: "3000 or 5000? Domestic vs international divisors",
      body:
        "3000 is the common divisor for domestic shipping in Turkey. International air express carriers such as DHL, UPS and FedEx generally use 5000, and some economy or road-sea services use up to 6000. A larger divisor lowers the result: the same 40 × 30 × 20 cm box is 8 desi with 3000 but 4.8 (rounded to 5) with 5000. Negotiated contracts may use different divisors and rounding, so select yours in the calculator.",
    },
    {
      heading: "How much does a smaller box save?",
      body:
        "When volume decides, every centimetre shows up on the invoice. Reducing a 40 × 30 × 20 cm box (8 desi) by 2 cm on every dimension to 38 × 28 × 18 cm gives 6.38 desi, rounded to 7; 3 cm brings it to 6. Keeping length and width, a height of 17.5 cm or less is enough to drop it to 7 desi. The calculator runs these scenarios for your first box automatically.",
    },
  ],
  faqs: [
    { q: "How is desi calculated?", a: "Multiply the outer length, width and height in centimetres and divide by 3000: Desi = L × W × H / 3000. A 40 × 30 × 20 cm box is 8 desi. Carriers bill whichever is greater: desi or actual weight in kg." },
    { q: "Is 1 desi equal to 1 kg?", a: "Desi is not a weight unit but the weight equivalent of volume (3,000 cm³ domestically). For billing, 1 desi is compared one-to-one with 1 kg: a 5-desi, 3 kg box is billed at 5; a 2-desi, 4 kg box is billed at 4." },
    { q: "Why divide by 3000 or 5000?", a: "The divisor converts volume into weight. 3000 is common in Turkish domestic shipping; international air express usually uses 5000. Check your contract for the exact divisor." },
    { q: "How are fractions rounded?", a: "Usually up to the next whole number (3.2 → 4). Some contracts round up to the next 0.5. You can choose the rule in the calculator." },
    { q: "Should multiple boxes be calculated as one?", a: "No. Carriers typically measure and round each box separately, which can add up to more than the total-volume figure. Add each box separately or set a quantity." },
  ],
  relatedTools: [
    { label: "Marketplace Profit Calculator", href: "/en/free-tools/marketplace-profit-calculator", note: "Per-order profit incl. shipping" },
    { label: "Gross Profit Margin Calculator", href: "/en/free-tools/gross-profit-margin-calculator", note: "Product-level margin" },
    { label: "Net Profit Margin Calculator", href: "/en/free-tools/net-profit-margin-calculator", note: "Profitability incl. shipping" },
  ],
};
