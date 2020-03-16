import React from 'react'
import Layout from '../../../components/layout'
import { MiniHero } from '../../../components/Heros/index'
import { BtnCTA } from '../../../components/Buttons/index'
import { Helmet } from 'react-helmet'
import { ContactUs, BookAppointment } from '../../GetStarted/styles'
import { FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa'

export default function GetStarted({ location, title, contact }) {
  return (
    <Layout location={location}>
      <Helmet>
        <script async src="https://cdn.oncehub.com/mergedjs/so.js" />
      </Helmet>
      <MiniHero>
        <h1>
          {title}
        </h1>
      </MiniHero>
      <BookAppointment className='container'>
        <h2 className='container__title'>Book an Appointment</h2>

        <div id="SOIDIV_BradSherman" data-so-page="BradSherman" data-height="550" data-style="border: 0px solid #d8d8d8; min-width: 290px; max-width: 900px;" data-psz="00" />
      </BookAppointment>
      <ContactUs className='container'>
          <article>
            <h4 dangerouslySetInnerHTML={{ __html: title }} />
            <div className='contact__info'>
              <FaMapMarkerAlt />
              <address dangerouslySetInnerHTML={{ __html: contact.address }} />
            </div>

            <div className='contact__info'>
              <FaMobileAlt />
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>

            <BtnCTA id="SOIBTN_BradSherman">
              Book an Appointment
            </BtnCTA>

            <div dangerouslySetInnerHTML={{ __html: contact.content }} />
          </article>
        </ContactUs>
    </Layout>
  )
}
