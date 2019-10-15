import React from 'react';

const MainHero = (props) => {
  const { title, imgSrc } = props;
  return (
    <section className='hero hero--main'>
      <h1>
        {title}
      </h1>
      <img src={imgSrc} alt={title} className='hero__img' />
      <span className='hero__triangle'> </span>
    </section>
  );
};

export default MainHero;
