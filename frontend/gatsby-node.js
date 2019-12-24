const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                title
                template
              }
            }
          }
          allWordpressPost {
            edges {
              node {
                title
                slug
                content
              }
            }
          }
          allWordpressWpPersona {
            edges {
              node {
                excerpt
                slug
                title
              }
            }
          }
          allWordpressWpServices {
            edges {
              node {
                slug
              }
            }
          }
          allWordpressWpDailyReads {
            edges {
              node {
                id
                slug
                title
                content
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allWordpressPage.edges.forEach(({ node }) => {
        const { template } = node;
        let componentPath;
        switch (template) {
          case 'page-about.php':
            componentPath = 'templates/AboutPage.js';
            break;
          case 'page-clientapp.php':
            componentPath = 'templates/ClientApp.js';
            break;
          case 'page-getstarted.php':
            componentPath = 'templates/GetStarted.js';
            break;
          case 'page-postsgrid.php':
            componentPath = 'templates/PostsGrid/index.js';
            break;
          case 'page-ourclients.php':
            componentPath = 'templates/WhoWeServe/index.js';
            break;
          default:
            componentPath = 'templates/Page.js';
            break;
        }
        createPage({
          path: node.slug,
          component: path.resolve(`./src/${componentPath}`),
          context: {
            slug: node.slug,
            template: node.template
          }
        })
      })

      paginate({
        createPage, // The Gatsby `createPage` function
        items: result.data.allWordpressPost.edges, // An array of objects
        itemsPerPage: 9, // How many items you want per page
        pathPrefix: '/news-resources', // Creates pages like `/blog`, `/blog/2`, etc
        component: path.resolve('./src/templates/PostsGrid/index.js'), // Just like `createPage()`
        context: {
          slug: 'news-resources',
        }
      })

      paginate({
        createPage, // The Gatsby `createPage` function
        items: result.data.allWordpressWpDailyReads.edges, // An array of objects
        itemsPerPage: 9, // How many items you want per page
        pathPrefix: '/brads-daily-reads', // Creates pages like `/blog`, `/blog/2`, etc
        component: path.resolve('./src/templates/BradDailyReads/index.js'), // Just like `createPage()`
        context: {
          slug: 'brads-daily-reads',
        }
      })

      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `posts/${node.slug}`,
          component: path.resolve('./src/templates/Post.js'),
          context: {
            slug: node.slug,
          }
        })
      })

      result.data.allWordpressWpPersona.edges.forEach(({ node }) => {
        createPage({
          path: `persona/${node.slug}`,
          component: path.resolve('./src/templates/Persona.js'),
          context: {
            slug: node.slug,
          }
        })
      })

      result.data.allWordpressWpServices.edges.forEach(({ node }) => {
        createPage({
          path: `services/${node.slug}`,
          component: path.resolve('./src/templates/Services.js'),
          context: {
            slug: node.slug,
          }
        })
      })

      resolve()
    })
  })
}
