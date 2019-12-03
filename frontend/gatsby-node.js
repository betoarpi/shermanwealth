const path = require('path')

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
                featured_media {
                  id
                }
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
            componentPath = 'AboutPage.js';
            break;
          case 'page-app.php':
            componentPath = 'ClientApp.js';
            break;
          case 'page-getstarted.php':
            componentPath = 'GetStarted.js';
            break;
          case 'page-homepage.php':
            componentPath = 'HomePage.js';
            break;
          case 'page-postsgrid.php':
            componentPath = 'PostsGrid.js';
          case 'page-whoweserve.php':
            componentPath = 'WhoWeServe.js';
            break;
          default:
            componentPath = 'Page.js';
            break;
        }
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/${componentPath}`),
          context: {
            slug: node.slug,
          }
        })
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

      resolve()
    })
  })
}
