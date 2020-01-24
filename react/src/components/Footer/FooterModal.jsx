import React from 'react';
import Modal from '../Modal/index';

const FooterModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1>Hello World</h1>
    </Modal>
  );
};

export default FooterModal;
