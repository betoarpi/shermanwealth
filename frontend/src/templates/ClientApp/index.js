import React, { Component } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { MiniHero } from '../../components/Heros/index'
import { BtnLinkPrimary, BtnLinkCTA } from '../../components/Buttons/index'
import { graphql } from 'gatsby'
import ClientAppIcon from '../../images/icons8-login-100.png'
import { ClientAppGrid, FeaturesAppGrid, GetStartedDiv } from './styles'
import Img from 'gatsby-image'

export default class ClientApp extends Component {
  render() {
    const { data } = this.props
    const features = data.wordpressPage.acf.app_features
    console.log(features)
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
            <BtnLinkPrimary>
              Download Android App
            </BtnLinkPrimary>
            <BtnLinkPrimary>
              Download iOS App
            </BtnLinkPrimary>
            <BtnLinkCTA>
              Log In Online
            </BtnLinkCTA>
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
            <BtnLinkCTA>GET STARTED</BtnLinkCTA>
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
      yoast_meta {
    	  name
        property
        content
    	}
    	yoast_title
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
    }
  }
`
