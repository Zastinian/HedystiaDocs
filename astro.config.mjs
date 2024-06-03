import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";
import starlightDocSearch from "@astrojs/starlight-docsearch";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.hedystia.com",
  integrations: [
    starlight({
      title: "Docs",
      customCss: ["./src/styles/custom.css"],
      favicon: "/favicon.ico",
      social: {
        github: "https://github.com/Zastinian",
        discord: "https://discord.gg/aXvuUpvRQs",
      },
      sidebar: [
        {
          label: "Welcome",
          link: "/welcome",
        },
        {
          label: "Billing",
          collapsed: true,
          items: [
            {
              label: "Start",
              link: "/billing/start",
              collapsed: true,
            },
            {
              label: "Installation",
              collapsed: true,
              autogenerate: {
                directory: "billing/installation",
                collapsed: true,
              },
            },
            {
              label: "Upgrade",
              collapsed: true,
              autogenerate: {
                directory: "billing/upgrade",
                collapsed: true,
              },
            },
            {
              label: "Admin",
              collapsed: true,
              autogenerate: {
                directory: "billing/admin",
                collapsed: true,
              },
            },
            {
              label: "Extensions",
              collapsed: true,
              items: [
                {
                  label: "Introduction",
                  link: "/billing/extensions/intro",
                  collapsed: true,
                  autogenerate: {
                    directory: "billing/extensions/gateways",
                    collapsed: true,
                  }
                }
              ],
            },
          ],
        },
        {
          label: "Builders",
          collapsed: true,
          items: [
            {
              label: "Start",
              link: "/builders/start",
              collapsed: true,
            },
            {
              label: "Builder",
              collapsed: true,
              autogenerate: {
                directory: "builders/builder",
                collapsed: true,
              },
            },
            {
              label: "Normal",
              collapsed: true,
              autogenerate: {
                directory: "builders/normal",
                collapsed: true,
              },
            },
            {
              label: "Util",
              collapsed: true,
              autogenerate: {
                directory: "builders/util",
                collapsed: true,
              },
            },
          ],
        },
        {
          label: "DataBase",
          collapsed: true,
          items: [
            {
              label: "Start",
              link: "/db/start",
              collapsed: true,
            },
            {
              label: "Example",
              link: "/db/example",
              collapsed: true,
            },
          ],
        },
        {
          label: "DataBase Rust",
          collapsed: true,
          items: [
            {
              label: "Start",
              link: "/dbrs/start",
              collapsed: true,
            },
            {
              label: "Example",
              link: "/dbrs/example",
              collapsed: true,
            },
          ],
        },
        {
          label: "Github Stats",
          collapsed: true,
          items: [
            {
              label: "Start",
              link: "/stats/start",
              collapsed: true,
            },
            {
              label: "Usage",
              link: "/stats/usage",
              collapsed: true,
            },
            {
              label: "Themes",
              link: "/stats/themes",
              collapsed: true,
            },
          ],
        },
        {
          label: "StrangeApi",
          collapsed: true,
          items: [
            {
              label: "Start",
              link: "/strange/start",
              collapsed: true,
            },
            {
              label: "Api",
              link: "/strange/api",
              collapsed: true,
            },
            {
              label: "Filters",
              link: "/strange/filters",
              collapsed: true,
            },
            {
              label: "Generators",
              link: "/strange/generators",
              collapsed: true,
            },
            {
              label: "Overlays",
              link: "/strange/overlays",
              collapsed: true,
            },
            {
              label: "Utils",
              link: "/strange/utils",
              collapsed: true,
            },
          ],
        },
        {
          label: "Hedystia.js",
          collapsed: true,
          items: [
            {
              label: "Start",
              link: "/client/start",
              collapsed: true,
            },
            {
              label: "Client",
              link: "/client/client",
              collapsed: true,
            },
            {
              label: "Builders",
              collapsed: true,
              autogenerate: {
                directory: "client/builders",
                collapsed: true,
              },
            },
            {
              label: "Managers",
              collapsed: true,
              autogenerate: {
                directory: "client/managers",
                collapsed: true,
              },
            },
            {
              label: "Structures",
              collapsed: true,
              autogenerate: {
                directory: "client/structures",
                collapsed: true,
              },
            },
            {
              label: "Util",
              collapsed: true,
              autogenerate: {
                directory: "client/util",
                collapsed: true,
              },
            },
          ],
        },
        {
          label: "Useful",
          collapsed: true,
          items: [
            {
              label: "Start",
              link: "/useful/start",
              collapsed: true,
            },
            {
              label: "Color",
              collapsed: true,
              autogenerate: {
                directory: "useful/color",
                collapsed: true,
              },
            },
            {
              label: "Gen",
              collapsed: true,
              autogenerate: {
                directory: "useful/gen",
                collapsed: true,
              },
            },
            {
              label: "Utils",
              collapsed: true,
              autogenerate: {
                directory: "useful/utils",
                collapsed: true,
              },
            },
            {
              label: "Validation",
              collapsed: true,
              autogenerate: {
                directory: "useful/validation",
                collapsed: true,
              },
            },
          ],
        },
      ],
      plugins: [
        starlightDocSearch({
          appId: process.env.APP_ID,
          apiKey: process.env.SEARCH_API_KEY,
          indexName: process.env.INDEX_NAME,
        }),
      ],
    }),
  ],
});
