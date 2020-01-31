import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaChevronDown } from 'react-icons/fa';

export default function MobileSubNav({ item, onClose }) {
  const [show, setShow] = useState(false)
  const sublinks = item.wordpress_children
  const siteURL = `https://${process.env.API_URL}`

  const handleShow = () => {
    const flag = !show
    setShow(flag)
  }
  return (
    <li className="dropdown">
      <Link to={`/${item.url.replace(siteURL, '')}`} onClick={() => onClose()}>
        {item.title}
      </Link>
      <FaChevronDown onClick={() => handleShow()} />
      {
        show &&
        <ul>
          {
            sublinks.map(link =>
              <li>
                <Link
                  to={`${link.url.replace(siteURL, '')}`}
                  dangerouslySetInnerHTML={{ __html: link.title }}
                  onClick={() => onClose()}
                />
              </li>
            )
          }
        </ul>
      }
    </li>
  )
}
