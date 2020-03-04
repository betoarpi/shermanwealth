import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { BtnLinkCTA, BtnLinkSecondary } from '../components/Buttons/index'
import { MainHero } from '../components/Heros/index'
import slug from '../utils/slug'
import Persona from '../components/Persona/index'
import Service from '../components/Service/index'

import {
  PersonasContainer,
  OurCommitmentElement,
  ServicesContainer,
  FeaturedInLogos,
  FindMyRiskNumber
} from '../styles/IndexStyles';

export default class IndexPage extends Component {
  render() {
    const { data } = this.props
    const {
      hero,
      client_personas_section_title,
      client_personas_grid,
      our_commitment,
      services_grid_title,
      services_grid,
      featured_in_logos,
      riskalyze,
      simplify
    } = data.wordpressPage.acf

    const yoast = {
      meta: data.wordpressPage.yoast_meta,
      title: data.wordpressPage.yoast_title
    }

    return (
      <Layout>
        <SEO title={yoast.title} yoastMeta={yoast.meta} />

        <MainHero
          key='main-hero__home'
          imgSrc={hero.image !== null && hero.image.localFile.childImageSharp.fluid}
        >
          <h1
            dangerouslySetInnerHTML={{
              __html: hero.main_text,
            }}
          />
        </MainHero>

        <OurCommitmentElement>
          <article>
            <div className='commitment' dangerouslySetInnerHTML={{ __html: our_commitment.content }} />
            <div className='logos'>
              {our_commitment.trust_logos.napfa_logo &&
                <a href={our_commitment.trust_logos.napfa_logo_link} target='_blank' rel='noopener noreferrer'>
                  <Img fluid={our_commitment.trust_logos.napfa_logo.localFile.childImageSharp.fluid} alt='NAPFA logo' />
                </a>
              }
              {our_commitment.trust_logos.fee_only_logo &&
                <a href={our_commitment.trust_logos.fee_only_logo_link} target='_blank' rel='noopener noreferrer'>
                  <Img fluid={our_commitment.trust_logos.fee_only_logo.localFile.childImageSharp.fluid} alt='Fee Only Member logo' />
                </a>
              }
            </div>
          </article>
        </OurCommitmentElement>

        <PersonasContainer className='personas__container container'>
          <h2 className='container__title'>{client_personas_section_title}</h2>
          <div className='personas__container__grid'>
            {
              client_personas_grid.map((persona) => (
                <Persona
                  key={persona.post_name}
                  title={persona.post_title}
                >
                  <p>{persona.post_excerpt}</p>
                  <Link to={`/persona/${slug(persona.post_title)}`}>
                    Learn More
                    <i className='fas fa-chevron-right' />
                  </Link>
                </Persona>
              ))
            }
          </div>
          <BtnLinkCTA key='who-we-serve' weblink='/who-we-serve'>
            Learn More
          </BtnLinkCTA>
        </PersonasContainer>

        <ServicesContainer className='container'>
          <h2>{services_grid_title}</h2>
          <div>
            {
              services_grid.map((service) => (
                <Service
                  key={service.post_name}
                  title={service.post_title}
                  url={`/services/${slug(service.post_name)}`}
                >
                  <p>{service.post_excerpt}</p>
                </Service>
              ))
            }
          </div>
          <BtnLinkCTA key='our-services' weblink='/services/overview/'>
            Learn More
          </BtnLinkCTA>
        </ServicesContainer>

        <FindMyRiskNumber className='container'>
          <div
            dangerouslySetInnerHTML={{
              __html: riskalyze.riskalyze_embed,
            }}
          />
          <a href='https://pro.riskalyze.com/embed/42b92ac218eb0bd0fab5' className='button-primary' target='_blank' noreeler noopener>Find My Risk Number</a>
        </FindMyRiskNumber>

        <FindMyRiskNumber className='container'>
          <div
            dangerouslySetInnerHTML={{
              __html: simplify.simplify_embed,
            }}
          />
          <BtnLinkSecondary weblink='/client-portal'>
            See How
          </BtnLinkSecondary>
        </FindMyRiskNumber>

        <FeaturedInLogos>
          <div className='container'>
            <h3 className='container__title'>Featured In</h3>
            <div className='logos'>
              {featured_in_logos.map(featured => (
                <a href={featured.logo_link} target='_blank' rel='noopener noreferrer' key={featured.logo.id}>
                  <Img fluid={featured.logo.localFile !== null && featured.logo.localFile.childImageSharp.fluid} alt={featured.logo.title} />
                </a>
              ))}
            </div>
          </div>
        </FeaturedInLogos>
      </Layout>
    )
  }
}

export const query = graphql`
  query HomePageQuery {
    wordpressPage(template: {eq: "page-homepage.php"}){
      slug
      yoast_meta {
        name
        property
        content
      }
      yoast_title
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
        client_personas_section_title
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
              localFile {
                childImageSharp {
                  fluid(maxWidth: 260) {
                    ...GatsbyImageSharpFluid,
                  }
                }
              }
            }
            napfa_logo_link
            fee_only_logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 260) {
                    ...GatsbyImageSharpFluid,
                  }
                }
              }
              title
            }
            fee_only_logo_link
          }
        }
        services_grid_title
        services_grid {
          guid
          post_excerpt
          post_title
          post_status
          post_name
        }
        featured_in_logos {
          logo_link
          logo {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 180) {
                  ...GatsbyImageSharpFluid,
                }
              }
            }
          }
        }
        riskalyze {
          riskalyze_embed
        }
        simplify {
          simplify_embed
        }
      }
    }
  }
`
