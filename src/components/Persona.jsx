import React from 'react';
import { BtnLinkPrimary } from './Buttons/index';

const Persona = (props) => {
  const { title, description, url, imgSrc } = props;
  return (
    <article className='persona'>
      <h4>{title}</h4>
      {imgSrc ?
        (
          <>
            <BtnLinkPrimary weblink={url} btnTxt='Learn More' />
            <img src={imgSrc} alt={title} />
          </>
        ) :
        (
          <>
            {description}
            <a href={url}>
              Learn More
              <i className='fas fa-chevron-right'> </i>
            </a>
          </>
        )}
    </article>
  );
};

export default Persona;
