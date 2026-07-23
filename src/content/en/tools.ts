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

export const enTools = { arr, cac, churn, ltv, roas, utm };
