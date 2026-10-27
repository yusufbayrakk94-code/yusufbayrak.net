import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, useLocation } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Suspense } from "react";
import { matchRoutes, useRoutes, type RouteObject } from "react-router-dom";
import { lazyPage } from "@/lib/lazyPage";
// Pages are code-split per route (see src/lib/lazyPage.tsx). The SSG script
// preloads every page before renderToString, and main.tsx preloads the
// current route's page before hydrateRoot, so neither ever renders a
// Suspense fallback on first paint.

const Home = lazyPage("../pages/Home.tsx");
const Work = lazyPage("../pages/Work.tsx");
const ProjectDetail = lazyPage("../pages/ProjectDetail.tsx");
const About = lazyPage("../pages/About.tsx");
const Styleguide = lazyPage("../pages/Styleguide.tsx");
const Contact = lazyPage("../pages/Contact.tsx");
const FreeTools = lazyPage("../pages/FreeTools.tsx");
const ToolCategory = lazyPage("../pages/ToolCategory.tsx");
const ArrCalculator = lazyPage("../pages/tools/ArrCalculator.tsx");
const CacCalculator = lazyPage("../pages/tools/CacCalculator.tsx");
const ChurnCalculator = lazyPage("../pages/tools/ChurnCalculator.tsx");
const LtvCalculator = lazyPage("../pages/tools/LtvCalculator.tsx");
const RoasCalculator = lazyPage("../pages/tools/RoasCalculator.tsx");
const MarketplaceProfitCalculator = lazyPage("../pages/tools/MarketplaceProfitCalculator.tsx");
const DesiCalculator = lazyPage("../pages/tools/DesiCalculator.tsx");
const AdBudgetCalculator = lazyPage("../pages/tools/AdBudgetCalculator.tsx");
const UtmBuilder = lazyPage("../pages/tools/UtmBuilder.tsx");
const LlmsTxtGenerator = lazyPage("../pages/tools/LlmsTxtGenerator.tsx");
const GrossMarginCalculator = lazyPage("../pages/tools/GrossMarginCalculator.tsx");
const NetMarginCalculator = lazyPage("../pages/tools/NetMarginCalculator.tsx");
const ConversionRateCalculator = lazyPage("../pages/tools/ConversionRateCalculator.tsx");
const MrrCalculator = lazyPage("../pages/tools/MrrCalculator.tsx");
const ArpaCalculator = lazyPage("../pages/tools/ArpaCalculator.tsx");
const NrrCalculator = lazyPage("../pages/tools/NrrCalculator.tsx");
const RuleOf40Calculator = lazyPage("../pages/tools/RuleOf40Calculator.tsx");
const CacPaybackCalculator = lazyPage("../pages/tools/CacPaybackCalculator.tsx");
const MarketingChannelQuiz = lazyPage("../pages/tools/MarketingChannelQuiz.tsx");
const BlogList = lazyPage("../pages/blog/BlogList.tsx");
const BlogPost = lazyPage("../pages/blog/BlogPost.tsx");
const NotFound = lazyPage("../pages/NotFound.tsx");

const queryClient = new QueryClient();

// The Route tree — router (BrowserRouter or StaticRouter) is provided from the
// entry (`main.tsx` for client, `entry-server.tsx` for SSG prerender).
// Legacy EN tools prefix redirect: /en/free-marketing-tools/... ->
// /en/free-tools/... (static hosts can't 301, so the client mirrors the
// redirect stubs written by scripts/redirects.mjs).
function LegacyToolsRedirect() {
  const { pathname } = useLocation();
  const target = pathname.replace(
    /^\/en\/free-marketing-tools/,
    "/en/free-tools"
  );
  return <Navigate to={target} replace />;
}

