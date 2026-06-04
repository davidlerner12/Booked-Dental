import type { PortableTextBlock } from "@portabletext/types";
import type { BlogPostDetail } from "@/lib/blog";

type SupplementalBlogPost = BlogPostDetail & {
  serviceLinks: string[];
};

function block(
  text: string,
  style: "normal" | "h2" | "h3" = "normal",
  index = 0,
): PortableTextBlock {
  return {
    _type: "block",
    _key: `${style}-${index}`,
    style,
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `${style}-${index}-span`,
        text,
        marks: [],
      },
    ],
  } as PortableTextBlock;
}

function body(items: Array<[string, "normal" | "h2" | "h3"?]>) {
  return items.map(([text, style = "normal"], index) => block(text, style, index));
}

export const supplementalBlogPosts: SupplementalBlogPost[] = [
  {
    _id: "supplemental-dental-implant-seo",
    slug: "dental-implant-seo",
    title: "Dental Implant SEO: How Clinics Rank for High-Value Patients",
    excerpt:
      "Dental implant SEO works best when content, local signals, reviews, and conversion pages are built around treatment intent instead of generic dental traffic.",
    publishedAt: "2026-06-04T15:00:00.000Z",
    seoImage: "/blog/images/implant-marketing.png",
    mainImageAlt: "Dental implant SEO plan connecting local search, treatment pages, and filtered patient opportunities",
    serviceLinks: [
      "dental-implant-marketing",
      "dental-implant-lead-generation",
      "full-arch-implant-marketing",
    ],
    body: body([
      [
        "Dental implant SEO is not the same as general dental SEO. A clinic trying to rank for implants, All-on-4, full-arch treatment, or implant financing needs pages that match high-value patient intent, not a broad website that mentions every service equally.",
      ],
      ["Why implant SEO needs treatment-specific pages", "h2"],
      [
        "Patients searching for implant treatment usually have specific questions: cost, candidacy, timing, fear, financing, reviews, and whether the clinic handles cases like theirs. A generic services page rarely answers enough of those questions to rank well or convert well.",
      ],
      [
        "The strongest SEO structure starts with dedicated pages for dental implants, All-on-4, full-arch implants, implant financing, and the local market. Each page should explain who the treatment is for, what problem it solves, what the next step looks like, and why the clinic is credible.",
      ],
      ["Local SEO still matters", "h2"],
      [
        "Most implant patients still choose locally. That means Google Business Profile quality, reviews, location signals, photos, and service categories all matter. Search engines need to understand not only that the clinic offers implants, but where it offers them and why patients trust it.",
      ],
      [
        "For competitive markets, implant SEO should support paid acquisition rather than replace it. Organic pages create authority and help patients research. Paid campaigns create faster demand. Together they make the brand feel more credible when a patient compares options.",
      ],
      ["What to measure", "h2"],
      [
        "Ranking for dental implant keywords is useful, but rankings alone are not the business outcome. Track which pages produce filtered patient opportunities, which queries bring serious prospects, and which content supports accepted treatment. The goal is not traffic. The goal is qualified patient acquisition.",
      ],
      ["Dental implant SEO FAQ", "h2"],
      ["How long does dental implant SEO take? Most clinics should expect SEO to build over months, not days. Paid campaigns can create faster demand while SEO pages, reviews, and local authority compound over time."],
      ["Should implant SEO target cost keywords? Yes, but carefully. Cost keywords can attract serious patients, but pages should explain financing, candidacy, and value instead of racing to the cheapest price."],
      ["Does SEO replace Google Ads for implants? Usually no. SEO supports research and trust, while Google Ads captures immediate search demand. The strongest acquisition systems use both with lead-quality tracking."],
    ]),
  },
  {
    _id: "supplemental-dental-implant-landing-page",
    slug: "dental-implant-landing-page",
    title: "Dental Implant Landing Page: What Converts Paid Traffic",
    excerpt:
      "A dental implant landing page should turn expensive traffic into filtered opportunities by answering fear, cost, trust, and next-step questions fast.",
    publishedAt: "2026-06-04T15:05:00.000Z",
    seoImage: "/blog/images/website-conversion.png",
    mainImageAlt: "Dental implant landing page wireframe focused on qualified opportunity conversion",
    serviceLinks: [
      "dental-implant-marketing",
      "google-ads-for-dental-implants",
      "qualified-opportunity-methodology",
    ],
    body: body([
      [
        "A dental implant landing page has one job: convert expensive traffic into a serious, filtered patient opportunity. If you send implant traffic to a general homepage, you make the patient work too hard and weaken the campaign data.",
      ],
      ["The headline should match treatment intent", "h2"],
      [
        "Someone who clicked an implant ad should immediately see language about implants, All-on-4, full-arch treatment, or the specific offer they clicked. A vague headline about modern dentistry loses momentum.",
      ],
      [
        "The page should make the next step clear without sounding desperate. A strong landing page tells the patient what they can check, what the clinic will review, and why the process is low-friction.",
      ],
      ["Answer the objections before the form", "h2"],
      [
        "Implant patients often hesitate around pain, cost, time, financing, embarrassment, and whether they are a candidate. Your landing page should address those concerns in plain language before asking them to submit information.",
      ],
      [
        "That does not mean writing a textbook. It means using short sections, proof points, financing cues, patient-friendly language, and a form that collects enough information to filter intent without overwhelming the visitor.",
      ],
      ["Filter without killing conversion", "h2"],
      [
        "A good implant page does not treat every form fill as equal. It asks enough to help the clinic understand treatment interest, location, urgency, and fit. The campaign can then learn which leads become qualified opportunities, not just which visitors filled out a form.",
      ],
      ["Dental implant landing page FAQ", "h2"],
      ["What should be above the fold? The page should show the treatment focus, the core offer or next step, trust signals, and a simple way to submit interest without forcing the patient to search around."],
      ["How many fields should the form have? Enough to filter intent, but not so many that serious patients quit. Name, contact information, city, and one or two treatment-fit questions are usually a cleaner starting point."],
      ["Should the page include pricing? It depends on positioning and market. Financing cues often reduce hesitation, but aggressive price messaging can attract low-fit shoppers if the clinic is premium."],
    ]),
  },
  {
    _id: "supplemental-dental-marketing-roi",
    slug: "dental-marketing-roi",
    title: "Dental Marketing ROI: Metrics That Matter Beyond Cost Per Lead",
    excerpt:
      "Dental marketing ROI is clearer when clinics track filtered opportunities, show rate, treatment acceptance, and revenue quality instead of cheap lead volume.",
    publishedAt: "2026-06-04T15:10:00.000Z",
    seoImage: "/blog/images/dental-patient-acquisition.png",
    mainImageAlt: "Dental marketing ROI dashboard comparing filtered opportunities with campaign activity",
    serviceLinks: [
      "roi-methodology",
      "qualified-opportunity-methodology",
      "dental-lead-generation-vs-patient-acquisition",
    ],
    body: body([
      [
        "Dental marketing ROI gets messy when clinics stop at cost per lead. A cheap lead can be useless. A more expensive lead can be profitable. The real question is whether the campaign produces qualified opportunities that turn into treatment.",
      ],
      ["Cost per lead is only an early signal", "h2"],
      [
        "Cost per lead helps diagnose efficiency, but it does not tell you whether the person is reachable, qualified, interested in the right treatment, or likely to accept a plan. For implants and cosmetic dentistry, that missing context changes everything.",
      ],
      [
        "A clinic that celebrates low lead cost without tracking opportunity quality may scale the wrong traffic. The ad platform learns to find easy forms, not serious patients.",
      ],
      ["The ROI metrics that matter", "h2"],
      [
        "Track cost per qualified opportunity, booked appointment rate, show rate, treatment acceptance, average treatment value, and revenue from closed cases. Those numbers show whether the campaign is producing business value.",
      ],
      [
        "The best reporting connects the front of the funnel to the result. Which channel found the patient? Which creative attracted them? Which landing page converted them? Which leads were approved or rejected? That is how campaigns get smarter.",
      ],
      ["Why average ROI should be treated carefully", "h2"],
      [
        "Average ROI is useful when it is grounded in clear definitions. It should not be used as a vague promise. It should explain what counts, what does not count, and how the system separates campaign activity from real patient acquisition.",
      ],
      ["Dental marketing ROI FAQ", "h2"],
      ["What is a good ROI for dental marketing? It depends on treatment mix, case value, close rate, and lead quality. For high-value procedures, a smaller number of qualified opportunities can outperform a large number of cheap leads."],
      ["Why is cost per lead misleading? Cost per lead ignores whether the person is reachable, qualified, and likely to accept treatment. A cheap lead can still waste staff time and campaign learning."],
      ["What should a clinic report weekly? Track qualified opportunities, show rate, treatment acceptance, revenue from closed cases, and which channels or creatives produced the best quality."],
    ]),
  },
  {
    _id: "supplemental-google-business-profile-dentists",
    slug: "google-business-profile-for-dentists",
    title: "Google Business Profile for Dentists: How It Supports Patient Growth",
    excerpt:
      "Google Business Profile helps dentists support local SEO, reviews, trust, and implant or cosmetic patient acquisition when it is maintained strategically.",
    publishedAt: "2026-06-04T15:15:00.000Z",
    seoImage: "/blog/images/google-ads-dentists.png",
    mainImageAlt: "Google Business Profile and local SEO signals for dental patient acquisition",
    serviceLinks: [
      "dental-implant-marketing",
      "cosmetic-dentistry-marketing",
      "dental-lead-generation",
    ],
    body: body([
      [
        "Google Business Profile for dentists is more than a map listing. For implant and cosmetic clinics, it supports trust, local SEO, and conversion when patients compare options before submitting a form.",
      ],
      ["Reviews influence both SEO and conversion", "h2"],
      [
        "Patients considering high-value treatment want proof. Reviews, photos, service categories, and consistent business information all help searchers decide whether a clinic feels credible enough to contact.",
      ],
      [
        "A strong profile does not replace a focused landing page or paid campaign, but it reinforces them. A patient may click an ad, search the clinic name, read reviews, and then decide whether to move forward.",
      ],
      ["Use the profile to support treatment intent", "h2"],
      [
        "Keep services, photos, Q&A, and updates aligned with the treatments you actually want to grow. If implants and veneers are priorities, the profile should not read like a generic hygiene listing.",
      ],
      [
        "Make sure location, hours, phone, website links, and categories are accurate. Small inconsistencies can weaken trust at exactly the moment a patient is deciding whether to act.",
      ],
      ["Connect local SEO to patient acquisition", "h2"],
      [
        "The goal is not simply to rank in the map pack. The goal is to support a system that turns attention into filtered opportunities. Google Business Profile works best when it is part of a broader funnel built around treatment intent.",
      ],
      ["Google Business Profile FAQ for dentists", "h2"],
      ["How often should a dental clinic update its Google Business Profile? Update it whenever hours, services, photos, offers, or important business details change. Fresh, accurate information supports trust."],
      ["Do reviews help dental SEO? Reviews can support local visibility and conversion. More importantly, specific patient stories help high-value prospects feel safer before they submit a form."],
      ["Should implant and cosmetic services be mentioned on the profile? Yes. The profile should reflect the treatments the clinic wants to grow, not only broad general dentistry."],
    ]),
  },
  {
    _id: "supplemental-veneers-vs-invisalign-marketing",
    slug: "veneers-vs-invisalign-marketing",
    title: "Veneers vs Invisalign Marketing: Match the Campaign to Intent",
    excerpt:
      "Veneers and Invisalign patients have different motivations, objections, and funnel needs. Cosmetic campaigns work better when the strategy matches intent.",
    publishedAt: "2026-06-04T15:20:00.000Z",
    seoImage: "/blog/images/cosmetic-dentistry-growth.png",
    mainImageAlt: "Cosmetic dentistry campaign planning for veneers and Invisalign patient intent",
    serviceLinks: [
      "veneers-marketing",
      "cosmetic-dentistry-marketing",
      "cosmetic-dentist-marketing-agency",
    ],
    body: body([
      [
        "Veneers vs Invisalign marketing should not use the same message. Both are cosmetic, but the patient psychology is different. Veneer patients often want visible transformation. Invisalign patients often want correction, comfort, and a lower-friction path.",
      ],
      ["Veneer marketing is transformation-led", "h2"],
      [
        "Veneer campaigns work best when they show believable outcomes, address confidence, and explain who is a good candidate. The offer should feel premium, not discount-heavy, especially for clinics protecting a high-end cosmetic brand.",
      ],
      [
        "The page should answer concerns around durability, process, timeline, appearance, and whether the result will look natural. Filtering should help separate serious smile makeover prospects from casual shoppers.",
      ],
      ["Invisalign marketing is often friction-led", "h2"],
      [
        "Invisalign patients may care more about convenience, comfort, treatment length, payment options, and whether clear aligners can solve their specific issue. The campaign can be more educational and comparison-driven.",
      ],
      [
        "That difference matters because the same creative hook will not work equally for both groups. A veneers ad can lead with transformation. An Invisalign ad may perform better when it leads with ease, clarity, and confidence in the process.",
      ],
      ["Match the funnel to the treatment", "h2"],
      [
        "If a clinic wants both treatment lines, separate the campaigns, pages, and qualification signals. That gives the AI cleaner data and gives the clinic a clearer read on which cosmetic funnel is producing real opportunities.",
      ],
      ["Veneers vs Invisalign marketing FAQ", "h2"],
      ["Can one campaign promote both veneers and Invisalign? It can, but separate campaigns usually produce cleaner data because the patient motivations and objections are different."],
      ["Which treatment is better for paid social? Veneers often perform well with transformation-led creative, while Invisalign can work with educational and convenience-led messaging."],
      ["How should a clinic choose the first cosmetic campaign? Start with the treatment that has the best combination of margin, capacity, patient demand, and ability to show a clear outcome."],
    ]),
  },
  {
    _id: "supplemental-dental-reviews-seo",
    slug: "dental-reviews-seo",
    title: "Dental Reviews and SEO: Why Reputation Supports High-Value Cases",
    excerpt:
      "Dental reviews support SEO and conversion by helping implant and cosmetic patients trust the clinic before they submit a form.",
    publishedAt: "2026-06-04T15:25:00.000Z",
    seoImage: "/blog/images/lead-sources.png",
    mainImageAlt: "Dental reviews and reputation signals supporting local SEO and qualified patient acquisition",
    serviceLinks: [
      "dental-lead-generation",
      "qualified-opportunity-methodology",
      "booked-dental-vs-dental-marketing-agency",
    ],
    body: body([
      [
        "Dental reviews affect SEO, but their bigger value is conversion. Implant and cosmetic patients often research heavily before submitting a form. Reviews help them decide whether your clinic feels safe, credible, and worth contacting.",
      ],
      ["Reputation is part of the funnel", "h2"],
      [
        "A patient may see an ad, visit a landing page, search the clinic name, read reviews, and then return to submit a form. If the reputation layer is weak, the paid campaign may get blamed for a conversion problem that actually happened during research.",
      ],
      [
        "For high-value treatment, reviews should speak to trust, clarity, comfort, results, and the experience of being guided through a decision. Generic five-star ratings help, but specific stories help more.",
      ],
      ["Reviews can support local search", "h2"],
      [
        "Google uses many signals for local visibility, and reviews are part of the broader trust picture. Fresh reviews, relevant language, accurate profile information, and strong location signals all support local discovery.",
      ],
      [
        "Do not fake reviews or pressure patients. Build a consistent process that asks happy patients to describe their experience honestly. The goal is authentic proof, not a manufactured rating.",
      ],
      ["Connect reputation to lead quality", "h2"],
      [
        "Better reputation signals can improve the quality of people who submit forms because they arrive with more confidence. That makes reviews part of patient acquisition, not just brand maintenance.",
      ],
      ["Dental reviews SEO FAQ", "h2"],
      ["How many reviews does a dental clinic need? There is no universal number. The clinic needs enough recent, specific reviews to look credible compared with local competitors."],
      ["Can reviews mention treatments like implants or veneers? Patients can describe their real experience, including the treatment they received. Clinics should never script or fake reviews."],
      ["Do reviews improve paid ad conversion? Often yes. Patients frequently research the clinic after seeing an ad, so reputation can influence whether paid traffic becomes a qualified opportunity."],
    ]),
  },
  {
    _id: "supplemental-all-on-4-marketing",
    slug: "all-on-4-marketing",
    title: "All-on-4 Marketing: How to Attract Full-Arch Implant Patients",
    excerpt:
      "All-on-4 marketing works best when campaigns filter for treatment intent, financing readiness, and full-arch case fit instead of chasing cheap leads.",
    publishedAt: "2026-06-04T16:00:00.000Z",
    seoImage: "/blog/images/implant-marketing.png",
    mainImageAlt: "All-on-4 marketing funnel for full-arch implant patient acquisition",
    serviceLinks: [
      "all-on-4-lead-generation",
      "full-arch-implant-marketing",
      "dental-lead-quality-checklist",
    ],
    body: body([
      [
        "All-on-4 marketing is not regular dental advertising with a more expensive procedure attached. Full-arch implant patients usually carry fear, urgency, financial hesitation, and a long research path. The campaign has to respect that reality from the first ad to the first qualified conversation.",
      ],
      ["Start with full-arch intent", "h2"],
      [
        "The strongest All-on-4 campaigns speak directly to people dealing with failing teeth, loose dentures, missing teeth, embarrassment, or a treatment plan they are unsure about. Generic implant messaging is too broad because single-tooth implant shoppers and full-arch candidates are not the same audience.",
      ],
      [
        "Your ad, landing page, and follow-up questions should all clarify whether the person is exploring a full-arch solution, has already been quoted, needs financing, or is still at the early research stage. That gives the campaign cleaner learning data.",
      ],
      ["Filter for case fit, not just form fills", "h2"],
      [
        "A full-arch lead is only useful if the clinic can understand urgency, budget reality, location, treatment interest, and whether the patient is reachable. A high form volume with no qualification process usually teaches the ad platform to find easy clicks and casual inquiries.",
      ],
      ["All-on-4 marketing FAQ", "h2"],
      [
        "What keywords matter for All-on-4 marketing? Strong angles include All-on-4 cost, full mouth dental implants, implant dentures, fixed teeth, and dental implants near me, but each needs filtering so budget does not go to low-fit shoppers.",
      ],
      [
        "Should All-on-4 ads mention financing? Usually yes. Financing language can reduce hesitation for serious patients, but it should be framed around eligibility and fit instead of sounding like a discount offer.",
      ],
      [
        "What makes an All-on-4 campaign profitable? Profit comes from qualified opportunities, show rate, acceptance rate, and case value, not from the lowest possible cost per lead.",
      ],
    ]),
  },
  {
    _id: "supplemental-he-all-on-4-marketing",
    slug: "all-on-4-marketing-he",
    title: "שיווק All-on-4: איך למשוך מטופלי שתלים רציניים",
    excerpt:
      "שיווק All-on-4 עובד טוב יותר כשמסננים כוונת טיפול, התאמה כלכלית והתאמה למקרה מלא, במקום לרדוף אחרי לידים זולים.",
    publishedAt: "2026-06-04T16:01:00.000Z",
    seoImage: "/blog/images/implant-marketing.png",
    mainImageAlt: "מערכת שיווק All-on-4 למשיכת מטופלי שתלים רציניים",
    serviceLinks: [
      "all-on-4-lead-generation",
      "full-arch-implant-marketing",
      "dental-lead-quality-checklist",
    ],
    body: body([
      [
        "שיווק All-on-4 הוא לא עוד קמפיין דנטלי רגיל עם טיפול יקר יותר. מטופלים שמתעניינים בשיקום פה מלא מגיעים עם חששות, דחיפות, שאלות על מימון ותהליך קבלת החלטה ארוך יותר. הקמפיין צריך להתייחס לזה כבר מהמודעה הראשונה.",
      ],
      ["להתחיל מכוונת טיפול אמיתית", "h2"],
      [
        "הקמפיינים החזקים ביותר מדברים לאנשים עם שיניים קורסות, תותבות לא נוחות, שיניים חסרות, מבוכה או הצעת טיפול שהם עדיין לא בטוחים לגביה. מסר כללי על שתלים רחב מדי, כי מטופל לשתל בודד ומטופל לשיקום מלא הם לא אותו קהל.",
      ],
      [
        "המודעה, עמוד הנחיתה ושאלות הסינון צריכים לברר האם האדם בוחן פתרון מלא, כבר קיבל הצעת מחיר, צריך מימון או נמצא רק בשלב מחקר ראשוני. כך המערכת לומדת למצוא אנשים רלוונטיים יותר.",
      ],
      ["לסנן התאמה, לא רק טפסים", "h2"],
      [
        "ליד לשיקום מלא שווה משהו רק אם המרפאה מבינה דחיפות, התאמה כלכלית, מיקום, עניין טיפולי והאם אפשר להשיג את האדם. נפח גבוה בלי סינון מלמד את המערכת למצוא מילוי טפסים קל, לא בהכרח מטופלים רציניים.",
      ],
      ["שאלות נפוצות על שיווק All-on-4", "h2"],
      [
        "אילו מילות מפתח חשובות? מונחים כמו מחיר All-on-4, השתלות שיניים בכל הפה, תותבות קבועות ושתלים קרוב אליי יכולים לעבוד, אבל צריך לסנן כדי לא לבזבז תקציב על מתעניינים לא מתאימים.",
      ],
      [
        "האם כדאי להזכיר מימון? בדרך כלל כן. מסר על מימון יכול להוריד התנגדות אצל מטופלים רציניים, אבל כדאי למסגר אותו סביב בדיקת התאמה ולא כהנחת מחיר.",
      ],
      [
        "מה הופך קמפיין All-on-4 לרווחי? הרווח מגיע מהזדמנויות איכותיות, שיעור הגעה, שיעור סגירה ושווי מקרה, לא מהליד הכי זול.",
      ],
    ]),
  },
  {
    _id: "supplemental-full-mouth-dental-implant-leads",
    slug: "full-mouth-dental-implant-leads",
    title: "Full Mouth Dental Implant Leads: Why Most Campaigns Waste Budget",
    excerpt:
      "Full mouth dental implant leads need a different acquisition system because case value is high, research cycles are longer, and bad lead quality gets expensive fast.",
    publishedAt: "2026-06-04T16:05:00.000Z",
    seoImage: "/blog/images/dental-patient-acquisition.png",
    mainImageAlt: "Full mouth dental implant lead quality dashboard for high-value case acquisition",
    serviceLinks: [
      "full-arch-implant-marketing",
      "dental-implant-lead-generation",
      "qualified-opportunity-methodology",
    ],
    body: body([
      [
        "Full mouth dental implant leads can be extremely valuable, but they can also drain budget fast when the campaign is optimized around cheap inquiries. High case value does not protect a clinic from poor targeting, weak landing pages, or slow follow-up.",
      ],
      ["Why full mouth implant leads are different", "h2"],
      [
        "A patient considering full mouth implants is often comparing treatment options, financing, dentist credibility, fear of surgery, recovery time, and whether they are a candidate. That means the campaign has to educate and qualify, not just collect contact details.",
      ],
      [
        "The common mistake is treating every lead as equal. Someone asking about a single missing tooth, someone looking for the cheapest denture, and someone ready for a full-arch consult should not be valued the same in reporting.",
      ],
      ["Teach the campaign what quality means", "h2"],
      [
        "Lead filtering helps the ad system learn from the right signals. When the clinic marks which inquiries became serious opportunities, budget can move toward audiences, keywords, and creatives that produce better patient conversations.",
      ],
      ["Full mouth dental implant leads FAQ", "h2"],
      [
        "Why are full mouth implant leads expensive? The treatment is high value and competitive, so many clinics bid for the same serious patients. Better filtering helps protect the budget.",
      ],
      [
        "Should campaigns use before-and-after creative? They can, but the creative must be compliant, believable, and supported by trust-building copy. Overly dramatic claims can hurt credibility.",
      ],
      [
        "What should be tracked after the lead? Track reachability, qualification, booked consults, show rate, treatment acceptance, and revenue from accepted plans.",
      ],
    ]),
  },
  {
    _id: "supplemental-he-full-mouth-dental-implant-leads",
    slug: "full-mouth-dental-implant-leads-he",
    title: "לידים להשתלות שיניים בכל הפה: למה רוב הקמפיינים מבזבזים תקציב",
    excerpt:
      "לידים להשתלות שיניים בכל הפה דורשים מערכת רכישת מטופלים אחרת, כי שווי המקרה גבוה ואיכות ליד נמוכה הופכת יקרה מהר.",
    publishedAt: "2026-06-04T16:06:00.000Z",
    seoImage: "/blog/images/dental-patient-acquisition.png",
    mainImageAlt: "דשבורד איכות לידים להשתלות שיניים בכל הפה",
    serviceLinks: [
      "full-arch-implant-marketing",
      "dental-implant-lead-generation",
      "qualified-opportunity-methodology",
    ],
    body: body([
      [
        "לידים להשתלות שיניים בכל הפה יכולים להיות בעלי ערך גבוה מאוד, אבל הם גם יכולים לשרוף תקציב מהר אם הקמפיין מותאם ללידים זולים בלבד. שווי טיפול גבוה לא מציל קמפיין ממיקוד חלש, עמוד נחיתה לא מתאים או חזרה איטית ללידים.",
      ],
      ["למה לידים לשיקום מלא שונים", "h2"],
      [
        "מטופל שבוחן שיקום פה מלא משווה בין אפשרויות טיפול, מימון, אמינות הרופא, חשש מההליך, זמן החלמה והאם הוא בכלל מתאים. לכן הקמפיין צריך גם להסביר וגם לסנן, לא רק לאסוף פרטי קשר.",
      ],
      [
        "הטעות הנפוצה היא להתייחס לכל ליד אותו דבר. אדם שמתעניין בשתל בודד, אדם שמחפש את הפתרון הזול ביותר ואדם שמוכן לפגישת ייעוץ לשיקום מלא לא צריכים להיספר באותה צורה.",
      ],
      ["ללמד את הקמפיין מהי איכות", "h2"],
      [
        "סינון לידים עוזר למערכת הפרסום ללמוד מהסימנים הנכונים. כשהמרפאה מסמנת אילו פניות הפכו להזדמנויות רציניות, התקציב יכול לזוז לקהלים, מילות מפתח וקריאייטיבים שמייצרים שיחות איכותיות יותר.",
      ],
      ["שאלות נפוצות על לידים לשיקום פה מלא", "h2"],
      [
        "למה לידים כאלה יקרים? הטיפול יקר ותחרותי, ולכן הרבה מרפאות מתחרות על אותם מטופלים רציניים. סינון טוב יותר מגן על התקציב.",
      ],
      [
        "האם כדאי להשתמש בקריאייטיב לפני ואחרי? אפשר, אבל הקריאייטיב צריך להיות אמין, עומד בכללים ומגובה במסר שמייצר אמון. הבטחות מוגזמות פוגעות באמינות.",
      ],
      [
        "מה צריך למדוד אחרי הליד? זמינות, התאמה, פגישות שנקבעו, הגעה לפגישה, קבלת תוכנית טיפול והכנסה מתוכניות שאושרו.",
      ],
    ]),
  },
  {
    _id: "supplemental-dental-implant-cost-keywords",
    slug: "dental-implant-cost-keywords",
    title: "Dental Implant Cost Keywords: How to Use Them Without Attracting Bad Leads",
    excerpt:
      "Dental implant cost keywords can attract serious patients, but clinics need careful messaging so price traffic turns into qualified opportunities instead of bargain shopping.",
    publishedAt: "2026-06-04T16:10:00.000Z",
    seoImage: "/blog/images/google-ads-dentists.png",
    mainImageAlt: "Dental implant cost keyword strategy for qualified patient acquisition",
    serviceLinks: [
      "google-ads-for-dental-implants",
      "roi-methodology",
      "dental-lead-quality-checklist",
    ],
    body: body([
      [
        "Dental implant cost keywords are tempting because patients who search price are often closer to action. They can also be risky because price-focused traffic may include shoppers who are comparing every clinic and choosing purely on cost.",
      ],
      ["Cost intent is not always bad intent", "h2"],
      [
        "A serious implant patient will usually ask about cost because implants are a meaningful financial decision. Avoiding the topic completely can make the clinic feel evasive. The better approach is to answer cost questions with context.",
      ],
      [
        "Explain what affects price: number of teeth, bone condition, extractions, sedation, materials, diagnostics, and whether the treatment is single implant or full-arch. That frames cost around fit and value instead of a race to the bottom.",
      ],
      ["Use cost keywords with filtering", "h2"],
      [
        "Cost keyword landing pages should include financing cues, candidacy questions, and a next step that lets the clinic evaluate fit. If the page only says cheap implants, the campaign may attract the wrong audience.",
      ],
      ["Dental implant cost keywords FAQ", "h2"],
      [
        "Should implant pages show exact prices? Sometimes, but many clinics do better with ranges, financing language, or eligibility reviews because exact prices depend on diagnosis.",
      ],
      [
        "Are cost keywords good for Google Ads? They can be strong when paired with negative keywords, qualification, and conversion tracking beyond form fills.",
      ],
      [
        "How do you avoid bargain shoppers? Use copy that explains value, candidacy, financing, and treatment quality instead of positioning the clinic as the cheapest option.",
      ],
    ]),
  },
  {
    _id: "supplemental-he-dental-implant-cost-keywords",
    slug: "dental-implant-cost-keywords-he",
    title: "מילות מפתח על מחיר שתלים: איך להשתמש בהן בלי למשוך לידים לא מתאימים",
    excerpt:
      "מילות מפתח על מחיר שתלים יכולות למשוך מטופלים רציניים, אבל צריך מסר נכון כדי להפוך חיפוש מחיר להזדמנות איכותית.",
    publishedAt: "2026-06-04T16:11:00.000Z",
    seoImage: "/blog/images/google-ads-dentists.png",
    mainImageAlt: "אסטרטגיית מילות מפתח על מחיר שתלים למשיכת מטופלים איכותיים",
    serviceLinks: [
      "google-ads-for-dental-implants",
      "roi-methodology",
      "dental-lead-quality-checklist",
    ],
    body: body([
      [
        "מילות מפתח על מחיר שתלים מפתות כי מי שמחפש מחיר לעיתים קרובות קרוב יותר לפעולה. מצד שני, הן גם מסוכנות כי חלק מהתנועה מחפש רק את ההצעה הכי זולה.",
      ],
      ["כוונת מחיר היא לא בהכרח כוונה רעה", "h2"],
      [
        "מטופל רציני כמעט תמיד ישאל על מחיר, כי שתלים הם החלטה כלכלית משמעותית. התעלמות מוחלטת מהנושא יכולה לגרום למרפאה להיראות לא שקופה. הדרך הנכונה היא לענות עם הקשר.",
      ],
      [
        "כדאי להסביר מה משפיע על המחיר: מספר שיניים, מצב עצם, עקירות, סדציה, חומרים, הדמיה והאם מדובר בשתל בודד או שיקום מלא. כך המחיר מוצג כחלק מהתאמה וערך, לא כמירוץ למחיר הכי נמוך.",
      ],
      ["להשתמש במילות מחיר עם סינון", "h2"],
      [
        "עמודי נחיתה למילות מחיר צריכים לכלול מסר על מימון, שאלות התאמה וצעד הבא שמאפשר למרפאה לבדוק התאמה. אם העמוד מדבר רק על שתלים זולים, הקמפיין ילמד למשוך קהל פחות מתאים.",
      ],
      ["שאלות נפוצות על מילות מחיר לשתלים", "h2"],
      [
        "האם כדאי להציג מחיר מדויק? לפעמים, אבל הרבה מרפאות עובדות טוב יותר עם טווחים, מימון או בדיקת התאמה כי המחיר תלוי באבחון.",
      ],
      [
        "האם מילות מחיר טובות לגוגל אדס? כן, אם משלבים מילות שלילה, סינון ומדידה מעבר למילוי טופס.",
      ],
      [
        "איך נמנעים מציידי מחיר? משתמשים במסר שמסביר ערך, התאמה, מימון ואיכות טיפול במקום למצב את המרפאה כהכי זולה.",
      ],
    ]),
  },
  {
    _id: "supplemental-best-dental-implant-dentist-near-me",
    slug: "best-dental-implant-dentist-near-me",
    title: "Best Dental Implant Dentist Near Me: How Clinics Can Rank and Convert",
    excerpt:
      "Patients searching for the best dental implant dentist near me need local proof, clear treatment pages, reviews, and fast conversion paths.",
    publishedAt: "2026-06-04T16:15:00.000Z",
    seoImage: "/blog/images/lead-sources.png",
    mainImageAlt: "Local SEO path for best dental implant dentist near me searches",
    serviceLinks: [
      "dental-implant-marketing",
      "dental-implant-seo",
      "google-business-profile-for-dentists",
    ],
    body: body([
      [
        "Best dental implant dentist near me is a powerful search because the patient is not just browsing. They are comparing local options and trying to decide who feels credible enough for a high-value treatment.",
      ],
      ["Local proof matters more than generic SEO copy", "h2"],
      [
        "A clinic trying to win this search needs strong local signals: reviews, Google Business Profile quality, treatment-specific pages, doctor credibility, photos, and a clear explanation of the consultation process. Generic service copy rarely earns trust.",
      ],
      [
        "The page should answer why the clinic is qualified for implant cases, what types of cases it handles, how patients are evaluated, and what happens next. Patients need confidence before they submit information.",
      ],
      ["Turn local traffic into filtered opportunities", "h2"],
      [
        "Ranking is only half the job. The page also needs a simple conversion path that filters for treatment interest, location, urgency, and fit. Otherwise local SEO can produce traffic without patient acquisition.",
      ],
      ["Best dental implant dentist near me FAQ", "h2"],
      [
        "What helps a clinic rank for implant dentist near me? Strong service pages, local relevance, reviews, Google Business Profile quality, and consistent location signals all matter.",
      ],
      [
        "Should every location have its own implant page? Multi-location clinics usually need location-specific pages, but each page should have real local content rather than duplicated filler.",
      ],
      [
        "Do reviews affect conversion? Yes. Implant patients often read reviews before contacting a clinic, especially for full-arch and high-ticket treatment.",
      ],
    ]),
  },
  {
    _id: "supplemental-he-best-dental-implant-dentist-near-me",
    slug: "best-dental-implant-dentist-near-me-he",
    title: "רופא שתלים מומלץ קרוב אליי: איך מרפאות יכולות לדרג ולהמיר",
    excerpt:
      "מטופלים שמחפשים רופא שתלים מומלץ קרוב אליי צריכים הוכחה מקומית, עמודי טיפול ברורים, ביקורות ומסלול פנייה מהיר.",
    publishedAt: "2026-06-04T16:16:00.000Z",
    seoImage: "/blog/images/lead-sources.png",
    mainImageAlt: "מסלול SEO מקומי לחיפושי רופא שתלים מומלץ",
    serviceLinks: [
      "dental-implant-marketing",
      "dental-implant-seo",
      "google-business-profile-for-dentists",
    ],
    body: body([
      [
        "החיפוש רופא שתלים מומלץ קרוב אליי חזק כי המטופל לא רק גולש. הוא משווה אפשרויות מקומיות ומנסה להבין על מי אפשר לסמוך בטיפול יקר ומשמעותי.",
      ],
      ["הוכחה מקומית חשובה יותר מטקסט כללי", "h2"],
      [
        "מרפאה שרוצה לזכות בחיפוש כזה צריכה סימנים מקומיים חזקים: ביקורות, פרופיל גוגל איכותי, עמודי טיפול ממוקדים, אמינות של הרופא, תמונות והסבר ברור על תהליך הייעוץ. טקסט כללי על שירותים לא מספיק.",
      ],
      [
        "העמוד צריך להסביר למה המרפאה מתאימה למקרי שתלים, אילו מקרים היא מטפלת, איך בודקים התאמה ומה קורה בשלב הבא. מטופלים צריכים ביטחון לפני שהם משאירים פרטים.",
      ],
      ["להפוך תנועה מקומית להזדמנויות מסוננות", "h2"],
      [
        "דירוג הוא רק חצי מהעבודה. העמוד צריך גם מסלול המרה פשוט שמסנן עניין טיפולי, מיקום, דחיפות והתאמה. אחרת SEO מקומי יכול להביא תנועה בלי רכישת מטופלים.",
      ],
      ["שאלות נפוצות על חיפושי רופא שתלים מקומי", "h2"],
      [
        "מה עוזר לדרג בחיפושי שתלים מקומיים? עמודי שירות חזקים, רלוונטיות מקומית, ביקורות, פרופיל גוגל איכותי וסימני מיקום עקביים.",
      ],
      [
        "האם לכל סניף צריך עמוד שתלים משלו? במרפאות עם כמה סניפים בדרך כלל כן, אבל כל עמוד צריך תוכן מקומי אמיתי ולא שכפול טקסט.",
      ],
      [
        "האם ביקורות משפיעות על המרה? כן. מטופלי שתלים קוראים ביקורות לפני פנייה, במיוחד בטיפולים יקרים כמו שיקום מלא.",
      ],
    ]),
  },
  {
    _id: "supplemental-porcelain-veneers-marketing",
    slug: "porcelain-veneers-marketing",
    title: "Porcelain Veneers Marketing: How to Attract Serious Cosmetic Patients",
    excerpt:
      "Porcelain veneers marketing should attract serious smile makeover patients with premium positioning, believable proof, and qualification around treatment fit.",
    publishedAt: "2026-06-04T16:20:00.000Z",
    seoImage: "/blog/images/cosmetic-dentistry-growth.png",
    mainImageAlt: "Porcelain veneers marketing strategy for serious cosmetic dentistry patients",
    serviceLinks: [
      "veneers-marketing",
      "cosmetic-dentistry-marketing",
      "cosmetic-dentist-marketing-agency",
    ],
    body: body([
      [
        "Porcelain veneers marketing works when it respects the psychology of cosmetic dentistry. Veneer patients are buying confidence, appearance, trust, and a result they will see every day. That is different from a routine dental offer.",
      ],
      ["Position veneers as a premium decision", "h2"],
      [
        "A strong veneers campaign should not sound like a clearance sale. It should show tasteful transformation, explain candidacy, address natural-looking results, and reduce fear around permanence or regret.",
      ],
      [
        "The best content answers questions about shape, shade, smile design, durability, timeline, and whether veneers are the right choice compared with whitening, bonding, or orthodontics.",
      ],
      ["Use filtering to protect the clinic brand", "h2"],
      [
        "Cosmetic campaigns can attract lots of casual interest. Filtering helps identify who is serious, who understands the investment, and who is looking for the kind of result the clinic actually provides.",
      ],
      ["Porcelain veneers marketing FAQ", "h2"],
      [
        "Should veneer ads show before-and-after images? They can help, but they must be authentic, compliant, and supported by context so the result feels believable.",
      ],
      [
        "What keywords matter for veneers? Porcelain veneers, veneers cost, cosmetic dentist, smile makeover, and veneers near me can all matter depending on the market.",
      ],
      [
        "How do you avoid low-quality cosmetic leads? Use premium positioning, clear candidacy language, financing context, and lead filtering instead of cheap discount hooks.",
      ],
    ]),
  },
  {
    _id: "supplemental-he-porcelain-veneers-marketing",
    slug: "porcelain-veneers-marketing-he",
    title: "שיווק ציפויי חרסינה: איך למשוך מטופלים קוסמטיים רציניים",
    excerpt:
      "שיווק ציפויי חרסינה צריך למשוך מטופלים רציניים בעזרת מיצוב פרימיום, הוכחה אמינה וסינון התאמה לטיפול.",
    publishedAt: "2026-06-04T16:21:00.000Z",
    seoImage: "/blog/images/cosmetic-dentistry-growth.png",
    mainImageAlt: "אסטרטגיית שיווק ציפויי חרסינה למטופלים קוסמטיים רציניים",
    serviceLinks: [
      "veneers-marketing",
      "cosmetic-dentistry-marketing",
      "cosmetic-dentist-marketing-agency",
    ],
    body: body([
      [
        "שיווק ציפויי חרסינה עובד כשהוא מבין את הפסיכולוגיה של רפואת שיניים אסתטית. המטופל קונה ביטחון, מראה, אמון ותוצאה שהוא יראה כל יום. זה לא מסר של טיפול שגרתי.",
      ],
      ["למקם ציפויים כהחלטת פרימיום", "h2"],
      [
        "קמפיין חזק לציפויים לא צריך להישמע כמו מבצע חיסול. הוא צריך להראות שינוי בטעם טוב, להסביר התאמה, לענות על חשש מתוצאה לא טבעית ולהוריד פחד מהחלטה קבועה.",
      ],
      [
        "התוכן הטוב ביותר עונה על שאלות לגבי צורה, גוון, עיצוב חיוך, עמידות, זמן טיפול והאם ציפויים הם הבחירה הנכונה לעומת הלבנה, בונדינג או יישור שיניים.",
      ],
      ["להשתמש בסינון כדי להגן על המותג", "h2"],
      [
        "קמפיינים קוסמטיים יכולים למשוך הרבה סקרנות לא רצינית. סינון עוזר להבין מי באמת בשל, מי מבין את ההשקעה ומי מחפש את סוג התוצאה שהמרפאה יודעת לספק.",
      ],
      ["שאלות נפוצות על שיווק ציפויי חרסינה", "h2"],
      [
        "האם כדאי להציג תמונות לפני ואחרי? כן, אם הן אותנטיות, עומדות בכללים ומוצגות עם הקשר כך שהתוצאה מרגישה אמינה.",
      ],
      [
        "אילו מילות מפתח חשובות? ציפויי חרסינה, מחיר ציפויים, רופא שיניים אסתטי, עיצוב חיוך וציפויים קרוב אליי יכולים להיות רלוונטיים לפי השוק.",
      ],
      [
        "איך נמנעים מלידים לא איכותיים? משתמשים במיצוב פרימיום, שפה ברורה על התאמה, הקשר על מימון וסינון לידים במקום מבצעי מחיר זולים.",
      ],
    ]),
  },
  {
    _id: "supplemental-smile-makeover-marketing",
    slug: "smile-makeover-marketing",
    title: "Smile Makeover Marketing: From Social Interest to Qualified Consultation",
    excerpt:
      "Smile makeover marketing needs emotional creative, clear treatment education, and lead filtering so cosmetic interest becomes qualified patient opportunities.",
    publishedAt: "2026-06-04T16:25:00.000Z",
    seoImage: "/blog/images/website-conversion.png",
    mainImageAlt: "Smile makeover marketing funnel from social ad interest to qualified consultation",
    serviceLinks: [
      "cosmetic-dentistry-marketing",
      "veneers-marketing",
      "dental-lead-filtering",
    ],
    body: body([
      [
        "Smile makeover marketing begins with emotion, but it cannot end there. Many people want a better smile. Fewer are ready, qualified, and financially aligned for cosmetic treatment. The campaign has to move from desire to fit.",
      ],
      ["Social creative should create recognition", "h2"],
      [
        "Strong smile makeover ads speak to confidence, photos, weddings, dating, professional appearance, or years of hiding a smile. The creative should feel real and specific rather than generic beauty advertising.",
      ],
      [
        "The landing page then needs to shift from emotion to clarity: what treatments may be involved, who is a candidate, what affects cost, and how the clinic evaluates the smile before recommending a plan.",
      ],
      ["Qualification makes cosmetic campaigns scalable", "h2"],
      [
        "Without filtering, smile makeover campaigns often produce broad curiosity. With filtering, the clinic can separate people who want whitening from people considering veneers, bonding, orthodontics, or a larger cosmetic plan.",
      ],
      ["Smile makeover marketing FAQ", "h2"],
      [
        "Is smile makeover marketing better on Meta or Google? Meta is strong for creating demand and emotion. Google is strong when patients are already searching for cosmetic options. Many clinics need both.",
      ],
      [
        "Should the campaign promote one treatment or a makeover? Use smile makeover language when the patient problem is broad, but filter the inquiry so the clinic can understand which treatment fits.",
      ],
      [
        "How do you improve lead quality? Align creative, landing page, and qualification questions around treatment fit, budget reality, timeline, and desired outcome.",
      ],
    ]),
  },
  {
    _id: "supplemental-he-smile-makeover-marketing",
    slug: "smile-makeover-marketing-he",
    title: "שיווק עיצוב חיוך: מסקרנות ברשת להזדמנות ייעוץ איכותית",
    excerpt:
      "שיווק עיצוב חיוך צריך קריאייטיב רגשי, הסבר טיפולי ברור וסינון לידים כדי להפוך עניין קוסמטי להזדמנויות איכותיות.",
    publishedAt: "2026-06-04T16:26:00.000Z",
    seoImage: "/blog/images/website-conversion.png",
    mainImageAlt: "משפך שיווק עיצוב חיוך מסקרנות ברשת להזדמנות איכותית",
    serviceLinks: [
      "cosmetic-dentistry-marketing",
      "veneers-marketing",
      "dental-lead-filtering",
    ],
    body: body([
      [
        "שיווק עיצוב חיוך מתחיל ברגש, אבל לא יכול להסתיים שם. הרבה אנשים רוצים חיוך יפה יותר. פחות אנשים באמת מוכנים, מתאימים ומיושרים כלכלית לטיפול אסתטי. הקמפיין צריך להעביר אותם מרצון להתאמה.",
      ],
      ["קריאייטיב ברשת צריך ליצור הזדהות", "h2"],
      [
        "מודעות חזקות לעיצוב חיוך מדברות על ביטחון, תמונות, חתונה, דייטים, מראה מקצועי או שנים של הסתרת חיוך. הקריאייטיב צריך להרגיש אמיתי וספציפי, לא פרסומת יופי כללית.",
      ],
      [
        "עמוד הנחיתה צריך להעביר את האדם מרגש לבהירות: אילו טיפולים יכולים להיות רלוונטיים, מי מתאים, מה משפיע על המחיר ואיך המרפאה בודקת את החיוך לפני המלצה.",
      ],
      ["סינון הופך קמפיינים קוסמטיים לניתנים להגדלה", "h2"],
      [
        "בלי סינון, קמפיינים לעיצוב חיוך מייצרים הרבה סקרנות כללית. עם סינון, המרפאה יכולה להבדיל בין מי שרוצה הלבנה לבין מי ששוקל ציפויים, בונדינג, יישור או תוכנית אסתטית רחבה.",
      ],
      ["שאלות נפוצות על שיווק עיצוב חיוך", "h2"],
      [
        "האם עדיף מטא או גוגל? מטא חזקה ביצירת ביקוש ורגש. גוגל חזקה כשאנשים כבר מחפשים אפשרויות אסתטיות. הרבה מרפאות צריכות את שתיהן.",
      ],
      [
        "האם לקדם טיפול אחד או עיצוב חיוך? כדאי להשתמש בשפת עיצוב חיוך כשהבעיה רחבה, אבל לסנן את הפנייה כדי להבין איזה טיפול באמת מתאים.",
      ],
      [
        "איך משפרים איכות לידים? מחברים קריאייטיב, עמוד נחיתה ושאלות סינון סביב התאמה טיפולית, יכולת כלכלית, זמן ותוצאה רצויה.",
      ],
    ]),
  },
];

export const supplementalBlogSlugs = supplementalBlogPosts.map((post) => post.slug);
