import React from 'react';
import Hero from '../components/Hero';
import AboutMember from '../components/AboutMember';

const About = () => (
  <>
    <Hero />
    <section className='about'>
      <h2>Meet our team</h2>
      <AboutMember
        name='Brad Sherman'
        jobTitle='President & Lead Advisor'
        bio='something here'
        img='/'
      />
      <AboutMember
        name='William Nunn'
        jobTitle='Analyst & Paraplanner'
        bio='something here'
        img='/'
      />
    </section>
  </>
);

export default About;
