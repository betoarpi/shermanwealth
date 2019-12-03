/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react'
import { FaMapMarkerAlt, FaNewspaper, FaRegClock } from 'react-icons/fa'
import { BtnLight, BtnLinkCTA } from '../Buttons/index'
import FooterModal from './FooterModal'
import MainFooter from './styles'

const Footer = () => {
  const [modalState, setModalState] = useState(false);

  const handleOpenModal = () => {
    setModalState(true);
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  return (
    <MainFooter>
      <div className='footer__container'>
        <div className='footer__col'>
          <h3>
            <FaMapMarkerAlt />
            Visit Us
          </h3>
          <address className='footer__address'>
            <a href='https://goo.gl/maps/rp9nYyNFynfTFnB36' target='_blank' rel='noreferrer noopener'>
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
          <BtnLight clickEvent={handleOpenModal}>
            <span>Get Our Newsletter</span>
            <FaNewspaper />
          </BtnLight>
          <BtnLinkCTA
            key='consultation-btn'
            weblink='/'
          >
            Schedule a Free Consultation
            <FaRegClock />
          </BtnLinkCTA>
        </div>

        <div className='footer__copyright'>
          &copy; 2019 Sherman Wealth Management. All Rights Reserved. | A Registered
        Investment Advisor | <a href='/'>Disclosures</a> | <a href='/'>Privacy Policy</a> | <a href='/'>Form ADV</a>
        </div>
      </div>
      <FooterModal
        isOpen={modalState}
        onClose={handleCloseModal}
      />
    </MainFooter>
  );
};

export default Footer;
