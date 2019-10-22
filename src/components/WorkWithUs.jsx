import React from 'react';
import { BtnLinkCTA } from './Buttons/index';

const WorkWithUs = () => {
  return (
    <section className='work-with-us'>
      <article>
        <h3>Work with Us</h3>
        <img src='/' alt='Work with us icon' />
        <p>We at Sherman Wealth Management want to work with you to make your goals and needs a reality. Whether you’re located in Maryland or Washington, DC, or if you’re across the country or world, we offer a complimentary 30-minute introductory call where we review your portfolio and financial goals and discuss ideas to get you on track to meeting those goals.</p>
        <BtnLinkCTA
          weblink='/'
          btnTxt='Schedule a call with Brad today'
        />
      </article>
    </section>
  );
};

export default WorkWithUs;
