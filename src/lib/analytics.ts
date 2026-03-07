// ─── IDs ─────────────────────────────────────────────────────────────────────
const GADS_TAG = 'AW-17992910932/gQY4CP-D3IIcENSQ2IND'

// ─── Type declarations ────────────────────────────────────────────────────────
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

// ─── GA4 ─────────────────────────────────────────────────────────────────────
export const trackPageView = (page: string) =>
  window.gtag?.('event', 'page_view', { page_path: page })

export const trackEvent = (category: string, action: string, label?: string) =>
  window.gtag?.('event', action, { event_category: category, event_label: label })

// ─── Google Ads ───────────────────────────────────────────────────────────────
export const trackGAdsConversion = (value = 1.0, currency = 'ILS') =>
  window.gtag?.('event', 'conversion', { send_to: GADS_TAG, value, currency })

// ─── Meta Pixel ───────────────────────────────────────────────────────────────
export const trackMetaEvent = (event: string, params?: Record<string, unknown>) =>
  window.fbq?.('track', event, params)

// ─── Composite events ─────────────────────────────────────────────────────────
export const trackBookingCTA = () => {
  trackGAdsConversion()
  trackEvent('Conversion', 'booking_cta_clicked', 'Cal.com')
  trackMetaEvent('Lead')
}

export const trackBookingConfirmed = () => {
  trackGAdsConversion()
  trackEvent('Conversion', 'booking_confirmed', 'Cal.com')
  trackMetaEvent('Schedule')
}
