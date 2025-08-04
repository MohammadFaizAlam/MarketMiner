// type PLAN = {
//     id: string;
//     title: string;
//     desc: string;
//     monthlyPrice: number;
//     yearlyPrice: number;
//     badge?: string;
//     buttonText: string;
//     features: string[];
//     link: string;
// };

// export const PLANS: PLAN[] = [
//     {
//         id: "Starter Snapshot",
//         title: "Starter Snapshot",
//         desc: "Bite-sized insights for quick wins.",
//         monthlyPrice: 29,
//         yearlyPrice: 39,
//         buttonText: "Get Started",
//         features: [
//             "1 curated micro-niche intelligence sheet",
//             "Top 10 active buyers or businesses in that space",
//             "Keyword, demand & competition data",
//             "Direct outreach hooks & email templates"
//         ],
//         link: "https://stripe.com/free-plan-link"
//     },
//     {
//         id: "pro",
//         title: "Market Maker",
//         desc: "Built for B2B freelancers & micro-agencies.",
//         monthlyPrice: 89,
//         yearlyPrice: 99,
//         badge: "Most Popular",
//         buttonText: "Upgrade to Pro",
//         features: [
//             "3 curated niches with full data sets",
//             "30+ pre-qualified leads across niches",
//             "Priority email support",
//             "Ad & funnel breakdowns of top players",
//             "Strategic positioning blueprint"
//         ],
//         link: "https://stripe.com/pro-plan-link"
//     },
//     {
//         id: "enterprise",
//         title: "Monopoly Drop",
//         desc: "The full map — dominate your niche.",
//         monthlyPrice: 199,
//         yearlyPrice: 249,
//         badge: "Contact Sales",
//         buttonText: "Upgrade to Enterprise",
//         features: [
//             "Niche breakdowns across 5 micro-B2B verticals",
//             "50+ high-quality verified lead contacts",
//             "Ad breakdowns, email swipe files, pitch decks",
//             "Priority access to new one-time drops (limited)"
//         ],
//         link: "https://stripe.com/enterprise-plan-link"
//     }
// ];

// =========================================================================

// type PLAN = {
//     id: string;
//     title: string;
//     desc: string;
//     monthlyPrice: number;
//     oneTimePrice: number;
//     badge?: string;
//     buttonText: string;
//     monthlyFeatures: string[];
//     oneTimeFeatures: string[];
//     link: string;
// };

// export const PLANS: PLAN[] = [
//     {
//         id: "Starter Snapshot",
//         title: "Starter Snapshot",
//         desc: "Bite-sized insights for quick wins.",
//         monthlyPrice: 29,
//         oneTimePrice: 39,
//         buttonText: "Get Started",
//         monthlyFeatures: [
//             "1 curated micro-niche intelligence sheet per month",
//             "Top 10 active buyers or businesses in that space",
//             "Monthly keyword, demand & competition data updates",
//             "Direct outreach hooks & email templates"
//         ],
//         oneTimeFeatures: [
//             "1 curated micro-niche intelligence sheet",
//             "Top 10 active buyers or businesses in that space",
//             "Keyword, demand & competition data",
//             "Direct outreach hooks & email templates"
//         ],
//         link: "https://stripe.com/free-plan-link"
//     },
//     {
//         id: "pro",
//         title: "Market Maker",
//         desc: "Built for B2B freelancers & micro-agencies.",
//         monthlyPrice: 89,
//         oneTimePrice: 99,
//         badge: "Most Popular",
//         buttonText: "Upgrade to Pro",
//         monthlyFeatures: [
//             "3 curated niches with full data sets monthly",
//             "30+ pre-qualified leads across niches per month",
//             "Priority email support",
//             "Monthly ad & funnel breakdowns of top players",
//             "Strategic positioning blueprint updates"
//         ],
//         oneTimeFeatures: [
//             "3 curated niches with full data sets",
//             "30+ pre-qualified leads across niches",
//             "Priority email support",
//             "Ad & funnel breakdowns of top players",
//             "Strategic positioning blueprint"
//         ],
//         link: "https://stripe.com/pro-plan-link"
//     },
//     {
//         id: "enterprise",
//         title: "Monopoly Drop",
//         desc: "The full map — dominate your niche.",
//         monthlyPrice: 199,
//         oneTimePrice: 249,
//         badge: "Contact Sales",
//         buttonText: "Upgrade to Enterprise",
//         monthlyFeatures: [
//             "Monthly niche breakdowns across 5 micro-B2B verticals",
//             "50+ high-quality verified lead contacts per month",
//             "Monthly ad breakdowns, email swipe files, pitch decks",
//             "Priority access to new monthly drops"
//         ],
//         oneTimeFeatures: [
//             "Niche breakdowns across 5 micro-B2B verticals",
//             "50+ high-quality verified lead contacts",
//             "Ad breakdowns, email swipe files, pitch decks",
//             "Priority access to new one-time drops (limited)"
//         ],
//         link: "https://stripe.com/enterprise-plan-link"
//     }
// ];

