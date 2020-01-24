import React from 'react'
import { Link } from 'gatsby'
import { InnerNav, InnerNavGrid } from './styles'

export default function SubNav({ SubMenus, classes, title }) {
  const siteURL = `https://${process.env.API_URL}`
  return (
    <div className="sub-nav">
      <InnerNavGrid>
        <h4>
          {title}
        </h4>
        <InnerNav>
          {SubMenus.map(child =>
            <li key={`${child.object_id}-${child.order}`} className={classes}>
              <Link to={`${child.url.replace(`${siteURL}`, '')}`} dangerouslySetInnerHTML={{ __html: child.title }}></Link>
            </li>
          )}
        </InnerNav>
      </InnerNavGrid>
    </div>
  )
}
