import React from 'react'
import { Link } from 'gatsby'
import { InnerNav, InnerNavGrid } from './styles'

export default function SubNav({ SubMenus, classes, title }) {
  return (
    <div className="sub-nav">
      <InnerNavGrid>
        <h4>
          {title}
        </h4>
        <InnerNav>
          {SubMenus.map(child => {
            const URL = child.url
            const HTTP = URL.includes('http')
            return (
              <li key={`${child.object_id}-${child.order}`} className={classes}>
                {HTTP ?
                  <a href={`${URL}`} target='_blank' rel='noopener noreferrer' dangerouslySetInnerHTML={{ __html: child.title }}></a> :
                  <Link to={`${child.url}`} dangerouslySetInnerHTML={{ __html: child.title }}></Link>
                }
              </li>
            )
          }
          )}
        </InnerNav>
      </InnerNavGrid>
    </div>
  )
}
