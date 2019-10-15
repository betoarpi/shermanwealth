import React from 'react';

const Persona = (props) => {
  const { id, title, description, url } = props;
  return (
    <article className='persona' key={id}>
      <h4>{title}</h4>
      {description}
      <a href={url}>
        Learn More
        <i className='fas fa-chevron-right'> </i>
      </a>
    </article>
  );
};

export default Persona;
