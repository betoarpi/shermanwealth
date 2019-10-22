import React from 'react';
import UtilityNav from '../UtilityNav/index';
import Navigation from '../Navigation/index';
import Logo from '../../assets/img/sherman-wealth-management_logo.png';
import { MainHeader, Image } from './styles';

const Header = () => (
  <MainHeader>
    <UtilityNav />
    <Image src={Logo} alt='Sherman Wealth Management Logo' />
    <Navigation />
  </MainHeader>
);

export default Header;
