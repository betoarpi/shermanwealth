import React, { Component } from 'react'
import Layout from '../components/layout'
import { MiniHero } from '../components/Heros/index'
import { graphql } from 'gatsby'
import GetStartedIcon from '../images/icons8-rocket-100.png'

import SEO from '../components/seo'

export default class GetStarted extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title={`${data.wordpressPage.title}`}></SEO>
        <MiniHero>
          <h1>{data.wordpressPage.title}</h1>
          <img src={GetStartedIcon} alt='Get Started icon' />
        </MiniHero>
        <div className='container'>
          <h3>Other sections pending to configure in DB and Gatsby</h3>
        </div>
        <section className='container'
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content,
          }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query GetStartedQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
    }
  }
`
