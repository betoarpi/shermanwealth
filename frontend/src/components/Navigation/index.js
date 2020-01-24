import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import { Nav } from './styles'
import SubNav from '../SubNav/index.js'
import MobileNavigation from './mobile'

class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { menu, handleClick, handleClose, isOpen } = this.props
    // const { menu } = this.props
    const siteURL = `https://${process.env.API_URL}`

    return (
      <Nav>
        <FaBars className='navigation__mobile' onClick={handleClick} />

        <ul>
          {menu.map(item =>
            <li key={`${item.object_id}-${item.order}`} className={item.classes}>
              <Link to={`/${item.url.replace(`${siteURL}`, '')}`}>
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

        <MobileNavigation
          isOpen={isOpen}
          onClose={handleClose}
          menu={menu}
        />
      </Nav>
    )
  }
}

export default Navigation