// Route table — shared by <AppRoutes> (rendering) and preloadRoute (client
// hydration). Router (BrowserRouter or StaticRouter) comes from the entry.
export const ROUTES: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/hakkimda", element: <About /> },
  { path: "/projeler", element: <Work /> },
  { path: "/projeler/:slug", element: <ProjectDetail /> },
  { path: "/ucretsiz-araclar", element: <FreeTools /> },
  { path: "/ucretsiz-araclar/pazarlama-araclari", element: <ToolCategory categoryKey="marketing" /> },
  { path: "/ucretsiz-araclar/saas-araclari", element: <ToolCategory categoryKey="saas" /> },
  { path: "/ucretsiz-araclar/e-ticaret-araclari", element: <ToolCategory categoryKey="ecommerce" /> },
  { path: "/ucretsiz-araclar/arr-hesaplayici", element: <ArrCalculator /> },
  { path: "/ucretsiz-araclar/cac-hesaplayici", element: <CacCalculator /> },
  { path: "/ucretsiz-araclar/churn-rate-hesaplayici", element: <ChurnCalculator /> },
  { path: "/ucretsiz-araclar/ltv-hesaplayici", element: <LtvCalculator /> },
  { path: "/ucretsiz-araclar/roas-hesaplayici", element: <RoasCalculator /> },
  { path: "/ucretsiz-araclar/trendyol-hepsiburada-kar-hesaplama", element: <MarketplaceProfitCalculator /> },
  { path: "/ucretsiz-araclar/desi-hesaplama", element: <DesiCalculator /> },
  { path: "/ucretsiz-araclar/reklam-butcesi-hesaplama", element: <AdBudgetCalculator /> },
  { path: "/ucretsiz-araclar/utm-link-olusturucu", element: <UtmBuilder /> },
  { path: "/ucretsiz-araclar/llms-txt-olusturucu", element: <LlmsTxtGenerator /> },
  { path: "/ucretsiz-araclar/brut-kar-marji-hesaplayici", element: <GrossMarginCalculator /> },
  { path: "/ucretsiz-araclar/net-kar-marji-hesaplayici", element: <NetMarginCalculator /> },
  { path: "/ucretsiz-araclar/donusum-orani-hesaplayici", element: <ConversionRateCalculator /> },
  { path: "/ucretsiz-araclar/mrr-hesaplayici", element: <MrrCalculator /> },
  { path: "/ucretsiz-araclar/arpa-hesaplayici", element: <ArpaCalculator /> },
  { path: "/ucretsiz-araclar/nrr-hesaplayici", element: <NrrCalculator /> },
  { path: "/ucretsiz-araclar/rule-of-40-hesaplayici", element: <RuleOf40Calculator /> },
  { path: "/ucretsiz-araclar/cac-geri-odeme-suresi-hesaplayici", element: <CacPaybackCalculator /> },
  { path: "/ucretsiz-araclar/hangi-pazarlama-kanali-uygun", element: <MarketingChannelQuiz /> },
  { path: "/iletisim", element: <Contact /> },
  { path: "/blog", element: <BlogList /> },
  { path: "/blog/:slug", element: <BlogPost /> },
  { path: "/styleguide", element: <Styleguide /> },
  { path: "/en", element: <Home /> },
  { path: "/en/about", element: <About /> },
  { path: "/en/projects", element: <Work /> },
  { path: "/en/projects/:slug", element: <ProjectDetail /> },
  { path: "/en/free-tools", element: <FreeTools /> },
  { path: "/en/free-tools/marketing-tools", element: <ToolCategory categoryKey="marketing" /> },
  { path: "/en/free-tools/saas-tools", element: <ToolCategory categoryKey="saas" /> },
  { path: "/en/free-tools/ecommerce-tools", element: <ToolCategory categoryKey="ecommerce" /> },
  { path: "/en/free-tools/arr-calculator", element: <ArrCalculator /> },
  { path: "/en/free-tools/cac-calculator", element: <CacCalculator /> },
  { path: "/en/free-tools/churn-rate-calculator", element: <ChurnCalculator /> },
  { path: "/en/free-tools/ltv-calculator", element: <LtvCalculator /> },
  { path: "/en/free-tools/roas-calculator", element: <RoasCalculator /> },
  { path: "/en/free-tools/marketplace-profit-calculator", element: <MarketplaceProfitCalculator /> },
  { path: "/en/free-tools/dimensional-weight-calculator", element: <DesiCalculator /> },
  { path: "/en/free-tools/ad-budget-calculator", element: <AdBudgetCalculator /> },
  { path: "/en/free-tools/utm-builder", element: <UtmBuilder /> },
  { path: "/en/free-tools/llms-txt-generator", element: <LlmsTxtGenerator /> },
  { path: "/en/free-tools/gross-profit-margin-calculator", element: <GrossMarginCalculator /> },
  { path: "/en/free-tools/net-profit-margin-calculator", element: <NetMarginCalculator /> },
  { path: "/en/free-tools/conversion-rate-calculator", element: <ConversionRateCalculator /> },
  { path: "/en/free-tools/mrr-calculator", element: <MrrCalculator /> },
  { path: "/en/free-tools/arpa-calculator", element: <ArpaCalculator /> },
  { path: "/en/free-tools/nrr-calculator", element: <NrrCalculator /> },
  { path: "/en/free-tools/rule-of-40-calculator", element: <RuleOf40Calculator /> },
  { path: "/en/free-tools/cac-payback-period-calculator", element: <CacPaybackCalculator /> },
  { path: "/en/free-tools/marketing-channel-quiz", element: <MarketingChannelQuiz /> },
  { path: "/en/contact", element: <Contact /> },
  { path: "/en/blog", element: <BlogList /> },
  { path: "/en/blog/:slug", element: <BlogPost /> },
  { path: "/en/free-marketing-tools/*", element: <LegacyToolsRedirect /> },
  { path: "/work", element: <Work /> },
  { path: "/work/:slug", element: <ProjectDetail /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  // Embeddable widget versions (noindex, canonical → tool page; seo/widget-plan.md)
  { path: "/embed/roas-hesaplayici", element: <RoasCalculator /> },
  { path: "/embed/reklam-butcesi-hesaplama", element: <AdBudgetCalculator /> },
  { path: "/embed/trendyol-hepsiburada-kar-hesaplama", element: <MarketplaceProfitCalculator /> },
  { path: "/embed/desi-hesaplama", element: <DesiCalculator /> },
  { path: "/en/embed/roas-calculator", element: <RoasCalculator /> },
  { path: "/en/embed/ad-budget-calculator", element: <AdBudgetCalculator /> },
  { path: "/en/embed/marketplace-profit-calculator", element: <MarketplaceProfitCalculator /> },
  { path: "/en/embed/dimensional-weight-calculator", element: <DesiCalculator /> },
  { path: "*", element: <NotFound /> },
];

// Load the page chunk(s) for a URL before hydrating, so the first client
// render matches the prerendered HTML.
export async function preloadRoute(pathname: string) {
  const matches = matchRoutes(ROUTES, pathname) ?? [];
  await Promise.all(
    matches.map((m) => {
      const el = m.route.element as { type?: { preload?: () => Promise<void> } } | undefined;
      return el?.type?.preload?.();
    })
  );
}

export function AppRoutes() {
  return <Suspense fallback={<div className="min-h-screen" />}>{useRoutes(ROUTES)}</Suspense>;
}

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <AppRoutes />
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
