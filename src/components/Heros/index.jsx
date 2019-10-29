import React from 'react';
import { HeroMain, HeroStandard, HeroMini } from './styles';

export const MainHero = (props) => {
  const { children, imgSrc } = props;
  return (
    <HeroMain>
      <h1>
        {children}
      </h1>
      <img src={imgSrc} alt='Main Hero Banner' />
      <span className='triangle'> </span>
    </HeroMain>
  );
};

export const Hero = (props) => {
  const { children, imgSrc } = props;
  return (
    <HeroStandard>
      {children}
      <img src={imgSrc} alt='Hero Banner' />
      <span className='triangle'> </span>
    </HeroStandard>
  );
};

export const MiniHero = (props) => {
  const { children } = props;
  return (
    <HeroMini>
      {children}
      <span className='triangle'> </span>
    </HeroMini>
  );
};
