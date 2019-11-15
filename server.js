const express = require('express')
const next = require('next')
const config = require('dotenv').config().parsed

const dev = config.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/blog', (request, response) => {
      const actualPage = '/blog'
      let page = 1
      if (request.query.page !== undefined) {
        page = request.query.page
      }
      const queryParams = {
        page,
        apiRoute: 'post'
      }
      app.render(request, response, actualPage, queryParams)
    })

    server.get('/blog/:slug', (request, response) => {
      const actualPage = '/blog-post'
      const queryParams = {
        slug: request.params.slug,
        apiRoute: 'post'
      }
      app.render(request, response, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(config.PORT, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    })
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
