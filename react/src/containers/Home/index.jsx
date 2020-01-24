/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MainHero } from '../../components/Heros/index';
import Persona from '../../components/Persona/index';
import OurCommitment from '../../components/OurCommitment/index';
import Service from '../../components/Service';
import FeaturedIn from '../../components/FeaturedIn/index';
import { BtnLinkPrimary, BtnLinkCTA } from '../../components/Buttons/index';
import JourneyImg from '../../assets/img/homepage-hero.jpg';
import { PersonasContainer, ServicesContainer, RiskTolerance } from './styles';

import initialState from '../../initialState';

const Home = () => {
  const { personas, services } = initialState;

  return (
    <>
      <MainHero
        key='main-hero__home'
        imgSrc={JourneyImg}
      >
        <span>Where are you in</span>
        <br />
        your journey?
        <FaChevronDown />
      </MainHero>
      <PersonasContainer className='personas__container'>
        {
          personas.map((persona) => (
            <Persona
              key={persona.id}
              title={persona.title}
            >
              <p>{persona.description}</p>
            </Persona>
          ))
        }
      </PersonasContainer>
      <OurCommitment />
      <ServicesContainer className='services__container'>
        {
          services.map((service) => <Service key={service.id} {...service} />)
        }
        <BtnLinkCTA key='services__start-here' weblink='/'>
          Start Here
        </BtnLinkCTA>
      </ServicesContainer>
      <FeaturedIn />
      <RiskTolerance className='container'>
        <h3>What is your risk tolerance?</h3>
        <p>While the stock market’s dips and climbs can be thrilling and/or nerve-wracking, the key to successful investing is to establish a sound and steady investment strategy that’s aligned with your own personal risk tolerance.</p>
        <BtnLinkPrimary key='risk-number' weblink='/'>
          Find out your risk number
        </BtnLinkPrimary>
      </RiskTolerance>
    </>
  );
};

export default Home;
