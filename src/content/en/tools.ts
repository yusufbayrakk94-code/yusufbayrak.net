import type { ToolContent } from "../types";

// Per-calculator EN content. Number formatting for the EN pages uses USD/en-US
// so results look native to English-speaking users. Formulas stay identical.

export const toolBackLabel = "Back to Free Tools";
export const toolBackHref = "/en/free-marketing-tools";
export const toolCalculatorDivider = "Calculator";
export const toolGuideDivider = "Guide";
export const toolFaqDivider = "Frequently Asked Questions";
export const currency = "USD" as const;
export const numberLocale = "en-US" as const;

export const arr: ToolContent = {
  slug: "arr",
  path: "/en/free-marketing-tools/arr-calculator",
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
  path: "/en/free-marketing-tools/cac-calculator",
  title: "CAC Calculator",
  description: "Calculate Customer Acquisition Cost (CAC) from marketing and sales spend divided by acquired customers.",
  intro: "CAC (Customer Acquisition Cost) is the average cost to acquire a customer. It's critical for measuring channel efficiency and growth sustainability.",
  seoParagraphs: [
    { heading: "What is CAC (Customer Acquisition Cost)?", body: "CAC is calculated by dividing total marketing and sales cost in a given period by the number of customers acquired in that period. Ad budget, team salaries, tool licences, agency fees and campaign production costs — every direct and indirect line item — belongs in this calculation." },
    { body: "CAC on its own isn't good or bad; it only becomes meaningful next to LTV (Lifetime Value) and CAC payback period. The widely accepted rule is that LTV / CAC of 3x or higher signals healthy unit economics; a ratio below 1 means every new customer loses money for the business." },
    { body: "The best strategies for optimising CAC are channel-level attribution, conversion rate optimisation, shortening the sales cycle and strengthening organic and referral channels. Alignment between marketing and sales is one of the most decisive operational factors." },
  ],
  faqs: [
    { q: "What should be included in CAC?", a: "Ad spend, marketing and sales team salaries and bonuses, tool/software licences, agency and third-party fees and campaign production costs all belong in CAC." },
    { q: "What's a good CAC value?", a: "There is no absolute good CAC — it's judged against LTV. Aim for LTV / CAC ≥ 3x and CAC payback under 12 months for B2B SaaS." },
    { q: "How do you lower CAC?", a: "Conversion rate optimisation (CRO), re-balancing channel mix by efficiency, strengthening organic/SEO and referral programmes, and shortening the sales cycle are the highest-impact levers." },
    { q: "Blended CAC vs. Paid CAC — what's the difference?", a: "Blended CAC includes all customers (organic + paid). Paid CAC counts only those acquired through paid channels — better for judging channel efficiency." },
  ],
};

export const churn: ToolContent = {
  slug: "churn",
  path: "/en/free-marketing-tools/churn-rate-calculator",
  title: "Churn Rate Calculator",
  description: "Calculate your customer churn rate from starting customers and lost customers over a period.",
  intro: "Churn Rate is the percentage of customers you lose in a given period. Low churn is one of the strongest signals of healthy SaaS growth.",
  seoParagraphs: [
    { heading: "What is Churn Rate and why is it critical?", body: "Churn Rate is the percentage of the customers you had at the start of a period who left during that period. In SaaS and subscription models churn is the silent killer of growth — every lost customer offsets a chunk of new sales and lowers real net growth." },
    { body: "Churn is measured two main ways: Customer Churn on customer count, Revenue Churn on lost MRR/ARR. Enterprise tends to prefer Revenue Churn because it reflects the impact of larger accounts. Healthy SaaS targets monthly churn of 3-5% at SMB, below 1% at enterprise." },
    { body: "The most effective ways to reduce churn are strengthening onboarding, tracking in-product activation metrics, running a proactive customer success motion and using predictive models like churn risk scoring to catch at-risk accounts early." },
  ],
  faqs: [
    { q: "What is a good monthly churn rate?", a: "For SMB-focused SaaS, 3-5% monthly is acceptable. Mid-market targets 1-2%; enterprise, below 1%. Annually, sub-5-7% is considered good." },
    { q: "Customer Churn vs. Revenue Churn?", a: "Customer Churn measures the number of lost customers; Revenue Churn measures lost MRR/ARR. Because larger accounts have outsized revenue impact, Revenue Churn is usually the more critical view." },
    { q: "What is negative churn?", a: "When upsell and expansion revenue from existing customers exceeds lost revenue. Net revenue retention (NRR) then climbs above 100% and the company grows even without new customers." },
    { q: "First step to reduce churn?", a: "Do a cohort analysis to see when churn happens. Early churn usually points to onboarding; late churn points to gaps in value delivery." },
  ],
};

