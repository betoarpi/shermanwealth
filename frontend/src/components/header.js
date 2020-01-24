import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
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

const handleMobileMenuShow = () => {
  const container = document.getElementById('___gatsby')

  if (container) {
    if (document.body.clientWidth >= 1024) {
      container.classList.remove('menu-active')
    }
  }
}

const Header = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    const gatsbyContainer = document.getElementById('___gatsby')
    const navigation = document.querySelector('header nav')
    const body = document.querySelector('body')

    gatsbyContainer.classList.add('menu-active')
    navigation.classList.add('mobile-menu-active')
    body.classList.add('mobile_active')
    
    setIsOpen(true)
  }

  const handleClose = () => {
    const gatsbyContainer = document.getElementById('___gatsby')
    const navigation = document.querySelector('header nav')
    const body = document.querySelector('body')

    gatsbyContainer.classList.remove('menu-active')
    navigation.classList.remove('mobile-menu-active')
    body.classList.remove('mobile_active')
    
    setIsOpen(false)
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleMobileMenuShow)
  }

  return (
    <MainHeader>
      <UtilityNav />
      <Link to='/' onClick={handleClose}>
        <Logo src={ShermanWealthLogo} alt='Sherman Wealth Management Logo' />
      </Link>
      <Navigation menu={menu} isOpen={isOpen} handleClick={handleClick} handleClose={handleClose} />
    </MainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
