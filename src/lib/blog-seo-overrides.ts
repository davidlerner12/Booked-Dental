import type { PortableTextBlock } from "@portabletext/types";
import { SITE_URL } from "@/lib/seo";
import { urlFor } from "@/lib/sanity";

export interface BlogSeoPost {
  slug: string;
  title: string;
  excerpt: string;
  mainImageAlt?: string;
  mainImage?: unknown;
  body?: PortableTextBlock[];
  seoImage?: string;
}

type BlogOverride = {
  title?: string;
  excerpt?: string;
  canonicalSlug?: string;
  alt: string;
  image: string;
  keywords?: string[];
};

const IMAGE_ROOT = "/blog/images";

const DEFAULT_OVERRIDE: BlogOverride = {
  image: `${IMAGE_ROOT}/dental-patient-acquisition.png`,
  alt: "Dental marketing dashboard showing filtered patient opportunities and customer intent signals",
  keywords: ["dental marketing", "lead filtering", "patient acquisition"],
};

const OVERRIDES: Record<string, BlogOverride> = {
  "how-to-get-more-dental-implant-patients": {
    title: "How to Get More Dental Implant Patients With Better Lead Filtering",
    excerpt:
      "Learn how implant clinics use Google, Meta, UGC creative, and lead filtering to teach AI which prospects become real patients.",
    image: `${IMAGE_ROOT}/implant-marketing.png`,
    alt: "Implant marketing dashboard focused on filtered patient opportunities instead of clicks",
    keywords: ["dental implant marketing", "implant patient acquisition", "lead filtering"],
  },
  "how-dental-clinics-get-more-implant-consultations-2026": {
    canonicalSlug: "how-to-get-more-dental-implant-patients",
    title: "How Dental Clinics Get More Implant Patients in 2026",
    excerpt:
      "A practical 2026 guide to implant patient acquisition, lead filtering, campaign quality, and ROI for dental clinics.",
    image: `${IMAGE_ROOT}/implant-marketing.png`,
    alt: "Dental implant patient acquisition strategy for clinics using lead filtering and ROI tracking",
    keywords: ["dental implant patients", "implant patient acquisition", "dental marketing 2026"],
  },
  "ugc-dental-ads-examples": {
    title: "9 UGC Dental Ads Examples That Filter Better Leads",
    excerpt:
      "See UGC dental ad formats that help implant and cosmetic clinics attract qualified patient opportunities and improve AI targeting.",
    image: `${IMAGE_ROOT}/ugc-dental-ads.png`,
    alt: "UGC dental ads strategy board showing creative hooks and qualified lead filtering",
    keywords: ["UGC dental ads", "Meta ads for dentists", "qualified dental leads"],
  },
  "why-dental-ads-fail": {
    title: "Why Dental Ads Fail When They Optimize for Clicks Instead of Patients",
    excerpt:
      "Most dental ads fail because they reward cheap activity. Learn how lead quality, offer fit, and filtering improve patient acquisition ROI.",
    image: `${IMAGE_ROOT}/dental-patient-acquisition.png`,
    alt: "Dental ad performance dashboard comparing clicks with filtered patient opportunities",
    keywords: ["why dental ads fail", "dental advertising ROI", "qualified patient leads"],
  },
  "best-dental-lead-sources": {
    title: "Best Dental Lead Sources Ranked by Patient Intent and ROI",
    excerpt:
      "Compare Google, Meta, local SEO, reactivation, and referrals by speed, intent, quality, and ability to create real patients.",
    image: `${IMAGE_ROOT}/lead-sources.png`,
    alt: "Dental lead source comparison ranked by patient intent and ROI",
    keywords: ["best dental lead sources", "dental lead generation", "patient intent"],
  },
  "google-ads-vs-facebook-ads-dentists": {
    title: "Google Ads vs Facebook Ads for Dentists: Which Finds Better Patients?",
    excerpt:
      "See when Google captures high-intent demand, when Meta creates new demand, and how filtering teaches ad platforms who becomes a patient.",
    image: `${IMAGE_ROOT}/google-ads-dentists.png`,
    alt: "Google Ads and Meta Ads comparison for dentists focused on patient quality",
    keywords: ["Google Ads vs Facebook Ads for dentists", "dental paid ads", "patient acquisition"],
  },
  "how-cosmetic-dentists-get-more-consults": {
    canonicalSlug: "cosmetic-dentists-high-intent-patients",
    title: "How Cosmetic Dentists Get More High-Intent Patients",
    excerpt:
      "A practical system for cosmetic clinics to attract veneer and smile makeover prospects with better offers, creative, and lead filtering.",
    image: `${IMAGE_ROOT}/cosmetic-dentistry-growth.png`,
    alt: "Cosmetic dentistry growth dashboard for veneers and smile makeover patient acquisition",
    keywords: ["cosmetic dentistry marketing", "veneer leads", "smile makeover marketing"],
  },
  "how-to-get-more-cosmetic-consults-fast": {
    canonicalSlug: "cosmetic-dentistry-patient-acquisition-fast",
    title: "How to Get More Cosmetic Dentistry Patients Fast",
    excerpt:
      "Build a faster cosmetic dentistry pipeline with clear offers, Meta creative, landing pages, and filtering that prioritizes serious prospects.",
    image: `${IMAGE_ROOT}/cosmetic-dentistry-growth.png`,
    alt: "Cosmetic dentistry marketing system for high-intent veneer and smile makeover patients",
    keywords: ["cosmetic dentistry patients", "veneer marketing", "cosmetic dental ads"],
  },
  "dentist-growth-agency": {
    title: "What a Dentist Growth Agency Should Do Beyond Getting Clicks",
    excerpt:
      "A dentist growth agency should improve patient quality, lead filtering, creative learning, and revenue tracking, not just campaign activity.",
    image: `${IMAGE_ROOT}/agency-selection.png`,
    alt: "Dentist growth agency scorecard measuring patient quality and revenue outcomes",
    keywords: ["dentist growth agency", "dental marketing agency", "lead quality"],
  },
  "affordable-dental-marketing-agency": {
    title: "How to Choose an Affordable Dental Marketing Agency Without Buying Cheap Leads",
    excerpt:
      "Learn what affordable should mean for clinics: efficient spend, qualified patient opportunities, clear tracking, and better revenue quality.",
    image: `${IMAGE_ROOT}/agency-selection.png`,
    alt: "Dental agency evaluation checklist focused on ROI and lead quality",
    keywords: ["affordable dental marketing agency", "dental agency ROI", "qualified dental leads"],
  },
  "dentist-patient-growth": {
    title: "Dentist Patient Growth: How Clinics Scale High-Value Cases",
    excerpt:
      "See how implant and cosmetic clinics turn paid media, lead filtering, and follow-up into a predictable pipeline of qualified patients.",
    image: `${IMAGE_ROOT}/dental-patient-acquisition.png`,
    alt: "Dental patient growth system showing filtered opportunities from ads to treatment starts",
    keywords: ["dentist patient growth", "patient acquisition", "high-value dental cases"],
  },
  "dental-office-marketing": {
    title: "Dental Office Marketing That Grows Revenue, Not Just Traffic",
    excerpt:
      "Dental office marketing should connect creative, landing pages, lead filtering, and revenue tracking so clinics find customers instead of clicks.",
    image: `${IMAGE_ROOT}/website-conversion.png`,
    alt: "Dental office marketing funnel from website traffic to filtered patient opportunities",
    keywords: ["dental office marketing", "dental website conversion", "patient opportunities"],
  },
  "dental-implant-lead-generation-that-pays": {
    title: "Dental Implant Lead Generation That Pays Because It Filters Quality",
    excerpt:
      "Dental implant lead generation works when campaigns teach ad platforms which prospects have intent, budget fit, and case potential.",
    image: `${IMAGE_ROOT}/implant-marketing.png`,
    alt: "Dental implant lead generation system filtering high-value patient opportunities",
    keywords: ["dental implant lead generation", "implant leads", "qualified dental leads"],
  },
  "generate-consultation-calls-for-dentists": {
    canonicalSlug: "dental-lead-filtering-for-dentists",
    title: "How Dentists Turn Filtered Leads Into Real Patients",
    excerpt:
      "Learn how better offers, targeting, lead filtering, and follow-up help dentists attract patient opportunities with real treatment intent.",
    image: `${IMAGE_ROOT}/dental-patient-acquisition.png`,
    alt: "Dental lead filtering workflow turning ad traffic into real patient opportunities",
    keywords: ["dental lead filtering", "dental patient acquisition", "qualified dental leads"],
  },
  "in-house-vs-agency-marketing-for-dentists": {
    title: "In-House vs Agency Marketing for Dentists: Which Improves Lead Quality?",
    excerpt:
      "Compare in-house and agency marketing by speed, channel expertise, filtering, tracking, and ability to create high-value patients.",
    image: `${IMAGE_ROOT}/agency-selection.png`,
    alt: "In-house versus dental marketing agency comparison focused on patient quality",
    keywords: ["in-house vs agency marketing", "dental marketing agency", "lead quality"],
  },
  "best-implant-ad-creatives": {
    title: "7 Best Implant Ad Creatives for Better Patient Quality",
    excerpt:
      "The best implant ad creatives reduce wasted clicks, explain value clearly, and help AI learn which prospects become serious patients.",
    image: `${IMAGE_ROOT}/ugc-dental-ads.png`,
    alt: "Implant ad creative examples designed to improve lead quality and patient intent",
    keywords: ["implant ad creatives", "dental UGC ads", "implant patient leads"],
  },
  "google-ads-for-dental-implants": {
    title: "Google Ads for Dental Implants That Find High-Intent Patients",
    excerpt:
      "Use search structure, keywords, landing pages, and lead filtering to turn implant Google Ads into better patient opportunities.",
    image: `${IMAGE_ROOT}/google-ads-dentists.png`,
    alt: "Google Ads dashboard for dental implants focused on high-intent patient searches",
    keywords: ["Google Ads for dental implants", "implant search ads", "dental advertising ROI"],
  },
  "meta-ads-for-cosmetic-dentists": {
    title: "Meta Ads for Cosmetic Dentists That Teach AI Who Converts",
    excerpt:
      "Meta ads for cosmetic dentists perform better when creative, offers, and lead filtering help the algorithm find serious prospects.",
    image: `${IMAGE_ROOT}/meta-ads-dentists.png`,
    alt: "Meta ads dashboard for cosmetic dentists showing lead quality signals",
    keywords: ["Meta ads for cosmetic dentists", "cosmetic dental ads", "lead filtering"],
  },
};

