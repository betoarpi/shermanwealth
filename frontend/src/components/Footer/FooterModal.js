import React from 'react';
import NewsletterForm from '../NewsletterForm/index'
import Modal from '../Modal/index';

const FooterModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <NewsletterForm />
    </Modal>
  );
};

export default FooterModal;