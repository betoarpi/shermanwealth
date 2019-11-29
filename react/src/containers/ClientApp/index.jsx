import React from 'react';
import { FaAndroid, FaApple, FaGlobe } from 'react-icons/fa';
import { MiniHero } from '../../components/Heros/index';
import { BtnLinkPrimary, BtnLinkCTA } from '../../components/Buttons';
import AppScreenshot from '../../assets/img/sherman-iphone.png';
import FeaturedSection from '../../components/FeaturesSection';
import ClientAppContainer from './styles';
import ClientAppIcon from '../../assets/img/icons/icons8-login-100.png';

const ClientApp = () => {
  return (
    <>
      <MiniHero>
        <h1>Client App</h1>
        <img src={ClientAppIcon} alt='Client App icon' />
      </MiniHero>
      <ClientAppContainer className='container'>
        <article>
          <h2>
            What can the
            <br />
            Sherman Wealth Management
            <br />
            Client Portal do for you?
          </h2>
          <ul>
            <li>
              Track your spending and savings
            </li>
            <li>
              Keep your financial life organized and on track
            </li>
          </ul>
          <p>Download the app or log in directly from our website.</p>
          <BtnLinkPrimary
            weblink='/'
          >
            <FaAndroid />
            <span>Download Android App</span>
          </BtnLinkPrimary>
          <BtnLinkPrimary
            weblink='/'
          >
            <FaApple />
            <span>Download iOS App</span>
          </BtnLinkPrimary>
          <BtnLinkCTA
            weblink='/'
          >
            <FaGlobe />
            <span>Log in online</span>
          </BtnLinkCTA>
        </article>
        <img src={AppScreenshot} alt='Client App screenshot' />
      </ClientAppContainer>
      <FeaturedSection />
    </>
  );
};

export default ClientApp;
