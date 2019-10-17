import React from 'react';
import MiniHero from '../components/MiniHero';
import { BtnLinkPrimary, BtnLinkCTA } from '../components/Buttons';

const ClientApp = () => {
  return (
    <>
      <MiniHero />
      <section className='client-app'>
        <article>
          <h2>What can the Sherman Wealth Management Client Portal do for you?</h2>
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
            btnTxt={[
              <>
                <i className='fas fa-android'> </i>
                <span>Download Android App</span>
              </>,
            ]}
          />
          <BtnLinkPrimary
            weblink='/'
            btnTxt={[
              <>
                <i className='fas fa-apple'> </i>
                <span>Download iOS App</span>
              </>,
            ]}
          />
          <BtnLinkCTA
            weblink='/'
            btnTxt={[
              <>
                <i className='fas fa-globe'> </i>
                <span>Log in online</span>
              </>,
            ]}
          />
        </article>
        <img src='/' alt='Client App screenshot' />
      </section>
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
        <BtnLinkCTA weblink='/' btnTxt='Get Started' />
      </section>
    </>
  );
};

export default ClientApp;
