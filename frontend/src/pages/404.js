import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

import Layout from '../components/layout'
import { BtnLinkCTA } from '../components/Buttons/index'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' yoastMeta={null} />
    <section className='container error-404'>
      <article>
        <h1 className='title'>
          <span>ERROR</span><br />
          <strong>404</strong><br />
          NOT FOUND
        </h1>
        <p>The route you&#39;re trying to reach doesn&#39;t exist.</p>
        <BtnLinkCTA weblink='/'>
          Back to Home
        </BtnLinkCTA>
      </article>
      <div className='warning'>
        <FaExclamationTriangle className='icon' />
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
