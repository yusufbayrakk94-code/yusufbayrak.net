import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
// Pages are imported statically (not React.lazy) so `renderToString` in the
// SSG script gets the actual page tree — Suspense would otherwise render the
// fallback and Helmet would emit empty meta tags.
import Home from "./pages/Home";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Styleguide from "./pages/Styleguide";
import Contact from "./pages/Contact";
import FreeTools from "./pages/FreeTools";
import ToolCategory from "./pages/ToolCategory";
import ArrCalculator from "./pages/tools/ArrCalculator";
import CacCalculator from "./pages/tools/CacCalculator";
import ChurnCalculator from "./pages/tools/ChurnCalculator";
import LtvCalculator from "./pages/tools/LtvCalculator";
import RoasCalculator from "./pages/tools/RoasCalculator";
import UtmBuilder from "./pages/tools/UtmBuilder";
import LlmsTxtGenerator from "./pages/tools/LlmsTxtGenerator";
import GrossMarginCalculator from "./pages/tools/GrossMarginCalculator";
import NetMarginCalculator from "./pages/tools/NetMarginCalculator";
import BlogList from "./pages/blog/BlogList";
import BlogPost from "./pages/blog/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// The Route tree — router (BrowserRouter or StaticRouter) is provided from the
// entry (`main.tsx` for client, `entry-server.tsx` for SSG prerender).
export function AppRoutes() {
  return (
    <Routes>
      {/* Turkish (default) routes */}
      <Route path="/" element={<Home />} />
      <Route path="/hakkimda" element={<About />} />
      <Route path="/projeler" element={<Work />} />
      <Route path="/projeler/:slug" element={<ProjectDetail />} />
      <Route path="/ucretsiz-araclar" element={<FreeTools />} />
      <Route path="/ucretsiz-araclar/pazarlama-araclari" element={<ToolCategory categoryKey="marketing" />} />
      <Route path="/ucretsiz-araclar/saas-araclari" element={<ToolCategory categoryKey="saas" />} />
      <Route path="/ucretsiz-araclar/e-ticaret-araclari" element={<ToolCategory categoryKey="ecommerce" />} />
      <Route path="/ucretsiz-araclar/arr-hesaplayici" element={<ArrCalculator />} />
      <Route path="/ucretsiz-araclar/cac-hesaplayici" element={<CacCalculator />} />
      <Route path="/ucretsiz-araclar/churn-rate-hesaplayici" element={<ChurnCalculator />} />
      <Route path="/ucretsiz-araclar/ltv-hesaplayici" element={<LtvCalculator />} />
      <Route path="/ucretsiz-araclar/roas-hesaplayici" element={<RoasCalculator />} />
      <Route path="/ucretsiz-araclar/utm-link-olusturucu" element={<UtmBuilder />} />
      <Route path="/ucretsiz-araclar/llms-txt-olusturucu" element={<LlmsTxtGenerator />} />
      <Route path="/ucretsiz-araclar/brut-kar-marji-hesaplayici" element={<GrossMarginCalculator />} />
      <Route path="/ucretsiz-araclar/net-kar-marji-hesaplayici" element={<NetMarginCalculator />} />
      <Route path="/iletisim" element={<Contact />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/styleguide" element={<Styleguide />} />

      {/* English routes — share the same components; content picks by locale */}
      <Route path="/en" element={<Home />} />
      <Route path="/en/about" element={<About />} />
      <Route path="/en/projects" element={<Work />} />
      <Route path="/en/projects/:slug" element={<ProjectDetail />} />
      <Route path="/en/free-marketing-tools" element={<FreeTools />} />
      <Route path="/en/free-marketing-tools/marketing-tools" element={<ToolCategory categoryKey="marketing" />} />
      <Route path="/en/free-marketing-tools/saas-tools" element={<ToolCategory categoryKey="saas" />} />
      <Route path="/en/free-marketing-tools/ecommerce-tools" element={<ToolCategory categoryKey="ecommerce" />} />
      <Route path="/en/free-marketing-tools/arr-calculator" element={<ArrCalculator />} />
      <Route path="/en/free-marketing-tools/cac-calculator" element={<CacCalculator />} />
      <Route path="/en/free-marketing-tools/churn-rate-calculator" element={<ChurnCalculator />} />
      <Route path="/en/free-marketing-tools/ltv-calculator" element={<LtvCalculator />} />
      <Route path="/en/free-marketing-tools/roas-calculator" element={<RoasCalculator />} />
      <Route path="/en/free-marketing-tools/utm-builder" element={<UtmBuilder />} />
      <Route path="/en/free-marketing-tools/llms-txt-generator" element={<LlmsTxtGenerator />} />
      <Route path="/en/free-marketing-tools/gross-profit-margin-calculator" element={<GrossMarginCalculator />} />
      <Route path="/en/free-marketing-tools/net-profit-margin-calculator" element={<NetMarginCalculator />} />
      <Route path="/en/contact" element={<Contact />} />
      <Route path="/en/blog" element={<BlogList />} />
      <Route path="/en/blog/:slug" element={<BlogPost />} />

      {/* Legacy English aliases kept for existing inbound links */}
      <Route path="/work" element={<Work />} />
      <Route path="/work/:slug" element={<ProjectDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
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
