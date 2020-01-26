import React, { Component } from 'react'
import { graphql } from 'gatsby'
import gql from 'graphql-tag'
//import SEO from '../components/seo'
//import Img from 'gatsby-image'
//import styled from 'styled-components'
import Layout from '../components/layout'
//import SocialShare from '../components/SocialShare/index'
//import RelatedPosts from '../components/RelatedPosts/index'
import withPreview from '../components/withPreview/index'

/* const SinglePostElement = styled.section`
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
`; */

class Post extends Component {
  render() {
    /**
     * Determine if we're looking at a preview or live page.
     */
    const postData = this.props.preview ?
      this.props.preview.postBy.revisions.nodes[0] : // grab the first revision
      this.props.data.wpgraphql.post

    const {
      title,
      content,
    } = postData

    return (
      <Layout location={this.props.location}>
        <h1>{title}</h1>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      slug
      content
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

const PREVIEW_QUERY = gql`
  query PostPreviewQuery($id: Int!) {
    postBy(postId: $id) {
      title
      content
      featuredImage {
        sourceUrl(size: LARGE)
      }
      recommendedArticlesGrid {
        display
        fieldGroupName
        recommendedArticles {
          ... on Post {
            id
            excerpt
            featuredImage {
              sourceUrl(size: LARGE)
            }
            slug
          }
        }
      }
    }
  }
`;

export default withPreview({ preview: PREVIEW_QUERY })(Post);
