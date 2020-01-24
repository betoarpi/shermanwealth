import React from 'react';
import { Link } from 'react-router-dom';
import UtilityNav from '../UtilityNav/index';
import Navigation from '../Navigation/index';
import Logo from '../../assets/img/sherman-wealth-management_logo.png';
import { MainHeader, Image } from './styles';

const Header = () => (
  <MainHeader>
    <UtilityNav />
    <Link to='/'>
      <Image src={Logo} alt='Sherman Wealth Management Logo' />
    </Link>
    <Navigation />
  </MainHeader>
);

export default Header;
