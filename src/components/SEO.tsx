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
  const jsonLd = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];

  return (
    <Head>
      <html lang={currentLang} dir={currentLang === "he" ? "rtl" : "ltr"} />
      <title>{title}</title>
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
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
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
