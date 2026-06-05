export type ProofMetric = {
  label: string;
  value: string;
};

export type ProofExample = {
  id: "fullArch" | "veneers" | "filtering";
  title: string;
  subtitle: string;
  treatment: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: ProofMetric[];
  relatedServices: string[];
};

const EN_PROOF_EXAMPLES: ProofExample[] = [
  {
    id: "fullArch",
    title: "Anonymized full-arch implant campaign",
    subtitle: "Example campaign for a US implant clinic focused on full-arch demand.",
    treatment: "Full-arch implants and All-on-4",
    challenge:
      "The clinic needed fewer casual implant inquiries and more prospects who understood the treatment value, timeline, and financial decision.",
    approach:
      "Booked.Dental rebuilt the funnel around treatment-specific creative, Google and Meta intent signals, lead filtering, and follow-up feedback from the clinic team.",
    result:
      "The campaign shifted optimization away from easy form fills and toward qualified full-arch opportunities. Results vary by market, offer, follow-up, and clinic capacity.",
    metrics: [
      { label: "Rounded avg ROI model", value: "38x" },
      { label: "First serious opportunity", value: "7 days" },
      { label: "Optimization target", value: "Qualified opportunities" },
    ],
    relatedServices: [
      "dental-implant-marketing",
      "all-on-4-dental-implant-marketing",
      "full-arch-implant-marketing",
    ],
  },
  {
    id: "veneers",
    title: "Anonymized veneers campaign",
    subtitle: "Example campaign for a cosmetic clinic selling premium smile design.",
    treatment: "Veneers and smile makeovers",
    challenge:
      "The clinic wanted veneer prospects who valued planning, aesthetics, and case quality instead of low-price cosmetic shoppers.",
    approach:
      "The campaign used UGC-style creative, outcome-focused landing copy, budget-fit filtering, and tracking around smile makeover opportunity quality.",
    result:
      "The clinic team received clearer cosmetic opportunities and better context before follow-up. Results vary by market, case value, creative, and close process.",
    metrics: [
      { label: "Modeled US case value", value: "$12k+" },
      { label: "Lead filter", value: "Smile goals + readiness" },
      { label: "Primary target", value: "Premium cosmetic intent" },
    ],
    relatedServices: [
      "veneers-marketing",
      "cosmetic-dentistry-marketing",
      "cosmetic-dentist-marketing-agency",
    ],
  },
  {
    id: "filtering",
    title: "Lead filtering and AI learning loop",
    subtitle: "Example of how rejected and approved leads improve acquisition quality.",
    treatment: "Implant and cosmetic lead qualification",
    challenge:
      "Raw lead volume made reporting look busy, but the clinic needed to know which campaigns produced reachable, treatment-fit prospects.",
    approach:
      "Booked.Dental connected form answers, follow-up outcomes, source data, and qualification status so the ad system could learn from patient quality signals.",
    result:
      "Budget decisions became easier because the clinic could separate noisy activity from real opportunities. Results vary by data quality and follow-up discipline.",
    metrics: [
      { label: "Primary signal", value: "Qualified lead status" },
      { label: "Waste reduced", value: "Low-fit inquiries" },
      { label: "System goal", value: "Patients, not clicks" },
    ],
    relatedServices: [
      "dental-lead-filtering",
      "qualified-opportunity-methodology",
      "roi-methodology",
    ],
  },
];

