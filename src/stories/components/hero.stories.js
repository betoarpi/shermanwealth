import React from 'react';

export default { title: 'Hero' };

export const mainHero = () => {
  return (
    <section className='hero hero--main'>
      <h1>
        <span>Where are you in</span>
        your Journey
      </h1>
      <img src='/' alt='Hero img' className='hero__img' />
      <span className='hero__triangle'> </span>
    </section>
  );
};

export const hero = () => {
  return (
    <section className='hero'>
      <h1>
        Tax and cost efficiency advice here, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
      <img src='/' alt='Hero img' className='hero__img' />
      <span className='hero__triangle'> </span>
    </section>
  );
};

export const miniHero = () => {
  return (
    <section className='hero'>
      <h1>
        Page Title
      </h1>
      <img src='/' alt='Hero img' className='hero__img' />
      <span className='hero__triangle'> </span>
    </section>
  );
};