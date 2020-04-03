import React from 'react'
import gql from 'graphql-tag'
import PagesWithPreview from '../../components/previewComponents/pages'
import Layout from '../../components/layout'
import SocialShare from '../../components/SocialShare/index'

import styled from 'styled-components'

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

const BradDaily = (props) => {
  const { bradBy, path } = props.preview

  if (!bradBy || props.pageContext.env === 'production') {
    return null
  }

  return (
    <Layout>
      <SinglePostElement>
        <article className='container'>
          <h1 dangerouslySetInnerHTML={{ __html: bradBy.title }} />
          <div dangerouslySetInnerHTML={{
            __html: bradBy.content,
          }} />
        </article>
      </SinglePostElement>
      <SocialShare path={path} title={bradBy.title} />
    </Layout>
  )
}


const PREVIEW_QUERY = gql`
  query BradDailyPreviewQuery($id: Int!) {
    bradBy(bradId: $id) {
      title
      slug
      content
    }
  }
`

export default PagesWithPreview({ preview: PREVIEW_QUERY })(BradDaily);
