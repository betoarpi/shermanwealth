/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FaMapMarkerAlt, FaNewspaper, FaRegClock } from 'react-icons/fa';
import { BtnLinkLight, BtnLinkCTA } from '../Buttons/index';
import MainFooter from './styles';

const Footer = () => (
  <MainFooter>
    <div className='footer__container'>
      <div className='footer__col'>
        <h3>
          <FaMapMarkerAlt />
          Visit Us
        </h3>
        <address className='footer__address'>
          <a href='/' target='_blank'>
            Sherman Wealth Management, Maryland | Washington, DC
            <br />
            9841 Washingtonian Blvd, #247 Gaithersburg,
          </a>
          <br />
          Maryland 20878 | Phone:
          <a href='tel:240-428-1622'> 240-428-1622</a>
        </address>
      </div>
      <div className='footer__cta'>
        <BtnLinkLight
          key='newsletter-btn'
          weblink='/'
        >
          Get Our Newsletter
          <FaNewspaper />
        </BtnLinkLight>
        <BtnLinkCTA
          key='consultation-btn'
          weblink='/'
        >
          Schedule a Consultation
          <FaRegClock />
        </BtnLinkCTA>
      </div>

      <div className='footer__copyright'>
        &copy; 2019 Sherman Wealth Management. All Rights Reserved. | A Registered
        Investment Advisor | <a href='/'>Disclosures</a> | <a href='/'>Privacy Policy</a> | <a href='/'>Form ADV</a>
      </div>
    </div>
  </MainFooter>
);

export default Footer;
