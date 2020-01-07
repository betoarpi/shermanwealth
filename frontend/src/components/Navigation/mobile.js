import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const MobileNav = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return (
    ReactDOM.createPortal(
      <nav className='mobile-navigation'>
        <FaTimes />
        <ul>
          <li>Links</li>
        </ul>
      </nav>,
      document.getElementById('mobile-navigation'),
    )
  );
};

export default MobileNav;
