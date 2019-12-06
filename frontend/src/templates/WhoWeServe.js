import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import { MiniHero } from '../components/Heros/index'

export default class WhoWeServe extends Component {
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
  query WhoWeServeQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
    }
  }
`
