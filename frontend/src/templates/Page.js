import React, { Component } from 'react';
import { graphql } from 'gatsby';

export default class Page extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <h1>{data.wordpressPage.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content,
          }}
        />
      </>
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
        id
      }
    }
  }
`