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
  faqs?: Array<{ question: string; answer: string }>;
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

const enExpansionPages: ServicePageContent[] = [
  {
    slug: "dental-lead-quality-checklist",
    title: "Dental Lead Quality Checklist",
    metaTitle: "Dental Lead Quality Checklist for Implant and Cosmetic Clinics | Booked.Dental",
    description:
      "A practical dental lead quality checklist for clinic owners who want to separate real patient opportunities from low-quality form fills.",
    eyebrow: "Downloadable-style checklist",
    h1: "Dental lead quality checklist for clinics that want real patients.",
    intro:
      "Use this checklist to review whether a dental lead is worth focused follow-up, whether the campaign is teaching the AI the right signal, and whether your team is measuring patient opportunities instead of raw form volume.",
    sections: [
      {
        title: "1. Treatment intent",
        body:
          "Does the person mention implants, All-on-4, veneers, smile makeover, or another high-value service? A generic inquiry can still become useful, but treatment-specific intent should be scored higher.",
      },
      {
        title: "2. Reachability",
        body:
          "Does the lead include a working phone number or email, and did the person respond to the first follow-up attempt? A serious opportunity needs a reachable patient path.",
      },
      {
        title: "3. Timing and readiness",
        body:
          "Is the person actively considering treatment soon, comparing options, or asking about candidacy? Timing helps the team decide how much effort the lead deserves.",
      },
      {
        title: "4. Fit and market",
        body:
          "Is the person in the right local market and likely to fit the clinic's treatment focus? Market fit keeps the campaign from optimizing toward irrelevant traffic.",
      },
      {
        title: "5. Feedback to the campaign",
        body:
          "Was the lead approved, rejected, unreachable, or converted into a qualified opportunity? That outcome should feed the next round of campaign decisions.",
      },
    ],
    bullets: [
      "Score treatment intent before lead volume",
      "Track reachable vs unreachable submissions",
      "Separate raw leads from qualified opportunities",
      "Use approved and rejected leads as AI feedback",
    ],
    relatedPosts: [
      "dental-lead-filtering-for-dentists",
      "dental-marketing-roi",
      "why-dental-ads-fail",
    ],
    faqs: [
      {
        question: "What makes a dental lead high quality?",
        answer:
          "A high-quality dental lead shows relevant treatment interest, local market fit, reachability, and enough readiness to justify focused follow-up from the clinic.",
      },
      {
        question: "Should every dental lead be treated the same?",
        answer:
          "No. Raw form fills should be separated from qualified opportunities so the team can prioritize serious prospects and the campaign can learn from better quality signals.",
      },
      {
        question: "How does a checklist improve SEO and conversion?",
        answer:
          "A checklist creates a useful resource for clinic owners, supports internal links from articles and service pages, and gives prospects a clearer way to understand your lead-quality standard.",
      },
    ],
  },
  {
    slug: "dental-implant-lead-generation",
    title: "Dental Implant Lead Generation",
    metaTitle: "Dental Implant Lead Generation That Filters Quality | Booked.Dental",
    description:
      "Dental implant lead generation for clinics that want serious full-arch and implant patient opportunities instead of raw form volume.",
    eyebrow: "Implant lead quality",
    h1: "Dental implant lead generation that filters for real treatment intent.",
    intro:
      "Implant leads only matter when they become serious patient opportunities. Booked.Dental builds implant lead generation around creative, landing pages, filtering, and feedback that helps campaigns find future patients instead of cheap activity.",
    sections: [
      {
        title: "Why implant lead generation fails",
        body:
          "Many campaigns optimize for the easiest form fill. That can create low-cost leads that are unreachable, unqualified, or not ready for treatment. Implant clinics need a signal that separates curiosity from real intent.",
      },
      {
        title: "How filtering improves the next lead",
        body:
          "When approved and rejected leads are tracked, the system learns which people look like high-value opportunities. That feedback helps budget move toward prospects with stronger treatment fit.",
      },
    ],
    bullets: [
      "Implant and full-arch lead generation campaigns",
      "Qualification around treatment interest, urgency, and fit",
      "Creative that explains value before the form",
      "Reporting around filtered opportunities and average ROI",
    ],
    relatedPosts: [
      "dental-implant-lead-generation-that-pays",
      "how-to-get-more-dental-implant-patients",
      "why-dental-ads-fail",
    ],
  },
  {
    slug: "all-on-4-lead-generation",
    title: "All-on-4 Lead Generation",
    metaTitle: "All-on-4 Lead Generation for Full-Arch Clinics | Booked.Dental",
    description:
      "All-on-4 lead generation built to attract and filter serious full-arch implant prospects before they reach your team.",
    eyebrow: "Full-arch patient opportunities",
    h1: "All-on-4 lead generation that protects your team's time.",
    intro:
      "All-on-4 prospects are high value, but not every inquiry is ready or financially realistic. Booked.Dental helps clinics filter the funnel so teams can focus on people with clearer full-arch treatment intent.",
    sections: [
      {
        title: "The problem with broad implant leads",
        body:
          "Broad implant campaigns often attract people who want general information but are not ready for a full-arch conversation. All-on-4 campaigns need better targeting, clearer creative, and stronger qualification.",
      },
      {
        title: "A better learning loop",
        body:
          "The strongest campaigns use post-lead quality signals. When the AI learns which prospects are serious, it can stop chasing the easiest forms and start finding better future opportunities.",
      },
    ],
    bullets: [
      "All-on-4 and All-on-6 campaign structure",
      "Lead filters for full-arch intent and market fit",
      "UGC-style creative for fear, trust, and timing",
      "Follow-up context for higher-quality intake",
    ],
    relatedPosts: [
      "how-to-get-more-dental-implant-patients",
      "best-implant-ad-creatives",
      "dental-lead-filtering-for-dentists",
    ],
  },
  {
    slug: "google-ads-for-dental-implants",
    title: "Google Ads for Dental Implants",
    metaTitle: "Google Ads for Dental Implants That Find High-Intent Patients | Booked.Dental",
    description:
      "Google Ads for dental implants structured around high-intent searches, lead filtering, and patient opportunity quality.",
    eyebrow: "Search intent for implants",
    h1: "Google Ads for dental implants should optimize beyond the click.",
    intro:
      "Search ads can capture people already looking for implants, All-on-4, or full-arch treatment. The advantage comes from pairing that intent with landing pages and filtering that show which searches become real opportunities.",
    sections: [
      {
        title: "Search intent is valuable, not automatic",
        body:
          "A high-intent keyword can still produce poor-fit inquiries if the page, offer, and qualification are weak. Google Ads needs conversion quality feedback, not just keyword reports.",
      },
      {
        title: "What gets measured gets improved",
        body:
          "Booked.Dental tracks which inquiries are serious enough to matter. That gives the campaign a clearer path to optimize toward patients instead of search traffic.",
      },
    ],
    bullets: [
      "Implant and All-on-4 search campaign structure",
      "Landing pages aligned with treatment intent",
      "Lead filtering after the click",
      "Keyword decisions tied to opportunity quality",
    ],
    relatedPosts: [
      "google-ads-for-dental-implants",
      "google-ads-vs-facebook-ads-dentists",
      "dental-implant-lead-generation-that-pays",
    ],
  },
  {
    slug: "facebook-ads-for-dentists",
    title: "Facebook Ads for Dentists",
    metaTitle: "Facebook Ads for Dentists That Filter Better Patients | Booked.Dental",
    description:
      "Facebook and Instagram ads for dentists built around UGC creative, lead filtering, and real implant or cosmetic patient intent.",
    eyebrow: "Meta ads for dental clinics",
    h1: "Facebook ads for dentists work best when creative and filtering teach the AI.",
    intro:
      "Meta ads can create demand before a patient searches. For implant and cosmetic dentistry, the key is using creative that earns attention and filters that teach the system which attention turns into qualified opportunities.",
    sections: [
      {
        title: "Creative creates the first signal",
        body:
          "Patients respond to stories, fears, outcomes, and clarity. Strong UGC-style creative can move someone from passive interest to a serious inquiry.",
      },
      {
        title: "Filtering turns attention into learning",
        body:
          "Without lead filtering, Meta may optimize for people who fill forms easily. With filtering, the campaign can learn which prospects look more like future patients.",
      },
    ],
    bullets: [
      "Facebook and Instagram campaigns for dental practices",
      "UGC creative for implants, veneers, and smile makeovers",
      "Lead filters that improve campaign learning",
      "Reporting around opportunities rather than engagement",
    ],
    relatedPosts: [
      "meta-ads-for-cosmetic-dentists",
      "ugc-dental-ads-examples",
      "google-ads-vs-facebook-ads-dentists",
    ],
  },
  {
    slug: "cosmetic-dentist-marketing-agency",
    title: "Cosmetic Dentist Marketing Agency",
    metaTitle: "Cosmetic Dentist Marketing Agency Alternative | Booked.Dental",
    description:
      "A focused alternative to a general cosmetic dentist marketing agency, built around veneers, smile makeovers, filtering, and patient opportunity quality.",
    eyebrow: "Cosmetic clinic growth",
    h1: "A cosmetic dentist marketing system built for patient quality.",
    intro:
      "Cosmetic clinics do not need generic traffic. They need prospects who care about veneers, smile makeovers, and premium outcomes enough to take the next step.",
    sections: [
      {
        title: "Cosmetic campaigns need sharper positioning",
        body:
          "The right message depends on trust, believable transformation, financing cues, and a simple path to action. Generic dental ads rarely create that level of intent.",
      },
      {
        title: "Filtering keeps the calendar cleaner",
        body:
          "A premium clinic should not spend the same energy on every form fill. Filtering helps identify people with stronger treatment interest and better fit.",
      },
    ],
    bullets: [
      "Veneer and smile makeover campaign strategy",
      "UGC-style creative for cosmetic patient psychology",
      "Lead filtering for readiness and fit",
      "Internal links between service pages, blog posts, and proof pages",
    ],
    relatedPosts: [
      "cosmetic-dentists-high-intent-patients",
      "cosmetic-dentistry-patient-acquisition-fast",
      "meta-ads-for-cosmetic-dentists",
    ],
  },
  {
    slug: "full-arch-implant-marketing",
    title: "Full-Arch Implant Marketing",
    metaTitle: "Full-Arch Implant Marketing for Qualified Patients | Booked.Dental",
    description:
      "Full-arch implant marketing for clinics that need serious All-on-4, All-on-6, and smile restoration patient opportunities.",
    eyebrow: "Full-arch demand",
    h1: "Full-arch implant marketing built around patient readiness.",
    intro:
      "Full-arch patients often delay because of fear, cost, embarrassment, or uncertainty. Booked.Dental uses creative, filtering, and tracking to help clinics identify who is ready enough to matter.",
    sections: [
      {
        title: "The treatment is high value, so the funnel must be specific",
        body:
          "A generic dental campaign cannot explain full-arch treatment clearly enough. The funnel has to speak to the patient's real objections and qualify intent before intake.",
      },
      {
        title: "Better signals improve future traffic",
        body:
          "The system uses lead quality feedback to help the ad platforms find more people who resemble serious full-arch prospects.",
      },
    ],
    bullets: [
      "Full-arch implant campaign strategy",
      "All-on-4 and All-on-6 creative concepts",
      "Filtering for treatment readiness and financing fit",
      "Average ROI and opportunity-focused reporting",
    ],
    relatedPosts: [
      "how-to-get-more-dental-implant-patients",
      "best-implant-ad-creatives",
      "dental-implant-lead-generation-that-pays",
    ],
  },
  {
    slug: "roi-methodology",
    title: "ROI Methodology",
    metaTitle: "Dental Marketing ROI Methodology | Booked.Dental",
    description:
      "How Booked.Dental thinks about average ROI, qualified opportunities, lead quality, and the difference between ad activity and patient acquisition.",
    eyebrow: "Proof and measurement",
    h1: "How we measure average ROI without chasing vanity metrics.",
    intro:
      "ROI only matters when the inputs are honest. Booked.Dental looks beyond clicks and raw forms to understand whether campaigns are producing filtered patient opportunities that can become treatment revenue.",
    sections: [
      {
        title: "What counts",
        body:
          "Useful measurement starts with opportunity quality: treatment interest, readiness, reachability, market fit, and whether the inquiry can realistically become a patient.",
      },
      {
        title: "What does not count by itself",
        body:
          "Clicks, impressions, cheap leads, and form volume can help diagnose a campaign, but they are not the outcome. They only matter when they connect to qualified opportunities and accepted treatment.",
      },
    ],
    bullets: [
      "Average ROI framed around real patient outcomes",
      "Filtered opportunity tracking",
      "Campaign feedback from approved and rejected leads",
      "A cleaner way to compare channels and creative",
    ],
    relatedPosts: [
      "why-dental-ads-fail",
      "best-dental-lead-sources",
      "dental-lead-filtering-for-dentists",
    ],
  },
  {
    slug: "qualified-opportunity-methodology",
    title: "Qualified Opportunity Methodology",
    metaTitle: "What Counts as a Qualified Dental Opportunity | Booked.Dental",
    description:
      "A practical definition of qualified dental opportunities for implant and cosmetic clinics that want cleaner reporting and better campaign learning.",
    eyebrow: "Lead quality standards",
    h1: "What counts as a qualified dental opportunity.",
    intro:
      "A lead is not automatically a patient opportunity. Booked.Dental separates raw form fills from prospects who show signs of treatment intent, fit, and follow-up value.",
    sections: [
      {
        title: "A better definition of quality",
        body:
          "A qualified opportunity should show relevant treatment interest, a reachable contact path, local market fit, and enough readiness for the clinic to justify focused follow-up.",
      },
      {
        title: "Why the definition matters",
        body:
          "When every form is treated equally, the AI learns the wrong thing. When qualified opportunities are tracked separately, campaigns get a cleaner signal.",
      },
    ],
    bullets: [
      "Treatment interest and readiness criteria",
      "Market-fit review",
      "Approved and rejected lead feedback",
      "A shared language between marketing and intake",
    ],
    relatedPosts: [
      "dental-lead-filtering-for-dentists",
      "why-dental-ads-fail",
      "dentist-patient-growth",
    ],
  },
  {
    slug: "booked-dental-vs-dental-marketing-agency",
    title: "Booked.Dental vs Dental Marketing Agency",
    metaTitle: "Booked.Dental vs a Dental Marketing Agency | Booked.Dental",
    description:
      "Compare Booked.Dental with a general dental marketing agency by lead filtering, creative, AI learning, patient quality, and opportunity-focused reporting.",
    eyebrow: "Comparison",
    h1: "Booked.Dental vs a general dental marketing agency.",
    intro:
      "A general dental marketing agency may manage campaigns, but Booked.Dental is built specifically around implant and cosmetic patient acquisition, lead filtering, and teaching campaigns to find customers instead of clicks.",
    sections: [
      {
        title: "The difference is the optimization target",
        body:
          "Many agencies report on traffic, cost per lead, and campaign activity. Booked.Dental is built around filtered opportunities, average ROI, and whether the system is learning from real patient quality.",
      },
      {
        title: "Specialization changes the funnel",
        body:
          "Implants, All-on-4, veneers, and smile makeovers need different messaging than general dentistry. The creative, page, filters, and reporting all need to match high-value treatment intent.",
      },
    ],
    bullets: [
      "Implant and cosmetic focus",
      "Lead filtering built into the campaign feedback loop",
      "UGC-style creative for treatment psychology",
      "Market availability before broad onboarding",
    ],
    relatedPosts: [
      "dentist-growth-agency",
      "in-house-vs-agency-marketing-for-dentists",
      "why-dental-ads-fail",
    ],
  },
  {
    slug: "dental-lead-generation-vs-patient-acquisition",
    title: "Dental Lead Generation vs Patient Acquisition",
    metaTitle: "Dental Lead Generation vs Patient Acquisition | Booked.Dental",
    description:
      "Why dental lead generation and dental patient acquisition are not the same, especially for implant and cosmetic clinics.",
    eyebrow: "Strategy comparison",
    h1: "Dental lead generation is not the same as patient acquisition.",
    intro:
      "Lead generation creates inquiries. Patient acquisition asks whether those inquiries are serious enough to become real treatment opportunities. For high-value dentistry, that difference matters.",
    sections: [
      {
        title: "Lead generation stops too early",
        body:
          "A form fill can look successful in a report while creating no value for the clinic. Patient acquisition follows the lead into qualification, follow-up, and treatment opportunity quality.",
      },
      {
        title: "The AI needs the deeper outcome",
        body:
          "If the platform only sees forms, it may optimize for easy forms. If it learns which leads become qualified opportunities, the campaign has a better chance of finding future customers.",
      },
    ],
    bullets: [
      "Clear distinction between raw leads and qualified opportunities",
      "Filtering that improves campaign learning",
      "Better reporting for clinic owners",
      "A stronger foundation for average ROI",
    ],
    relatedPosts: [
      "best-dental-lead-sources",
      "dental-lead-filtering-for-dentists",
      "why-dental-ads-fail",
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

const heExpansionPages: ServicePageContent[] = [
  {
    slug: "dental-lead-quality-checklist",
    title: "צ׳קליסט איכות לידים דנטליים",
    metaTitle: "צ׳קליסט איכות לידים דנטליים למרפאות שתלים ואסתטיקה | Booked.Dental",
    description:
      "צ׳קליסט מעשי לאיכות לידים דנטליים שעוזר לבעלי מרפאות להפריד בין הזדמנויות מטופלים אמיתיות לבין טפסים באיכות נמוכה.",
    eyebrow: "צ׳קליסט שימושי",
    h1: "צ׳קליסט איכות לידים דנטליים למרפאות שרוצות מטופלים אמיתיים.",
    intro:
      "השתמשו בצ׳קליסט כדי לבדוק אם ליד דנטלי שווה המשך ממוקד, אם הקמפיין מלמד את ה-AI את האות הנכון ואם הצוות מודד הזדמנויות מטופלים במקום נפח טפסים גולמי.",
    sections: [
      {
        title: "1. כוונת טיפול",
        body:
          "האם האדם מזכיר שתלים, All-on-4, ציפויים, שיקום חיוך או טיפול בעל ערך גבוה אחר? פנייה כללית יכולה עדיין להיות שימושית, אבל כוונה טיפולית ספציפית צריכה לקבל עדיפות.",
      },
      {
        title: "2. זמינות ליצירת קשר",
        body:
          "האם הליד כולל טלפון או אימייל תקינים, והאם האדם הגיב לניסיון ההמשך הראשון? הזדמנות רצינית צריכה דרך קשר זמינה.",
      },
      {
        title: "3. תזמון ומוכנות",
        body:
          "האם האדם שוקל טיפול בקרוב, משווה אפשרויות או שואל על התאמה? תזמון עוזר לצוות להחליט כמה מאמץ להשקיע בליד.",
      },
      {
        title: "4. התאמת אזור ומרפאה",
        body:
          "האם האדם נמצא באזור הנכון ומתאים למיקוד הטיפולי של המרפאה? התאמת שוק מונעת מהקמפיין להתמקד בתנועה לא רלוונטית.",
      },
      {
        title: "5. פידבק לקמפיין",
        body:
          "האם הליד אושר, נדחה, לא היה זמין או הפך להזדמנות מתאימה? התוצאה הזו צריכה להשפיע על החלטות הקמפיין הבאות.",
      },
    ],
    bullets: [
      "דרגו כוונת טיפול לפני נפח לידים",
      "מדדו פניות זמינות מול פניות לא זמינות",
      "הפרידו בין לידים גולמיים להזדמנויות מתאימות",
      "השתמשו בלידים שאושרו או נדחו כפידבק ל-AI",
    ],
    relatedPosts: [
      "dental-lead-filtering-for-dentists",
      "dental-marketing-roi",
      "why-dental-ads-fail",
    ],
    faqs: [
      {
        question: "מה הופך ליד דנטלי לאיכותי?",
        answer:
          "ליד איכותי מציג עניין טיפולי רלוונטי, התאמה לאזור, זמינות ליצירת קשר ומספיק מוכנות כדי להצדיק המשך ממוקד מצד המרפאה.",
      },
      {
        question: "האם צריך להתייחס לכל ליד באותה צורה?",
        answer:
          "לא. חשוב להפריד בין טפסים גולמיים להזדמנויות מתאימות כדי שהצוות יתעדף מתעניינים רציניים והקמפיין ילמד מאותות איכות טובים יותר.",
      },
      {
        question: "איך צ׳קליסט כזה עוזר ל-SEO ולהמרה?",
        answer:
          "צ׳קליסט יוצר נכס שימושי לבעלי מרפאות, מחזק קישורים פנימיים ממאמרים ועמודי שירות, ומבהיר ללקוחות פוטנציאליים את סטנדרט איכות הלידים שלכם.",
      },
    ],
  },
  {
    slug: "dental-implant-lead-generation",
    title: "גיוס לידים לשתלים דנטליים",
    metaTitle: "גיוס לידים לשתלים דנטליים שמסנן איכות | Booked.Dental",
    description:
      "גיוס לידים לשתלים למרפאות שרוצות הזדמנויות רציניות לשיקום מלא ושתלים, במקום נפח טפסים גולמי.",
    eyebrow: "איכות לידים לשתלים",
    h1: "גיוס לידים לשתלים דנטליים שמסנן כוונת טיפול אמיתית.",
    intro:
      "לידים לשתלים חשובים רק כשהם הופכים להזדמנויות מטופלים רציניות. Booked.Dental בונה את הגיוס סביב קריאייטיב, דפי נחיתה, סינון ופידבק שעוזרים לקמפיינים למצוא מטופלים עתידיים במקום פעילות זולה.",
    sections: [
      {
        title: "למה גיוס לידים לשתלים נכשל",
        body:
          "הרבה קמפיינים מתמקדים במילוי הטופס הכי קל. זה יכול ליצור לידים זולים שלא עונים, לא מתאימים או לא מוכנים לטיפול. מרפאת שתלים צריכה אות שמפריד בין סקרנות לבין כוונה אמיתית.",
      },
      {
        title: "איך סינון משפר את הליד הבא",
        body:
          "כשלידים שאושרו או נדחו נמדדים, המערכת לומדת אילו אנשים נראים כמו הזדמנויות בעלות ערך גבוה. הפידבק הזה עוזר להעביר תקציב למתעניינים עם התאמת טיפול חזקה יותר.",
      },
    ],
    bullets: [
      "קמפיינים לגיוס לידים לשתלים ולשיקום מלא",
      "סינון לפי עניין טיפולי, דחיפות והתאמה",
      "קריאייטיב שמסביר ערך לפני הטופס",
      "דיווח סביב הזדמנויות מסוננות ו-ROI ממוצע",
    ],
    relatedPosts: [
      "dental-implant-lead-generation-that-pays",
      "how-to-get-more-dental-implant-patients",
      "why-dental-ads-fail",
    ],
  },
  {
    slug: "all-on-4-lead-generation",
    title: "גיוס לידים ל-All-on-4",
    metaTitle: "גיוס לידים ל-All-on-4 למרפאות שיקום מלא | Booked.Dental",
    description:
      "גיוס לידים ל-All-on-4 שנבנה כדי למשוך ולסנן מתעניינים רציניים לשיקום פה מלא לפני שהם מגיעים לצוות.",
    eyebrow: "הזדמנויות לשיקום מלא",
    h1: "גיוס לידים ל-All-on-4 ששומר על זמן הצוות.",
    intro:
      "מתענייני All-on-4 הם בעלי ערך גבוה, אבל לא כל פנייה מוכנה או מתאימה כלכלית. Booked.Dental עוזרת למרפאות לסנן את המשפך כדי שהצוות יתמקד באנשים עם כוונת טיפול ברורה יותר.",
    sections: [
      {
        title: "הבעיה בלידים רחבים לשתלים",
        body:
          "קמפיינים רחבים לשתלים מושכים לעיתים אנשים שרוצים מידע כללי אבל אינם מוכנים לשיחה על שיקום מלא. קמפיין All-on-4 צריך טרגוט טוב יותר, קריאייטיב ברור יותר וסינון חזק יותר.",
      },
      {
        title: "לולאת למידה טובה יותר",
        body:
          "הקמפיינים החזקים משתמשים באותות איכות אחרי הליד. כשה-AI לומד אילו מתעניינים רציניים, הוא יכול להפסיק לרדוף אחרי הטפסים הכי קלים ולמצוא הזדמנויות טובות יותר.",
      },
    ],
    bullets: [
      "מבנה קמפיינים ל-All-on-4 ול-All-on-6",
      "סינון לפי כוונת שיקום מלא והתאמת אזור",
      "קריאייטיב UGC סביב פחד, אמון ותזמון",
      "הקשר טוב יותר לצוות ההמשך",
    ],
    relatedPosts: [
      "how-to-get-more-dental-implant-patients",
      "best-implant-ad-creatives",
      "dental-lead-filtering-for-dentists",
    ],
  },
  {
    slug: "google-ads-for-dental-implants",
    title: "Google Ads לשתלים דנטליים",
    metaTitle: "Google Ads לשתלים שמוצא מטופלים עם כוונה גבוהה | Booked.Dental",
    description:
      "Google Ads לשתלים דנטליים שנבנה סביב חיפושים עם כוונה גבוהה, סינון לידים ואיכות הזדמנויות מטופלים.",
    eyebrow: "כוונת חיפוש לשתלים",
    h1: "Google Ads לשתלים צריך להתמקד מעבר לקליק.",
    intro:
      "מודעות חיפוש יכולות לתפוס אנשים שכבר מחפשים שתלים, All-on-4 או שיקום מלא. היתרון מגיע כשמחברים את הכוונה הזו לדפי נחיתה וסינון שמראים אילו חיפושים הופכים להזדמנויות אמיתיות.",
    sections: [
      {
        title: "כוונת חיפוש היא חשובה, אבל לא אוטומטית",
        body:
          "גם מילת מפתח עם כוונה גבוהה יכולה להביא פניות לא מתאימות אם הדף, ההצעה והסינון חלשים. Google Ads צריך פידבק על איכות ההמרה, לא רק דוחות מילות מפתח.",
      },
      {
        title: "מה שמודדים משתפר",
        body:
          "Booked.Dental מודדת אילו פניות רציניות מספיק כדי להיות חשובות. כך לקמפיין יש דרך ברורה יותר להתמקד במטופלים ולא בתנועה מחיפוש.",
      },
    ],
    bullets: [
      "מבנה קמפיינים לשתלים ול-All-on-4",
      "דפי נחיתה שמחוברים לכוונת טיפול",
      "סינון לידים אחרי הקליק",
      "החלטות מילות מפתח לפי איכות הזדמנות",
    ],
    relatedPosts: [
      "google-ads-for-dental-implants",
      "google-ads-vs-facebook-ads-dentists",
      "dental-implant-lead-generation-that-pays",
    ],
  },
  {
    slug: "facebook-ads-for-dentists",
    title: "Facebook Ads לרופאי שיניים",
    metaTitle: "Facebook Ads לרופאי שיניים שמסנן מטופלים טובים יותר | Booked.Dental",
    description:
      "קמפיינים בפייסבוק ובאינסטגרם לרופאי שיניים סביב קריאייטיב UGC, סינון לידים וכוונת מטופל אמיתית לשתלים או אסתטיקה.",
    eyebrow: "Meta Ads למרפאות",
    h1: "Facebook Ads לרופאי שיניים עובד טוב יותר כשהקריאייטיב והסינון מלמדים את ה-AI.",
    intro:
      "Meta יכולה ליצור ביקוש לפני שמטופל מחפש בגוגל. בשתלים ואסתטיקה, המפתח הוא קריאייטיב שתופס תשומת לב וסינון שמלמד את המערכת איזו תשומת לב הופכת להזדמנות מתאימה.",
    sections: [
      {
        title: "קריאייטיב יוצר את האות הראשון",
        body:
          "מטופלים מגיבים לסיפורים, חששות, תוצאות ובהירות. קריאייטיב UGC חזק יכול להעביר אדם מעניין פסיבי לפנייה רצינית.",
      },
      {
        title: "סינון הופך תשומת לב ללמידה",
        body:
          "בלי סינון, Meta עלולה להתמקד באנשים שממלאים טפסים בקלות. עם סינון, הקמפיין לומד מי נראה יותר כמו מטופל עתידי.",
      },
    ],
    bullets: [
      "קמפיינים בפייסבוק ובאינסטגרם למרפאות שיניים",
      "קריאייטיב UGC לשתלים, ציפויים ושיקום חיוך",
      "סינון לידים שמשפר את למידת הקמפיין",
      "דיווח סביב הזדמנויות ולא סביב מעורבות",
    ],
    relatedPosts: [
      "meta-ads-for-cosmetic-dentists",
      "ugc-dental-ads-examples",
      "google-ads-vs-facebook-ads-dentists",
    ],
  },
  {
    slug: "cosmetic-dentist-marketing-agency",
    title: "סוכנות שיווק למרפאות אסתטיקה דנטלית",
    metaTitle: "אלטרנטיבה לסוכנות שיווק למרפאות אסתטיקה | Booked.Dental",
    description:
      "אלטרנטיבה ממוקדת לסוכנות שיווק כללית למרפאות אסתטיקה, סביב ציפויים, שיקום חיוך, סינון ואיכות הזדמנויות.",
    eyebrow: "צמיחה למרפאות אסתטיקה",
    h1: "מערכת שיווק למרפאות אסתטיקה שנבנית סביב איכות מטופלים.",
    intro:
      "מרפאות אסתטיקה לא צריכות תנועה כללית. הן צריכות מתעניינים שאכפת להם מציפויים, שיקום חיוך ותוצאה פרימיום מספיק כדי לעשות את הצעד הבא.",
    sections: [
      {
        title: "קמפיינים אסתטיים צריכים מיצוב חד יותר",
        body:
          "המסר הנכון תלוי באמון, שינוי אמין, רמזי מימון ודרך פשוטה לפעולה. מודעות דנטליות כלליות כמעט אף פעם לא יוצרות את רמת הכוונה הזו.",
      },
      {
        title: "סינון שומר על יומן נקי יותר",
        body:
          "מרפאת פרימיום לא צריכה להשקיע את אותו מאמץ בכל טופס. סינון עוזר לזהות אנשים עם עניין טיפולי חזק יותר והתאמה טובה יותר.",
      },
    ],
    bullets: [
      "אסטרטגיית קמפיינים לציפויים ושיקום חיוך",
      "קריאייטיב UGC לפסיכולוגיית מטופלים אסתטיים",
      "סינון לפי מוכנות והתאמה",
      "קישור פנימי בין עמודי שירות, מאמרים ועמודי הוכחה",
    ],
    relatedPosts: [
      "cosmetic-dentists-high-intent-patients",
      "cosmetic-dentistry-patient-acquisition-fast",
      "meta-ads-for-cosmetic-dentists",
    ],
  },
  {
    slug: "full-arch-implant-marketing",
    title: "שיווק שיקום פה מלא",
    metaTitle: "שיווק שיקום פה מלא למטופלים מתאימים | Booked.Dental",
    description:
      "שיווק שיקום פה מלא למרפאות שצריכות הזדמנויות רציניות ל-All-on-4, All-on-6 ושיקום חיוך מלא.",
    eyebrow: "ביקוש לשיקום מלא",
    h1: "שיווק שיקום פה מלא שבנוי סביב מוכנות מטופל.",
    intro:
      "מטופלי שיקום מלא דוחים טיפול בגלל פחד, עלות, מבוכה או אי-ודאות. Booked.Dental משתמשת בקריאייטיב, סינון ומדידה כדי לעזור למרפאות לזהות מי מוכן מספיק כדי להיות חשוב.",
    sections: [
      {
        title: "הטיפול בעל ערך גבוה, ולכן המשפך חייב להיות ספציפי",
        body:
          "קמפיין דנטלי כללי לא מסביר שיקום מלא בצורה ברורה מספיק. המשפך צריך לדבר אל ההתנגדויות האמיתיות של המטופל ולסנן כוונה לפני הקליטה.",
      },
      {
        title: "אותות טובים יותר משפרים את התנועה הבאה",
        body:
          "המערכת משתמשת בפידבק על איכות לידים כדי לעזור לפלטפורמות הפרסום למצוא יותר אנשים שדומים למתענייני שיקום מלא רציניים.",
      },
    ],
    bullets: [
      "אסטרטגיית קמפיינים לשיקום פה מלא",
      "רעיונות קריאייטיב ל-All-on-4 ול-All-on-6",
      "סינון לפי מוכנות טיפולית והתאמת מימון",
      "דיווח ROI ממוצע סביב הזדמנויות",
    ],
    relatedPosts: [
      "how-to-get-more-dental-implant-patients",
      "best-implant-ad-creatives",
      "dental-implant-lead-generation-that-pays",
    ],
  },
  {
    slug: "roi-methodology",
    title: "מתודולוגיית ROI",
    metaTitle: "מתודולוגיית ROI לשיווק דנטלי | Booked.Dental",
    description:
      "איך Booked.Dental חושבת על ROI ממוצע, הזדמנויות מסוננות, איכות לידים וההבדל בין פעילות פרסומית לגיוס מטופלים.",
    eyebrow: "הוכחה ומדידה",
    h1: "איך אנחנו מודדים ROI ממוצע בלי לרדוף אחרי מדדי ראווה.",
    intro:
      "ROI חשוב רק כשהנתונים שמאחוריו אמינים. Booked.Dental מסתכלת מעבר לקליקים וטפסים גולמיים כדי להבין אם הקמפיינים מייצרים הזדמנויות מטופלים מסוננות שיכולות להפוך להכנסות מטיפול.",
    sections: [
      {
        title: "מה כן נחשב",
        body:
          "מדידה שימושית מתחילה באיכות הזדמנות: עניין טיפולי, מוכנות, זמינות, התאמת שוק והאם הפנייה יכולה להפוך באופן ריאלי למטופל.",
      },
      {
        title: "מה לא נחשב בפני עצמו",
        body:
          "קליקים, חשיפות, לידים זולים ונפח טפסים יכולים לעזור להבין קמפיין, אבל הם לא התוצאה. הם חשובים רק כשהם מתחברים להזדמנויות מתאימות ולטיפול שהתקבל.",
      },
    ],
    bullets: [
      "ROI ממוצע שמבוסס על תוצאות מטופלים",
      "מעקב אחר הזדמנויות מסוננות",
      "פידבק קמפיין מלידים שאושרו או נדחו",
      "דרך נקייה יותר להשוות ערוצים וקריאייטיב",
    ],
    relatedPosts: [
      "why-dental-ads-fail",
      "best-dental-lead-sources",
      "dental-lead-filtering-for-dentists",
    ],
  },
  {
    slug: "qualified-opportunity-methodology",
    title: "מהי הזדמנות דנטלית מתאימה",
    metaTitle: "מה נחשב הזדמנות דנטלית מתאימה | Booked.Dental",
    description:
      "הגדרה מעשית להזדמנויות דנטליות מתאימות למרפאות שתלים ואסתטיקה שרוצות דיווח נקי יותר ולמידת קמפיין טובה יותר.",
    eyebrow: "סטנדרט איכות לידים",
    h1: "מה נחשב הזדמנות דנטלית מתאימה.",
    intro:
      "ליד הוא לא אוטומטית הזדמנות מטופל. Booked.Dental מפרידה בין טפסים גולמיים לבין מתעניינים שמראים סימנים של כוונת טיפול, התאמה וערך המשך.",
    sections: [
      {
        title: "הגדרה טובה יותר לאיכות",
        body:
          "הזדמנות מתאימה צריכה להראות עניין טיפולי רלוונטי, דרך יצירת קשר זמינה, התאמה לאזור ומספיק מוכנות כדי להצדיק המשך ממוקד מצד המרפאה.",
      },
      {
        title: "למה ההגדרה חשובה",
        body:
          "כשכל טופס נחשב שווה, ה-AI לומד את הדבר הלא נכון. כשעוקבים בנפרד אחר הזדמנויות מתאימות, הקמפיין מקבל אות נקי יותר.",
      },
    ],
    bullets: [
      "קריטריונים לעניין טיפולי ומוכנות",
      "בדיקת התאמת שוק",
      "פידבק מלידים שאושרו או נדחו",
      "שפה משותפת בין שיווק לקליטת מטופלים",
    ],
    relatedPosts: [
      "dental-lead-filtering-for-dentists",
      "why-dental-ads-fail",
      "dentist-patient-growth",
    ],
  },
  {
    slug: "booked-dental-vs-dental-marketing-agency",
    title: "Booked.Dental מול סוכנות שיווק דנטלית",
    metaTitle: "Booked.Dental מול סוכנות שיווק דנטלית | Booked.Dental",
    description:
      "השוואה בין Booked.Dental לסוכנות שיווק דנטלית כללית לפי סינון לידים, קריאייטיב, למידת AI, איכות מטופלים ודיווח סביב הזדמנויות.",
    eyebrow: "השוואה",
    h1: "Booked.Dental מול סוכנות שיווק דנטלית כללית.",
    intro:
      "סוכנות שיווק דנטלית כללית יכולה לנהל קמפיינים, אבל Booked.Dental נבנתה במיוחד לגיוס מטופלים לשתלים ואסתטיקה, סינון לידים ולימוד קמפיינים למצוא לקוחות במקום קליקים.",
    sections: [
      {
        title: "ההבדל הוא יעד האופטימיזציה",
        body:
          "הרבה סוכנויות מדווחות על תנועה, עלות לליד ופעילות קמפיין. Booked.Dental בנויה סביב הזדמנויות מסוננות, ROI ממוצע והאם המערכת לומדת מאיכות מטופלים אמיתית.",
      },
      {
        title: "התמחות משנה את המשפך",
        body:
          "שתלים, All-on-4, ציפויים ושיקום חיוך צריכים מסר אחר מרפואת שיניים כללית. הקריאייטיב, הדף, הסינון והדיווח צריכים להתאים לכוונת טיפול בעל ערך גבוה.",
      },
    ],
    bullets: [
      "מיקוד בשתלים ואסתטיקה",
      "סינון לידים בתוך לולאת הפידבק של הקמפיין",
      "קריאייטיב UGC לפסיכולוגיית טיפול",
      "בדיקת זמינות אזור לפני פתיחת תהליך רחב",
    ],
    relatedPosts: [
      "dentist-growth-agency",
      "in-house-vs-agency-marketing-for-dentists",
      "why-dental-ads-fail",
    ],
  },
  {
    slug: "dental-lead-generation-vs-patient-acquisition",
    title: "גיוס לידים מול גיוס מטופלים",
    metaTitle: "גיוס לידים דנטליים מול גיוס מטופלים | Booked.Dental",
    description:
      "למה גיוס לידים דנטליים וגיוס מטופלים אינם אותו דבר, במיוחד למרפאות שתלים ואסתטיקה.",
    eyebrow: "השוואת אסטרטגיה",
    h1: "גיוס לידים דנטליים הוא לא אותו דבר כמו גיוס מטופלים.",
    intro:
      "גיוס לידים יוצר פניות. גיוס מטופלים שואל האם הפניות האלה רציניות מספיק כדי להפוך להזדמנויות טיפול אמיתיות. בטיפולים בעלי ערך גבוה, ההבדל הזה קריטי.",
    sections: [
      {
        title: "גיוס לידים עוצר מוקדם מדי",
        body:
          "טופס יכול להיראות מוצלח בדוח ועדיין לא ליצור ערך למרפאה. גיוס מטופלים ממשיך אל איכות הסינון, ההמשך וההזדמנות הטיפולית.",
      },
      {
        title: "ה-AI צריך את התוצאה העמוקה יותר",
        body:
          "אם הפלטפורמה רואה רק טפסים, היא עלולה להתמקד בטפסים קלים. אם היא לומדת אילו לידים הופכים להזדמנויות מתאימות, לקמפיין יש סיכוי טוב יותר למצוא לקוחות עתידיים.",
      },
    ],
    bullets: [
      "הבדל ברור בין לידים גולמיים להזדמנויות מתאימות",
      "סינון שמשפר את למידת הקמפיין",
      "דיווח טוב יותר לבעלי מרפאות",
      "בסיס חזק יותר ל-ROI ממוצע",
    ],
    relatedPosts: [
      "best-dental-lead-sources",
      "dental-lead-filtering-for-dentists",
      "why-dental-ads-fail",
    ],
  },
];

export const SERVICE_PAGES = {
  en: [...enPages, ...enExpansionPages],
  he: [...hePages, ...heExpansionPages],
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
