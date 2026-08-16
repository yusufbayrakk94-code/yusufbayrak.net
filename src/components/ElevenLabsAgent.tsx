import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Registers ElevenLabs Conversational AI client tools against the React
// Router navigator so the agent can move the user around without a full
// page reload (which was causing hydration mismatches / React #418).
export function ElevenLabsAgent() {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof document === "undefined") return;

    const toPath = (raw: unknown) => {
      const page = String(raw ?? "/")
        .trim()
        .replace(/^https?:\/\/[^/]+/i, "")
        .replace(/^\/+/, "")
        .replace(/\s+/g, "-");
      return page ? `/${page.replace(/\/+$/, "")}` : "/";
    };

    const navigateToPage = (params?: Record<string, unknown>) => {
      const raw =
        params?.sayfaAdi ?? params?.page ?? params?.path ?? params?.url ?? "/";
      navigate(toPath(raw));
      return "Başarıyla yönlendirildi";
    };

    const summarizeSite = () =>
      "Yusuf Bayrak — Dijital Pazarlama Uzmanı. Site bölümleri: Ana Sayfa, Hakkımda, Projeler, Ücretsiz Araçlar (ARR, CAC, LTV, Churn, MRR, ARPA, NRR, Rule of 40, ROAS, dönüşüm oranı, kâr marjı, UTM ve llms.txt araçları), Blog ve İletişim.";

    const clientTools = {
      navigateToPage,
      navigate_to_page: navigateToPage,
      summarizeSite,
      summarize_site: summarizeSite,
    };

    const onCall = (event: Event) => {
      const detail = (event as CustomEvent).detail;
      if (detail?.config) detail.config.clientTools = clientTools;
    };

    const onMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data || data.type !== "elevenlabs-convai:client-tool-call") return;
      const tool = data.tool ?? data.parameters?.tool;
      if (tool === "navigateToPage" || tool === "navigate_to_page") {
        navigateToPage(data.parameters ?? {});
      }
    };

    const widget = document.querySelector("elevenlabs-convai");
    widget?.addEventListener("elevenlabs-convai:call", onCall);
    document.addEventListener("elevenlabs-convai:call", onCall);
    window.addEventListener("message", onMessage);

    return () => {
      widget?.removeEventListener("elevenlabs-convai:call", onCall);
      document.removeEventListener("elevenlabs-convai:call", onCall);
      window.removeEventListener("message", onMessage);
    };
  }, [navigate]);

  return null;
}

export default ElevenLabsAgent;