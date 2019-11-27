import React from 'react';
import OurCommitmentElement from './styles';
import FeeOnlyLogo from '../../assets/img/fee-only-logo.png';
import NapfaLogo from '../../assets/img/napfa-logo.png';
import BradsSignature from '../../assets/img/brads-signature.png';

const OurCommitment = () => (
  <OurCommitmentElement>
    <article>
      <div className='commitment'>
        <h2>Our Commitment</h2>
        <p>I founded Sherman Wealth Management because I believe you deserve the highest level of individualized attention, regardless of the size of your financial profile. Not a one-size-fits-all or an algorithm-driven plan, but a plan that works for you.</p>
        <p>As a fiduciary, fee-only, conflict-free advisory, I have sworn to only recommend investment choices that work best for you, not “good enough” ones that offer me sales commissions.</p>
        <p>And, unlike big investment firms that are more concerned about shareholder value than your value, my single goal is for you to feel comfortable about your investment choices and strategies, and confident about your future.</p>
        <img src={BradsSignature} alt='Brad Sherman signature' />
      </div>
      <div className='logos'>
        <img src={NapfaLogo} alt='Fee Only Member logo' />
        <img src={FeeOnlyLogo} alt='NAPFA logo' />
      </div>
    </article>
  </OurCommitmentElement>
);

export default OurCommitment;
