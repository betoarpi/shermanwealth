import React from 'react'
import Layout from '../../../components/layout'
import { MiniHero } from '../../../components/Heros/index'
import { ClientAppGrid, FeaturesAppGrid, GetStartedDiv } from '../../ClientApp/styles'
import { PrimaryBtnLink, CTABtnLink } from '../../../components/Buttons/styles'
import { BtnLinkCTA } from '../../../components/Buttons/index'
import { FaAndroid, FaAppStore, FaGlobeAmericas } from 'react-icons/fa'

export default function ClientApp({ location, title, content, acf }) {
  const { appFeatures } = acf
  return (
    <Layout location={location}>
      <MiniHero>
        <h1>
          {title}
        </h1>
      </MiniHero>
      <ClientAppGrid className='container'>
          <div
            className="client-app-content"
          >
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: content,
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
            <img src={acf.appScreenshot.mediaItemUrl} alt="Client App Screenshot" />
          </div>
      </ClientAppGrid>
      <section className="container">
        {
          appFeatures.length > 0
            ? (
              <FeaturesAppGrid className='container'>
                {
                  appFeatures.map((feature, index) => {
                    return (
                      <div key={index}>
                        <img src={feature.icon.mediaItemUrl} alt="Client App Screenshot" />
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
