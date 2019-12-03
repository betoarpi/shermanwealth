import React, { Component } from 'react';
import { graphql } from 'gatsby';

export default class Post extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <h1>{data.wordpressPost.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.wordpressPost.content,
          }}
        />
      </>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      slug
      content
      featured_media {
        id
      }
    }
  }
`