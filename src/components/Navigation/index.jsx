import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { BtnLinkCTA } from '../Buttons/index';
import Nav from './styles';

const Navigation = () => (
  <Nav className='navigation'>
    <ul>
      <li className='navigation__has-children'>
        <Link to='/who-we-are'>
          Who we are
          <FaChevronDown />
        </Link>
        <div className='navigation__sub'>
          <h4>Who we are</h4>
          <ul>
            <li>
              <Link to='/about-us'>About Us</Link>
            </li>
            <li>
              <Link to='/our-team'>Our Team</Link>
            </li>
          </ul>
        </div>
      </li>
      <li className='navigation__has-children'>
        <Link to='/services'>
          Services
          <FaChevronDown />
        </Link>
        <div className='navigation__sub'>
          <h4>Our Services</h4>
          <ul>
            <li>
              <Link to='/financial-planning'>Financial Planning</Link>
            </li>
            <li>
              <Link to='/investment-planning'>Investment Planning</Link>
            </li>
            <li>
              <Link to='/business-planning'>Business Planning</Link>
            </li>
            <li>
              <Link to='/tax-planning'>Tax Planning</Link>
            </li>
            <li>
              <Link to='/retirement-planning'>Retirement Planning</Link>
            </li>
            <li>
              <Link to='/estate-planning'>Estate Planning</Link>
            </li>
          </ul>
        </div>
      </li>
      <li className='navigation__has-children'>
        <Link to='/who-we-serve'>
          Who we serve
          <FaChevronDown />
        </Link>
        <div className='navigation__sub'>
          <h4>Who we are</h4>
          <ul>
            <li>
              <Link to='/young-professionals'>Young Professionals</Link>
            </li>
            <li>
              <Link to='/thriving-professionals'>Thriving Professionals</Link>
            </li>
            <li>
              <Link to='/pre-retirees'>Pre-Retirees</Link>
            </li>
            <li>
              <Link to='/business-owners'>Business Owners</Link>
            </li>
            <li>
              <Link to='/recent-grads'>Recent Grads</Link>
            </li>
            <li>
              <Link to='/marital-transition'>Marital Transition</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link to='/news'>News</Link>
      </li>
      <li>
        <Link to='/getting-started'>Contact</Link>
      </li>
      <li>
        <BtnLinkCTA weblink='/' btnTxt='Start Here' />
      </li>
    </ul>

    <a href='/#' className='navigation__mobile'>
      <i className='fas fa-bars'> </i>
    </a>
  </Nav>
);

export default Navigation;
