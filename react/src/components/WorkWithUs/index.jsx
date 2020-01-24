import React from 'react';
import { BtnLinkCTA } from '../Buttons/index';
import WorkWithUsElement from './styles';
import HandShake from '../../assets/img/icons/icons8-handshake-100.png';

const WorkWithUs = () => {
  return (
    <WorkWithUsElement>
      <article>
        <header>
          <h2>
            Work
            <br />
            with Us
          </h2>
          <img src={HandShake} alt='Work with us icon' />
        </header>
        <div>
          <p>We at Sherman Wealth Management want to work with you to make your goals and needs a reality. Whether you’re located in Maryland or Washington, DC, or if you’re across the country or world, we offer a complimentary 30-minute introductory call where we review your portfolio and financial goals and discuss ideas to get you on track to meeting those goals.</p>
          <BtnLinkCTA
            weblink='/'
          >
            Schedule a call with Brad today
          </BtnLinkCTA>
        </div>
      </article>
    </WorkWithUsElement>
  );
};

export default WorkWithUs;