export const ltv: ToolContent = {
  slug: "ltv",
  path: "/en/free-marketing-tools/ltv-calculator",
  title: "LTV Calculator",
  description: "Calculate customer Lifetime Value (LTV) from ARPU, gross margin and churn — and compare it against CAC.",
  intro: "LTV (Lifetime Value) is the present value of total revenue a customer produces over the length of the relationship. Target an LTV/CAC ratio of 3x or more.",
  seoParagraphs: [
    { heading: "What is LTV (Lifetime Value)?", body: "LTV is the present value of the total net revenue a customer generates over their relationship with the company. The most common formula is LTV = (ARPU × Gross Margin) / Churn — a single number that combines how long a customer stays with how profitably they contribute." },
    { body: "LTV becomes most powerful when compared to CAC. LTV / CAC of 3x or higher signals healthy unit economics. Getting close to 1 means growth is unprofitable; above 5 usually means the business is under-investing in growth. CAC payback under 12 months is a critical threshold for cash-flow sustainability." },
    { body: "The most effective ways to grow LTV are lowering churn, expanding ARPU via upsell and cross-sell and improving gross margin. When product, pricing and customer success share LTV as a KPI, growth becomes more sustainable." },
  ],
  faqs: [
    { q: "How is LTV calculated?", a: "The most common formula: LTV = (Monthly ARPU × Gross Margin %) / Monthly Churn. It combines per-customer profitability and expected tenure into one figure." },
    { q: "What is the ideal LTV / CAC ratio?", a: "3x or higher is healthy. 1x-2x means weak unit economics; above 5x usually means you could invest more aggressively in growth." },
    { q: "Why use gross margin in LTV?", a: "Because real profit — not top-line revenue — is what matters. Gross margin after hosting, payment fees and support cost reflects LTV's true financial value." },
    { q: "Fastest way to grow LTV?", a: "Reducing churn is usually the highest-leverage move: cutting monthly churn from 5% to 3% grows LTV by roughly 67%. Growing ARPU via upsell comes next." },
  ],
};

export const roas: ToolContent = {
  slug: "roas",
  path: "/en/free-marketing-tools/roas-calculator",
  title: "ROAS Calculator",
  description: "Calculate Return on Ad Spend (ROAS) as ad revenue divided by ad spend.",
  intro: "ROAS (Return on Ad Spend) shows how many units of revenue each unit of ad spend produces. It's the most common metric for judging campaign profitability.",
  seoParagraphs: [
    { heading: "What is ROAS and how do you read it?", body: "ROAS is a performance marketing metric that measures the direct return of ad investment. The formula is simple: ROAS = Ad Revenue / Ad Spend. A 4x ROAS means every $1 spent produces $4 of revenue. It is the primary optimisation target on Meta Ads, Google Ads and LinkedIn Ads." },
    { body: "Because ROAS is measured on revenue, it doesn't guarantee profit. With product cost, shipping, refund rate and operating costs factored in, break-even ROAS is different for every business. For example, an e-commerce brand with 30% gross margin needs roughly 3.33x break-even ROAS — any campaign below that is losing money. That's why ROAS should be tracked alongside POAS (Profit on Ad Spend)." },
    { body: "The best ways to improve ROAS: tighten audience targeting, rotate creatives faster, lift landing page conversion rate and move bidding strategies to value-based models." },
  ],
  faqs: [
    { q: "What's a good ROAS value?", a: "It depends on sector and margin. For e-commerce, 4x is a common baseline; with low gross margin you may need 5-6x, and high-margin digital products can be profitable at 2-3x. Always benchmark against your own break-even ROAS." },
    { q: "ROAS vs. ROI — what's the difference?", a: "ROAS only compares ad revenue to ad spend. ROI divides net profit (revenue - total cost) by investment and shows real profitability. ROAS is a marketing metric; ROI is a finance one." },
    { q: "How do you calculate break-even ROAS?", a: "Break-even ROAS = 1 / Gross Margin. So at 25% gross margin, break-even is 4x; anything below is a loss." },
    { q: "Why track ROAS alongside POAS?", a: "ROAS looks at revenue; POAS looks at profit. Once product cost, refunds and shipping are included, the two can diverge sharply. Profitable growth is decided with POAS." },
  ],
};

