import React from 'react'
import { Link } from 'gatsby'
import { InnerNav, InnerNavGrid } from './styles'

export default function SubNav({ SubMenus, classes, title }) {
  let SubDirectory = title === 'Services' ? '/services' : '/persona'
  return (
    <div className="sub-nav">
      <InnerNavGrid>
        <h4>
          {title}
        </h4>
        <InnerNav>
          {SubMenus.map(child =>
            <li key={`${child.object_id}-${child.order}`} className={classes}>
              {
                title !== 'News'
                  ? <Link to={`${SubDirectory}/${child.object_slug}`} dangerouslySetInnerHTML={{ __html: child.title }}>
                  </Link>
                  : <Link to={`${child.object_slug}`} dangerouslySetInnerHTML={{ __html: child.title }}>
                  </Link>
              }
            </li>
          )}
        </InnerNav>
      </InnerNavGrid>
    </div>
  )
}
