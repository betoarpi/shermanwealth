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


const ServicePreview = (props) => {
  const servicesData = props.preview.serviceBy

  const workWithUs = servicesData.acf_work_with_us
  const contentBlocks = servicesData.acf_content_blocks.contentBlocks
  console.log(contentBlocks)

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
              case 'Service_AcfContentBlocks_ContentBlocks_IntroSection':
                return <IntroSectionBlock key={block.id} intro_text={block.introText} />
              case 'Service_AcfContentBlocks_ContentBlocks_RegularContent':
                return <RegularContent key={index} content_text={block.contentText}  />
              case 'Service_AcfContentBlocks_ContentBlocks_TwoColumns':
                return <TwoColumnsBlock key={block.id}  two_columns={block.twoColumns} />
              case 'Service_AcfContentBlocks_ContentBlocks_ThreeColumns':
                return <ThreeColumnsBlock key={block.id} three_columns_block={block.threeColumnsBlock} />
              case 'Service_AcfContentBlocks_ContentBlocks_FourColumns':
                return <FourColumnsBlock key={block.id} four_columns_block={block.fourColumnsBlock} />
              case 'Service_AcfContentBlocks_ContentBlocks_FeaturedContent':
                return <FeaturedContentBlock key={block.id} featured_content_block={block.featuredContentBlock} />
              default:
                return null
            }
          })
        }
        </article>
      </section>
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
          title
          slug
          id
        }
      }
    }
    serviceBy(serviceId: $id) {
      id
      title
      acf_work_with_us {
        workWithUs
      }
      acf_content_blocks {
        fieldGroupName
        contentBlocks {
          ... on Service_AcfContentBlocks_ContentBlocks_IntroSection {
            fieldGroupName
            introText
          }
          ... on Service_AcfContentBlocks_ContentBlocks_RegularContent {
            contentText
            fieldGroupName
          }
          ... on Service_AcfContentBlocks_ContentBlocks_TwoColumns {
            fieldGroupName
          }
          ... on Service_AcfContentBlocks_ContentBlocks_ThreeColumns {
            fieldGroupName
          }
          ... on Service_AcfContentBlocks_ContentBlocks_FourColumns {
            fieldGroupName
          }
          ... on Service_AcfContentBlocks_ContentBlocks_FeaturedContent {
            fieldGroupName
          }
        }
      }
    }
  }
`;

export default PagesWithPreview({ preview: PREVIEW_QUERY })(ServicePreview);
