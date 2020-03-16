import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../../components/layout'
import { MainHero } from '../../../components/Heros/index'
import Persona from '../../../components/Persona/index'
import Service from '../../../components/Service/index'
import { BtnLinkCTA, BtnLinkSecondary } from '../../../components/Buttons/index'
import slug from '../../../utils/slug'
import {
  OurCommitmentElement,
  PersonasContainer,
  ServicesContainer,
  FeaturedInLogos,
  FindMyRiskNumber
} from '../../../styles/IndexStyles'

export default function Home({ location, acf_our_commitment, acf_hero, acf_clients_grid, acf_services_grid, acf_riskalyze, acf_simplify, acf_featured_in_logos }) {
  return (
    <Layout location={location}>
      <MainHero
        key='main-hero__home'
        imgSrc={acf_hero.hero.image.mediaItemUrl}
        isPreview={true}
      >
        <h1
          dangerouslySetInnerHTML={{
            __html: acf_hero.hero.mainText,
          }}
        />
      </MainHero>
      <OurCommitmentElement>
        <article>
          <div className='commitment' dangerouslySetInnerHTML={{ __html: acf_our_commitment.ourCommitment.content }} />
          <div className="logos">
            {acf_our_commitment.ourCommitment.trustLogos.napfaLogo &&
              <a href={acf_our_commitment.ourCommitment.trustLogos.napfaLogoLink} target='_blank' rel='noopener noreferrer'>
                <img src={acf_our_commitment.ourCommitment.trustLogos.napfaLogo.mediaItemUrl} alt='NAPFA logo' />
              </a>
            }
            {acf_our_commitment.ourCommitment.trustLogos.feeOnlyLogo &&
              <a href={acf_our_commitment.ourCommitment.trustLogos.feeOnlyLogoLink} target='_blank' rel='noopener noreferrer'>
                <img src={acf_our_commitment.ourCommitment.trustLogos.feeOnlyLogo.mediaItemUrl} alt='NAPFA logo' />
              </a>
            }
          </div>
        </article>
      </OurCommitmentElement>
      <PersonasContainer className='personas__container container'>
        <h2 className='container__title'>{acf_clients_grid.clientPersonasSectionTitle}</h2>
        <div className='personas__container__grid'>
          {
            acf_clients_grid.clientPersonasGrid.map((persona) => (
              <Persona
                key={persona.id}
                title={persona.title}
              >
                <div dangerouslySetInnerHTML={{ __html: persona.excerpt, }} />
                <Link to={`/persona/${slug(persona.title)}`}>
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
        <h2>{acf_services_grid.servicesGridTitle}</h2>
        <div>
          {
            acf_services_grid.servicesGrid.map((service) => (
              <Service
                key={service.id}
                title={service.title}
                url={`/services/${slug(service.title)}`}
              >
                <div dangerouslySetInnerHTML={{ __html: service.excerpt, }} />
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
            __html: acf_riskalyze.riskalyze.riskalyzeEmbed,
          }}
        />
        <BtnLinkSecondary weblink='#'>
          Find My Risk Number
        </BtnLinkSecondary>
      </FindMyRiskNumber>
      <FindMyRiskNumber className='container'>
        <div
          dangerouslySetInnerHTML={{
            __html: acf_simplify.simplify.simplifyEmbed,
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
              {acf_featured_in_logos.featuredInLogos.map(featured => (
                <a href={featured.logoLink} target='_blank' rel='noopener noreferrer' key={featured.logo.id}>
                  <img src={featured.logo.mediaItemUrl} alt={featured.logo.title} />
                </a>
              ))}
            </div>
          </div>
        </FeaturedInLogos>
    </Layout>
  )
}
