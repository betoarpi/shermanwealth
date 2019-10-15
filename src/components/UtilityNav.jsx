import React from 'react';
import { Link } from 'react-router-dom';

const UtilityNav = () => (
  <div className='utility-nav'>
    <span>
      Call or text us now:
      <a href='tel:240-428-1622'>240-428-1622</a>
    </span>
    <form className='search'>
      <input type='search' placeholder='Search the website' />
      <button type='submit'>
        <i className='fas fa-search'> </i>
      </button>
    </form>
    <Link to='/client-app' className='btn btn--light'>
      Client App
    </Link>
  </div>
);

export default UtilityNav;