const CONSOLIDATED_BLOG_CANONICALS: Record<string, string> = {
  "generate-consultation-calls-for-dentist": "dental-lead-filtering-for-dentists",
  "implant-consult-booking-system": "dental-implant-lead-generation-that-pays",
  "affordable-dental-ads-that-book-consults": "why-dental-ads-fail",
  "dental-consultation-funnel": "dental-lead-filtering-for-dentists",
  "how-to-reduce-no-show-consults": "dental-lead-filtering-for-dentists",
  "implant-consultation-funnel": "dental-implant-lead-generation-that-pays",
  "cosmetic-consult-follow-up-scripts-that-book": "cosmetic-dentistry-patient-acquisition-fast",
  "dentist-facebook-ads-that-book-consults": "meta-ads-for-cosmetic-dentists",

  "קידום-בגוגל-לרופאי-שיניים-תוצאות-מהירות": "פרסום-בגוגל-לרופאי-שיניים-מטופלים-חדשים",
  "פרסום-בגוגל-לרופאי-שיניים-לידים-חדשים": "פרסום-בגוגל-לרופאי-שיניים-מטופלים-חדשים",
  "סוכנות-שיווק-לרופאי-שיניים-בחירת-חברה-מקצועית": "משרד-פרסום-לרופאי-שיניים-בחירת-שותף",
  "משרד-פרסום-לרופאי-שיניים-אסטרטגיה-דיגיטלית": "משרד-פרסום-לרופאי-שיניים-בחירת-שותף",
  "אורגני-לרופאי-שיניים-בגוגל": "למה-seo-לרופאי-שיניים-חשוב-לעסק",
  "קידום-אתרים-לרופאי-שיניים-עמוד-ראשון": "למה-seo-לרופאי-שיניים-חשוב-לעסק",
  "מרפאות-שיניים-חייבות-אתר-מקצועי": "אתר-ליצירת-לידים-לרופאי-שיניים",
  "אתר-למרפאת-שיניים-המרת-מטופלים": "אתר-ליצירת-לידים-לרופאי-שיניים",
  "בניית-אתרים-לרופאי-שיניים-הגדלת-מטופלים": "אתר-ליצירת-לידים-לרופאי-שיניים",
  "שיווק-לרופאי-שיניים-בניית-אמון-דיגיטלי": "בניית-מותג-למרפאת-שיניים-בדיגיטל",
  "שיווק-מרפאות-שיניים-בניית-מותג-דיגיטלי": "בניית-מותג-למרפאת-שיניים-בדיגיטל",
  "שיווק-דיגיטלי-לרופאי-שיניים-אסטרטגיית-צמיחה": "שיווק-מרפאות-שיניים-אסטרטגיה-דיגיטלית",
  "שיווק-קליניקת-שיניים-בדיגיטל": "שיווק-מרפאות-שיניים-אסטרטגיה-דיגיטלית",
  "פרסום-מרפאת-שיניים-משיכת-מטופלים": "פרסום-לרופאי-שיניים-מטופלים-איכותיים",
  "פרסום-ממומן-לרופאי-שיניים-המרת-לידים": "פרסום-ממומן-לרופאי-שיניים-לידים-איכותיים",
  "ניהול-פרסום-לרופאי-שיניים-תוצאות-אמיתיות": "ניהול-פרסום-לרופאי-שיניים-מערכת-לידים",
};

