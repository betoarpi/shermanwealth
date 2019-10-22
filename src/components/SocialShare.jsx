import React from 'react';
import { Link } from 'react-router-dom';
import { BtnLinkLight } from './Buttons/index';

const SocialShare = () => {
  return (
    <aside className='social-share'>
      <nav className='social-share__nav'>
        <ul>
          <li>Share this post</li>
          <li>
            <Link to='/'><i className='fas fa-facebook'> </i></Link>
            <Link to='/'><i className='fas fa-twitter'> </i></Link>
            <Link to='/'><i className='fas fa-linkedin'> </i></Link>
            <Link to='/'><i className='fas fa-envelope'> </i></Link>
          </li>
        </ul>
      </nav>

      <BtnLinkLight
        weblink='/'
        btnTxt={[
          <>
            <i className='fas fa-chevron-left'> </i>
            <span>Go Back</span>
          </>,
        ]}
      />
    </aside>
  );
};

export default SocialShare;
