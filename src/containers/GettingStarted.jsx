import React from 'react';
import { MiniHero } from '../components/Heros/index';
import Social from '../components/Social';
import { BtnLinkCTA } from '../components/Buttons';

const GettingStarted = () => (
  <>
    <MiniHero
      imgSrc='/'
    >
      Fancy text title
    </MiniHero>
    <section className='appointment'>
      <h2>Book an Appointment</h2>
      <h4>Plase select an event type</h4>

      the appointment tool goes here
    </section>

    <section className='contact'>
      <article className='contact__us'>
        <h2>Contact Us</h2>
        <address>
          <i className='fas fa-location-arrow'> </i>
          <span>Some Address here</span>
          <i className='fas fa-phone'> </i>
          <a href='tel:240-428-1622'>240-428-1622</a>
        </address>
        <Social />
        <BtnLinkCTA weblink='/'>
          Book an appointment
        </BtnLinkCTA>
        <p>some paragrphs here</p>
        <p>some paragrphs here</p>
      </article>

      <form className='contact--form'>
        <label htmlFor='name'>
          Your Name
          <input type='text' id='name' />
        </label>
        <label htmlFor='email'>
          Your Email
          <input type='email' id='email' />
        </label>
        <label htmlFor='message'>
          Your message
          <textarea id='message' cols='30' rows='10' defaultValue='Message' />
        </label>
        <label htmlFor='referral'>
          How did you hear of us?
          <input type='text' id='referral' />
        </label>

      </form>
    </section>
  </>
);

export default GettingStarted;
