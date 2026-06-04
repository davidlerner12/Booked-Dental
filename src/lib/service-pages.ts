export type ServicePageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: Array<{ title: string; body: string }>;
  bullets: string[];
  relatedPosts: string[];
};

const enPages: ServicePageContent[] = [
  {
    slug: "dental-implant-marketing",
    title: "Dental Implant Marketing",
    metaTitle: "Dental Implant Marketing That Finds Qualified Patients | Booked.Dental",
    description:
      "A patient acquisition system for implant clinics that need serious full-arch, All-on-4, All-on-6, and implant consult opportunities.",
    eyebrow: "Implant patient acquisition",
    h1: "Dental implant marketing built around serious treatment intent.",
    intro:
      "Implant campaigns should not be judged by cheap leads alone. Booked.Dental helps clinics attract, filter, and learn from people considering high-value treatment so budget moves toward real patient opportunities.",
    sections: [
      {
        title: "Why implant campaigns need stronger filtering",
        body:
          "Full-arch implants, All-on-4, and All-on-6 are not impulse purchases. Patients weigh trust, timing, fear, budget, and expected outcome. Filtering helps separate casual curiosity from people who may be ready for a real consultation.",
      },
      {
        title: "How the AI gets better over time",
        body:
          "Every approved or rejected lead becomes feedback. The campaign learns which signals point toward treatment fit, helping the system optimize toward future patients instead of clicks.",
      },
    ],
    bullets: [
      "Meta and Google campaigns for implant demand",
      "UGC-style creative that explains treatment value clearly",
      "Lead filters for readiness, treatment interest, and market fit",
      "Tracking around opportunities, deals, and ROI",
    ],
    relatedPosts: [
      "how-to-get-more-dental-implant-patients",
      "dental-lead-filtering-for-dentists",
      "why-dental-ads-fail",
    ],
  },
  {
    slug: "all-on-4-dental-implant-marketing",
    title: "All-on-4 Dental Implant Marketing",
    metaTitle: "All-on-4 Dental Implant Marketing for Serious Patients | Booked.Dental",
    description:
      "Marketing for All-on-4 and full-arch implant clinics that need filtered patient opportunities, stronger creative, and campaign feedback based on real treatment intent.",
    eyebrow: "Full-arch implant growth",
    h1: "All-on-4 marketing built for serious implant patient intent.",
    intro:
      "All-on-4 and full-arch implant campaigns need more than broad dental traffic. Booked.Dental helps clinics attract people considering major treatment, filter for fit, and teach the ad system which prospects look like future patients.",
    sections: [
      {
        title: "Full-arch patients need trust before speed",
        body:
          "Patients considering All-on-4 often carry fear, uncertainty, and financial questions. Campaigns perform better when the creative explains the path clearly and the landing page qualifies intent without making the patient feel rushed.",
      },
      {
        title: "Lead quality has to feed the campaign",
        body:
          "A cheap full-arch lead is not useful if the patient cannot finance, is not ready, or never responds. Filtering gives the AI better signals so it can move away from casual browsers and toward real treatment opportunities.",
      },
    ],
    bullets: [
      "Campaigns for All-on-4, All-on-6, and full-arch implant demand",
      "UGC-style creative that answers fear, timing, and outcome questions",
      "Filtering around treatment readiness, financing fit, and local market",
      "ROI reporting focused on opportunities instead of vanity metrics",
    ],
    relatedPosts: [
      "how-to-get-more-dental-implant-patients",
      "dental-lead-filtering-for-dentists",
      "best-dental-lead-sources",
    ],
  },
  {
    slug: "cosmetic-dentistry-marketing",
    title: "Cosmetic Dentistry Marketing",
    metaTitle: "Cosmetic Dentistry Marketing for Veneer Patients | Booked.Dental",
    description:
      "Marketing for veneer and cosmetic dentistry clinics that want filtered patient opportunities instead of broad clicks and low-intent leads.",
    eyebrow: "Veneer and smile makeover growth",
    h1: "Cosmetic dentistry marketing that filters for real demand.",
    intro:
      "Cosmetic patients need confidence before they act. Booked.Dental helps clinics turn attention into filtered opportunities for veneers, smile makeovers, and aesthetic dentistry.",
    sections: [
      {
        title: "Creative has to build belief fast",
        body:
          "Strong cosmetic campaigns show a believable path forward, explain who treatment is for, and reduce uncertainty before the patient reaches the form.",
      },
      {
        title: "Filtering protects the clinic’s time",
        body:
          "Not every cosmetic inquiry is worth the same follow-up effort. Filtering helps the team focus on prospects with clearer treatment intent and better fit.",
      },
    ],
    bullets: [
      "Campaigns for veneers and cosmetic dentistry",
      "UGC creative built around trust and realistic outcomes",
      "Filtering for treatment interest and patient readiness",
      "Internal links between ads, landing pages, and educational articles",
    ],
    relatedPosts: [
      "cosmetic-dentists-high-intent-patients",
      "cosmetic-dentistry-patient-acquisition-fast",
      "ugc-dental-ads-examples",
    ],
  },
  {
    slug: "veneers-marketing",
    title: "Veneers Marketing",
    metaTitle: "Veneers Marketing for Cosmetic Dentistry Clinics | Booked.Dental",
    description:
      "Veneers marketing for cosmetic clinics that want filtered patient opportunities, believable creative, and campaigns optimized around real smile makeover intent.",
    eyebrow: "Veneer patient acquisition",
    h1: "Veneers marketing that attracts serious smile makeover prospects.",
    intro:
      "Veneer patients need to believe the outcome is possible, realistic, and worth acting on. Booked.Dental helps cosmetic clinics turn attention into filtered opportunities for people actively considering a smile upgrade.",
    sections: [
      {
        title: "Cosmetic intent is emotional and practical",
        body:
          "Patients may care about confidence, photos, weddings, work, dating, or years of hiding their smile. Strong veneers marketing connects with that emotional driver while still answering practical questions about process, fit, and next steps.",
      },
      {
        title: "Filtering protects premium positioning",
        body:
          "Discount-heavy campaigns can fill the calendar with low-fit shoppers. Filtering helps the clinic separate serious cosmetic prospects from people who only want the cheapest option.",
      },
    ],
    bullets: [
      "Meta and Google campaigns for veneers and smile makeovers",
      "Creative concepts built around believable transformation and trust",
      "Lead filters for budget fit, treatment interest, and timing",
      "Landing-page copy aligned with premium cosmetic positioning",
    ],
    relatedPosts: [
      "cosmetic-dentists-high-intent-patients",
      "cosmetic-dentistry-patient-acquisition-fast",
      "ugc-dental-ads-examples",
    ],
  },
  {
    slug: "dental-lead-filtering",
    title: "Dental Lead Filtering",
    metaTitle: "Dental Lead Filtering for Implant and Cosmetic Clinics | Booked.Dental",
    description:
      "Lead filtering that teaches ad platforms which dental prospects look like real future patients, not just form submissions.",
    eyebrow: "Customers, not clicks",
    h1: "Dental lead filtering that teaches the AI who to find next.",
    intro:
      "Raw form fills are only the beginning. The real advantage comes from using qualification data to show the campaign which prospects have the strongest patient intent.",
    sections: [
      {
        title: "The campaign needs better signals",
        body:
          "Most platforms optimize toward the easiest conversion they can see. If every form fill looks equal, the AI may chase cheap volume. Filtering creates a better signal.",
      },
      {
        title: "The clinic needs cleaner follow-up",
        body:
          "When serious prospects are separated from casual browsers, the team can respond with more focus and better context.",
      },
    ],
    bullets: [
      "Qualification questions tied to treatment intent",
      "Approved and rejected leads fed back into campaign learning",
      "Reporting around filtered opportunities and deals",
      "A cleaner bridge between marketing and intake",
    ],
    relatedPosts: [
      "dental-lead-filtering-for-dentists",
      "best-dental-lead-sources",
      "google-ads-vs-facebook-ads-dentists",
    ],
  },
  {
    slug: "dental-lead-generation",
    title: "Dental Lead Generation",
    metaTitle: "Dental Lead Generation That Filters for Real Patients | Booked.Dental",
    description:
      "Dental lead generation for implant and cosmetic clinics that want qualified opportunities, not generic form fills or cheap clicks.",
    eyebrow: "Qualified dental opportunities",
    h1: "Dental lead generation that teaches campaigns to find patients.",
    intro:
      "More dental leads are not always better. Booked.Dental builds lead generation around treatment intent, filtering, and feedback so campaigns learn which prospects are worth the clinic's time.",
    sections: [
      {
        title: "Volume without filtering creates noise",
        body:
          "A campaign can produce many forms and still fail if the leads are not ready, not reachable, or not a fit for the treatment. Qualified lead generation starts by defining what a good patient opportunity looks like.",
      },
      {
        title: "The best signal is what happens after the form",
        body:
          "Clicks and form fills are only early signals. When the system learns which leads become real conversations and opportunities, it can optimize toward customers instead of activity.",
      },
    ],
    bullets: [
      "Lead generation for implants, veneers, and cosmetic treatment",
      "Filtering questions connected to treatment intent and readiness",
      "Creative and landing pages built around high-value procedures",
      "Reporting focused on qualified opportunities and average ROI",
    ],
    relatedPosts: [
      "best-dental-lead-sources",
      "dental-lead-filtering-for-dentists",
      "why-dental-ads-fail",
    ],
  },
  {
    slug: "ugc-dental-ads",
    title: "UGC Dental Ads",
    metaTitle: "UGC Dental Ads for Implant and Cosmetic Clinics | Booked.Dental",
    description:
      "UGC-style dental ads that explain high-value treatment clearly and help attract more serious implant and cosmetic prospects.",
    eyebrow: "Creative that earns attention",
    h1: "UGC dental ads that make treatment feel understandable.",
    intro:
      "High-value dental advertising needs more than polished branding. UGC-style creative can explain the problem, reduce fear, and create enough trust for a serious prospect to take the next step.",
    sections: [
      {
        title: "Patients need clarity before they inquire",
        body:
          "The best creative answers the first layer of questions: who treatment is for, what problem it solves, and why waiting may cost more confidence or comfort.",
      },
      {
        title: "Creative and filtering work together",
        body:
          "Ads attract attention, but filtering tells the system which attention matters. Together they help campaigns find better future patients.",
      },
    ],
    bullets: [
      "Front-camera educational creative concepts",
      "Hooks for implants, veneers, and smile makeovers",
      "Landing-page copy aligned to the same patient psychology",
      "Testing that looks beyond clicks and cheap leads",
    ],
    relatedPosts: [
      "ugc-dental-ads-examples",
      "why-dental-ads-fail",
      "dental-office-marketing",
    ],
  },
];

