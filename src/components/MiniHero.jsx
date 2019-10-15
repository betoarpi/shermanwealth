import React from 'react';

const Hero = (props) => {
  const { title, imgSrc } = props;
  return (
    <section className='hero'>
      <h1>
        {title}
      </h1>
      <img src={imgSrc} alt={title} className='hero__img' />
      <span className='hero__triangle'> </span>
    </section>
  );
};

export default Hero;
