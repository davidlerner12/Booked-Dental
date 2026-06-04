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
    ]),
  },
];

export const supplementalBlogSlugs = supplementalBlogPosts.map((post) => post.slug);
