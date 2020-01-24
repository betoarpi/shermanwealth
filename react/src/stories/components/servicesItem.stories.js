import React from 'react';

export default { title: 'Services Item' };

export const servicesItem = () => {
  return (
    <article className='services__item'>
      <h3>Service Title</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo doloribus accusamus tempore suscipit voluptatum ratione minus sunt nobis quis alias, quas sint, optio, dolores corrupti quia nulla molestias est facilis.</p>
      <a href='/'>
        Learn More
        <i className='fas fa-chevron-right'> </i>
      </a>
    </article>
  );
};
