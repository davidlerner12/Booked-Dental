export const SITE_URL = "https://booked.dental";
export const SITE_NAME = "Booked.Dental";
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/social-preview.png`;
export const SUPPORTED_LANGS = ["en", "he"] as const;

export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export function normalizeLang(lang?: string): SupportedLang {
  return lang === "he" ? "he" : "en";
}

export function normalizePath(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath === "/" ? "" : cleanPath.replace(/\/+$/, "");
}

export function buildLocalizedUrl(lang: string | undefined, path = "/") {
  return `${SITE_URL}/${normalizeLang(lang)}${normalizePath(path)}`;
}
