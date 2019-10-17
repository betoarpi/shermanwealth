import React from 'react';
import { BtnLinkPrimary } from './Buttons';

const Persona = (props) => {
  const { id, title, description, url, imgSrc } = props;
  return (
    <article className='persona' key={id}>
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
