import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import Nav from './styles'
import SubNav from '../SubNav/index.js'

class Navigation extends Component {
  render() {
    const { menu } = this.props

    const checkWindowSize = () => {
      return window.innerWidth
    }
    window.onresize = () => {
      checkWindowSize()
    }

    const handleClick = () => {
      const gatsbyContainer = document.getElementById('___gatsby')
      const navigation = document.querySelector('header nav')

      gatsbyContainer.classList.add('menu-active')
      navigation.classList.add('mobile-menu-active')
    }

    /* const handleClose = () => {

    } */

    return (
      <Nav>
        <FaBars className='navigation__mobile' onClick={handleClick} />

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
      </Nav >
    )
  }
}

export default Navigation
