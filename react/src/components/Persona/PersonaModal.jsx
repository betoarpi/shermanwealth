import React from 'react';
import Modal from '../Modal/index';
import { BtnLinkCTA } from '../Buttons/index';
import { PersonaModalContent } from './styles';

const PersonaModal = (props) => {
  const { isOpen, onClose, title, imgUrl, children } = props;
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
          <p>{children}</p>
          <BtnLinkCTA weblink='/getting-started'>Start Here</BtnLinkCTA>
        </div>
      </PersonaModalContent>
    </Modal>
  );
};

export default PersonaModal;
