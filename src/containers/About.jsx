import React from 'react';
import { Hero } from '../components/Heros/index';
import AboutMember from '../components/AboutMember';
import BradFamily from '../assets/img/brad-family.png';

const About = () => (
  <>
    <Hero
      imgSrc={BradFamily}
    >
      <h2>
        Tax and cost efficiency advice here,
        lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </h2>
    </Hero>
    <section className='container'>
      <h2 className='container__title'>Meet our team</h2>
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
