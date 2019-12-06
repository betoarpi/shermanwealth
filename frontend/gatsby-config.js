module.exports = {
  siteMetadata: {
    title: `Sherman Wealth Management | Financial Planning in MD and DC Metro`,
    description: `Your Financial Concierge™`,
    author: `@betoarpi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `shermandev.cydoniacloudserver.com`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true
      }
    },
    `gatsby-plugin-styled-components`
  ],
}