export const utm: ToolContent = {
  slug: "utm",
  path: "/en/free-marketing-tools/utm-builder",
  title: "UTM Link Builder",
  description: "Build UTM-tagged links quickly and measure your marketing channels accurately.",
  intro: "UTM parameters let Google Analytics and other tools attribute traffic sources correctly. Fill the fields below to build your campaign link.",
  seoParagraphs: [
    { heading: "What are UTM parameters?", body: "UTM parameters are tags appended to a URL that tell analytics tools which source, channel and campaign the traffic came from. GA4, Mixpanel, Amplitude and HubSpot all pick them up automatically and use them as the basis for channel attribution." },
    { body: "There are five core parameters: utm_source (traffic source — e.g. google, newsletter), utm_medium (channel type — e.g. cpc, email, social), utm_campaign (campaign name), utm_term (paid search keyword) and utm_content (differentiates creatives within the same campaign). Source, medium and campaign should always be set; term and content are optional for A/B tests and variants." },
    { body: "Without UTM discipline, marketing reports lose credibility. A consistent naming standard (lowercase, hyphen separators, fixed abbreviations) prevents fragmented reporting caused by capitalisation and spelling drift." },
  ],
  faqs: [
    { q: "Which UTM parameters are required?", a: "For GA to attribute correctly, at minimum utm_source, utm_medium and utm_campaign must be set. utm_term and utm_content are optional and typically used for A/B tests or creative-level analysis." },
    { q: "Is UTM case-sensitive?", a: "Yes — Google Analytics treats UTM values case-sensitively. 'Facebook' and 'facebook' report as two different sources. Standardise on lowercase across the whole team." },
    { q: "Should I add UTMs to internal links?", a: "No. Adding UTMs to same-domain links resets the session and breaks attribution. Use UTMs only on external inbound traffic (ads, email, social)." },
    { q: "Do UTM links hurt SEO?", a: "There's no direct penalty, but using UTMs on organic search links can create duplicate content and rel=canonical issues. Don't use UTMs on organic traffic." },
  ],
};

export const llmsTxt: ToolContent = {
  slug: "llms-txt",
  path: "/en/free-marketing-tools/llms-txt-generator",
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
  path: "/en/free-marketing-tools/gross-profit-margin-calculator",
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
    { label: "Net Profit Margin Calculator", href: "/en/free-marketing-tools/net-profit-margin-calculator", note: "True profitability, all costs included" },
    { label: "ROAS Calculator", href: "/en/free-marketing-tools/roas-calculator", note: "Return on ad spend" },
    { label: "CAC Calculator", href: "/en/free-marketing-tools/cac-calculator", note: "Customer acquisition cost" },
  ],
  relatedPost: { label: "SaaS Metrics: ARR, CAC and LTV", href: "/en/blog/saas-metrics-arr-cac-ltv" },
  externalSource: { label: "Source: Investopedia — Gross Profit Margin", href: "https://www.investopedia.com/terms/g/gross_profit_margin.asp" },
};

