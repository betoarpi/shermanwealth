import React from 'react'
import Layout from '../../../components/layout'
import { MiniHero } from '../../../components/Heros/index'
import IntroSectionBlock from '../../../components/IntroSection/index'
import RegularContent from '../../../components/RegularContent/index'
import { TwoColumnsBlock, ThreeColumnsBlock, FourColumnsBlock } from '../../../components/Columns'
import FeaturedContentBlock from '../../../components/FeaturedContent/index'

export default function FlexibleContent({ title, location, content, pageTemplate, contentBlocks }) {
  return (
    <Layout location={location}>
      <MiniHero>
        <h1>
          {title}
        </h1>
      </MiniHero>
      <section className='container'>
        {
          pageTemplate === 'page-flexiblecontent.php'
          ?  <article>
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
          : <article dangerouslySetInnerHTML={{ __html: content }} />
        }
      </section>
    </Layout>
  )
}
