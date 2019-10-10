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