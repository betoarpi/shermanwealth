import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import SocialLinks from './styles';

const Social = () => (
  <SocialLinks className='noStylesList'>
    <li>
      <a href='https://www.facebook.com/shermanwealth' target='_blank' rel='noopener noreferrer'>
        <FaFacebookF />
      </a>
    </li>
    <li>
      <a href='https://www.instagram.com/shermanwealth' target='_blank' rel='noopener noreferrer'>
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href='https://www.linkedin.com/in/bradlsherman' target='_blank' rel='noopener noreferrer'>
        <FaLinkedinIn />
      </a>
    </li>
    <li>
      <a href='https://twitter.com/shermanwealth' target='_blank' rel='noopener noreferrer'>
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href='https://www.youtube.com/channel/UCCZTtM4fu7Rp7Ncp2yMVdNA/shermanwealth' target='_blank' rel='noopener noreferrer'>
        <FaYoutube />
      </a>
    </li>
  </SocialLinks>
);

export default Social;
