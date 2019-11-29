import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import ModalElement from './styles';

const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return (
    ReactDOM.createPortal(
      <ModalElement className='modal'>
        <button className='modal__close' type='button'>
          <FaTimes onClick={props.onClose} />
        </button>
        <div className='modal__container'>
          {props.children}
        </div>
      </ModalElement>,
      document.getElementById('modal'),
    )
  );
};

export default Modal;
