import React, { Component } from 'react'
import { graphql } from 'gatsby'
//import SEO from '../components/seo'
import styled from 'styled-components'
import Layout from '../components/layout'
import SocialShare from '../components/SocialShare/index'

const SinglePostElement = styled.section`
  background: white;
  border-top:1px solid var(--color-highlight_l2);
  article {
    > h1 {
      margin-bottom: 2rem;
    }
    > figure {
      img {
        box-shadow: none;
      }
    }
  }
`;

export default class Event extends Component {
  render() {
    const { data, path } = this.props;
    console.log(path)
    return (
      <Layout>
        {/* <SEO title={data.wordpressWpEvents.yoast_title} yoastMeta={null} /> */}
        <SinglePostElement>
          <article className='container'>
            <h1 dangerouslySetInnerHTML={{
              __html: data.wordpressWpEvents.title
            }} />
            {data.wordpressWpEvents.featured_media === null ?
              '/' :
              <figure>
              </figure>
            }
            <div dangerouslySetInnerHTML={{
              __html: data.wordpressWpEvents.content,
            }} />
          </article>
        </SinglePostElement>
        <SocialShare path={path} title={data.wordpressWpEvents.title} />
        {/* <RelatedPosts /> */}
      </Layout>
    );
  }
}

export const query = graphql`
  query EventQuery($slug: String!) {
    wordpressWpEvents(slug: { eq: $slug }) {
      title
      slug
    }
  }
`