import React from 'react';
import UtilityNav from './UtilityNav';
import Navigation from './Navigation';
import Logo from '../assets/img/sherman-wealth-management_logo.png';

const Header = () => (
  <header className='header'>
    <UtilityNav />
    <div className='logo'>
      <img src={Logo} alt='Sherman Wealth Management Logo' />
    </div>
    <Navigation />
  </header>
);

export default Header;