export const netMargin: ToolContent = {
  slug: "net-profit-margin",
  path: "/en/free-marketing-tools/net-profit-margin-calculator",
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
    { label: "Gross Profit Margin Calculator", href: "/en/free-marketing-tools/gross-profit-margin-calculator", note: "Profitability after COGS only" },
    { label: "CAC Calculator", href: "/en/free-marketing-tools/cac-calculator", note: "Customer acquisition cost" },
    { label: "ROAS Calculator", href: "/en/free-marketing-tools/roas-calculator", note: "Return on ad spend" },
  ],
  relatedPost: { label: "SaaS Metrics: ARR, CAC and LTV", href: "/en/blog/saas-metrics-arr-cac-ltv" },
  externalSource: { label: "Source: Investopedia — Net Profit Margin", href: "https://www.investopedia.com/terms/n/net_margin.asp" },
};

export const conversionRate: ToolContent = {
  slug: "conversion-rate",
  path: "/en/free-marketing-tools/conversion-rate-calculator",
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
    { label: "ROAS Calculator", href: "/en/free-marketing-tools/roas-calculator", note: "Return on ad spend" },
    { label: "CAC Calculator", href: "/en/free-marketing-tools/cac-calculator", note: "Customer acquisition cost" },
    { label: "UTM Link Builder", href: "/en/free-marketing-tools/utm-builder", note: "Accurate campaign tagging" },
  ],
  relatedPost: { label: "7 Ways to Multiply Google Ads Performance", href: "/en/blog/google-ads-performance-optimization" },
  externalSource: { label: "Source: Google Analytics Help — Conversion rate", href: "https://support.google.com/analytics/answer/12966437" },
};

export const mrr: ToolContent = {
  slug: "mrr",
  path: "/en/free-marketing-tools/mrr-calculator",
  title: "MRR Calculator",
  description:
    "Calculate your Monthly Recurring Revenue from customer count and average subscription price in seconds.",
  intro:
    "MRR (Monthly Recurring Revenue) is the revenue your subscription business can expect every month. Enter your customer count and average monthly price, or type the monthly total directly — MRR and the matching ARR are calculated instantly.",
  seoParagraphs: [
    { heading: "What is MRR and how is it calculated?", body: "MRR (Monthly Recurring Revenue) is the total contracted revenue a subscription business expects to repeat each month. The simplest formula is MRR = Active Customers × Average Monthly Subscription Price (ARPA). Annual plans are normalised by dividing the yearly amount by 12; setup fees, consulting and one-off sales are excluded from MRR." },
    { heading: "The MRR × 12 = ARR relationship", body: "MRR and ARR are the same revenue on two time scales: ARR = MRR × 12. The monthly view drives operational decisions — campaigns, pricing, team capacity — while the annual view supports planning, budgeting and investor communication. For the relationship to hold, MRR must be normalised so every billing cycle is expressed monthly. Use the ARR Calculator to see the annual side." },
    { body: "Tracking MRR as a single total is not enough. Breaking it into New MRR, Expansion MRR, Contraction MRR and Churned MRR shows where growth comes from and where it leaks. Net New MRR = New + Expansion − Contraction − Churned is the most honest indicator of growth quality." },
  ],
  faqs: [
    { q: "What is the difference between MRR and ARR?", a: "MRR is monthly recurring revenue, ARR is annual recurring revenue, and ARR = MRR × 12. Monthly tracking supports operating decisions; annual tracking supports planning and investor reporting." },
    { q: "How do annual subscriptions count towards MRR?", a: "Divide the annual contract value by 12 and add the monthly equivalent to MRR. Booking the full annual amount in the month it was paid inflates the metric and breaks trend analysis." },
    { q: "Are one-off revenues included in MRR?", a: "No. Setup fees, training, consulting and one-off licence sales are not recurring, so they stay out of MRR. Only contracted, repeating subscription revenue counts." },
    { q: "What is Net New MRR?", a: "Net New MRR = New MRR + Expansion MRR − Contraction MRR − Churned MRR. It shows how much revenue you actually added in a period; a positive and stable figure is the sign of healthy growth." },
  ],
  relatedTools: [
    { label: "ARR Calculator", href: "/en/free-marketing-tools/arr-calculator", note: "Annual recurring revenue via MRR × 12" },
    { label: "ARPA Calculator", href: "/en/free-marketing-tools/arpa-calculator", note: "Average revenue per account" },
    { label: "CAC Calculator", href: "/en/free-marketing-tools/cac-calculator", note: "Customer acquisition cost" },
    { label: "SaaS Tools", href: "/en/free-marketing-tools/saas-tools", note: "All SaaS metric calculators" },
  ],
  relatedPost: { label: "SaaS Metrics: ARR, CAC and LTV", href: "/en/blog/saas-metrics-arr-cac-ltv" },
};

