import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MiniHero } from '../../components/Heros/index';
import WorkWithUs from '../../components/WorkWithUs/index';
import Persona from '../../components/Persona/index';
import { PersonaGrid } from '../../components/Persona/styles';
import WhoWeServeElement from './styles';
import HeroIcon from '../../assets/img/icons/icons8-people-100.png';

import initialState from '../../initialState';

function WhoWeServe() {
  const { personas } = initialState;
  return (
    <>
      <MiniHero>
        <h1>Who we serve</h1>
        <img src={HeroIcon} alt='Who we serve icon' />
      </MiniHero>
      <WhoWeServeElement className='container'>
        <p>Our clients come from a wide range of backgrounds—from young families who are enjoying early success, to professionals who are thriving in their career, to high-net-worth couples looking forward to retirement.</p>

        <h2 className='container__title'>
          Where are you in your journey?
          <FaChevronDown />
        </h2>

        <PersonaGrid className='persona__grid'>
          {
            personas.map((persona) => (
              <Persona
                key={persona.id}
                title={persona.title}
                imgUrl={persona.imgUrl}
                popUpDescription={persona.description}
              />
            ))
          }
        </PersonaGrid>

        <p>
          Although diverse, our clients share an appreciation for personalized financial and investment services that consider only their best interests. When you require the assistance of another professional, like an attorney, CPA or insurance agent, we have a trategic network of professionals that we can collaborate with to carry out your needs. We’ll oversee the process to ake sure all the details are taken care of, and we’ll communicate with you each step of the way so you can feel
          confident that your goals are being met.
        </p>
      </WhoWeServeElement>
      <WorkWithUs />
    </>
  );
}

export default WhoWeServe;
