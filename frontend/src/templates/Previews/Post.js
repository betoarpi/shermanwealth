import React from 'react'
import { graphql } from 'gatsby'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Layout from '../../components/layout'
import SocialShare from '../../components/SocialShare/index'
import PostsWithPreview from '../../components/previewComponents/posts'
import RelatedPosts from '../../components/RelatedPosts/index'

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

const PreviewPost = (props) => {
  /**
   * Determine if we're looking at a preview or live page.
   */
  const postData = props.preview ?
    props.preview.postBy : // grab the first revision 
    props.data.wordpressPost

  const {
    title,
    content,
    featuredImage,
    recommendedArticlesGrid
  } = postData;

  const { path } = props

  const latest = props.preview ? props.preview.posts.edges : props.data.allWordpressPost.edges

  return (
    <Layout location={props.location}>
      <SinglePostElement>
        <article className='container'>
          <h1>{title}</h1>
          {featuredImage &&
            <figure>
              <img
                src={featuredImage.sourceUrl}
                alt={title} />
            </figure>
          }
          <div className='post-content' dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </SinglePostElement>
      <SocialShare path={path} title={title} />
      {
        recommendedArticlesGrid && recommendedArticlesGrid.recommendedArticles
          ? <RelatedPosts
            display={recommendedArticlesGrid.display}
            recommended={recommendedArticlesGrid.display === 'recommended' ? recommendedArticlesGrid.recommendedArticles : latest}
            preview={true}
          />
          : null
      }
    </Layout>
  )
}

export const query = graphql`
  query PostPreviewQuery(
    $id: Int!
  ) {
    wordpressPost(
      wordpress_id: {
        eq: $id
      }
    ) {
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
      acf {
        display
        recommended_articles {
          post_title
          post_content
        }
      }
    }
    allWordpressPost(sort: {fields: [date], order: DESC}, limit: 3) {
      edges {
        node {
          title
          content
          slug
        }
      }
    }
  }
`

const PREVIEW_QUERY = gql`
  query getPreview($id: Int!) {
    postBy(postId: $id) {
      title
      content
      featuredImage {
        sourceUrl
      }
      recommendedArticlesGrid {
        display
        recommendedArticles {
          ... on Post {
            id
            title
            content
            featuredImage {
              sourceUrl
            }
            slug
          }
        }
      }
      revisions(first: 1) {
        nodes {
          title
        }
      }
    }
    posts(first: 3) {
      edges {
        node {
          title
          content
          slug
        }
      }
    }
  }
`;

export default PostsWithPreview({ preview: PREVIEW_QUERY })(PreviewPost);