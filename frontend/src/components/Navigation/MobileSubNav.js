import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaChevronDown } from 'react-icons/fa';

export default function MobileSubNav({ item, onClose }) {
  const [show, setShow] = useState(false)
  const sublinks = item.wordpress_children
  
  const handleShow = () => {
    const flag = !show
    setShow(flag)
  }
  return (
    <li className="dropdown">
      <Link to={`${item.url}`} onClick={() => onClose()}>
        {item.title}
      </Link>
      <FaChevronDown onClick={() => handleShow()} />
      {
        show &&
        <ul>
          {
            sublinks.map(link =>
              <li key={`${link.object_id}`}>
                <Link
                  to={`${link.url}`}
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
