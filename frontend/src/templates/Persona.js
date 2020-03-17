import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { MiniHero } from '../components/Heros/index'
import WorkWithUs from '../components/WorkWithUs/index'

const PersonaSection = styled.section`
  article{
    > blockquote {
      &::after {
        content: none;
      }
    }
  }
`

export default class PostPersona extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO title={data.wordpressWpPersona.yoast_title} yoastMeta={null} />
        <MiniHero>
          <h1 dangerouslySetInnerHTML={{ __html: data.wordpressWpPersona.title }} />
        </MiniHero>
        <PersonaSection className='container'>
          {data.wordpressWpPersona.content ? <article dangerouslySetInnerHTML={{ __html: data.wordpressWpPersona.content }} />
            : <article>There's no content to show</article>
          }
        </PersonaSection>
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
      content
      wordpress_id
      acf {
        persona_description
        work_with_us
      }
      yoast_meta {
        name
        property
      }
      yoast_title
    }
  }
`