declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  window.gtag?.("event", name, params);
}

export const events = {
  leadSubmitted: (company?: string) =>
    trackEvent("generate_lead", { event_category: "contact", company }),

  ctaClicked: (label: string, location: string) =>
    trackEvent("cta_click", { event_category: "engagement", label, location }),
};
