import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby'
import { MobileNav } from './styles'
import { FaTimes } from 'react-icons/fa';
import MobileSubNav from './MobileSubNav'

const MobileNavigation = (props) => {
  const handleListener = (e) => {
    if (!document.getElementById('mobile-navigation').contains(e.target)) {
      props.onClose()
    }
  }

  if (!props.isOpen) {
    return null;
  }
  else {
    window.addEventListener('click', handleListener, true)
  }

  // const siteURL = `https://${process.env.API_URL}`
  return (
    ReactDOM.createPortal(
      <MobileNav>
        <button className='close-btn btn' onClick={() => props.onClose()}>
          <FaTimes />
        </button>
        <Link to='/' onClick={() => props.onClose()} >
          <h1 className='title'>
            Sherman Wealth Management
          </h1>
        </Link>
        <ul>
          {
            props.menu.map(item =>
              !item.wordpress_children ?
                <li
                  key={`${item.object_id}-${item.order}`}
                  className={item.classes}
                >
                  <Link
                    to={`/${item.object_slug}`}
                    onClick={() => props.onClose()}
                  >
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
