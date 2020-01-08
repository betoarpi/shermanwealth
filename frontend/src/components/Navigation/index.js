import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import { Nav } from './styles'
import SubNav from '../SubNav/index.js'
import MobileNavigation from './mobile'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      MobileMenuFlag: false
    }
  }

  render() {
    const { menu } = this.props

    const handleClick = () => {
      const gatsbyContainer = document.getElementById('___gatsby')
      const navigation = document.querySelector('header nav')

      gatsbyContainer.classList.add('menu-active')
      navigation.classList.add('mobile-menu-active')

      this.setState({
        MobileMenuFlag: true
      })
    }

    const handleClose = () => {
      const gatsbyContainer = document.getElementById('___gatsby')
      const navigation = document.querySelector('header nav')

      gatsbyContainer.classList.remove('menu-active')
      navigation.classList.remove('mobile-menu-active')

      this.setState({
        MobileMenuFlag: false
      })
    }

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

        <MobileNavigation
          isOpen={this.state.MobileMenuFlag}
          onClose={handleClose}
          menu={menu}
        />
      </Nav >
    )
  }
}

export default Navigation
