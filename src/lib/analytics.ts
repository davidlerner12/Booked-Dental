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

export const trackLeadFormConversion = (callback?: () => void) => {
  if (window.sessionStorage?.getItem(LEAD_FORM_CONVERSION_KEY)) {
    callback?.();
    return;
  }
  window.sessionStorage?.setItem(LEAD_FORM_CONVERSION_KEY, "true");
  let callbackCalled = false;
  const finish = () => {
    if (callbackCalled) return;
    callbackCalled = true;
    callback?.();
  };

  window.gtag?.("event", "conversion", {
    send_to: LEAD_FORM_CONVERSION_TAG,
    event_category: "Form",
    event_label: "Submit lead form",
    event_callback: finish,
    event_timeout: 800,
  });

  window.setTimeout(finish, 900);
};

export const trackMetaEvent = (event: string, params?: Record<string, unknown>) =>
  window.fbq?.("track", event, params);

export const trackBookingCTA = () => {
  trackEvent("Conversion", "booking_cta_clicked", "Market availability");
  trackMetaEvent("Lead");
};

export const trackMarketCheckStarted = (path?: string) => {
  window.gtag?.("event", "market_check_started", {
    event_category: "Form",
    event_label: path || "Market availability",
  });
};

export const trackMarketCheckFormSubmitted = (
  cityState: string,
  email: string,
  qualityScore?: string,
  treatmentFocus?: string,
) => {
  window.gtag?.("event", "market_check_form_submitted", {
    event_category: "Form",
    event_label: cityState || "Market availability",
    email,
    quality_score: qualityScore,
    treatment_focus: treatmentFocus,
  });
  window.gtag?.("event", "generate_lead", {
    event_category: "Form",
    event_label: cityState || "Market availability",
    value: qualityScore ? Number(qualityScore) || undefined : undefined,
    treatment_focus: treatmentFocus,
  });
  trackMetaEvent("Lead", { city_state: cityState, email, quality_score: qualityScore, treatment_focus: treatmentFocus });
};

export const trackQualifiedLeadThankYou = () => {
  trackEvent("Conversion", "qualified_lead_thank_you", "Market availability");
};

export const trackBookingConfirmed = () => {
  trackLeadFormConversion();
  trackQualifiedLeadThankYou();
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
