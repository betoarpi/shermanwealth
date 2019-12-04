import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { Hero } from '../components/Heros/index'
import SEO from '../components/seo'

export default class AboutPage extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO title={`${data.wordpressPage.title}`}></SEO>
        <Hero
          key='about_hero'
          imgSrc={data.wordpressPage.featured_media === null ?
            '/' :
            data.wordpressPage.featured_media.source_url
          }
        >
          <h2>{data.wordpressPage.title}</h2>
        </Hero>
        <div className='container'>
          <h3>About Members component pending to configure in DB and Gatsby</h3>
        </div>
        <section className='container'
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query AboutPageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
      featured_media{
        source_url
      }
    }
  }
`