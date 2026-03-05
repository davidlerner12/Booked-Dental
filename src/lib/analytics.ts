import ReactGA from 'react-ga4'

// ─── IDs ─────────────────────────────────────────────────────────────────────
const GA4_ID   = 'G-DPRVM205R8'
const GADS_TAG = 'AW-17992910932/gQY4CP-D3IIcENSQ2IND'

// ─── Type declarations ────────────────────────────────────────────────────────
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

// ─── GA4 ─────────────────────────────────────────────────────────────────────
export const initGA = () => ReactGA.initialize(GA4_ID)

export const trackPageView = (page: string) =>
  ReactGA.send({ hitType: 'pageview', page })

export const trackEvent = (category: string, action: string, label?: string) =>
  ReactGA.event({ category, action, label })

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
