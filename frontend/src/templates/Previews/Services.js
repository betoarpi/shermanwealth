import React from 'react'
import gql from 'graphql-tag'
import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import PagesWithPreview from '../../components/previewComponents/pages'
import ClientsIcon from '../../images/icons8-people-100.png'
import IntroSectionBlock from '../../components/IntroSection/index'
import RegularContent from '../../components/RegularContent/index'
import { TwoColumnsBlock, ThreeColumnsBlock, FourColumnsBlock } from '../../components/Columns'
import FeaturedContentBlock from '../../components/FeaturedContent/index'
import WorkWithUs from '../../components/WorkWithUs/index'
import Service from '../../components/Service/index'
import {
  ServicesContainer
} from '../../styles/IndexStyles';

const ServicePreview = (props) => {
  const { slug } = props.pageContext
  const servicesData = props.preview.servicesBy
  const services_grid = props.preview.services.edges

  const workWithUs = servicesData.acf_work_with_us
  const contentBlocks = servicesData.acf_content_blocks.contentBlocks

  return (
    <Layout>
      <MiniHero>
        <h1 dangerouslySetInnerHTML={{ __html: servicesData.title }} />
        <img src={ClientsIcon} alt='Who we serve icon' />
      </MiniHero>
      <section className='container'>
        <article>
        {
          contentBlocks.map((block, index) => {
            const typename = block.__typename
            switch(typename) {
              case 'Services_AcfContentBlocks_ContentBlocks_IntroSection':
                return <IntroSectionBlock key={block.id} intro_text={block.introText} />
              case 'Services_AcfContentBlocks_ContentBlocks_RegularContent':
                return <RegularContent key={index} content_text={block.contentText}  />
              case 'Services_AcfContentBlocks_ContentBlocks_TwoColumns':
                return <TwoColumnsBlock key={block.id}  two_columns={block.twoColumns} />
              case 'Services_AcfContentBlocks_ContentBlocks_ThreeColumns':
                return <ThreeColumnsBlock key={block.id} three_columns_block={block.threeColumnsBlock} />
              case 'Services_AcfContentBlocks_ContentBlocks_FourColumns':
                return <FourColumnsBlock key={block.id} four_columns_block={block.fourColumnsBlock} />
              case 'Services_AcfContentBlocks_ContentBlocks_FeaturedContent':
                return <FeaturedContentBlock key={block.id} featured_content_block={block.featuredContentBlock} />
              default:
                return null
            }
          })
        }
        </article>
      </section>
      <ServicesContainer className='container'>
          <h2>Our Services</h2>
          <div>
            {
              services_grid.map((service) => {
                if (service.node.slug === slug) {
                  return null
                } else if (service.node.servicesId === 433 || service.node.servicesId === 1178) {
                  return null
                } else {
                  return (
                    <Service
                      key={service.node.id}
                      title={service.node.title}
                      url={`/services/${service.node.slug}`}
                    />
                  )
                }
              })
            }
          </div>
      </ServicesContainer>
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
  query getPagePreview($id: Int!) {
    services {
      edges {
        node {
          servicesId
          title
          slug
          id
        }
      }
    }
    servicesBy(servicesId: $id) {
      id
      title
      acf_work_with_us {
        workWithUs
      }
      acf_content_blocks {
        contentBlocks {
          __typename
          ... on Services_AcfContentBlocks_ContentBlocks_IntroSection {
            introText
            fieldGroupName
          }
          ... on Services_AcfContentBlocks_ContentBlocks_RegularContent {
            contentText
            fieldGroupName
          }
          ... on Services_AcfContentBlocks_ContentBlocks_TwoColumns {
            twoColumns {
              columnLeft
              columnRight
              fieldGroupName
            }
            fieldGroupName
          }
          ... on Services_AcfContentBlocks_ContentBlocks_ThreeColumns {
            threeColumnsBlock {
              columnLeft
              columnMiddle
              columnRight
              fieldGroupName
            }
            fieldGroupName
          }
          ... on Services_AcfContentBlocks_ContentBlocks_FourColumns {
            fourColumnsBlock {
              columnLeft
              columnMiddleLeft
              columnMiddleRight
              columnRight
              fieldGroupName
            }
            fieldGroupName
          }
          ... on Services_AcfContentBlocks_ContentBlocks_FeaturedContent {
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

export default PagesWithPreview({ preview: PREVIEW_QUERY })(ServicePreview);
