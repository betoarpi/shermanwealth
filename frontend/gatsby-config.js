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
    // `gatsby-plugin-sharp`,
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
        baseUrl: `shermandev.cydoniacloudserver.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        // endpoint: 'https://shermanwealth.us12.list-manage.com/subscribe/post?u=fecbb9cdbba045943f036b71d&amp;id=f3f56723ec',
        endpoint: 'https://shermanwealth.us12.list-manage.com/subscribe/post?u=fecbb9cdbba045943f036b71d&amp;id=f3f56723ec',
      },
    }
  ],
}