const hePages: ServicePageContent[] = [
  {
    slug: "dental-implant-marketing",
    title: "שיווק למרפאות שתלים",
    metaTitle: "שיווק למרפאות שתלים שמביא מטופלים מתאימים | Booked.Dental",
    description:
      "מערכת גיוס מטופלים למרפאות שתלים שרוצות הזדמנויות רציניות ל-Full Arch, All-on-4, All-on-6 וטיפולי שתלים.",
    eyebrow: "גיוס מטופלים לשתלים",
    h1: "שיווק למרפאות שתלים שבנוי סביב כוונת טיפול אמיתית.",
    intro:
      "קמפיינים לשתלים לא צריכים להימדד רק לפי לידים זולים. Booked.Dental עוזרת למרפאות למשוך, לסנן וללמוד מאנשים ששוקלים טיפול בעל ערך גבוה, כדי שהתקציב יעבור להזדמנויות מטופלים אמיתיות.",
    sections: [
      {
        title: "למה קמפיינים לשתלים צריכים סינון חזק יותר",
        body:
          "Full Arch, All-on-4 ו-All-on-6 אינם החלטות אימפולסיביות. מטופלים שוקלים אמון, תזמון, חשש, תקציב ותוצאה צפויה. סינון עוזר להפריד בין סקרנות כללית לבין אנשים שעשויים להיות מוכנים לייעוץ אמיתי.",
      },
      {
        title: "איך ה-AI משתפר לאורך זמן",
        body:
          "כל ליד שאושר או נדחה הופך לפידבק. הקמפיין לומד אילו סימנים מצביעים על התאמת טיפול, וכך המערכת מתמקדת במטופלים עתידיים ולא בקליקים.",
      },
    ],
    bullets: [
      "קמפיינים ב-Meta וב-Google לביקוש לשתלים",
      "קריאייטיב בסגנון UGC שמסביר את ערך הטיפול בצורה ברורה",
      "סינון לפי מוכנות, עניין טיפולי והתאמת אזור",
      "מדידה סביב הזדמנויות, עסקאות ו-ROI",
    ],
    relatedPosts: [
      "how-to-get-more-dental-implant-patients",
      "dental-lead-filtering-for-dentists",
      "why-dental-ads-fail",
    ],
  },
  {
    slug: "all-on-4-dental-implant-marketing",
    title: "שיווק All-on-4 למרפאות שתלים",
    metaTitle: "שיווק All-on-4 שמביא מטופלים רציניים | Booked.Dental",
    description:
      "שיווק למרפאות All-on-4 ושיקום פה מלא שרוצות הזדמנויות מטופלים מסוננות, קריאייטיב חזק ופידבק שמבוסס על כוונת טיפול אמיתית.",
    eyebrow: "צמיחה לשיקום פה מלא",
    h1: "שיווק All-on-4 שבנוי סביב כוונת טיפול רצינית.",
    intro:
      "קמפיינים ל-All-on-4 ולשיקום פה מלא צריכים יותר מתנועה דנטלית כללית. Booked.Dental עוזרת למרפאות למשוך אנשים ששוקלים טיפול משמעותי, לסנן התאמה, וללמד את מערכת הפרסום אילו מתעניינים נראים כמו מטופלים עתידיים.",
    sections: [
      {
        title: "מטופלי שיקום מלא צריכים אמון לפני מהירות",
        body:
          "אנשים ששוקלים All-on-4 מגיעים לעיתים עם חשש, אי-ודאות ושאלות תקציב. הקמפיין עובד טוב יותר כשהקריאייטיב מסביר את הדרך בצורה ברורה ודף הנחיתה מסנן כוונה בלי להלחיץ את המטופל.",
      },
      {
        title: "איכות הליד צריכה ללמד את הקמפיין",
        body:
          "ליד זול לשיקום מלא לא עוזר אם המטופל לא יכול לממן, לא מוכן או לא עונה. סינון נותן ל-AI אותות טובים יותר כדי להתרחק מסקרנים כלליים ולהתקרב להזדמנויות טיפול אמיתיות.",
      },
    ],
    bullets: [
      "קמפיינים ל-All-on-4, All-on-6 ושיקום פה מלא",
      "קריאייטיב בסגנון UGC שעונה על חשש, תזמון ותוצאה",
      "סינון לפי מוכנות טיפולית, התאמת מימון ושוק מקומי",
      "דיווח ROI סביב הזדמנויות ולא סביב מדדי ראווה",
    ],
    relatedPosts: [
      "how-to-get-more-dental-implant-patients",
      "dental-lead-filtering-for-dentists",
      "best-dental-lead-sources",
    ],
  },
  {
    slug: "cosmetic-dentistry-marketing",
    title: "שיווק לאסתטיקה דנטלית",
    metaTitle: "שיווק לאסתטיקה דנטלית ולציפויי שיניים | Booked.Dental",
    description:
      "שיווק למרפאות ציפויים ואסתטיקה שרוצות הזדמנויות מטופלים מסוננות במקום קליקים רחבים ולידים עם כוונה נמוכה.",
    eyebrow: "צמיחה לציפויים ושיקום חיוך",
    h1: "שיווק לאסתטיקה דנטלית שמסנן ביקוש אמיתי.",
    intro:
      "מטופלי אסתטיקה צריכים ביטחון לפני שהם פועלים. Booked.Dental עוזרת למרפאות להפוך תשומת לב להזדמנויות מסוננות לציפויים, שיקום חיוך ואסתטיקה דנטלית.",
    sections: [
      {
        title: "קריאייטיב צריך לבנות אמון מהר",
        body:
          "קמפיינים חזקים לאסתטיקה מראים דרך אמינה קדימה, מסבירים למי הטיפול מתאים ומפחיתים אי-ודאות עוד לפני שהמטופל מגיע לטופס.",
      },
      {
        title: "סינון שומר על זמן הצוות",
        body:
          "לא כל פנייה אסתטית שווה את אותו מאמץ המשך. סינון עוזר לצוות להתמקד באנשים עם כוונת טיפול ברורה יותר והתאמה טובה יותר.",
      },
    ],
    bullets: [
      "קמפיינים לציפויים ואסתטיקה דנטלית",
      "קריאייטיב UGC סביב אמון ותוצאה ריאלית",
      "סינון לפי עניין טיפולי ומוכנות מטופל",
      "קישור בין מודעות, דפי נחיתה ומאמרי עומק",
    ],
    relatedPosts: [
      "cosmetic-dentists-high-intent-patients",
      "cosmetic-dentistry-patient-acquisition-fast",
      "ugc-dental-ads-examples",
    ],
  },
  {
    slug: "veneers-marketing",
    title: "שיווק ציפויי שיניים",
    metaTitle: "שיווק ציפויי שיניים למרפאות אסתטיקה | Booked.Dental",
    description:
      "שיווק ציפויי שיניים למרפאות אסתטיקה שרוצות הזדמנויות מטופלים מסוננות, קריאייטיב אמין וקמפיינים שמבוססים על כוונת שיקום חיוך אמיתית.",
    eyebrow: "גיוס מטופלים לציפויים",
    h1: "שיווק ציפויי שיניים שמושך מתעניינים רציניים לשיקום חיוך.",
    intro:
      "מטופלי ציפויים צריכים להאמין שהתוצאה אפשרית, מציאותית ושווה פעולה. Booked.Dental עוזרת למרפאות אסתטיקה להפוך תשומת לב להזדמנויות מסוננות מאנשים שבאמת שוקלים לשדרג את החיוך.",
    sections: [
      {
        title: "כוונה אסתטית היא גם רגשית וגם מעשית",
        body:
          "מטופלים יכולים לחשוב על ביטחון עצמי, תמונות, חתונה, עבודה, דייטים או שנים של הסתרת החיוך. שיווק טוב לציפויים מתחבר למניע הרגשי הזה ועדיין עונה על שאלות פרקטיות לגבי תהליך, התאמה והצעד הבא.",
      },
      {
        title: "סינון שומר על מיצוב פרימיום",
        body:
          "קמפיינים שמבוססים מדי על הנחה יכולים למלא את היומן במתעניינים שלא מתאימים. סינון עוזר למרפאה להפריד בין מטופלים אסתטיים רציניים לבין מי שמחפש רק את האפשרות הזולה ביותר.",
      },
    ],
    bullets: [
      "קמפיינים ב-Meta וב-Google לציפויים ושיקום חיוך",
      "רעיונות קריאייטיב סביב שינוי אמין ובניית אמון",
      "סינון לפי התאמת תקציב, עניין טיפולי ותזמון",
      "קופי לדפי נחיתה שמחובר למיצוב אסתטי פרימיום",
    ],
    relatedPosts: [
      "cosmetic-dentists-high-intent-patients",
      "cosmetic-dentistry-patient-acquisition-fast",
      "ugc-dental-ads-examples",
    ],
  },
  {
    slug: "dental-lead-filtering",
    title: "סינון לידים דנטליים",
    metaTitle: "סינון לידים למרפאות שתלים ואסתטיקה | Booked.Dental",
    description:
      "סינון לידים שמלמד את מערכות הפרסום אילו מתעניינים נראים כמו מטופלים עתידיים אמיתיים, ולא רק מילויי טופס.",
    eyebrow: "לקוחות, לא קליקים",
    h1: "סינון לידים דנטליים שמלמד את ה-AI את מי למצוא בהמשך.",
    intro:
      "טופס הוא רק ההתחלה. היתרון האמיתי מגיע כשמשתמשים בנתוני הסינון כדי להראות לקמפיין אילו מתעניינים מגיעים עם כוונת טיפול חזקה.",
    sections: [
      {
        title: "הקמפיין צריך אותות טובים יותר",
        body:
          "רוב הפלטפורמות מתמקדות בהמרה הכי קלה שהן רואות. אם כל טופס נראה שווה, ה-AI עלול לרדוף אחרי נפח זול. סינון יוצר אות מדויק יותר.",
      },
      {
        title: "המרפאה צריכה תהליך המשך נקי יותר",
        body:
          "כשמתעניינים רציניים מופרדים מסקרנים כלליים, הצוות יכול לפעול ביותר מיקוד ועם הקשר טוב יותר.",
      },
    ],
    bullets: [
      "שאלות התאמה שמחוברות לכוונת טיפול",
      "לידים שאושרו או נדחו חוזרים ללמידת הקמפיין",
      "דיווח סביב הזדמנויות מסוננות ועסקאות",
      "חיבור נקי יותר בין שיווק לקליטה במרפאה",
    ],
    relatedPosts: [
      "dental-lead-filtering-for-dentists",
      "best-dental-lead-sources",
      "google-ads-vs-facebook-ads-dentists",
    ],
  },
  {
    slug: "dental-lead-generation",
    title: "גיוס לידים דנטליים",
    metaTitle: "גיוס לידים דנטליים שמסנן למטופלים אמיתיים | Booked.Dental",
    description:
      "גיוס לידים דנטליים למרפאות שתלים ואסתטיקה שרוצות הזדמנויות מתאימות, לא טפסים כלליים או קליקים זולים.",
    eyebrow: "הזדמנויות דנטליות מתאימות",
    h1: "גיוס לידים דנטליים שמלמד קמפיינים למצוא מטופלים.",
    intro:
      "יותר לידים דנטליים לא תמיד אומר תוצאה טובה יותר. Booked.Dental בונה גיוס לידים סביב כוונת טיפול, סינון ופידבק, כדי שהקמפיינים ילמדו אילו מתעניינים באמת שווים את זמן המרפאה.",
    sections: [
      {
        title: "נפח בלי סינון יוצר רעש",
        body:
          "קמפיין יכול לייצר הרבה טפסים ועדיין להיכשל אם הלידים לא מוכנים, לא זמינים או לא מתאימים לטיפול. גיוס לידים איכותי מתחיל בהגדרה ברורה של הזדמנות מטופל טובה.",
      },
      {
        title: "האות הטוב ביותר מגיע אחרי הטופס",
        body:
          "קליקים ומילוי טפסים הם רק אותות ראשוניים. כשהמערכת לומדת אילו לידים הופכים לשיחות ולהזדמנויות אמיתיות, היא יכולה להתמקד בלקוחות במקום בפעילות.",
      },
    ],
    bullets: [
      "גיוס לידים לשתלים, ציפויים וטיפולים אסתטיים",
      "שאלות סינון שמחוברות לכוונת טיפול ומוכנות",
      "קריאייטיב ודפי נחיתה סביב טיפולים בעלי ערך גבוה",
      "דיווח סביב הזדמנויות מסוננות ו-ROI ממוצע",
    ],
    relatedPosts: [
      "best-dental-lead-sources",
      "dental-lead-filtering-for-dentists",
      "why-dental-ads-fail",
    ],
  },
  {
    slug: "ugc-dental-ads",
    title: "מודעות UGC למרפאות שיניים",
    metaTitle: "מודעות UGC למרפאות שתלים ואסתטיקה | Booked.Dental",
    description:
      "מודעות בסגנון UGC שמסבירות טיפולים בעלי ערך גבוה בצורה ברורה ועוזרות למשוך מתעניינים רציניים יותר לשתלים ואסתטיקה.",
    eyebrow: "קריאייטיב שתופס תשומת לב",
    h1: "מודעות UGC דנטליות שהופכות טיפול למובן יותר.",
    intro:
      "פרסום דנטלי בעל ערך גבוה צריך יותר ממיתוג מלוטש. קריאייטיב בסגנון UGC יכול להסביר את הבעיה, להפחית חשש וליצור מספיק אמון כדי שמתעניין רציני יעשה את הצעד הבא.",
    sections: [
      {
        title: "מטופלים צריכים בהירות לפני שהם משאירים פרטים",
        body:
          "הקריאייטיב הטוב ביותר עונה על השאלות הראשונות: למי הטיפול מתאים, איזו בעיה הוא פותר ולמה דחייה עלולה לעלות בביטחון או בנוחות.",
      },
      {
        title: "קריאייטיב וסינון עובדים יחד",
        body:
          "מודעות מושכות תשומת לב, אבל סינון אומר למערכת איזו תשומת לב באמת חשובה. יחד הם עוזרים לקמפיינים למצוא מטופלים עתידיים טובים יותר.",
      },
    ],
    bullets: [
      "רעיונות לקריאייטיב חינוכי מול מצלמה",
      "הוקים לשתלים, ציפויים ושיקום חיוך",
      "קופי לדפי נחיתה שמחובר לאותה פסיכולוגיית מטופל",
      "בדיקות שמסתכלות מעבר לקליקים ולידים זולים",
    ],
    relatedPosts: [
      "ugc-dental-ads-examples",
      "why-dental-ads-fail",
      "dental-office-marketing",
    ],
  },
];

export const SERVICE_PAGES = {
  en: enPages,
  he: hePages,
} as const;

export function getServicePage(lang: string | undefined, slug: string | undefined) {
  const normalizedLang = lang === "he" ? "he" : "en";
  return SERVICE_PAGES[normalizedLang].find((page) => page.slug === slug) || null;
}

export function getServicePageRoutes() {
  return (["en", "he"] as const).flatMap((lang) =>
    SERVICE_PAGES[lang].map((page) => `/${lang}/services/${page.slug}`),
  );
}
