import React from 'react';
import { Hero } from '../components/Heros/index';
import AboutMember from '../components/AboutMember/index';
import BradFamily from '../assets/img/brad-family.png';
import BradSherman from '../assets/img/brad-sherman.jpg';
import WilliamNunn from '../assets/img/william-nunn.jpg';

const About = () => (
  <>
    <Hero
      imgSrc={BradFamily}
    >
      <h2>
        Tax and cost efficiency advice here,
        lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </h2>
    </Hero>
    <section className='container'>
      <h2 className='container__title'>Meet our team</h2>
      <AboutMember
        name='Brad Sherman'
        jobTitle='President & Lead Advisor'
        img={BradSherman}
      >
        <p>Brad Sherman is committed to being an advocate for his clients, providing Fiduciary, fee-only, conflict-free guidance so that they feel comfortable with their investment choices and strategies.</p>

        <p>Brad knows – and has experienced – many of the issues that his clients face, whether it’s paying off student debt, saving up to purchase a home, creating a savings safety net, starting a family, or making smart choices about planning and saving for retirement.</p>

        <p>He has over 15 years experience in the financial industry but actually got his start in finance as a first grader at Cold Spring Elementary School, when he decided that Alex P. Keaton – the money-savvy kid played by Michael J. Fox on “Family Ties” – was his role model. When he then turned a dollar his grandmother had given him into five – and then fifty – dollars, it was clear he had an aptitude for smart saving, investing and wealth preservation!</p>

        <p>A frequent media contributor to such publications as The Wall Street Journal, CNBC, MarketWatch, Business Insider, and Investopedia, and the co-host of Launch Financial, a weekly podcast, he has a BA in International Economics from the University of Wisconsin-Madison and MSF in Finance from American University’s Kogod School of Business.</p>

        <p>Born and raised in Rockville, Maryland, Brad enjoys a strong connection to his community and contributes to a variety of organizations including The Rockville Chamber of Commerce and the Jewish Federation of Greater Washington.</p>

        <p>In his spare time he relaxes with football – both real and fantasy, baseball – especially his beloved Nats, and spending time with his two young children.</p>
      </AboutMember>
      <AboutMember
        name='William Nunn'
        jobTitle='Analyst & Paraplanner'
        img={WilliamNunn}
      >
        <p>Will serves as an Analyst and Paraplanner for Sherman Wealth Management. Will performs much of the “behind the scenes” work that goes into each and every client meeting, whether is research on investments or testing financial plans for our clients, Will puts his eight years of industry experience at some of the most storied firms and knowledge base to work. Will’s experiences and expertise range from portfolio analysis, insurance, and estate solutions to equity compensation and student loans. Will is also a CERTIFIED FINANCIAL PLANNER™ professional.</p>

        <p>Will lives in New Orleans, LA with his wife, Melissa and their dog, Rex. Important Note: Will does not meet with clients and is not an Investment Adviser Representative of Sherman Wealth Management, LLC.</p>
      </AboutMember>
    </section>
  </>
);

export default About;
