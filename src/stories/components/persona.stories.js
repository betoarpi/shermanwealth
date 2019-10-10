import React from 'react';

export default { title: 'Persona' };

export const persona = () => {
  return (
    <article className='persona'>
      <h4>Persona Title</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo doloribus accusamus tempore suscipit voluptatum ratione minus sunt nobis quis alias, quas sint, optio, dolores corrupti quia nulla molestias est facilis.</p>
      <a href='/'>
        Learn More
        <i className='fas fa-chevron-right'> </i>
      </a>
    </article>
  );
};
