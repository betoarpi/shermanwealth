import React from 'react';
import { FaSearch, FaPhone } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';
import { BtnLinkLight } from '../Buttons/index';
import { Utility, Telephone, Search } from './styles';

const UtilityNav = () => (
  <Utility>
    <Telephone>
      Call or text us now!
      <a href='tel:240-428-1622'>
        <FaPhone />
        240-428-1622
      </a>
    </Telephone>
    <Search className='search'>
      <input type='search' placeholder='Search the website' />
      <button type='submit'>
        <FaSearch />
      </button>
    </Search>
    <BtnLinkLight
      key='client-app-btn'
      weblink='/'
    >
      Client App
      <IoMdLogIn />
    </BtnLinkLight>
  </Utility>
);

export default UtilityNav;
