import React from 'react';

export default { title: 'Navigation' };

export const mainNavigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__website'>
        <li className='navigation__has-children'>
          <a href='/'>
            Who we are
            <i className='fas fa-chevron-down'> </i>
          </a>
          <div className='navigation__sub'>
            <h4>Who we are</h4>
            <ul>
              <li><a href='/'>About Us</a></li>
              <li><a href='/'>Our Team</a></li>
            </ul>
          </div>
        </li>
        <li className='navigation__has-children'>
          <a href='/'>
            Services
            <i className='fas fa-chevron-down'> </i>
          </a>
          <div className='navigation__sub'>
            <h4>Our Services</h4>
            <ul>
              <li><a href='/'>Financial Planning</a></li>
              <li><a href='/'>Investment Planning</a></li>
              <li><a href='/'>Business Planning</a></li>
              <li><a href='/'>Tax Planning</a></li>
              <li><a href='/'>Retirement Planning</a></li>
              <li><a href='/'>Estate Planning</a></li>
            </ul>
          </div>
        </li>
        <li className='navigation__has-children'>
          <a href='/'>
            Who we serve
            <i className='fas fa-chevron-down'> </i>
          </a>
          <div className='navigation__sub'>
            <h4>Who we are</h4>
            <ul>
              <li><a href='/'>Young Professionals</a></li>
              <li><a href='/'>Thriving Professionals</a></li>
              <li><a href='/'>Pre-Retirees</a></li>
              <li><a href='/'>Business Owners</a></li>
              <li><a href='/'>Recent Grads</a></li>
              <li><a href='/'>Marital Transition</a></li>
            </ul>
          </div>
        </li>
        <li><a href='/'>News</a></li>
        <li><a href='/'>Contact</a></li>
        <li><button type='button'>Start Here</button></li>
      </ul>

      <a href='/' className='navigation__mobile'><i className='fas fa-bars'> </i></a>
    </nav>
  );
};
