type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "Starter Snapshot",
        title: "Starter Snapshot",
        desc: "Bite-sized insights for quick wins.",
        monthlyPrice: 29,
        yearlyPrice: 39,
        buttonText: "Get Started",
        features: [
            "1 curated micro-niche intelligence sheet",
            "Top 10 active buyers or businesses in that space",
            "Keyword, demand & competition data",
            "Direct outreach hooks & email templates"
        ],
        link: "https://stripe.com/free-plan-link"
    },
    {
        id: "pro",
        title: "Market Maker",
        desc: "Built for B2B freelancers & micro-agencies.",
        monthlyPrice: 89,
        yearlyPrice: 99,
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "3 curated niches with full data sets",
            "30+ pre-qualified leads across niches",
            "Priority email support",
            "Ad & funnel breakdowns of top players",
            "Strategic positioning blueprint"
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "enterprise",
        title: "Monopoly Drop",
        desc: "The full map — dominate your niche.",
        monthlyPrice: 199,
        yearlyPrice: 249,
        badge: "Contact Sales",
        buttonText: "Upgrade to Enterprise",
        features: [
            "Niche breakdowns across 5 micro-B2B verticals",
            "50+ high-quality verified lead contacts",
            "Ad breakdowns, email swipe files, pitch decks",
            "Priority access to new one-time drops (limited)"
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];
