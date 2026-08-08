declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONVERSION_LABELS = {
  form: "AW-18376538222/OTxECJG74d0cEO7wzrpE",
} as const;

export function trackConversion(action: keyof typeof CONVERSION_LABELS) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", { send_to: CONVERSION_LABELS[action] });
}
