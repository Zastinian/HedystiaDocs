import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";

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
    }),
  ],
});
