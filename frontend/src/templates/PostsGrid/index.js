import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import NewsIcon from '../../images/icons8-news-100.png'

export default class PostsGrid extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <MiniHero>
          <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPage.title, }} />
          <img src={NewsIcon} alt='News & Resources icon' />
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
  query PostsGridQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
    }
  }
`
