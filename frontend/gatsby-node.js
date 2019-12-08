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
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allWordpressPage.edges.forEach(({ node }) => {
        const { slug } = node;
        let componentPath;
        switch (slug) {
          case 'who-we-are':
            componentPath = 'AboutPage.js';
            break;
          case 'client-app':
            componentPath = 'ClientApp.js';
            break;
          case 'getting-started':
            componentPath = 'GetStarted.js';
            break;
          case 'home-page':
            componentPath = 'HomePage.js';
            break;
          case 'news-resources':
            componentPath = 'PostsGrid/index.js';
            break;
          case 'who-we-serve':
            componentPath = 'WhoWeServe/index.js';
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

      result.data.allWordpressWpPersona.edges.forEach(({ node }) => {
        createPage({
          path: `persona/${node.slug}`,
          component: path.resolve('./src/templates/Persona.js'),
          context: {
            slug: node.slug,
          }
        })
      })

      resolve()
    })
  })
}
