import React from 'react';
import Modal from '../Modal/index';
import { BtnLinkCTA } from '../Buttons/index';
import { PersonaModalContent } from './styles';

const PersonaModal = (props) => {
  const { isOpen, onClose, title, imgUrl } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PersonaModalContent>
        <header>
          <h1>{title}</h1>
          <figure>
            <img src={imgUrl} alt={title} />
          </figure>
        </header>
        <div className='content-container'>
          <p>You know you want to invest. You know you need to invest. But honestly, how do you start investing? Who do you trust? Do you pay someone to help? How do you know you’re not going to be ripped off? Or even worse – how do you know you’re not going to lose all your money?</p>
          <BtnLinkCTA weblink='/'>Start Here</BtnLinkCTA>
        </div>
      </PersonaModalContent>
    </Modal>
  );
};

export default PersonaModal;
