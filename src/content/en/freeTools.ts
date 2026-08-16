export const freeToolsPage = {
  path: "/en/free-tools",
  seoTitle: "Free Marketing & SaaS Calculators | Yusuf Bayrak",
  seoDescription:
    "ARR, CAC, Churn, LTV, ROAS calculators and UTM link builder — run your marketing and SaaS metrics in seconds.",
  heading: "Free Tools",
  intro:
    "Practical tools that compute your marketing, SaaS and growth metrics in seconds. All free, all client-side — nothing is sent to a server.",
  divider: "Tools",
  sections: [
    {
      heading: "What do these free marketing and SaaS calculators do?",
      body:
        "The tools on this page compute the core metrics a marketing or product team tracks every week — ARR, CAC, LTV, churn, ROAS, conversion rate, gross and net profit margin — without you writing a single spreadsheet formula. Each calculator uses the standard industry definition and returns not just a number but a short reading of what that number means for your business.",
    },
    {
      heading: "Who they are built for: SaaS founders, e-commerce owners and marketers",
      body:
        "SaaS founders get the subscription metrics needed for growth modelling and investor reporting. E-commerce owners see true profitability at product and store level. Performance marketers tag campaign links correctly and read ad return alongside conversion rate. The common thread: see the number before you make the decision.",
    },
    {
      heading: "When to use the Marketing Tools category",
      body:
        "If your question is \"is this campaign working?\", start with Marketing Tools. The UTM Link Builder separates traffic sources, the Conversion Rate Calculator shows how much of that traffic turns into action, the ROAS Calculator measures the return on every unit spent, and the llms.txt Generator makes your site legible to AI search engines. These are campaign-level, daily-to-weekly decisions.",
    },
    {
      heading: "When to use the SaaS Tools category",
      body:
        "If your question is \"is my business model sustainable?\", SaaS Tools is the right place. ARR sizes your recurring revenue, CAC prices the cost of winning a customer, LTV values what that customer returns over the relationship, and churn shows how fast you lose them. These metrics matter on a monthly-to-quarterly cycle, for unit economics and investor reporting.",
    },
    {
      heading: "When to use the E-Commerce Tools category",
      body:
        "If your question is \"am I actually making money on this product?\", move to E-Commerce Tools. The Gross Profit Margin Calculator shows what remains after product cost (COGS); the Net Profit Margin Calculator shows what remains after ads, shipping, marketplace fees and operations. Pricing and ad budget decisions are built on these two numbers.",
    },
    {
      heading: "Where does your data go?",
      body:
        "Nowhere. Every calculation runs in your browser with JavaScript. The revenue, cost or customer figures you type are never sent to a server, never stored and never shared with third parties. No sign-up, no usage limits.",
    },
  ],
  faqs: [
    {
      q: "What tool can I use to calculate ARR, CAC, and LTV?",
      a: "Use the free calculators in the SaaS Tools category: the ARR Calculator for annual recurring revenue, the MRR Calculator for monthly revenue, the CAC Calculator for customer acquisition cost, the LTV Calculator for lifetime value, plus ARPA and Churn Rate calculators. Everything runs in the browser with no sign-up.",
    },
    {
      q: "Is there a free profit margin calculator?",
      a: "Yes. The E-Commerce Tools category has two: the Gross Profit Margin Calculator turns revenue and COGS into product-level margin, and the Net Profit Margin Calculator includes advertising, shipping, marketplace fees and operating costs to show true profitability as both a percentage and an amount.",
    },
    {
      q: "How do I create a UTM link and which tool builds it?",
      a: "Use the UTM Link Builder in the Marketing Tools category: enter the destination URL and fill in utm_source, utm_medium and utm_campaign to generate the tagged link instantly. Keep values lowercase and consistent — GA4 reports these parameters as session source and medium.",
    },
    {
      q: "What is the conversion rate formula?",
      a: "Conversion Rate = (Conversions / Total Visitors) × 100. For example, 8,000 visitors and 160 sales is a 2% conversion rate. The Conversion Rate Calculator applies this formula and, if you enter a target rate, also shows the gap and how many extra conversions you need.",
    },
    {
      q: "Which metrics should SaaS and e-commerce businesses track?",
      a: "For SaaS the core set is MRR/ARR, ARPA, CAC, LTV and churn rate, with an LTV:CAC ratio above 3:1 as the healthy benchmark. For e-commerce, read gross profit margin, net profit margin, ROAS and conversion rate together — break-even ROAS = 1 / gross margin. A calculator for each sits in the matching category on this page.",
    },
  ],
  cards: [
    { key: "arr",   name: "ARR Calculator",        description: "Annual Recurring Revenue calculator for subscription products.",                       href: "/en/free-tools/arr-calculator" },
    { key: "cac",   name: "CAC Calculator",        description: "Analyse your Customer Acquisition Cost across marketing and sales.",                    href: "/en/free-tools/cac-calculator" },
    { key: "churn", name: "Churn Rate Calculator", description: "Measure your customer churn rate and retention performance.",                           href: "/en/free-tools/churn-rate-calculator" },
    { key: "ltv",   name: "LTV Calculator",        description: "Calculate customer lifetime value and compare it against CAC.",                         href: "/en/free-tools/ltv-calculator" },
    { key: "roas",  name: "ROAS Calculator",       description: "Measure Return on Ad Spend and campaign profitability.",                                href: "/en/free-tools/roas-calculator" },
    { key: "utm",   name: "UTM Link Builder",      description: "Build UTM-tagged links for accurate campaign attribution.",                             href: "/en/free-tools/utm-builder" },
    { key: "llms",  name: "llms.txt Generator",    description: "Create a free llms.txt so AI bots (ClaudeBot, GPTBot, Perplexity) understand your site.", href: "/en/free-tools/llms-txt-generator" },
    { key: "gross", name: "Gross Profit Margin Calculator", description: "Enter revenue and COGS to see gross margin as a percentage and an amount.", href: "/en/free-tools/gross-profit-margin-calculator" },
    { key: "net",   name: "Net Profit Margin Calculator",   description: "Include every expense to see the true net profitability of your business.", href: "/en/free-tools/net-profit-margin-calculator" },
    { key: "mrr",   name: "MRR Calculator",        description: "Calculate Monthly Recurring Revenue and see the matching ARR.", href: "/en/free-tools/mrr-calculator" },
    { key: "arpa",  name: "ARPA Calculator",       description: "Average revenue per account from total MRR and active accounts.", href: "/en/free-tools/arpa-calculator" },
    { key: "nrr",   name: "NRR Calculator",        description: "Net revenue retention from expansion, contraction and churned MRR.", href: "/en/free-tools/nrr-calculator" },
    { key: "rule40", name: "Rule of 40 Calculator", description: "Add growth rate and profit margin to score your SaaS health.", href: "/en/free-tools/rule-of-40-calculator" },
    { key: "conversion", name: "Conversion Rate Calculator", description: "Turn visitors and conversions into a conversion rate and a gap to your target.", href: "/en/free-tools/conversion-rate-calculator" },
  ],
};

