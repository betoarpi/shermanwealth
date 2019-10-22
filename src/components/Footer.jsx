/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { BtnLinkLight, BtnLinkCTA } from './Buttons/index';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__col'>
      <h3>
        <i className='fas fa-map-marker-alt'> </i>
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
        <a href='tel:240-428-1622'>240-428-1622</a>
      </address>
    </div>
    <div className='footer__col'>
      <BtnLinkLight
        key='newsletter-btn'
        weblink='/'
        btnTxt='Get our Newsletter'
      />
      <BtnLinkCTA
        key='consultation-btn'
        weblink='/'
        btnTxt='Schedule a Consultation'
      />
    </div>

    <div className='footer__copyright'>
      &copy; 2019 Sherman Wealth Management. All Rights Reserved. | A Registered
      Investment Advisor | <a href='/'>Disclosures</a> | <a href='/'>Privacy Policy</a> | <a href='/'>Form ADV</a>
    </div>
  </footer>
);

export default Footer;