const HE_PROOF_EXAMPLES: ProofExample[] = [
  {
    id: "fullArch",
    title: "דוגמת קמפיין אנונימית לשיקום מלא",
    subtitle: "דוגמת קמפיין למרפאת שתלים בארה״ב שהתמקדה בביקוש לטיפולי Full-Arch.",
    treatment: "שתלים בשיקום מלא ו-All-on-4",
    challenge:
      "המרפאה רצתה פחות פניות סקרניות ויותר מתעניינים שמבינים את ערך הטיפול, התהליך וההחלטה הכלכלית.",
    approach:
      "Booked.Dental בנתה משפך סביב קריאייטיב ייעודי לטיפול, אותות כוונה מגוגל ומטא, סינון לידים ופידבק מצוות המרפאה.",
    result:
      "הקמפיין עבר מאופטימיזציה למילוי טפסים קל לאופטימיזציה להזדמנויות שיקום מלא איכותיות יותר. התוצאות משתנות לפי שוק, הצעה, מעקב וקיבולת המרפאה.",
    metrics: [
      { label: "מודל ROI מעוגל", value: "38x" },
      { label: "הזדמנות רצינית ראשונה", value: "7 ימים" },
      { label: "יעד אופטימיזציה", value: "הזדמנויות מסוננות" },
    ],
    relatedServices: [
      "dental-implant-marketing",
      "all-on-4-dental-implant-marketing",
      "full-arch-implant-marketing",
    ],
  },
  {
    id: "veneers",
    title: "דוגמת קמפיין אנונימית לציפויים",
    subtitle: "דוגמת קמפיין למרפאה אסתטית שמוכרת תכנון חיוך פרימיום.",
    treatment: "ציפויים ועיצוב חיוך",
    challenge:
      "המרפאה רצתה מתעניינים שמעריכים תכנון, אסתטיקה ואיכות תוצאה, ולא רק מחפשי מחיר נמוך.",
    approach:
      "הקמפיין שילב קריאייטיב בסגנון UGC, מסר סביב תוצאה, סינון התאמה תקציבית ומדידה של איכות הזדמנויות אסתטיות.",
    result:
      "צוות המרפאה קיבל הזדמנויות קוסמטיות ברורות יותר והקשר טוב יותר לפני המעקב. התוצאות משתנות לפי שוק, ערך מקרה, קריאייטיב ותהליך סגירה.",
    metrics: [
      { label: "ערך מקרה בארה״ב", value: "$12k+" },
      { label: "סינון לידים", value: "מטרות חיוך + מוכנות" },
      { label: "יעד מרכזי", value: "כוונה אסתטית איכותית" },
    ],
    relatedServices: [
      "veneers-marketing",
      "cosmetic-dentistry-marketing",
      "cosmetic-dentist-marketing-agency",
    ],
  },
  {
    id: "filtering",
    title: "סינון לידים ולמידת AI",
    subtitle: "דוגמה לאופן שבו לידים מאושרים ודחויים משפרים את איכות הגיוס.",
    treatment: "סינון לידים לשתלים ואסתטיקה",
    challenge:
      "נפח לידים גולמי יצר תחושת פעילות, אבל המרפאה הייתה צריכה לדעת אילו קמפיינים מייצרים מתעניינים זמינים ומתאימים.",
    approach:
      "Booked.Dental חיברה תשובות טופס, תוצאות מעקב, מקור פנייה וסטטוס התאמה כדי שהמערכת תלמד מסימני איכות אמיתיים.",
    result:
      "החלטות תקציב הפכו ברורות יותר כי המרפאה יכלה להפריד בין פעילות רועשת לבין הזדמנויות אמיתיות. התוצאות משתנות לפי איכות הנתונים והמעקב.",
    metrics: [
      { label: "אות מרכזי", value: "סטטוס ליד מסונן" },
      { label: "בזבוז שהופחת", value: "פניות לא מתאימות" },
      { label: "מטרת המערכת", value: "מטופלים, לא קליקים" },
    ],
    relatedServices: [
      "dental-lead-filtering",
      "qualified-opportunity-methodology",
      "roi-methodology",
    ],
  },
];

const SERVICE_TO_PROOF: Record<string, ProofExample["id"]> = {
  "dental-implant-marketing": "fullArch",
  "google-ads-for-dental-implants": "fullArch",
  "all-on-4-dental-implant-marketing": "fullArch",
  "full-arch-implant-marketing": "fullArch",
  "all-on-4-lead-generation": "fullArch",
  "dental-implant-lead-generation": "fullArch",
  "veneers-marketing": "veneers",
  "cosmetic-dentistry-marketing": "veneers",
  "cosmetic-dentist-marketing-agency": "veneers",
  "facebook-ads-for-dentists": "veneers",
  "dental-lead-filtering": "filtering",
  "qualified-opportunity-methodology": "filtering",
  "roi-methodology": "filtering",
  "dental-lead-quality-checklist": "filtering",
  "dental-lead-generation-vs-patient-acquisition": "filtering",
};

const BLOG_TO_PROOF: Record<string, ProofExample["id"]> = {
  "dental-implant-ppc": "fullArch",
  "all-on-4-advertising": "fullArch",
  "dental-implant-landing-page": "fullArch",
  "dental-marketing-roi": "filtering",
  "dental-treatment-coordinator-follow-up": "filtering",
  "veneers-advertising": "veneers",
  "dental-implant-marketing-agency": "fullArch",
  "all-on-4-marketing-agency": "fullArch",
  "dental-implant-google-ads-cost": "fullArch",
  "veneers-lead-generation": "veneers",
  "cosmetic-dentist-facebook-ads": "veneers",
  "dental-lead-qualification-system": "filtering",
};

export function getProofExamples(lang?: string) {
  return lang === "he" ? HE_PROOF_EXAMPLES : EN_PROOF_EXAMPLES;
}

export function getProofById(id: ProofExample["id"], lang?: string) {
  return getProofExamples(lang).find((example) => example.id === id) || getProofExamples(lang)[0];
}

export function getProofForService(slug?: string, lang?: string) {
  if (!slug) return null;
  const proofId = SERVICE_TO_PROOF[slug];
  return proofId ? getProofById(proofId, lang) : null;
}

export function getProofForBlogSlug(slug?: string, lang?: string) {
  if (!slug) return null;
  const proofId = BLOG_TO_PROOF[slug];
  return proofId ? getProofById(proofId, lang) : null;
}
