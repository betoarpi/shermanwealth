import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'


import Layout from '../../components/layout'
import { MiniHero } from '../../components/Heros/index'
import SubmissionForm from '../../components/SubmissionForm/index'

import { ContactUs, BookAppointment } from './styles'
import { FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa'
import { BtnCTA } from '../../components/Buttons/index'

import SEO from '../../components/seo'

export default class GetStarted extends Component {
  componentDidMount() {

  }

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
        <SEO title={data.wordpressPage.yoast_title} yoastMeta={data.wordpressPage.yoast_meta} ></SEO>
        <Helmet>
          <script async src="https://cdn.oncehub.com/mergedjs/so.js" />
        </Helmet>
        <MiniHero>
          <h1>{data.wordpressPage.title}</h1>
        </MiniHero>
        <BookAppointment className='container'>
          <h2 className='container__title'>Book an Appointment</h2>

          <div id="SOIDIV_BradSherman" data-so-page="BradSherman" data-height="550" data-style="border: 0px solid #d8d8d8; min-width: 290px; max-width: 900px;" data-psz="00" />
        </BookAppointment>
        <ContactUs className='container'>
          <article>
            <h4 dangerouslySetInnerHTML={{ __html: data.wordpressPage.acf.contact.title }} />
            <div className='contact__info'>
              <FaMapMarkerAlt />
              <address dangerouslySetInnerHTML={{ __html: data.wordpressPage.acf.contact.address }} />
            </div>

            <div className='contact__info'>
              <FaMobileAlt />
              <a href={data.wordpressPage.acf.contact.phone}>{data.wordpressPage.acf.contact.phone}</a>
            </div>

            <BtnCTA id="SOIBTN_BradSherman" clickEvent={handleFreeConsultation}>
              Book an Appointment
            </BtnCTA>

            <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.acf.contact.content }} />
          </article>

          <SubmissionForm />
        </ContactUs>
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
      yoast_meta {
        name
        property
        content
      }
      yoast_title
    }
  }
`
