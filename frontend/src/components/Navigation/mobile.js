import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby'
import { MobileNav } from './styles'
import { FaTimes } from 'react-icons/fa';
import MobileSubNav from './MobileSubNav'

const MobileNavigation = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return (
    ReactDOM.createPortal(
      <MobileNav>
        <button className='close-btn btn' onClick={() => props.onClose()}>
          <FaTimes />
        </button>
        <Link to='/'>
          <h1 className='title'>
            Sherman Wealth Management
          </h1>
        </Link>
        <ul>
          {
            props.menu.map(item =>
              !item.wordpress_children ?
                <li key={`${item.object_id}-${item.order}`} className={item.classes} onClick={() => props.onClose()}>
                  <Link to={`/${item.object_slug}`}>
                    {item.title}
                  </Link>
                </li>
                : <MobileSubNav key={`${item.object_id}-${item.order}`} item={item} onClose={props.onClose} />
            )
          }
        </ul>
      </MobileNav>,
      document.getElementById('mobile-navigation'),
    )
  );
};

export default MobileNavigation;
