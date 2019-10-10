import React from 'react';
import MainHero from '../components/MainHero';
import Persona from '../components/Persona';
import OurCommitment from '../components/OurCommitment';
import Service from '../components/Service';
import FeaturedIn from '../components/FeaturedIn';

const Home = () => (
  <>
    <MainHero />
    <section className='persona__container'>
      <Persona />
      <Persona />
      <Persona />
      <Persona />
      <Persona />
      <Persona />
    </section>
    <OurCommitment />
    <section className='services'>
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
      <a href='/' className='btn btn--cta'>Start Here</a>
    </section>
    <FeaturedIn />
    <div className='risk-tolerance'>
      <h3>What is your risk tolerance?</h3>
      <p>While the stock market’s dips and climbs can be thrilling and/or nerve-wracking, the key to successful investing is to establish a sound and steady investment strategy that’s aligned with your own personal risk tolerance.</p>
      <a href='/' className='btn btn--primary'>Find out your risk tolerance</a>
    </div>
  </>
);

export default Home;
