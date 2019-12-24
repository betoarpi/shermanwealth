import React from 'react'
import { Link } from 'gatsby'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import Nav from './styles'
import SubNav from '../SubNav/index.js'

const Navigation = ({ menu }) => {
  return (
    <Nav>
      <ul>
        {menu.map(item =>
          <li key={`${item.object_id}-${item.order}`} className={item.classes}>
            <Link to={`/${item.object_slug}`}>
              {item.title}
              {item.wordpress_children !== null &&
                <FaChevronDown />
              }
            </Link>
            {item.wordpress_children &&
              <SubNav title={item.title} SubMenus={item.wordpress_children} classes={item.classes} />
            }
          </li>
        )}
      </ul>

      <FaBars className='navigation__mobile' />
    </Nav >
  )
};

export default Navigation;
