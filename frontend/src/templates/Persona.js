import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { MiniHero } from '../components/Heros/index'
import WorkWithUs from '../components/WorkWithUs/index'

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

export default class PostPersona extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO title={data.wordpressWpPersona.yoast_title} yoastMeta={null} />
        <MiniHero>
          <h1 dangerouslySetInnerHTML={{ __html: data.wordpressWpPersona.title }} />
        </MiniHero>
        <PersonaContainer className='container'>
          {data.wordpressWpPersona.content ? <article dangerouslySetInnerHTML={{ __html: data.wordpressWpPersona.content }} />
            : <article>There's no content to show</article>
          }
        </PersonaContainer>
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