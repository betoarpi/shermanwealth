import React from 'react'
import Layout from '../../../components/layout'
import { MiniHero } from '../../../components/Heros/index'

export default function AboutPage({ location, title, content }) {
  return (
    <Layout location={location}>
      <MiniHero>
        <h1>
          {title}
        </h1>
      </MiniHero>
      <section className='container'>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </Layout>
  )
}
