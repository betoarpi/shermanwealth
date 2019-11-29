import React from 'react';
import { BtnLinkCTA } from '../Buttons/index';
import Simplify from '../../assets/img/icons/icons8-time-limit-100.png';
import Navigate from '../../assets/img/icons/icons8-waypoint-map-100.png';
import Increase from '../../assets/img/icons/icons8-increase-100.png';
import FeaturedElement from './styles';

const Features = () => {
  return (
    <FeaturedElement>
      <div>
        <article>
          <img src={Simplify} alt='Simplify icon' />
          <h4>Simplify</h4>
          <p>Paperless Mobile App, Online Meetings, State-of-the-art, real-time reporting.</p>
        </article>

        <article>
          <img src={Navigate} alt='Easy Navigate Icon' />
          <h4>Easy Navigation</h4>
          <p>We’ll help you take control of every aspect of your financial life as your “financial quarterback.”</p>
        </article>

        <article>
          <img src={Increase} alt='Future icon' />
          <h4>A Vision for Your Future</h4>
          <p>Personal, conflict-free, fiduciary financial advisor. Offering customized plans and investment strategies based on your goals and situation.</p>
        </article>
      </div>

      <BtnLinkCTA weblink='/contact-us'>
        Get Started
      </BtnLinkCTA>
    </FeaturedElement>
  );
};

export default Features;
