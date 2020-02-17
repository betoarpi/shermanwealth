import React, { Component } from 'react';
import { graphql } from 'gatsby';

import SEO from '../../components/seo'
import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import Persona from '../../components/Persona/index';

import WhoWeServeElement from './styles'
import { FaChevronDown } from 'react-icons/fa'
import ClientsIcon from '../../images/icons8-people-100.png'
import { PersonaGrid } from '../../components/Persona/styles';

export default class WhoWeServe extends Component {

  filterSelectedPersonas = (personas, selectedPersonas) => {
    const newArray = []
    selectedPersonas.map((item) => {
      personas.map((persona) => {
        if (persona.node.wordpress_id === item.wordpress_id) {
          newArray.push(persona)
        }
        return null
      })
      return null
    })
    return newArray
  }

  render() {
    const { data } = this.props
    const { acf } = data.wordpressPage
    const allPersonas = data.allWordpressWpPersona.edges
    const selectedPersonas = acf.client_personas_grid

    const personas = this.filterSelectedPersonas(allPersonas, selectedPersonas)

    return (
      <Layout>
        <SEO title={data.wordpressPage.yoast_title} yoastMeta={data.wordpressPage.yoast_meta} ></SEO>
        <MiniHero>
          <h1>{data.wordpressPage.title}</h1>
          <img src={ClientsIcon} alt='Who we serve icon' />
        </MiniHero>
        <WhoWeServeElement className='container'>
          <div className='intro'
            dangerouslySetInnerHTML={{
              __html: data.wordpressPage.content,
            }}
          />
          <h2 className='container__title'>
            Where are you in your journey?
            <FaChevronDown />
          </h2>
          <PersonaGrid className='persona__grid'>
            {
              personas.map((persona) => (
                <Persona
                  key={persona.node.wordpress_id}
                  imgUrl={persona.node.featured_media === null ? '/'
                    : persona.node.featured_media.localFile === null ? '/'
                      : persona.node.featured_media.localFile.childImageSharp.fluid
                  }
                  popUpDescription={persona.node.acf.persona_description}
                  slug={persona.node.slug}
                  modalTitle={persona.node.title}
                >
                  <h4 dangerouslySetInnerHTML={{
                    __html: persona.node.title,
                  }}
                  />
                </Persona>
              ))
            }
          </PersonaGrid>
        </WhoWeServeElement>
      </Layout>
    );
  }
}

export const query = graphql`
  query WhoWeServeQuery($slug: String!) {
    wordpressPage(slug: {eq: $slug }) {
      title
      slug
      content
      template
      acf {
        client_personas_grid {
          post_title
          post_status
          wordpress_id
        }
      }
      yoast_meta {
        name
        property
        content
      }
      yoast_title
    }
    allWordpressWpPersona {
      edges {
        node {
          excerpt
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 800){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          slug
          title
          wordpress_id
          acf {
            persona_description
            work_with_us
          }
        }
      }
    }
  }
`
