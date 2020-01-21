import React, { Component } from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { MiniHero } from '../components/Heros/index'
import IntroSectionBlock from '../components/IntroSection/index'
import RegularContent from '../components/RegularContent/index'
import { TwoColumnsBlock, ThreeColumnsBlock, FourColumnsBlock } from '../components/Columns'
import FeaturedContentBlock from '../components/FeaturedContent/index'
import WorkWithUs from '../components/WorkWithUs/index'

import ClientsIcon from '../images/icons8-people-100.png'

export default class PostPersona extends Component {
  render() {
    const { data } = this.props
    const contentBlocks = data.wordpressWpPersona.acf.content_blocks_persona
    return (
      <Layout>
        <SEO title={data.wordpressWpPersona.yoast_title} yoastMeta={null} />
        <MiniHero>
          <h1 dangerouslySetInnerHTML={{ __html: data.wordpressWpPersona.title }} />
          <img src={ClientsIcon} alt='Who we serve icon' />
        </MiniHero>
        <section className='container'>
          <article>
            {contentBlocks.map(block => {
              const typename = block.__typename
              switch (typename) {
                case 'WordPressAcf_intro_section':
                  return <IntroSectionBlock key={block.id} {...block} />
                case 'WordPressAcf_regular_content':
                  return <RegularContent key={block.id} {...block} />
                case 'WordPressAcf_two_columns':
                  return <TwoColumnsBlock key={block.id} {...block} />
                case 'WordPressAcf_three_columns':
                  return <ThreeColumnsBlock key={block.id} {...block} />
                case 'WordPressAcf_four_columns':
                  return <FourColumnsBlock key={block.id} {...block} />
                case 'WordPressAcf_featured_content':
                  return <FeaturedContentBlock key={block.id} {...block} />
                default:
                  return null
              }
            })}
          </article>
          
        </section>
        {
          data.wordpressWpPersona.acf.work_with_us !== null ?
          (
            <WorkWithUs content={data.wordpressWpPersona.acf.work_with_us} />
          )
          : null
        }
      </Layout>
    )
  }
}

export const query = graphql`
  query PersonaQuery($slug: String!) {
    wordpressWpPersona(slug: { eq: $slug }) {
      excerpt
      slug
      title
      wordpress_id
      yoast_meta {
    	  name
        property
    	}
    	yoast_title
      acf {
        persona_description
        work_with_us
        content_blocks_persona{
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