// Tool categories — mirror of the TR structure. Tool keys map to the `cards`
// array above; each tool has exactly one primary category so canonical URLs
// stay unique.
export const toolCategories = [
  {
    key: "marketing",
    path: "/en/free-tools/marketing-tools",
    name: "Marketing Tools",
    short: "Campaign tracking, ad return and AI visibility essentials.",
    seoTitle: "Marketing Tools | Yusuf Bayrak",
    seoDescription:
      "Free marketing tools including a UTM builder, conversion rate and ROAS calculators.",
    intro:
      "Free tools built for teams running performance marketing. Tag your campaign links correctly, measure the return on your ad spend and make your site legible to AI search engines. Everything runs in the browser — no data leaves your device.",
    sections: [
      {
        heading: "Why UTM tracking is the foundation of performance marketing",
        body:
          "UTM parameters are tags that tell your analytics tool exactly which source, channel and campaign a visitor came from. Untagged traffic lands in Google Analytics as \"direct\" or \"referral\", and the channel that actually earned the revenue becomes invisible. That is why every measurement chain starts with a correct UTM structure.",
      },
      {
        heading: "Conversion rate: where traffic turns into quality",
        body:
          "Conversion rate shows what percentage of visitors complete the intended action — a purchase, a form, a demo request. Traffic volume alone means little: lifting conversion rate from 1% to 2% on the same budget produces the same result as doubling traffic, and is usually far cheaper.",
      },
      {
        heading: "ROAS: reducing spend efficiency to one number",
        body:
          "ROAS (Return on Ad Spend) measures revenue earned per unit of ad spend, which makes campaigns, ad sets and creatives directly comparable. But ROAS is a revenue metric — it ignores your margin. In e-commerce it should always be read next to gross and net profit margin.",
      },
      {
        heading: "How the tools work together in a campaign analysis",
        body:
          "The flow is: tag your campaign links consistently with the UTM Link Builder. Once the campaign is live, review the source/medium breakdown in analytics and use the Conversion Rate Calculator to compare how each source converts. Finally, run the ROAS Calculator to get spend-to-revenue efficiency, cut the low-ROAS sources and shift budget to the channels that pay back.",
      },
      {
        heading: "AI search visibility with llms.txt",
        body:
          "A growing share of search traffic now originates in generative engines such as ChatGPT, Perplexity and Claude. The llms.txt Generator produces a standard file that declares which pages you want these bots to read. Added alongside classic SEO, it raises the chance that your brand information is represented accurately in AI answers.",
      },
    ],
    faqs: [
      {
        q: "How do UTM parameters appear in Google Analytics?",
        a: "In GA4 they surface in the Traffic Acquisition reports as session source, session medium and session campaign. utm_source is the source, utm_medium the channel type (cpc, email, social), utm_campaign the campaign name, while utm_content and utm_term break out creative and keyword. Tags are case-sensitive, so \"Facebook\" and \"facebook\" create two separate rows.",
      },
      {
        q: "What is the difference between ROAS and ROI?",
        a: "ROAS measures only revenue against ad spend (revenue / ad spend). ROI accounts for every cost — product, operations, payroll — and measures net profit ((profit - investment) / investment). A 4x ROAS looks strong, but on a 20% margin the campaign may still lose money. Use ROAS for campaign decisions and ROI for business decisions.",
      },
      {
        q: "What counts as a good ROAS?",
        a: "There is no universal threshold; it depends on your margin. Break-even ROAS = 1 / gross profit margin: at a 25% margin that is 4x, at 50% it is 2x. Retail e-commerce typically treats 3x-5x as healthy, high-margin digital products can work at 2x, and low-margin retail may need 6x or more.",
      },
      {
        q: "What is the first step to improving conversion rate?",
        a: "Start with measurement integrity: confirm conversion events fire correctly and traffic is separated with UTMs. Then find the page with the highest traffic and lowest conversion, and work on page speed, mobile experience, form field count and a single clear call to action. Validate changes with single-variable A/B tests rather than guesswork.",
      },
    ],
    tools: ["utm", "roas", "conversion", "llms"],
  },
  {
    key: "saas",
    path: "/en/free-tools/saas-tools",
    name: "SaaS Tools",
    short: "Measure the growth and retention metrics of a subscription business.",
    seoTitle: "SaaS Tools | Yusuf Bayrak",
    seoDescription:
      "Analyse your SaaS growth metrics with ARR, CAC, LTV and churn rate calculators.",
    intro:
      "Growth metric calculators for subscription products. Project your ARR, compare acquisition cost against lifetime value and see how churn compounds against your growth. Built for SaaS founders, growth teams and investor reporting.",
    sections: [
      {
        heading: "ARR, CAC, LTV and churn: the four pillars of SaaS growth",
        body:
          "Growth in a subscription business cannot be reduced to one number. ARR sizes annualised recurring revenue, CAC prices the full cost of acquiring a customer, LTV values the total revenue that customer contributes over the relationship, and churn measures how quickly existing customers leave. Read together, they reveal whether growth is genuinely sustainable.",
      },
      {
        heading: "How the metrics influence each other",
        body:
          "When churn rises, average customer lifetime shortens, which directly reduces LTV. A lower LTV against an unchanged CAC breaks your unit economics. Reducing churn is therefore often a faster profitability lever than acquiring new customers. Likewise a price increase lifts both ARR and LTV but can trigger churn, so changes should be measured one at a time.",
      },
      {
        heading: "Why LTV:CAC is the most important ratio",
        body:
          "LTV:CAC tells you how many times over you recover the money spent to win a customer. A 3:1 ratio is the accepted healthy benchmark. Approaching 1:1 means you lose money as you scale; above 5:1 usually means you are underinvesting in growth and could spend more on acquisition. CAC payback period is typically expected to stay under 12 months.",
      },
      {
        heading: "A concrete scenario: the order a SaaS founder should follow",
        body:
          "First, use the ARR Calculator to annualise current subscription revenue and establish scale. Second, use the CAC Calculator to divide last quarter's full sales and marketing spend by new customers won. Third, use the Churn Rate Calculator to find your monthly loss rate, which yields average customer lifetime. Finally, use the LTV Calculator and compare the result against CAC. If the ratio sits below 3:1, address churn first, pricing second and acquisition channels last.",
      },
      {
        heading: "Common reporting mistakes",
        body:
          "The most frequent error is mixing periods — comparing a monthly CAC against an annual LTV distorts everything. The second is counting only ad spend in CAC while excluding sales salaries and tooling. The third is treating revenue churn and customer churn as the same thing; losing one large account barely moves customer count but can wreck revenue.",
      },
    ],
    faqs: [
      {
        q: "What is the CAC:LTV ratio and what should it be?",
        a: "LTV:CAC divides a customer's lifetime value by the cost of acquiring them. The widely accepted healthy level is 3:1 — every unit of acquisition spend should return three units of lifetime revenue. A 1:1 ratio is unsustainable, while above 5:1 suggests you are underinvesting in growth.",
      },
      {
        q: "What is the difference between ARR and MRR?",
        a: "MRR is monthly recurring revenue and ARR is annual recurring revenue, related simply as ARR = MRR × 12. MRR is more useful for day-to-day operations in month-to-month products, while ARR is preferred by SaaS companies selling annual or enterprise contracts and in investor reporting.",
      },
      {
        q: "How often should churn rate be measured?",
        a: "Month-to-month subscription models should measure churn monthly and annualise it to track the trend. With annual contracts or an enterprise customer base, monthly data is noisy, so quarterly and annual measurement is more meaningful. Small customer bases should use a moving average, since a single cancellation swings the rate heavily.",
      },
      {
        q: "At which stage do these metrics matter most?",
        a: "Early stage, before product-market fit, churn and activation matter most; CAC and LTV are volatile because the sample is small. In the growth stage, CAC, LTV, the LTV:CAC ratio and CAC payback drive budget allocation. At scale, ARR growth rate, net revenue retention (NRR) and cohort-level churn take over.",
      },
    ],
    tools: ["arr", "mrr", "arpa", "nrr", "rule40", "cac", "ltv", "churn"],
  },
  {
    key: "ecommerce",
    path: "/en/free-tools/ecommerce-tools",
    name: "E-Commerce Tools",
    short: "Calculate true profitability per product and per store.",
    seoTitle: "E-Commerce Tools | Yusuf Bayrak",
    seoDescription:
      "Measure your e-commerce profitability with gross and net profit margin calculators.",
    intro:
      "Profitability calculators for e-commerce brands and online stores. Enter your product costs (COGS) to see gross margin, then add operating and advertising expenses to see the net margin that actually lands. A solid base for pricing and ad budget decisions.",
    sections: [
      {
        heading: "Why revenue is the wrong measure of e-commerce health",
        body:
          "Growing monthly revenue does not mean the business is earning. Once product cost, shipping, returns, marketplace commission, payment processing fees and ad spend are deducted, high revenue often collapses into a thin margin. The headline metric in e-commerce is therefore not revenue but gross and net profit margin.",
      },
      {
        heading: "Gross profit margin: the starting point for pricing",
        body:
          "Gross profit margin is what remains from sales revenue after cost of goods sold (COGS), expressed as a percentage: (Revenue - COGS) / Revenue × 100. It tells you whether your pricing is sound at product level and sets the ceiling on how much you can afford to spend on marketing.",
      },
      {
        heading: "Net profit margin: what actually reaches your pocket",
        body:
          "Net profit margin takes gross profit and deducts every remaining cost — advertising, payroll, shipping, software, commissions and tax — as a share of revenue. A store with a 45% gross margin can end up near 5% net depending on ad intensity. Growth decisions should be made on net margin.",
      },
      {
        heading: "Reading margin and ROAS together",
        body:
          "Judging ad performance on ROAS alone is misleading. Break-even ROAS = 1 / gross profit margin: for a store running a 30% margin, any campaign below 3.3x ROAS destroys value. Once you know your margin, deciding which campaign to switch off stops being a guess and becomes arithmetic.",
      },
      {
        heading: "In what order should you use these tools?",
        body:
          "Start with the Gross Profit Margin Calculator at product level and flag the low-margin SKUs. Then use the Net Profit Margin Calculator to add every store-wide cost and see real profitability. Finally, run the ROAS Calculator and compare campaign return against your break-even threshold. These three steps feed every pricing, budget and assortment decision.",
      },
    ],
    faqs: [
      {
        q: "What is a good gross profit margin in e-commerce?",
        a: "It varies by category. General retail and electronics typically run 20-35%, fashion and home textiles 45-60%, cosmetics and supplements 60-80%. For a business that grows through paid advertising, a gross margin of at least 40% is usually required to absorb acquisition costs.",
      },
      {
        q: "What is the difference between gross and net profit margin?",
        a: "Gross margin deducts only cost of goods sold and reflects the health of your pricing. Net margin deducts every cost — advertising, shipping, commissions, payroll, software and tax — and reflects what the business actually earns. Gross margin measures potential; net margin measures outcome.",
      },
      {
        q: "Where does ad spend belong in the margin calculation?",
        a: "Ad spend is not part of COGS; it is an operating cost that sits below gross profit and belongs in the net margin calculation. For product-level decisions, subtract the ad cost allocated per unit from gross margin to get contribution margin, which is the more accurate figure.",
      },
      {
        q: "How should returns and shipping costs be handled?",
        a: "If you do not charge shipping to the customer, add it as a direct cost in the net margin calculation. Model returns as return rate × average order value and deduct it from revenue; in high-return categories this line alone can pull net margin down by several points.",
      },
      {
        q: "How do marketplace commissions affect profitability?",
        a: "Marketplace commissions usually run 8-20% of the sale and, together with payment processing fees, come straight off revenue. When comparing your own store to a marketplace, model the same product in both scenarios: marketplace traffic looks free, but the commission often costs about as much as paid acquisition.",
      },
    ],
    tools: ["gross", "net"],
  },
] as const;

export const toolCategoriesUi = {
  hubName: "Free Tools",
  hubHeading: "Marketing, SaaS & E-Commerce Calculators",
  hubIntro:
    "Free tools that compute your marketing, SaaS and e-commerce metrics in seconds. Pick a category to start — everything runs client-side, nothing is sent to a server.",
  hubDivider: "Categories",
  toolsDivider: "Tools in this category",
  otherDivider: "Other tool categories",
  toolCountLabel: (n: number) => `${n} tool${n === 1 ? "" : "s"}`,
  homeLabel: "Home",
  guideDivider: "Guide",
  faqDivider: "Frequently Asked Questions",
};
