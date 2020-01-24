import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

import BlogNavigation from './styles'


const BlogNav = () => {
  const data = useStaticQuery(graphql`
    query BlogNavQuery {
      wordpressWpApiMenusMenusItems(slug: {eq: "news-menu"}) {
        items {
          classes
          title
          object_id
          url
          object_slug
          order
        }
      }
    }
  `)

  const { items } = data.wordpressWpApiMenusMenusItems

  return (
    <BlogNavigation>
      <ul className='noStylesList'>
        {
          items.map(item => (
            <li key={item.object_id} >
              <Link to={`/${item.object_slug}`}>
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul >
    </BlogNavigation>
  );
};

export default BlogNav;
