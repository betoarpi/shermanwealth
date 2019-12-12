import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { MiniHero } from '../components/Heros/index'

import { FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa'
import { BtnCTA } from '../components/Buttons/index'
import GetStartedIcon from '../images/icons8-rocket-100.png'

import SEO from '../components/seo'

export default class GetStarted extends Component {
  render() {
    const handleFreeConsultation = () => {
      var soqueryparam = "//go.oncehub.com/BradSherman?&bt=1"
      if (window.location.href.indexOf("?") > 0) {
        soqueryparam += "&" + window.location.href.slice(window.location.href.indexOf("?") + 1)
      }
      window.open(soqueryparam)
    }

    const { data } = this.props;
    return (
      <Layout>
        <SEO title={`${data.wordpressPage.title}`}></SEO>
        <Helmet>
          <script src="https://cdn.oncehub.com/mergedjs/so.js" />
        </Helmet>
        <MiniHero>
          <h1>{data.wordpressPage.title}</h1>
          <img src={GetStartedIcon} alt='Get Started icon' />
        </MiniHero>
        <section className='container'>
          <h2 className='container__title'>Book an Appointment</h2>

          <div id="SOIDIV_BradSherman" data-so-page="BradSherman" data-height="550" data-style="border: 0px solid #d8d8d8; min-width: 290px; max-width: 900px;" data-psz="00" />

          <article>
            <div>
              <h4 dangerouslySetInnerHTML={{ __html: data.wordpressPage.acf.contact.title }} />
              <div>
                <FaMapMarkerAlt />
                <address dangerouslySetInnerHTML={{ __html: data.wordpressPage.acf.contact.address }} />
              </div>

              <div>
                <FaMobileAlt />
                <a href={data.wordpressPage.acf.contact.phone}>{data.wordpressPage.acf.contact.phone}</a>
              </div>

              <BtnCTA id="SOIBTN_BradSherman" clickEvent={handleFreeConsultation}>
                Book an Appointment
              </BtnCTA>

              <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.acf.contact.content }} />
            </div>
          </article>
        </section>
      </Layout>
    );
  }
}

export const query = graphql`
  query GetStartedQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      template
      acf {
        contact {
          title
          address
          phone
          content
        }
      }
    }
  }
`