const SOURCE_SLUG_BY_CANONICAL = Object.entries(OVERRIDES).reduce<Record<string, string>>(
  (acc, [sourceSlug, override]) => {
    if (override.canonicalSlug) acc[override.canonicalSlug] = sourceSlug;
    return acc;
  },
  {},
);

const HEBREW_IMAGE = `${IMAGE_ROOT}/hebrew-dental-marketing.png`;

const HEBREW_OVERRIDES: Record<string, Partial<BlogOverride>> = {};

const TEXT_REPLACEMENTS: Array<[RegExp, string]> = [
  [/consultation calls/gi, "filtered patient opportunities"],
  [/consult calls/gi, "filtered patient opportunities"],
  [/qualified calls/gi, "qualified opportunities"],
  [/booked calls/gi, "qualified opportunities"],
  [/booked consults/gi, "qualified opportunities"],
  [/consults/gi, "qualified opportunities"],
  [/consultation/gi, "patient opportunity"],
  [/consult/gi, "opportunity"],
  [/\bcalls\b/gi, "opportunities"],
  [/\bcall\b/gi, "contact"],
  [/cheap clicks/gi, "low-quality clicks"],
  [/cheap leads/gi, "unqualified leads"],
  [/more leads/gi, "better-filtered patient opportunities"],
  [/lead generation agency/gi, "patient acquisition partner"],
  [/digital marketing agency/gi, "patient acquisition partner"],
  [/book a strategy contact/gi, "check market availability"],
  [/book a strategy opportunity/gi, "check market availability"],
  [/schedule a contact/gi, "check market availability"],
  [/schedule a opportunity/gi, "check market availability"],
  [/פניות מוכשרות/g, "פניות מסוננות"],
  [/הזדמנויות מטופלים/g, "פניות מסוננות ממטופלים"],
  [/לידים זולים/g, "לידים לא מסוננים"],
  [/קליקים זולים/g, "קליקים באיכות נמוכה"],
  [/מדדי אגו/g, "מדדים שלא משקפים הכנסות"],
  [/משרד פרסום דיגיטלי/g, "שותף לגיוס מטופלים"],
];

