export const freeToolsPage = {
  path: "/en/free-marketing-tools",
  seoTitle: "Free Marketing Tools | Yusuf Bayrak",
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
      q: "Do I need an account to use these free tools?",
      a: "No. Every tool works without sign-up, email or payment. Because the maths runs in your browser, none of the data you enter is transmitted to a server.",
    },
    {
      q: "Which category should I start with?",
      a: "Start with Marketing Tools if you are measuring campaign performance, SaaS Tools if you are examining the growth and unit economics of a subscription business, and E-Commerce Tools if you are solving product profitability and pricing. Most teams look at conversion rate and ROAS first, then CAC and LTV.",
    },
    {
      q: "Are the formulas used in these calculators reliable?",
      a: "Yes. Each tool uses the standard industry formula: ROAS = revenue / ad spend, CAC = total sales and marketing cost / new customers, LTV = average revenue × average customer lifetime, churn = customers lost / customers at period start. The formula and its assumptions are written out on every page.",
    },
    {
      q: "Can I use the results in reports or an investor deck?",
      a: "Yes. The tools follow standard definitions, so the outputs are suitable for investor reporting, budget planning and internal performance tracking. Just make sure your input periods (monthly or annual) are consistent across metrics.",
    },
    {
      q: "Do the tools work on mobile devices?",
      a: "Yes. Every calculator is built to run in mobile and desktop browsers — no installation, extension or app download required.",
    },
  ],
  cards: [
    { key: "arr",   name: "ARR Calculator",        description: "Annual Recurring Revenue calculator for subscription products.",                       href: "/en/free-marketing-tools/arr-calculator" },
    { key: "cac",   name: "CAC Calculator",        description: "Analyse your Customer Acquisition Cost across marketing and sales.",                    href: "/en/free-marketing-tools/cac-calculator" },
    { key: "churn", name: "Churn Rate Calculator", description: "Measure your customer churn rate and retention performance.",                           href: "/en/free-marketing-tools/churn-rate-calculator" },
    { key: "ltv",   name: "LTV Calculator",        description: "Calculate customer lifetime value and compare it against CAC.",                         href: "/en/free-marketing-tools/ltv-calculator" },
    { key: "roas",  name: "ROAS Calculator",       description: "Measure Return on Ad Spend and campaign profitability.",                                href: "/en/free-marketing-tools/roas-calculator" },
    { key: "utm",   name: "UTM Link Builder",      description: "Build UTM-tagged links for accurate campaign attribution.",                             href: "/en/free-marketing-tools/utm-builder" },
    { key: "llms",  name: "llms.txt Generator",    description: "Create a free llms.txt so AI bots (ClaudeBot, GPTBot, Perplexity) understand your site.", href: "/en/free-marketing-tools/llms-txt-generator" },
    { key: "gross", name: "Gross Profit Margin Calculator", description: "Enter revenue and COGS to see gross margin as a percentage and an amount.", href: "/en/free-marketing-tools/gross-profit-margin-calculator" },
    { key: "net",   name: "Net Profit Margin Calculator",   description: "Include every expense to see the true net profitability of your business.", href: "/en/free-marketing-tools/net-profit-margin-calculator" },
    { key: "conversion", name: "Conversion Rate Calculator", description: "Turn visitors and conversions into a conversion rate and a gap to your target.", href: "/en/free-marketing-tools/conversion-rate-calculator" },
  ],
};

// Tool categories — mirror of the TR structure. Tool keys map to the `cards`
// array above; each tool has exactly one primary category so canonical URLs
// stay unique.
export const toolCategories = [
  {
    key: "marketing",
    path: "/en/free-marketing-tools/marketing-tools",
    name: "Marketing Tools",
    short: "Campaign tracking, ad return and AI visibility essentials.",
    seoTitle: "Marketing Tools | Yusuf Bayrak",
    seoDescription:
      "Free marketing tools including a UTM builder, conversion rate and ROAS calculators.",
    intro:
      "Free tools built for teams running performance marketing. Tag your campaign links correctly, measure the return on your ad spend and make your site legible to AI search engines. Everything runs in the browser — no data leaves your device.",
    tools: ["utm", "roas", "conversion", "llms"],
  },
  {
    key: "saas",
    path: "/en/free-marketing-tools/saas-tools",
    name: "SaaS Tools",
    short: "Measure the growth and retention metrics of a subscription business.",
    seoTitle: "SaaS Tools | Yusuf Bayrak",
    seoDescription:
      "Analyse your SaaS growth metrics with ARR, CAC, LTV and churn rate calculators.",
    intro:
      "Growth metric calculators for subscription products. Project your ARR, compare acquisition cost against lifetime value and see how churn compounds against your growth. Built for SaaS founders, growth teams and investor reporting.",
    tools: ["arr", "cac", "ltv", "churn"],
  },
  {
    key: "ecommerce",
    path: "/en/free-marketing-tools/ecommerce-tools",
    name: "E-Commerce Tools",
    short: "Calculate true profitability per product and per store.",
    seoTitle: "E-Commerce Tools | Yusuf Bayrak",
    seoDescription:
      "Measure your e-commerce profitability with gross and net profit margin calculators.",
    intro:
      "Profitability calculators for e-commerce brands and online stores. Enter your product costs (COGS) to see gross margin, then add operating and advertising expenses to see the net margin that actually lands. A solid base for pricing and ad budget decisions.",
    tools: ["gross", "net"],
  },
] as const;

export const toolCategoriesUi = {
  hubName: "Free Tools",
  hubHeading: "Free Tools",
  hubIntro:
    "Free tools that compute your marketing, SaaS and e-commerce metrics in seconds. Pick a category to start — everything runs client-side, nothing is sent to a server.",
  hubDivider: "Categories",
  toolsDivider: "Tools in this category",
  otherDivider: "Other tool categories",
  toolCountLabel: (n: number) => `${n} tool${n === 1 ? "" : "s"}`,
  homeLabel: "Home",
};
