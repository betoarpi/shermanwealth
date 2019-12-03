import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import UtilityNav from './UtilityNav/index'
import Navigation from './Navigation/index'
import ShermanWealthLogo from '../images/sherman-wealth-management_logo.png'

const MainHeader = styled.header`
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 1fr max-content;
  padding-bottom:1rem;
  width: 100%;
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    grid-template-columns: 150px 1fr;
  }
  @media screen and (max-width: 1023px) {
    grid-template-columns: 180px 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: max-content 1fr;
    img {
      max-width:120px;
    }
  }
`;

const Logo = styled.img`
  display: grid;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding-left:1rem;
  max-width: 100%;
`;

const Header = ({ siteTitle, menu }) => (
  <MainHeader>
    <UtilityNav />
    <Link to='/'>
      <Logo src={ShermanWealthLogo} alt='Sherman Wealth Management Logo' />
    </Link>
    <Navigation menu={menu} />
  </MainHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
