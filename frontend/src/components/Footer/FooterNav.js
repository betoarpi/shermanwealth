import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'


const FooterNav = () => {
  const data = useStaticQuery(graphql`
    query FooterNavQuery {
      wordpressWpApiMenusMenusItems(slug: {eq: "footer-menu"}) {
        items {
          classes
          title
          object_id
          url
          object_slug
          order
        }
      }
      allFile(filter: {name: {eq:"FormADV2A-2B_Sherman_20200318-4"}}) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)

  const { items } = data.wordpressWpApiMenusMenusItems

  return (
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
      <li>
        {
          data.allFile.edges.length > 0
            ? (
              <a href={data.allFile.edges[0].node.publicURL} download>
                Form ADV
              </a>
            )
            :
            (
              null
            )
        }
      </li>
    </ul >
  );
};

export default FooterNav;