function replaceText(value: string) {
  return TEXT_REPLACEMENTS.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    value,
  )
    .replace(/qualified qualified/gi, "qualified")
    .replace(/patient opportunitys/gi, "patient opportunities")
    .replace(/opportunitys/gi, "opportunities")
    .replace(/Booked Dental/g, "Booked.Dental");
}

function blockText(block: PortableTextBlock) {
  const children = (block as { children?: Array<{ text?: string }> }).children;
  if (!Array.isArray(children)) return "";
  return children.map((child) => child.text || "").join("").trim();
}

function normalizeForDeduplication(value: string) {
  return replaceText(value)
    .toLowerCase()
    .replace(/[\u0591-\u05C7]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isHeadingBlock(block: PortableTextBlock) {
  return block._type === "block" && /^h[2-4]$/.test(String(block.style || ""));
}

function isDuplicateBoilerplate(text: string) {
  const normalized = normalizeForDeduplication(text);
  if (normalized.length < 20) return false;
  return [
    /ready to.*market.*available/i,
    /schedule.*strategy/i,
    /book.*strategy/i,
    /contact.*today/i,
    /check.*availability.*today/i,
    /בדקו.*האזור.*פנוי/,
    /בדיקת.*זמינות.*אזור/,
    /השאירו.*פרטים.*אזור/,
    /קבעו.*שיחה/,
  ].some((pattern) => pattern.test(text) || pattern.test(normalized));
}

function cleanupPortableText(blocks: PortableTextBlock[]) {
  const seenHeadings = new Set<string>();
  const seenParagraphs = new Set<string>();
  const cleaned: PortableTextBlock[] = [];
  let skippingDuplicateSection = false;

  for (const block of blocks) {
    if (!block || typeof block !== "object") continue;

    if (isHeadingBlock(block)) {
      const headingKey = normalizeForDeduplication(blockText(block));
      if (headingKey && seenHeadings.has(headingKey)) {
        skippingDuplicateSection = true;
        continue;
      }
      if (headingKey) seenHeadings.add(headingKey);
      skippingDuplicateSection = false;
    } else if (skippingDuplicateSection) {
      continue;
    }

    if (block._type === "block") {
      const text = blockText(block);
      const paragraphKey = normalizeForDeduplication(text);
      if (paragraphKey.length > 50) {
        if (seenParagraphs.has(paragraphKey) || isDuplicateBoilerplate(text)) {
          continue;
        }
        seenParagraphs.add(paragraphKey);
      }
    }

    cleaned.push(block);
  }

  return cleaned;
}

function mapPortableText(blocks?: PortableTextBlock[]) {
  if (!Array.isArray(blocks)) return blocks;
  const mapped = blocks.map((block) => {
    if (!block || typeof block !== "object") return block;
    const clone = { ...block } as PortableTextBlock & { children?: unknown[] };
    if (Array.isArray(clone.children)) {
      clone.children = clone.children.map((child) => {
        if (!child || typeof child !== "object") return child;
        const portableChild = child as { text?: unknown };
        if (typeof portableChild.text !== "string") return child;
        return { ...child, text: replaceText(portableChild.text) };
      });
    }
    return clone;
  });
  return cleanupPortableText(mapped);
}

function findExplicitOverride(slug: string) {
  const hebrew = HEBREW_OVERRIDES[slug];
  if (hebrew) {
    return {
      ...DEFAULT_OVERRIDE,
      image: HEBREW_IMAGE,
      alt: "Dental marketing system showing lead filtering and customer intent measurement",
      keywords: ["dental marketing", "lead filtering", "patient acquisition"],
      ...hebrew,
    };
  }
  const sourceSlug = SOURCE_SLUG_BY_CANONICAL[slug] || slug;
  const override = OVERRIDES[sourceSlug];
  const consolidatedCanonical = CONSOLIDATED_BLOG_CANONICALS[sourceSlug];
  if (!consolidatedCanonical) return override;
  return {
    ...override,
    canonicalSlug: consolidatedCanonical,
  };
}

function findOverride(slug: string) {
  return findExplicitOverride(slug) || DEFAULT_OVERRIDE;
}

export function applyBlogSeoOverrides<T extends BlogSeoPost>(post: T): T {
  const override = findExplicitOverride(post.slug);
  return {
    ...post,
    slug: override?.canonicalSlug || post.slug,
    title: replaceText(override?.title || post.title),
    excerpt: replaceText(override?.excerpt || post.excerpt),
    mainImageAlt: override?.alt || post.mainImageAlt,
    seoImage: override?.image || post.seoImage,
    body: mapPortableText(post.body),
  };
}

export function applyBlogSeoListOverrides<T extends BlogSeoPost>(posts: T[]) {
  return posts.map((post) => applyBlogSeoOverrides(post));
}

export function getBlogSeoImage(post: BlogSeoPost) {
  const override = findOverride(post.slug);
  if (post.seoImage) {
    return {
      src: post.seoImage,
      alt: post.mainImageAlt || override.alt || post.title,
    };
  }

  if (post.mainImage) {
    try {
      return {
        src: urlFor(post.mainImage).width(1200).fit("max").auto("format").url(),
        alt: post.mainImageAlt || override.alt || post.title,
      };
    } catch {
      // Fall through to the default branded image if the Sanity image is malformed.
    }
  }

  return {
    src: override.image,
    alt: post.mainImageAlt || override.alt || post.title,
  };
}

export function getAbsoluteBlogImageUrl(post: BlogSeoPost) {
  const image = getBlogSeoImage(post);
  if (image.src.startsWith("http")) return image.src;
  return `${SITE_URL}${image.src}`;
}

export function getBlogSeoKeywords(post: BlogSeoPost) {
  return findOverride(post.slug).keywords || DEFAULT_OVERRIDE.keywords || [];
}

export function getInternalBlogLinks(slug: string) {
  const sourceSlug = SOURCE_SLUG_BY_CANONICAL[slug] || slug;
  const linksBySlug: Record<string, string[]> = {
    "how-to-get-more-dental-implant-patients": [
      "dental-implant-lead-generation-that-pays",
      "google-ads-for-dental-implants",
      "best-implant-ad-creatives",
    ],
    "dental-implant-lead-generation-that-pays": [
      "how-to-get-more-dental-implant-patients",
      "best-dental-lead-sources",
      "why-dental-ads-fail",
    ],
    "google-ads-for-dental-implants": [
      "how-to-get-more-dental-implant-patients",
      "google-ads-vs-facebook-ads-dentists",
      "dental-implant-lead-generation-that-pays",
    ],
    "dental-implant-seo": [
      "how-to-get-more-dental-implant-patients",
      "google-business-profile-for-dentists",
      "dental-implant-landing-page",
    ],
    "dental-implant-financing-marketing": [
      "dental-implant-cost-keywords",
      "dental-marketing-roi",
      "all-on-4-marketing",
    ],
    "all-on-4-vs-dentures-marketing": [
      "all-on-4-marketing",
      "full-mouth-dental-implant-leads",
      "dental-implant-financing-marketing",
    ],
    "dental-implant-landing-page": [
      "google-ads-for-dental-implants",
      "dental-implant-lead-generation-that-pays",
      "dental-marketing-roi",
    ],
    "dental-implant-cost-keywords": [
      "dental-implant-financing-marketing",
      "google-ads-for-dental-implants",
      "dental-marketing-roi",
    ],
    "all-on-4-marketing": [
      "all-on-4-vs-dentures-marketing",
      "full-mouth-dental-implant-leads",
      "dental-implant-financing-marketing",
    ],
    "full-mouth-dental-implant-leads": [
      "all-on-4-marketing",
      "all-on-4-vs-dentures-marketing",
      "dental-implant-lead-generation-that-pays",
    ],
    "dental-marketing-roi": [
      "why-dental-ads-fail",
      "best-dental-lead-sources",
      "dentist-patient-growth",
    ],
    "google-business-profile-for-dentists": [
      "dental-reviews-seo",
      "dental-implant-seo",
      "best-dental-lead-sources",
    ],
    "ai-search-visibility-for-dentists": [
      "dental-implant-seo",
      "google-business-profile-for-dentists",
      "dental-reviews-seo",
    ],
    "dental-implant-second-opinion-marketing": [
      "dental-implant-cost-keywords",
      "dental-implant-financing-marketing",
      "full-mouth-dental-implant-leads",
    ],
    "teeth-in-a-day-marketing": [
      "all-on-4-vs-dentures-marketing",
      "full-mouth-dental-implant-leads",
      "all-on-4-marketing",
    ],
    "veneers-cost-marketing": [
      "porcelain-veneers-marketing",
      "cosmetic-dentist-near-me-seo",
      "smile-makeover-marketing",
    ],
    "dental-patient-reactivation": [
      "best-dental-lead-sources",
      "dental-marketing-roi",
      "dental-reviews-seo",
    ],
    "dental-implant-consultation-marketing": [
      "dental-implant-second-opinion-marketing",
      "dental-implant-cost-keywords",
      "full-mouth-dental-implant-leads",
    ],
    "dental-implant-before-after-marketing": [
      "best-implant-ad-creatives",
      "ugc-dental-ads-examples",
      "dental-reviews-seo",
    ],
    "dental-implant-warranty-marketing": [
      "dental-implant-financing-marketing",
      "dental-implant-second-opinion-marketing",
      "dental-marketing-roi",
    ],
    "smile-design-marketing": [
      "smile-makeover-marketing",
      "porcelain-veneers-marketing",
      "veneers-cost-marketing",
    ],
    "veneers-vs-invisalign-marketing": [
      "cosmetic-dentists-high-intent-patients",
      "meta-ads-for-cosmetic-dentists",
      "dental-marketing-roi",
    ],
    "cosmetic-dentist-near-me-seo": [
      "porcelain-veneers-marketing",
      "smile-makeover-marketing",
      "google-business-profile-for-dentists",
    ],
    "porcelain-veneers-marketing": [
      "cosmetic-dentist-near-me-seo",
      "smile-makeover-marketing",
      "veneers-vs-invisalign-marketing",
    ],
    "smile-makeover-marketing": [
      "porcelain-veneers-marketing",
      "cosmetic-dentist-near-me-seo",
      "veneers-vs-invisalign-marketing",
    ],
    "dental-reviews-seo": [
      "google-business-profile-for-dentists",
      "dental-marketing-roi",
      "dentist-growth-agency",
    ],
    "best-implant-ad-creatives": [
      "ugc-dental-ads-examples",
      "meta-ads-for-cosmetic-dentists",
      "dental-implant-lead-generation-that-pays",
    ],
    "ugc-dental-ads-examples": [
      "best-implant-ad-creatives",
      "meta-ads-for-cosmetic-dentists",
      "why-dental-ads-fail",
    ],
    "meta-ads-for-cosmetic-dentists": [
      "ugc-dental-ads-examples",
      "cosmetic-dentists-high-intent-patients",
      "google-ads-vs-facebook-ads-dentists",
    ],
    "how-cosmetic-dentists-get-more-consults": [
      "meta-ads-for-cosmetic-dentists",
      "cosmetic-dentistry-patient-acquisition-fast",
      "dental-office-marketing",
    ],
    "how-to-get-more-cosmetic-consults-fast": [
      "cosmetic-dentists-high-intent-patients",
      "meta-ads-for-cosmetic-dentists",
      "affordable-dental-marketing-agency",
    ],
    "dentist-growth-agency": [
      "affordable-dental-marketing-agency",
      "in-house-vs-agency-marketing-for-dentists",
      "dental-office-marketing",
    ],
    "affordable-dental-marketing-agency": [
      "dentist-growth-agency",
      "in-house-vs-agency-marketing-for-dentists",
      "why-dental-ads-fail",
    ],
    "in-house-vs-agency-marketing-for-dentists": [
      "dentist-growth-agency",
      "affordable-dental-marketing-agency",
      "dentist-patient-growth",
    ],
    "dental-office-marketing": [
      "dentist-patient-growth",
      "dentist-growth-agency",
      "best-dental-lead-sources",
    ],
    "dentist-patient-growth": [
      "dental-office-marketing",
      "best-dental-lead-sources",
      "dental-lead-filtering-for-dentists",
    ],
    "best-dental-lead-sources": [
      "google-ads-vs-facebook-ads-dentists",
      "dentist-patient-growth",
      "dental-implant-lead-generation-that-pays",
    ],
    "google-ads-vs-facebook-ads-dentists": [
      "google-ads-for-dental-implants",
      "meta-ads-for-cosmetic-dentists",
      "best-dental-lead-sources",
    ],
    "why-dental-ads-fail": [
      "ugc-dental-ads-examples",
      "best-dental-lead-sources",
      "dental-lead-filtering-for-dentists",
    ],
    "generate-consultation-calls-for-dentists": [
      "why-dental-ads-fail",
      "dental-implant-lead-generation-that-pays",
      "dentist-patient-growth",
    ],
  };

  return (linksBySlug[sourceSlug] || [
    "dental-office-marketing",
    "best-dental-lead-sources",
    "why-dental-ads-fail",
  ]).map((linkSlug) => toCanonicalBlogSlug(linkSlug));
}

export function resolveSourceBlogSlug(slug: string) {
  return SOURCE_SLUG_BY_CANONICAL[slug] || slug;
}

export function toCanonicalBlogSlug(slug: string) {
  return CONSOLIDATED_BLOG_CANONICALS[slug] || findExplicitOverride(slug)?.canonicalSlug || slug;
}

export function isConsolidatedBlogDuplicate(slug: string) {
  return Object.prototype.hasOwnProperty.call(CONSOLIDATED_BLOG_CANONICALS, slug);
}
