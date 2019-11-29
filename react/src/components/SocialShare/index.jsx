import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope, FaChevronLeft } from 'react-icons/fa';
import { BtnLinkLight } from '../Buttons/index';
import SocialShareElement from './styles';

const SocialShare = () => {
  return (
    <SocialShareElement>
      <div className='container'>
        <nav>
          <ul className='noStylesList'>
            <li>Share this post</li>
            <li>
              <Link to='/'><FaFacebookF /></Link>
            </li>
            <li>
              <Link to='/'><FaTwitter /></Link>
            </li>
            <li>
              <Link to='/'><FaLinkedin /></Link>
            </li>
            <li>
              <Link to='/'><FaEnvelope /></Link>
            </li>
          </ul>
        </nav>

        <BtnLinkLight
          weblink='/'
        >
          <FaChevronLeft />
          <span>Go Back</span>
        </BtnLinkLight>
      </div>
    </SocialShareElement>
  );
};

export default SocialShare;
