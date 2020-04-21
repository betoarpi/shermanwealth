require('dotenv').config();
require('./apollo-build');

module.exports = {
  siteMetadata: {
    title: `Sherman Wealth Management | Financial Planning in MD and DC Metro`,
    description: `Your Financial Concierge™`,
    siteUrl: `https://shermanwealth.com`,
    author: `Brad Sherman`,
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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_POPERTY_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: 6
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.content,
                  title: edge.node.title,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                })
              })
            },
            query: `
              {
                allWordpressPost  {
                  edges {
                    node {
                      content,
                      date(formatString: "MMMM DD, YYYY"),
                      slug,
                      title
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Sherman Wealth Management || RSS Feed",
          },
        ],
      }
    },
  ],
}
