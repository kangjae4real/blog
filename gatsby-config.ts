import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `kangjae.dev`,
    siteTitleAlt: `kangjae.dev`,
    siteHeadline: `kangjae.dev`,
    siteUrl: `https://kangjae.dev`,
    siteDescription: `Kangjae Personal Dev, Tech, Daily blog`,
    siteLanguage: `ko`,
    author: `@kangjae4real`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `kangjae.dev`,
        short_name: `kangjae.dev`,
        description: `Kangjae Personal Dev, Tech, Daily blog`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/favicons/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon.ico`,
            sizes: `16x16`,
            type: `image/x-icon`,
          },
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};

export default config;