export const arpa: ToolContent = {
  slug: "arpa",
  path: "/en/free-marketing-tools/arpa-calculator",
  title: "ARPA Calculator",
  description:
    "Calculate average revenue per account from total MRR and active account count in seconds.",
  intro:
    "ARPA (Average Revenue Per Account) shows the average monthly revenue each active account brings in. Enter your total MRR and active accounts — ARPA and its annual equivalent are calculated instantly.",
  seoParagraphs: [
    { heading: "What is ARPA and how is it calculated?", body: "ARPA (Average Revenue Per Account) is total monthly recurring revenue divided by the number of active accounts: ARPA = Total MRR / Active Accounts. Some teams call the same metric ARPU (Average Revenue Per User); the difference is whether the unit is a user or an account (a company). In B2B SaaS the correct unit is usually the account." },
    { body: "ARPA mirrors your pricing strategy and customer segment. A rising ARPA means successful upsell, plan upgrades or a shift towards larger customers. A falling ARPA points to discount pressure, a drift towards smaller accounts or contraction. That is why segment- and cohort-level ARPA is far more informative than a single blended average." },
    { body: "ARPA only becomes meaningful next to CAC and LTV. Using LTV = ARPA × gross margin / churn rate, ARPA directly drives lifetime value: lifting ARPA by 20% improves unit economics markedly at the same CAC. For many SaaS businesses the cheapest growth lever is not a new customer but more revenue per existing account." },
  ],
  faqs: [
    { q: "What is the difference between ARPA and ARPU?", a: "Both measure average revenue; ARPA is per account (company) and ARPU is per user. For B2B SaaS products where one account holds many seats, ARPA is normally the right metric." },
    { q: "Which revenues belong in ARPA?", a: "Only recurring subscription revenue (MRR). Setup fees, consulting and one-off sales are excluded — including them inflates the average artificially." },
    { q: "What is a good ARPA?", a: "There is no absolute threshold; it depends on your segment. SMB-focused products often sit at a few hundred per month while enterprise runs into the thousands. The meaningful comparison is your own ARPA trend and its ratio to CAC." },
    { q: "How do you increase ARPA?", a: "Revisit packaging and price architecture, offer usage-based add-ons, incentivise annual plans, build upsell and cross-sell flows, and reduce focus on the lowest-value segment." },
  ],
  relatedTools: [
    { label: "MRR Calculator", href: "/en/free-marketing-tools/mrr-calculator", note: "Monthly recurring revenue" },
    { label: "ARR Calculator", href: "/en/free-marketing-tools/arr-calculator", note: "Annual recurring revenue" },
    { label: "CAC Calculator", href: "/en/free-marketing-tools/cac-calculator", note: "Customer acquisition cost" },
    { label: "SaaS Tools", href: "/en/free-marketing-tools/saas-tools", note: "All SaaS metric calculators" },
  ],
  relatedPost: { label: "SaaS Metrics: ARR, CAC and LTV", href: "/en/blog/saas-metrics-arr-cac-ltv" },
};
