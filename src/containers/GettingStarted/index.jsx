import React from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { BookAppointment, ContactUs } from './styles';
import { MiniHero } from '../../components/Heros/index';
import Social from '../../components/Social/index';
import { BtnLinkCTA, BtnPrimary } from '../../components/Buttons';
import Rocket from '../../assets/img/icons/icons8-rocket-100.png';

const GettingStarted = () => (
  <>
    <MiniHero>
      <h1>Getting Started</h1>
      <img src={Rocket} alt='Get Started Rocket' />
    </MiniHero>
    <BookAppointment className='container'>
      <h2 className='container__title'>Book an Appointment</h2>
      <h4>Plase select an event type</h4>

      embed goes here
    </BookAppointment>

    <ContactUs className='container'>
      <article>
        <h2 className='container__title'>Contact Us</h2>
        <address>
          <FaMapMarkerAlt />
          <span>
            Sherman Wealth Management 9841 Washingtonian
            <br />
            Blvd, #247 Gaithersburg, Maryland 20878
          </span>
          <FaPhone />
          <a href='tel:240-428-1622'>240-428-1622</a>
        </address>
        <Social />
        <BtnLinkCTA weblink='/'>
          Book an appointment
        </BtnLinkCTA>
        <p>We serve clients locally and across the country for comprehensive financial planning including retirement planning, investment management and employee education and consulting. </p>
        <p>An initial meeting can be held at our office or we can meet virtually with a video call (or just a phone call if you prefer). Use the calendar below to book an appointment or fill out the form and we will be in touch within 24 hours.</p>
      </article>

      <form className='contact--form'>
        <h3>Questions? Just Ask!</h3>
        <label htmlFor='name'>
          Your Name
          <span className='danger-text'>*</span>
          <input type='text' id='name' />
        </label>
        <label htmlFor='email'>
          Your Email
          <span className='danger-text'>*</span>
          <input type='email' id='email' />
        </label>
        <label htmlFor='message'>
          Your message
          <span className='danger-text'>*</span>
          <textarea id='message' cols='30' rows='10' defaultValue='Message' />
        </label>
        <label htmlFor='referral'>
          How did you hear of us?
          <input type='text' id='referral' />
        </label>
        <BtnPrimary>Send</BtnPrimary>
      </form>
    </ContactUs>
  </>
);

export default GettingStarted;
