import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import Nav from './styles'

const Navigation = ({ menu }) => (
  <Nav>
    <ul>
      {menu.map(item =>
        <li key={item.object_id}>
          <Link to={`/${item.object_slug}`}>
            {item.title}
          </Link>
          {item.wordpress_children &&
            <ul>
              {item.wordpress_children.map(child =>
                <li key={child.object_id}>
                  <Link to={`/${child.object_slug}`}>
                    {child.title}
                  </Link>
                </li>
              )}
            </ul>
          }
        </li>
      )}
    </ul>

    <FaBars className='navigation__mobile' />
  </Nav>
);

export default Navigation;
