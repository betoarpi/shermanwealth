import React from 'react'
import { Link } from 'gatsby'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import Nav from './styles'


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
              <ul>
                {item.wordpress_children.map(child =>
                  <li key={`${child.object_id}-${child.order}`} className={item.classes}>
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
    </Nav >
  )
};

export default Navigation;
