import React from 'react';
import { BtnPrimary } from '../Buttons/index';
import { PersonaItem } from './styles';

const Persona = (props) => {
  const { title, imgUrl, children, onOpen } = props;
  return (
    <PersonaItem className='persona'>
      <div className='persona__container'>
        <h4>{title}</h4>
        {children}
        <BtnPrimary clickEvent={onOpen}>
          Learn More
        </BtnPrimary>
      </div>
      <figure>
        <img src={imgUrl} alt={title} />
      </figure>
    </PersonaItem>
  );
};

export default Persona;
