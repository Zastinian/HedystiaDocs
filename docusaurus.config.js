module.exports = {
  title: "EsmileBilling",
  tagline: "Billing software specially made for Pterodactyl panel",
  url: "https://docs.mresmile.com",
  baseUrl: "/",
  favicon: "img/favicon.webp",
  organizationName: "Esmile",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "EsmileBilling",
      logo: {
        alt: "EsmileBilling Icon",
        src: "img/icon.webp",
      },
      items: [
        {
          href: "https://mresmile.com",
          label: "Website",
          position: "left",
        },
        {
          to: "docs/welcome",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          href: "https://github.com/Zastinian/EsmileBilling",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://discord.gg/aXvuUpvRQs",
          label: "Discord",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Useful Links",
          items: [
            {
              href: "https://mresmile.com",
              label: "Website",
            },
            {
              label: "Documentation",
              to: "docs/welcome",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/aXvuUpvRQs",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Zastinian/EsmileBilling",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Esmile. All rights reserved.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Zastinian/EsmileBillingDocs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Zastinian/EsmileBillingDocs/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
}
