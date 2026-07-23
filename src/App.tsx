import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
const Work = lazy(() => import("./pages/Work"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const About = lazy(() => import("./pages/About"));
const Styleguide = lazy(() => import("./pages/Styleguide"));
const Contact = lazy(() => import("./pages/Contact"));
const FreeTools = lazy(() => import("./pages/FreeTools"));
const ArrCalculator = lazy(() => import("./pages/tools/ArrCalculator"));
const CacCalculator = lazy(() => import("./pages/tools/CacCalculator"));
const ChurnCalculator = lazy(() => import("./pages/tools/ChurnCalculator"));
const LtvCalculator = lazy(() => import("./pages/tools/LtvCalculator"));
const RoasCalculator = lazy(() => import("./pages/tools/RoasCalculator"));
const UtmBuilder = lazy(() => import("./pages/tools/UtmBuilder"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/styleguide" element={<Styleguide />} />
            <Route path="/contact" element={<Contact />} />
            {/* Turkish routes */}
            <Route path="/hakkimda" element={<About />} />
            <Route path="/projeler" element={<Work />} />
            <Route path="/projeler/:slug" element={<ProjectDetail />} />
            <Route path="/ucretsiz-araclar" element={<FreeTools />} />
            <Route path="/ucretsiz-araclar/arr-hesaplayici" element={<ArrCalculator />} />
            <Route path="/ucretsiz-araclar/cac-hesaplayici" element={<CacCalculator />} />
            <Route path="/ucretsiz-araclar/churn-rate-hesaplayici" element={<ChurnCalculator />} />
            <Route path="/ucretsiz-araclar/ltv-hesaplayici" element={<LtvCalculator />} />
            <Route path="/ucretsiz-araclar/roas-hesaplayici" element={<RoasCalculator />} />
            <Route path="/ucretsiz-araclar/utm-link-olusturucu" element={<UtmBuilder />} />
            <Route path="/iletisim" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
