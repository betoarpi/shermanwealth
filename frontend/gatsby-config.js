require('dotenv').config();
require('./apollo-build');

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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#002e51`,
        theme_color: `#002e51`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: process.env.API_URL,
        protocol: process.env.PROTOCOL,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        exloudedRoutes: [
          "**/settings",
          "**/themes",
          "**/users/me",
          "**/block-renderer"
        ],
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    }
  ],
}
