import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { FaChevronDown } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { BtnLinkCTA } from '../components/Buttons/index'
import { MainHero } from '../components/Heros/index'
import Persona from '../components/Persona/index'
import Service from '../components/Service/index'

import {
  PersonasContainer,
  OurCommitmentElement,
  ServicesContainer,
  FeaturedInLogos,
  RiskTolerance
} from '../styles/IndexStyles';

export default class IndexPage extends Component {
  render() {
    const { data } = this.props
    const {
      hero,
      client_personas_grid,
      our_commitment,
      services_grid,
      featured_in_logos,
      riskalyze
    } = data.wordpressPage.acf
    return (
      <Layout>
        <SEO title='Home' />
        <MainHero
          key='main-hero__home'
          imgSrc={hero.image.localFile === null ?
            'https://via.placeholder.com/1200x350' :
            hero.image.localFile.childImageSharp.fluid
          }
        >
          <h1
            dangerouslySetInnerHTML={{
              __html: hero.main_text,
            }}
          />
          <FaChevronDown />
        </MainHero>
        <PersonasContainer className='personas__container'>
          {
            client_personas_grid.map((persona) => (
              <Persona
                key={persona.post_name}
                title={persona.post_title}
              >
                <p>{persona.post_excerpt}</p>
              </Persona>
            ))
          }
          <BtnLinkCTA key='who-we-serve' weblink='/who-we-serve'>
            Learn More
          </BtnLinkCTA>
        </PersonasContainer>
        <OurCommitmentElement>
          <article>
            <div className='commitment'>
              <h2>Our Commitment</h2>
              <div dangerouslySetInnerHTML={{
                __html: our_commitment.content,
              }}
              />
            </div>
            <div className='logos'>
              <img src={our_commitment.trust_logos.napfa_logo.source_url} alt='NAPFA logo' />
              <img src={our_commitment.trust_logos.fee_only_logo.source_url} alt='Fee Only Member logo' />
            </div>
          </article>
        </OurCommitmentElement>
        <ServicesContainer>
          {
            services_grid.map((service) => (
              <Service
                key={service.post_name}
                title={service.post_title}
              >
                <p>{service.post_excerpt}</p>
              </Service>
            ))
          }
          <BtnLinkCTA key='our-services' weblink='/our-services'>
            Learn More
          </BtnLinkCTA>
        </ServicesContainer>
        <FeaturedInLogos>
          <div className='container'>
            <h3 className='container__title'>Featured In</h3>
            <div className='logos'>
              {featured_in_logos.map((featured) => (
                <img key={featured.logo.id} src={featured.logo.source_url} alt={featured.logo.title} />
              ))}
            </div>
          </div>
        </FeaturedInLogos>
        <RiskTolerance
          className='container'
          dangerouslySetInnerHTML={{
            __html: riskalyze.riskalyze_embed,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query HomePageQuery {
    wordpressPage(template: {eq: "page-homepage.php"}){
      slug
      acf {
        hero {
          custom_hero
          main_text
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid,
                }
              }
            }
          }
        }
        client_personas_grid {
          guid
          post_excerpt
          post_title
          post_status
          post_name
        }
        our_commitment {
          content
          trust_logos {
            napfa_logo {
              source_url
            }
            fee_only_logo {
              source_url
              title
            }
          }
        }
        services_grid {
          guid
          post_excerpt
          post_title
          post_status
          post_name
        }
        featured_in_logos {
          logo {
            id
            source_url
          }
        }
        riskalyze {
          riskalyze_embed
        }
      }
    }
  }
`
