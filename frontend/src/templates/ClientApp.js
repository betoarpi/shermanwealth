import React, { Component } from 'react';
import { graphql } from 'gatsby';

export default class ClientApp extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <h1>template {data.wordpressPage.title}</h1>
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
  query ClientAppQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
      featured_media {
        id
      }
    }
  }
`
