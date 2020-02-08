import React from 'react'
import gql from 'graphql-tag'
import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
/* import IntroSectionBlock from '../../components/IntroSection/index'
import RegularContent from '../../components/RegularContent/index'
import { TwoColumnsBlock, ThreeColumnsBlock, FourColumnsBlock } from '../../components/Columns'
import FeaturedContentBlock from '../../components/FeaturedContent/index' */
import PagesWithPreview from '../../components/previewComponents/pages'


const PreviewPage = (props) => {
  /**
   * Determine if we're looking at a preview or live page.
   */
  const postData = props.preview ?
    props.preview.pageBy : // grab the first revision 
    props.data.wordpressPage

  const {
    title,
    content
  } = postData;

  return (
    <Layout location={props.location}>
      <MiniHero>
        <h1>{title}</h1>
      </MiniHero>
      <section className='container'>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query PagePreviewQuery(
    $id: Int!
  ) {
    wordpressPage(
      wordpress_id: {
        eq: $id
      }
    ) {
      title
      slug
      content
    }
  }
`

const PREVIEW_QUERY = gql`
  query getPagePreview($id: Int!) {
    pageBy(pageId: $id) {
      title
      content
      flexibleContentOptions {
        contentBlocks {
          ... on Page_Flexiblecontentoptions_ContentBlocks_IntroSection {
            introText
          }
          ... on Page_Flexiblecontentoptions_ContentBlocks_RegularContent {
            contentText
          }
          ... on Page_Flexiblecontentoptions_ContentBlocks_TwoColumns {
            twoColumns {
              columnLeft
              columnRight
              fieldGroupName
            }
          }
          ... on Page_Flexiblecontentoptions_ContentBlocks_ThreeColumns {
            threeColumnsBlock {
              columnLeft
              columnMiddle
              columnRight
              fieldGroupName
            }
          }
          ... on Page_Flexiblecontentoptions_ContentBlocks_FourColumns {
            fourColumnsBlock {
              columnLeft
              columnMiddleLeft
              columnMiddleRight
              columnRight
              fieldGroupName
            }
          }
          ... on Page_Flexiblecontentoptions_ContentBlocks_FeaturedContent {
            featuredContentBlock {
              content
              image {
                sourceUrl
              }
            }
          }
        }
      }
      template {
        ... on DefaultTemplate {
          templateName
        }
        ... on AboutUsTemplate {
          templateName
        }
        ... on ClientAppTemplate {
          templateName
        }
        ... on EventsTemplate {
          templateName
        }
        ... on FlexibleContentTemplate {
          templateName
        }
        ... on GetStartedTemplate {
          templateName
        }
        ... on HomePageTemplate {
          templateName
        }
        ... on OurClientsTemplate {
          templateName
        }
        ... on PostsGridTemplate {
          templateName
        }
      }
      slug
      revisions(first: 1) {
        nodes {
          title
        }
      }
    }
  }
`;

export default PagesWithPreview({ preview: PREVIEW_QUERY })(PreviewPage);