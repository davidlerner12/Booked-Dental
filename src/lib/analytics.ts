const LEAD_FORM_CONVERSION_TAG = "AW-18212559239/ksECCPr16LgcEIeztuxD";
const LEAD_FORM_CONVERSION_KEY = "bookedDentalLeadConversionSent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackPageView = (page: string) =>
  window.gtag?.("event", "page_view", { page_path: page });

export const trackEvent = (category: string, action: string, label?: string) =>
  window.gtag?.("event", action, { event_category: category, event_label: label });

export const trackLeadFormConversion = () => {
  if (window.sessionStorage?.getItem(LEAD_FORM_CONVERSION_KEY)) return;
  window.sessionStorage?.setItem(LEAD_FORM_CONVERSION_KEY, "true");
  window.gtag?.("event", "conversion", { send_to: LEAD_FORM_CONVERSION_TAG });
};

export const trackMetaEvent = (event: string, params?: Record<string, unknown>) =>
  window.fbq?.("track", event, params);

export const trackBookingCTA = () => {
  trackEvent("Conversion", "booking_cta_clicked", "Market availability");
  trackMetaEvent("Lead");
};

export const trackBookingConfirmed = () => {
  trackLeadFormConversion();
  trackEvent("Conversion", "booking_confirmed", "Market availability");
  trackMetaEvent("Schedule");
};

export const trackMarketAvailabilitySubmit = (cityState: string, email: string) => {
  window.gtag?.("event", "market_availability_submitted", {
    event_category: "Form",
    event_label: cityState,
    email,
  });
  trackMetaEvent("Lead", { city_state: cityState, email });
};
