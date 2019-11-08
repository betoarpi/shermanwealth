import React, { useState } from 'react';
import PersonaModal from './PersonaModal';
import { BtnPrimary } from '../Buttons/index';
import { PersonaItem } from './styles';

const Persona = (props) => {
  const [modalState, setModalState] = useState(false);

  const { title, imgUrl, children } = props;

  const handleOpenModal = (title) => {
    setModalState(true);
    setTitle('Modified Title');
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  return (
    <>
      <PersonaItem className='persona'>
        <div className='persona__container'>
          <h4 className='persona__title'>{title}</h4>
          {children}
          <BtnPrimary clickEvent={handleOpenModal}>
            Learn More
          </BtnPrimary>
        </div>
        <figure>
          <img src={imgUrl} alt={title} />
        </figure>
      </PersonaItem>

      <PersonaModal
        title={title}
        imgUrl={imgUrl}
        isOpen={modalState}
        onClose={handleCloseModal}
      >
        {children}
      </PersonaModal>
    </>
  );
};

export default Persona;
