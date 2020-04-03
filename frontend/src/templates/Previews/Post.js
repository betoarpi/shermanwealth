import React from 'react'
// import { graphql } from 'gatsby'
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

  if (props.previews === false) {
    return (
      <div>
        There was an error trying to fetch the preview from the server
      </div>
    )
  }
  const postData = props.preview.postBy

  if (!postData || props.pageContext.env === 'production') {
    return null
  }

  const {
    title,
    content,
    featuredImage,
    acf_recommended_articles
  } = postData;

  const { path } = props

  const latest = props.preview ? props.preview.posts.edges : props.data.allWordpressPost.edges

  return (
    <Layout location={props.location}>
      <SinglePostElement>
        <article className='container'>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
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
        acf_recommended_articles && acf_recommended_articles.recommendedArticles
          ? <RelatedPosts
            display={acf_recommended_articles.display}
            recommended={acf_recommended_articles.display === 'recommended' ? acf_recommended_articles.recommendedArticles : latest}
            preview={true}
          />
          : null
      }
    </Layout>
  )
}

const PREVIEW_QUERY = gql`
  query getPreview($id: Int!) {
    postBy(postId: $id) {
      title
      content
      featuredImage {
        sourceUrl
      }
      # acf_recommended_articles {
      #   display
      #   recommendedArticles {
      #     ... on Post {
      #       id
      #       title
      #       content
      #       featuredImage {
      #         sourceUrl
      #       }
      #       slug
      #     }
      #   }
      # }
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