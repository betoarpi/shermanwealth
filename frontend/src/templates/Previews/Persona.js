import React from 'react'
import gql from 'graphql-tag'
import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import PagesWithPreview from '../../components/previewComponents/pages'
import styled from 'styled-components'
import WorkWithUs from '../../components/WorkWithUs/index'

const PersonaContainer = styled.section`
  blockquote {
    background: var(--color-highlight_l3);
    border-bottom: 1px solid var(--color-highlight);
    border-top: 1px solid var(--color-highlight);
    color: var(--color-primary_l1);
    font-size:1.25rem;
    @import url('https://fonts.googleapis.com/css?family=IM+Fell+DW+Pica+SC&display=swap');
    margin: 2rem 0;
    padding: 2rem 5rem 2rem 2rem;
    position: relative;
    &:after {
      content: '"';
      color: var(--color-highlight_l1);
      font-size:8rem;
      font-family: 'IM Fell DW Pica SC', serif;
      font-weight:900;
      right:1rem;
      line-height:1;
      height:55px;
      position:absolute;
      bottom:1rem;
    }
    @media screen and (max-width: 479px){
      padding: 2rem 2rem 5rem;
    }
  }
`

const PersonaPreview = (props) => {
  const servicesData = props.preview.personaBy
  const workWithUs = servicesData.acf_work_with_us

  console.log(servicesData)

  return (
    <Layout>
      <MiniHero>
        <h1 dangerouslySetInnerHTML={{ __html: servicesData.title }} />
      </MiniHero>
      <PersonaContainer className="container">
        {
          servicesData.content ? <article dangerouslySetInnerHTML={{ __html: servicesData.content }} />
          : <article>There's no content to show</article>
        }
      </PersonaContainer>
      {
        workWithUs !== null
          ? (
            <WorkWithUs content={workWithUs.workWithUs} />
          )
          : null
      }
    </Layout>
  )
}

const PREVIEW_QUERY = gql`
query getPersonaPreview($id: Int!) {
  personaBy(personaId: $id) {
    id
    excerpt
    slug
    title
    content
    acf_personas_options {
      personaDescription
    }
    acf_work_with_us {
      workWithUs
    }
    acf_content_blocks {
      contentBlocks {
        __typename
        ... on Persona_AcfContentBlocks_ContentBlocks_IntroSection {
          introText
          fieldGroupName
        }
        ... on Persona_AcfContentBlocks_ContentBlocks_RegularContent {
          contentText
          fieldGroupName
        }
        ... on Persona_AcfContentBlocks_ContentBlocks_TwoColumns {
          twoColumns {
            columnLeft
            columnRight
            fieldGroupName
          }
          fieldGroupName
        }
        ... on Persona_AcfContentBlocks_ContentBlocks_ThreeColumns {
          threeColumnsBlock {
            columnLeft
            columnMiddle
            columnRight
            fieldGroupName
          }
          fieldGroupName
        }
        ... on Persona_AcfContentBlocks_ContentBlocks_FourColumns {
          fourColumnsBlock {
            columnLeft
            columnMiddleLeft
            columnMiddleRight
            columnRight
            fieldGroupName
          }
          fieldGroupName
        }
        ... on Persona_AcfContentBlocks_ContentBlocks_FeaturedContent {
          featuredContentBlock {
            fieldGroupName
            content
            image {
              id
              mediaItemUrl
            }
          }
        }
      }
    }
  }
}
`;

export default PagesWithPreview({ preview: PREVIEW_QUERY })(PersonaPreview);
