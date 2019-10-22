import React from 'react';

const Service = (props) => {
  const { title, description, url } = props;
  return (
    <article className='services__item'>
      <h3>{title}</h3>
      {description}
      <a href={url}>
        Learn More
        <i className='fas fa-chevron-right'> </i>
      </a>
    </article>
  );
};

export default Service;
