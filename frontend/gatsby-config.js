require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
        // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in wordpress wp-api.
        // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
        jwt_user: process.env.JWT_USER,
        jwt_pass: process.env.JWT_PASSWORD,
        //jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
      }
    },
    /* {
      resolve: 'gatsby-source-graphql-universal',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: process.env.WP_GRAPHQL_URL,
      },
    }, */
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    }
  ],
}
