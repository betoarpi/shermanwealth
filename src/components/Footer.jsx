/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

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
      <a href='/' className='btn btn--light'>
        Get our Newsletter
        <i className='fas fa-newspaper'> </i>
      </a>
      <a href='/' className='btn btn--cta'>
        Schedule a Consultation
        <i className='fas fa-clock'> </i>
      </a>
    </div>

    <div className='footer__copyright'>
      &copy; 2019 Sherman Wealth Management. All Rights Reserved. | A Registered
      Investment Advisor | <a href='/'>Disclosures</a> | <a href='/'>Privacy Policy</a> | <a href='/'>Form ADV</a>
    </div>
  </footer>
);

export default Footer;
