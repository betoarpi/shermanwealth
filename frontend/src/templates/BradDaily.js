import React, { Component } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import styled from 'styled-components'
import Layout from '../components/layout'
import SocialShare from '../components/SocialShare/index'
import RelatedPosts from '../components/RelatedPosts/index'

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

export default class BradDaily extends Component {
  render() {
    const { data, path } = this.props;
    console.log(path)
    return (
      <Layout>
        <SEO title={data.wordpressWpDailyReads.yoast_title} yoastMeta={null} />
        <SinglePostElement>
          <article className='container'>
            <h1>{data.wordpressWpDailyReads.title}</h1>
            {data.wordpressWpDailyReads.featured_media === null ?
              '/' :
              <figure>
              </figure>
            }
            <div dangerouslySetInnerHTML={{
              __html: data.wordpressWpDailyReads.content,
            }} />
          </article>
        </SinglePostElement>
        <SocialShare path={path} title={data.wordpressWpDailyReads.title} />
        <RelatedPosts />
      </Layout>
    );
  }
}

export const query = graphql`
  query BradDailyQuery($slug: String!) {
    wordpressWpDailyReads(slug: { eq: $slug }) {
      title
      slug
      content
      yoast_meta {
    	  name
        property
    	}
    	yoast_title
    }
  }
`