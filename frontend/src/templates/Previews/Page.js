import React from 'react'
import gql from 'graphql-tag'
import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import PagesWithPreview from '../../components/previewComponents/pages'


const PreviewPage = (props) => {
  /**
   * Determine if we're looking at a preview or live page.
   */
  /* const pageData = props.preview ?
    props.preview.pageBy : // grab the first revision 
    props.data.wpgraphql.page

  const {
    title
  } = pageData; */

  //const { path } = props

  return (
    <Layout location={props.location}>
      <MiniHero>
        <h1>title</h1>
      </MiniHero>
      <section>
        this is the preview
      </section>
    </Layout>
  )
}

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