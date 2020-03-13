import React from 'react'
import gql from 'graphql-tag'
import PagesWithPreview from '../../components/previewComponents/pages'
import { AboutPage, ClientApp, GetStarted, Home, WhoWeServe, FlexibleContent } from './views/index'


const PreviewPage = (props) => {
  /**
   * Determine if we're looking at a preview or live page.
   */

  const postData = props.preview ?
    props.preview.pageBy : // grab the first revision 
    props.data.wordpressPage

  const { pageContext, location } = props

  const {
    title,
    content
  } = postData;

  if (pageContext.template === 'page-about.php') {
    const staff = props.preview.teams.nodes

    return (
      <AboutPage
        location={location}
        title={title}
        content={content}
        staff={staff}
        selectedStaff={postData.acf_team_members_grid.teamMembersGrid}
      />
    )
  } else if (pageContext.template === 'page-clientapp.php') {
    const { acf_client_app } = postData
    return (
      <ClientApp
        location={location}
        title={title}
        content={content}
        acf={acf_client_app}
      />
    )
  } else if (pageContext.template === 'page-getstarted.php') {
    const { acf_getting_started } = postData
    return (
      <GetStarted
        location={location}
        title={title}
        contact={acf_getting_started.contact}
      />
    )
  } else if (pageContext.template === 'page-homepage.php') {
    return (
      <Home
        location={location}
        title={title}
        {...postData}
      />
    )
  } else if (pageContext.template === 'page-ourclients.php') {
    const { personas } = props.preview
    const { acf_content_blocks } = postData
    return (
      <WhoWeServe
        location={location}
        title={title}
        content={content}
        personas={personas}
        contentBlocks={acf_content_blocks.contentBlocks}
      />
    )
  }
  else {
    const { contentBlocks } = postData.acf_content_blocks
    return (
      <FlexibleContent
        location={location}
        title={title}
        content={content}
        pageTemplate={pageContext.template}
        contentBlocks={contentBlocks}
      />
    )
  }

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
      acf {
        content_blocks_page{
          __typename
          ... on WordPressAcf_intro_section {
            intro_text
            id
          }
          __typename
          ... on WordPressAcf_regular_content {
            content_text
            id
          }
          __typename
          ... on WordPressAcf_two_columns {
            two_columns {
              column_left
              column_right
            }
            id
          }
          __typename
          ... on WordPressAcf_three_columns {
            three_columns_block {
              column_left
              column_middle
              column_right
            }
            id
          }
          __typename
          ... on WordPressAcf_four_columns {
            four_columns_block {
              column_left
              column_middle_left
              column_middle_right
              column_right
            }
            id
          }
          __typename
          ... on WordPressAcf_featured_content {
            featured_content_block {
              content
              image {
                source_url
                id
              }
            }
            id
          }
        }
      }
    }
  }
`

const PREVIEW_QUERY = gql`
  query getPagePreview($id: Int!) {
    personas {
      edges {
        node {
          personaId
          title
          slug
          id
          featuredImage {
            mediaItemUrl
          }
          acf_personas_options {
            personaDescription
          }
        }
      }
    }
    teams {
      nodes {
        id
        acf_team_member {
          title
          teamMemberBio
        }
        title
        featuredImage {
          mediaItemUrl
        }
      }
    }
    pageBy(pageId: $id) {
      title
      content
      slug
      acf_hero {
        hero {
          customHero
          mainText
          image {
            mediaItemUrl
          }
        }
      }
      acf_clients_grid {
        clientPersonasSectionTitle
        clientPersonasGrid {
          __typename
          ... on Persona {
            id
            excerpt
            title
            status
          }
        }
      }
      acf_featured_in_logos {
        featuredInLogos {
          logo {
            title
            id
            mediaItemUrl
          }
          logoLink
        }
      }
      acf_our_commitment {
        ourCommitment {
          content
          trustLogos {
            feeOnlyLogoLink
            napfaLogoLink
            feeOnlyLogo {
              mediaItemUrl
            }
            napfaLogo {
              mediaItemUrl
            }
          }
        }
      }
      acf_services_grid {
        servicesGrid {
          ... on Service {
            id
            excerpt
            title
            status
          }
        }
        servicesGridTitle
      }
      acf_riskalyze {
        riskalyze {
          riskalyzeEmbed
        }
      }
      acf_simplify {
        simplify {
          simplifyEmbed
        }
      }
      acf_team_members_grid {
        teamMembersGrid {
          ... on Team {
            id
            acf_team_member {
              title
              teamMemberBio
            }
            title
            featuredImage {
              mediaItemUrl
            }
          }
        }
      }
      acf_content_blocks {
        contentBlocks {
          ... on Page_AcfContentBlocks_ContentBlocks_IntroSection {
            fieldGroupName
            introText
          }
          ... on Page_AcfContentBlocks_ContentBlocks_RegularContent {
            contentText
            fieldGroupName
          }
          ... on Page_AcfContentBlocks_ContentBlocks_TwoColumns {
            fieldGroupName
            twoColumns {
              columnLeft
              columnRight
            }
          }
          ... on Page_AcfContentBlocks_ContentBlocks_ThreeColumns {
            fieldGroupName
            threeColumnsBlock {
              columnLeft
              columnMiddle
              columnRight
            }
          }
          ... on Page_AcfContentBlocks_ContentBlocks_FourColumns {
            fieldGroupName
            fourColumnsBlock {
              columnLeft
              columnMiddleLeft
              columnMiddleRight
              columnRight
            }
          }
          ... on Page_AcfContentBlocks_ContentBlocks_FeaturedContent {
            fieldGroupName
          }
        }
      }
      acf_client_app {
        appFeatures {
          description
          title
          icon {
            mediaItemUrl
          }
        }
        appScreenshot {
          mediaItemUrl
        }
      }
      acf_getting_started {
        fieldGroupName
        formShortcut
        contact {
          address
          content
          fieldGroupName
          phone
          title
        }
      }
    }
  }
`;

export default PagesWithPreview({ preview: PREVIEW_QUERY })(PreviewPage);