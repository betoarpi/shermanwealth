import React from 'react';
import MainHero from '../components/MainHero';
import Persona from '../components/Persona';
import OurCommitment from '../components/OurCommitment';
import Service from '../components/Service';
import FeaturedIn from '../components/FeaturedIn';
import { BtnLinkPrimary, BtnLinkCTA } from '../components/Buttons';

const Home = () => (
  <>
    <MainHero
      imgSrc='/'
      title={
        [<span>Where are you in</span>,
          'your Journey']
      }
    />
    <section className='persona__container'>
      <Persona
        title='Persona Name'
        description={[<p>description</p>]}
        url='/'
      />
      <Persona
        title='Persona Name'
        description={[<p>description</p>]}
        url='/'
      />
      <Persona
        title='Persona Name'
        description={[<p>description</p>]}
        url='/'
      />
      <Persona
        title='Persona Name'
        description={[<p>description</p>]}
        url='/'
      />
      <Persona
        title='Persona Name'
        description={[<p>description</p>]}
        url='/'
      />
      <Persona
        title='Persona Name'
        description={[<p>description</p>]}
        url='/'
      />
    </section>
    <OurCommitment />
    <section className='services'>
      <Service
        title='Service Name'
        description={[<p>description</p>]}
        url='/'
      />
      <Service
        title='Service Name'
        description={[<p>description</p>]}
        url='/'
      />
      <Service
        title='Service Name'
        description={[<p>description</p>]}
        url='/'
      />
      <Service
        title='Service Name'
        description={[<p>description</p>]}
        url='/'
      />
      <Service
        title='Service Name'
        description={[<p>description</p>]}
        url='/'
      />
      <Service
        title='Service Name'
        description={[<p>description</p>]}
        url='/'
      />
      <BtnLinkCTA weblink='/' btnTxt='Start Here' />
    </section>
    <FeaturedIn />
    <div className='risk-tolerance'>
      <h3>What is your risk tolerance?</h3>
      <p>While the stock market’s dips and climbs can be thrilling and/or nerve-wracking, the key to successful investing is to establish a sound and steady investment strategy that’s aligned with your own personal risk tolerance.</p>
      <BtnLinkPrimary weblink='/' btnTxt='Find out your risk number' />
    </div>
  </>
);

export default Home;
