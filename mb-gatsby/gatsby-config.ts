import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Minimal Blog`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
    },
  ],
}

export default config
