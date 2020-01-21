import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaChevronDown } from 'react-icons/fa';

export default function MobileSubNav({ item, onClose }) {
  const [show, setShow] = useState(false)
  const sublinks = item.wordpress_children

  let SubDirectory = item.title === 'Services' ? '/services' : '/persona'

  const handleShow = () => {
    const flag = !show
    setShow(flag)
  }
  return (
    <li className="dropdown" onClick={() => handleShow()}>
      <Link to={`/${item.object_slug}`} onClick={() => onClose()}>
        {item.title}
      </Link>
      <FaChevronDown />
      {
        show &&
        <ul>
          {
            sublinks.map(link =>
              <li>
                {
                  item.title !== 'News'
                    ? <Link to={`${SubDirectory}/${link.object_slug}`} dangerouslySetInnerHTML={{ __html: link.title }} onClick={() => onClose()} />
                    : <Link to={`/${link.object_slug}`} dangerouslySetInnerHTML={{ __html: link.title }} onClick={() => onClose()} />
                }
              </li>
            )
          }
        </ul>
      }
    </li>
  )
}
