export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "phantom-bloc",
  description: "phantom-bloc.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "market",
      href: "/market",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  bottomItems:[
    {
      label: "Home",
      href: "/",
    },
    {
      label: "wallet",
      href: "/wallet",
    },
    {
      label: "team",
      href: "/team",
    },
    {
      label: "my",
      href: "/user",
    }
  ],
  links: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    docs: "https://nextui.org/",
    discord: "https://discord.gg/",
    sponsor: "https://patreon.com/",
  },
};