// ==========================================================================

type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    oneTimePrice: number;
    badge?: string;
    buttonText: string;
    monthlyFeatures: string[];
    oneTimeFeatures: string[];
    link: string;
};


export const PLANS: PLAN[] = [
  {
    id: "Cold Leads Killer Kit",
    title: "Cold Leads Killer Kit",
    desc: "Fuel your pipeline with proven prospects.",
    monthlyPrice: 59,
    oneTimePrice: 39,
    buttonText: "Download & Deploy",
    monthlyFeatures: [
      "2 curated lead lists per month (SEO, ads, real estate)",
      "Outreach templates optimized for response",
      "Plug-and-play Notion cold email SOP",
      "Bonus: Quick-start strategy video (Loom)"
    ],
    oneTimeFeatures: [
      "1 curated lead list (ready to deploy)",
      "Outreach templates + Notion SOP",
      "Bonus: Quick-start strategy video (Loom)",
      "Perfect for fast client acquisition"
    ],
    link: "https://stripe.com/free-plan-link"
  },
  {
    id: "pro",
    title: "Competitor Control Panel",
    desc: "Steal proven strategies from top agencies.",
    monthlyPrice: 99,
    oneTimePrice: 89,
    badge: "Most Popular",
    buttonText: "Unlock Competitive Intel",
    monthlyFeatures: [
      "3 monthly ad & funnel teardowns (SEO or Ads)",
      "Top keywords and competitor ranking data",
      "Landing page copy + UX teardown insights",
      "Email sequence and subject line swipe files",
      "Custom niche targeting recommendations"
    ],
    oneTimeFeatures: [
      "3 full ad & funnel breakdowns (FB or Google)",
      "Keyword and ranking data snapshot",
      "Landing page and email copy deconstructed",
      "PDF swipe files + conversion notes"
    ],
    link: "https://stripe.com/pro-plan-link"
  },
  {
    id: "Black File Bundle",
    title: "The Black File Bundle",
    desc: "The full vault. No guesswork, just domination.",
    monthlyPrice: 149,
    oneTimePrice: 199,
    buttonText: "Access the Black File",
    monthlyFeatures: [
      "Everything in Control Panel, plus:",
      "Request 2 custom lead or teardown drops monthly",
      "Early access to premium drops before public",
      "Monthly Loom strategy breakdown (10–15 min)",
      "Private client acquisition playbooks",
      "Elite vault access for advanced operators"
    ],
    oneTimeFeatures: [
      "10+ premium intel assets: leads, teardowns, SOPs",
      "Notion SOPs, pitch decks, email templates, Figma",
      "Bonus: Strategy Loom + tactical explainer slides",
      "Lifetime access to Black File archive",
      "Perfect for serious agency scaling"
    ],
    link: "https://stripe.com/enterprise-plan-link"
  }
];
