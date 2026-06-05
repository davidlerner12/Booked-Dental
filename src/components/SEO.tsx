import { Head } from "vite-react-ssg";
import {
  DEFAULT_SOCIAL_IMAGE,
  SITE_NAME,
  SITE_URL,
  SUPPORTED_LANGS,
  buildLocalizedUrl,
  normalizeLang,
  normalizePath,
} from "@/lib/seo";

type SEOProps = {
  title: string;
  description: string;
  lang?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  structuredData?: Array<Record<string, unknown>> | Record<string, unknown>;
};

const TITLE_LIMIT = 60;
const TITLE_BRAND = " | Booked.Dental";

function trimTitle(title: string) {
  const cleanTitle = title.replace(/\s+/g, " ").trim();
  if (cleanTitle.length <= TITLE_LIMIT) return cleanTitle;

  if (cleanTitle.endsWith(TITLE_BRAND)) {
    const baseTitle = cleanTitle.slice(0, -TITLE_BRAND.length).trim();
    const phraseBreaks = [", Not ", " That ", ": ", " for ", " Without ", " With "];
    const phraseCandidate = phraseBreaks
      .map((separator) => baseTitle.split(separator)[0]?.trim())
      .find((candidate) => candidate && candidate.length >= 24 && `${candidate}${TITLE_BRAND}`.length <= TITLE_LIMIT);

    if (phraseCandidate) return `${phraseCandidate}${TITLE_BRAND}`;

    const maxBaseLength = TITLE_LIMIT - TITLE_BRAND.length;
    const shortened = baseTitle.slice(0, maxBaseLength + 1).replace(/\s+\S*$/, "").trim();
    return `${shortened || baseTitle.slice(0, maxBaseLength).trim()}${TITLE_BRAND}`;
  }

  return cleanTitle.slice(0, TITLE_LIMIT + 1).replace(/\s+\S*$/, "").trim();
}

export default function SEO({
  title,
  description,
  lang,
  path = "/",
  image = DEFAULT_SOCIAL_IMAGE,
  type = "website",
  noindex = false,
  structuredData,
}: SEOProps) {
  const currentLang = normalizeLang(lang);
  const canonical = buildLocalizedUrl(currentLang, path);
  const alternatePath = normalizePath(path);
  const seoTitle = trimTitle(title);
  const jsonLd = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Head>
      <html lang={currentLang} dir={currentLang === "he" ? "rtl" : "ltr"} />
      <title>{seoTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex,follow"
            : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        }
      />
      <link rel="canonical" href={canonical} />
      {SUPPORTED_LANGS.map((alternateLang) => (
        <link
          key={alternateLang}
          rel="alternate"
          hrefLang={alternateLang}
          href={`${SITE_URL}/${alternateLang}${alternatePath}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en${alternatePath}`} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={currentLang === "he" ? "he_IL" : "en_US"} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Head>
  );
}
