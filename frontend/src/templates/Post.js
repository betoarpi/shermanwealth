import React, { Component } from 'react'
import { graphql } from 'gatsby'
//import SEO from '../components/seo'
import Img from 'gatsby-image/withIEPolyfill'
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

export default class Post extends Component {
  render() {
    const { data, path } = this.props;
    const { acf } = data.wordpressPost
    return (
      <Layout>
        {/* <SEO title={data.wordpressPost.yoast_title} yoastMeta={null} /> */}
        <SinglePostElement>
          <article className='container'>
            <h1>{data.wordpressPost.title}</h1>
            {data.wordpressPost.featured_media === null ? ' '
              : data.wordpressPost.featured_media.localFile === null ? ' '
                : <figure>
                  <Img
                    fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={data.wordpressPost.title} />
                </figure>
            }
            <div dangerouslySetInnerHTML={{
              __html: data.wordpressPost.content,
            }} />
          </article>
        </SinglePostElement>
        <SocialShare path={path} title={data.wordpressPost.title} />
        {
          acf && acf.recommended_articles
            ? <RelatedPosts display={acf.display} recommended={acf.recommended_articles} />
            : null
        }
      </Layout>
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
        localFile {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 600){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      acf {
        display
        recommended_articles {
          post_title
          post_content
        }
      }
    }
  }
`
