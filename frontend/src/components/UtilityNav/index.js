import React, { useState } from 'react';
import { FaSearch, FaPhone } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';
import { BtnLinkLight } from '../Buttons/index';
import { Utility, Telephone, Search } from './styles';

const UtilityNav = () => {
  const [search, setSearch] = useState("")

  const handleInput = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `/search?search=${search}`
  }

  return (
    <Utility>
      <Telephone>
        Call or text us now!
        <a href='tel:240-428-1622'>
          <FaPhone />
          240-428-1622
        </a>
      </Telephone>
      <Search className='search' onSubmit={handleSubmit}>
        <input
          type='search'
          placeholder='Search the website'
          onChange={handleInput}
          value={search}
        />
        <button type='submit'>
          <FaSearch />
        </button>
      </Search>
      <BtnLinkLight
        key='client-app-btn'
        weblink='/client-portal'
      >
        Client Portal
        <IoMdLogIn />
      </BtnLinkLight>
    </Utility>
  )
};

export default UtilityNav;
