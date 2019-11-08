import React from 'react';
import { FaAndroid, FaApple, FaGlobe } from 'react-icons/fa';
import { MiniHero } from '../../components/Heros/index';
import { BtnLinkPrimary, BtnLinkCTA } from '../../components/Buttons';
import AppScreenshot from '../../assets/img/sherman-iphone.png';
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
      <section className='client-app-features'>
        <article>
          <img src='/' alt='icon' />
          <h3>Simplify</h3>
          <p>Paperless Mobile App, Online Meetings, State-of-the-art, real-time reporting.</p>
        </article>
        <article>
          <img src='/' alt='icon' />
          <h3>Easy Navigation</h3>
          <p>We’ll help you take control of every aspect of your financial life as your “financial quarterback.”</p>
        </article>
        <article>
          <img src='/' alt='icon' />
          <h3>A Vision for Your Future</h3>
          <p>Personal, conflict-free, fiduciary financial advisor. Offering customized plans and investment strategies based on your goals and situation.</p>
        </article>
        <BtnLinkCTA weblink='/'>
          Get Started
        </BtnLinkCTA>
      </section>
    </>
  );
};

export default ClientApp;
