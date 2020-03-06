import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { MiniHero } from '../../components/Heros/index'
import { BtnLinkCTA } from '../../components/Buttons/index'

import { ClientAppGrid, FeaturesAppGrid, GetStartedDiv } from './styles'
import { PrimaryBtnLink, CTABtnLink } from '../../components/Buttons/styles'

import { FaAndroid, FaAppStore, FaGlobeAmericas } from 'react-icons/fa'
import ClientAppIcon from '../../images/icons8-login-100.png'
import Img from 'gatsby-image'

export default class ClientApp extends Component {
  render() {
    const { data } = this.props
    const features = data.wordpressPage.acf.app_features
    return (
      <Layout>
        <SEO title={data.wordpressPage.yoast_title} yoastMeta={data.wordpressPage.yoast_meta} ></SEO>
        <MiniHero>
          <h1>{data.wordpressPage.title}</h1>
          <img src={ClientAppIcon} alt='Client App icon' />
        </MiniHero>
        {/* <div className='container'>
          <h3>Other sections pending to configure in DB and Gatsby</h3>
        </div> */}
        <ClientAppGrid className='container'>
          <div
            class="client-app-content"
          >
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: data.wordpressPage.content,
              }}
            />
            <PrimaryBtnLink
              as='a'
              className='btn'
              href='https://play.google.com/store/apps/details?id=com.advisorlynx.mobileadvisor.sherman&hl=en'
              target='_blank'
              rel='noopener noreferrer'>
              Download Android App <FaAndroid />
            </PrimaryBtnLink>
            <PrimaryBtnLink
              as='a'
              className='btn'
              href='https://itunes.apple.com/us/app/sherman-wealth-mobile/id1096339333?mt=8'
              target='_blank'
              rel='noopener noreferrer'>
              Download iOS App <FaAppStore />
            </PrimaryBtnLink>
            <CTABtnLink
              as='a'
              className='btn btn-secondary'
              href='https://login.orionadvisor.com/login.html?g=d48c12f4-f284-4b04-92af-7580bf573948'
              target='_blank' rel='noopener noreferrer'>
              Log In Online <FaGlobeAmericas />
            </CTABtnLink>
          </div>
          <div className="image-container">
            <Img fluid={data.wordpressPage.acf.app_screenshot.localFile.childImageSharp.fluid} alt="Client App Screenshot" />
          </div>
        </ClientAppGrid>
        <section className="container">
          {
            features.length > 0
              ? (
                <FeaturesAppGrid className='container'>
                  {
                    features.map((feature) => {
                      return (
                        <div>
                          <Img fluid={feature.icon.localFile.childImageSharp.fluid} alt="Client App Screenshot" />
                          <h4>
                            {feature.title}
                          </h4>
                          <p>{feature.description}</p>
                        </div>
                      )
                    })
                  }
                </FeaturesAppGrid>
              )
              : null
          }
          <GetStartedDiv>
            <BtnLinkCTA weblink='/contact-us'>GET STARTED</BtnLinkCTA>
          </GetStartedDiv>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query ClientAppQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
      template
      acf {
        app_screenshot {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        app_features {
          icon {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          description
          title
        }
      }
      yoast_meta {
        name
        property
        content
      }
      yoast_title
    }
  }
`
