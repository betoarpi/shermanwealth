import React from 'react';
import FeaturedInLogos from './styles';
import InvestopediaLogo from '../../assets/img/Investopedia_Most-Influential-Advisors_2018.png';
import CNBCLogo from '../../assets/img/CNBC-logo.png';
import MarketWatchLogo from '../../assets/img/marketwatch-logo.png';
import BusinessInsiredLogo from '../../assets/img/business-insider-logo.png';
import ThinkAdvisorLogo from '../../assets/img/thinkadvisor-logo.png';
import TheWSJLogo from '../../assets/img/wsj-logo.png';

const FeaturedIn = () => (
  <FeaturedInLogos>
    <div className='container'>
      <h3 className='container__title'>Featured In</h3>
      <div className='logos'>
        <img src={InvestopediaLogo} alt='Investopedia logo' />
        <img src={CNBCLogo} alt='CNBC logo' />
        <img src={MarketWatchLogo} alt='Market Watch logo' />
        <img src={BusinessInsiredLogo} alt='Business Insider logo' />
        <img src={ThinkAdvisorLogo} alt='Think Advisor logo' />
        <img src={TheWSJLogo} alt='The Wall Street Journal logo' />
      </div>
    </div>
  </FeaturedInLogos>
);

export default FeaturedIn;
