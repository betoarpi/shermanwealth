import React, { Component } from 'react'
import Layout from '../components/layout'
import { MiniHero } from '../components/Heros/index'
import { graphql } from 'gatsby'

export default class Page extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <MiniHero>
          <h1>{data.wordpressPage.title}</h1>
        </MiniHero>
        <div
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content,
          }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query PageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      featured_media {
        source_url
      }
    }
  }
`