import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
    href: "/#home",
        label: "Home",
        // icon: MessageSquareTextIcon
        icon: UsersIcon
    },
    {
        href: "/#features",
        label: "How it works",
        icon: ChartPieIcon,
    },
    {
        href: "/#perks",
        label: "Perks",
        icon: LineChartIcon
    },
    {
        href: "/#pricing",
        label: "Pricing",
        // icon: MegaphoneIcon
        icon: CreditCardIcon
    },
    // {
    //     href: "/dashboard/engagement",
    //     label: "Engagement",
    //     icon: UsersIcon
    // },
    // {
    //     href: "/dashboard/billing",
    //     label: "Billing",
    //     icon: CreditCardIcon
    // },
    // {
    //     href: "/dashboard/settings",
    //     label: "Settings",
    //     icon: SettingsIcon
    // },
];

export const FOOTER_LINKS = [
    {
        title: "Explore",
        links: [
            { name: "How It Works", href: "/" },
            { name: "Use Cases", href: "/" },
            { name: "Pricing", href: "/" },
            { name: "Start Now", href: "/" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Documentation", href: "/blog" },
            { name: "Guides", href: "/help-center" },
            { name: "Updates", href: "/community" },
        ],
    },
    {
        title: "Strategies",
        links: [
            { name: "Lead Gen Frameworks", href: "/privacy" },
            { name: "Ad Breakdown Vault", href: "/terms" },
            { name: "Industry Playbooks", href: "/cookies" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/api-docs" },
            { name: "Terms & Conditions", href: "/sdks" },
        ],
    },
];
