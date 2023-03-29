module.exports = {
  title: "Esmile",
  tagline: "Documentation of Esmile packages, applications and others",
  url: "https://docs.mresmile.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Esmile",
  projectName: "docs",

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Esmile",
      logo: {
        alt: "Esmile Icon",
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
          href: "https://github.com/Zastinian",
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
              href: "https://github.com/Zastinian",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Esmile. All rights reserved.`,
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/oceanicNext"),
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Zastinian/EsmileDocs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Zastinian/EsmileDocs/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
