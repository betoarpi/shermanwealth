import React, { useState } from 'react';
import PersonaModal from './PersonaModal';
import { BtnPrimary } from '../Buttons/index';

const Persona = (props) => {
  const [modalState, setModalState] = useState(false);

  const { title, imgUrl, children, styling, popUpDescription } = props;

  const handleOpenModal = (title) => {
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  return (
    <>
      <article className={styling || 'persona'}>
        <div className='persona__container'>
          <h4 className='persona__title'>{title}</h4>
          {children}
          {imgUrl && (
            <BtnPrimary clickEvent={handleOpenModal}>
              Learn More
            </BtnPrimary>
          )}
        </div>
        {imgUrl &&
          (
            <figure>
              <img src={imgUrl} alt={title} />
            </figure>
          )}
      </article>

      <PersonaModal
        title={title}
        imgUrl={imgUrl}
        isOpen={modalState}
        onClose={handleCloseModal}
      >
        {popUpDescription}
      </PersonaModal>
    </>
  );
};

export default Persona;
