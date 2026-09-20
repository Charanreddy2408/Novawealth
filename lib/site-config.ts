export const siteConfig = {
  name: "Nova Wealth Advisers",
  shortName: "Nova Wealth",
  description:
    "Strategic financial advice for established migrant families who want to reduce tax, invest confidently and secure their family’s future in Australia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://novawealth.com.au",
  phone: process.env.NEXT_PUBLIC_PHONE ?? " 03 8658 6464",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@novawealth.com.au",
  location: "Australia-wide advice",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  scoreAppUrl: process.env.NEXT_PUBLIC_SCOREAPP_URL ?? "",
  linkedInUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "#",
  tikTokUrl: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "#",
  adviserRatingsUrl:
    process.env.NEXT_PUBLIC_ADVISER_RATINGS_URL ??
    "https://www.adviserratings.com.au/adviser/1002716/Karthik-Sivashanmugham",
  nav: [
    { label: "About", href: "/about" },
    { label: "How We Help", href: "/how-we-help" },
    { label: "Who We Help", href: "/who-we-help" },
    { label: "Insights", href: "/insights" },
    { label: "10-Year Financial Check-Up", href: "/10-year-check" },
  ],
} as const;

export const stockMedia = {
  heroPoster:
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=2000&q=85",
  heroVideo:
    "https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4",
  founder: "/Karthik-58-blue.jpg",
  family:
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1400&q=85",
  professional:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
  business:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
  retirement:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85",
  taxPlanning:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
  investing:
    "https://images.unsplash.com/photo-1737442528819-5526652236e8?auto=format&fit=crop&w=1200&q=85",
  retirementPlanning:
    "https://images.unsplash.com/photo-1758686254415-9348b5b5df01?auto=format&fit=crop&w=1200&q=85",
  // Portrait photos — real team images from /public
  karthikOrange: "/Karthik-20-orange.jpg",
  karthikBlue: "/Karthik-58-blue.jpg",
  karthikNeutral: "/Karthik-20-neutral.jpg",
  karthikNeutralAlt: "/Karthik-152-neutral.jpg",
  keerthiBlue: "/Keerthi-11-blue.jpg",
} as const;
