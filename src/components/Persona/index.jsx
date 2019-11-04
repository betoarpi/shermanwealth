import React from 'react';
import { BtnLinkPrimary } from '../Buttons/index';
import { PersonaItem } from './styles';

const Persona = (props) => {
  const { title, url, imgUrl, children, Popup } = props;
  return (
    <PersonaItem className='persona'>
      <div className='persona__container'>
        <h4>{title}</h4>
        {Popup && { children }}
        <BtnLinkPrimary weblink={url}>
          Learn More
        </BtnLinkPrimary>
      </div>
      <figure>
        <img src={imgUrl} alt={title} />
      </figure>
    </PersonaItem>
  );
};

export default Persona;
