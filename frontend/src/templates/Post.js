import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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
    console.log(path)
    return (
      <Layout>
        <SinglePostElement>
          <article className='container'>
            <h1>{data.wordpressPost.title}</h1>
            {data.wordpressPost.featured_media === null ?
              '/' :
              <figure>
                <Img fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid} alt='Post Title' />
              </figure>
            }
            <div dangerouslySetInnerHTML={{
              __html: data.wordpressPost.content,
            }} />
          </article>
        </SinglePostElement>
        <SocialShare path={path} title={data.wordpressPost.title} />
        <RelatedPosts />
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
            fluid(maxWidth: 1200){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`