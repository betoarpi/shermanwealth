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
        <div className='modal__container'>
          <button type='button' onClick={props.onClose}>
            <FaTimes />
          </button>
          {props.children}
        </div>
      </ModalElement>,
      document.getElementById('modal'),
    )
  );
};

export default Modal;
