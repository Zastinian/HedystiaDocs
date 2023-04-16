module.exports = {
  title: "Hedystia",
  tagline: "Documentation of Hedystia packages, applications and others",
  url: "https://docs.hedystia.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Hedystia",
  projectName: "docs",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Hedystia",
      logo: {
        alt: "Hedystia Icon",
        src: "img/icon.webp",
      },
      items: [
        {
          href: "https://hedystia.com",
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
              href: "https://hedystia.com",
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
      copyright: `Copyright © ${new Date().getFullYear()} Hedystia. All rights reserved.`,
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
          editUrl: "https://github.com/Zastinian/HedystiaDocs/edit/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Zastinian/HedystiaDocs/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
