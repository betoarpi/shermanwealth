import React from 'react';
import { MiniHero } from '../components/Heros/index';
import WorkWithUs from '../components/WorkWithUs';
import Persona from '../components/Persona';

const WhoWeServe = () => {
  return (
    <>
      <MiniHero
        imgSrc='/'
      >
        Fancy text title
      </MiniHero>
      <section className='who-we-serve'>
        <p>Our clients come from a wide range of backgrounds—from young families who are enjoying early success, to professionals who are thriving in their career, to high-net-worth couples looking forward to retirement.</p>

        <h2>Where are you in your journey?</h2>

        <div className='who-we-serve__grid'>
          <Persona
            title='Persona Case'
            description={[<p>we provide professional advisory</p>]}
            url='/'
            imgSrc='/'
          />
          <Persona
            title='Persona Case'
            description={[<p>we provide professional advisory</p>]}
            url='/'
            imgSrc='/'
          />
          <Persona
            title='Persona Case'
            description={[<p>we provide professional advisory</p>]}
            url='/'
            imgSrc='/'
          />
          <Persona
            title='Persona Case'
            description={[<p>we provide professional advisory</p>]}
            url='/'
            imgSrc='/'
          />
          <Persona
            title='Persona Case'
            description={[<p>we provide professional advisory</p>]}
            url='/'
            imgSrc='/'
          />
          <Persona
            title='Persona Case'
            description={[<p>we provide professional advisory</p>]}
            url='/'
            imgSrc='/'
          />
        </div>

        <p>
          Although diverse, our clients share an appreciation for personalized financial and investment services that consider only their best interests. When you require the assistance of another professional, like an attorney, CPA or insurance agent, we have a trategic network of professionals that we can collaborate with to carry out your needs. We’ll oversee the process to ake sure all the details are taken care of, and we’ll communicate with you each step of the way so you can feel
          confident that your goals are being met.
        </p>
      </section>

      <WorkWithUs />
    </>
  );
};

export default WhoWeServe;
