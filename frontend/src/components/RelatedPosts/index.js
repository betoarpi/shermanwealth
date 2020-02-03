import React from 'react';
import { RelatedItems, Title } from './style'
import NewsItem from '../NewsItem/index'
import { BtnLinkPrimary } from '../Buttons/index'
import { Link } from 'gatsby'
import { FaChevronRight } from 'react-icons/fa'


const RelatedPosts = ({ display, preview, recommended }) => {
  if (!preview) {
    return (
      <RelatedItems>
        <Title>{display} Articles</Title>
        {display === 'recommended' ?
          <div className='container'>
            {
              recommended.map((article, index) => {
                const postContent = article.post_content.toString()
                const noHTML = postContent.replace(/<[^>]*>/g, '')
                const customExcerpt = noHTML.slice(0, 180)
                return (
                  <NewsItem key={index}>
                    <h4>
                      {article.post_title}
                    </h4>
                    <div dangerouslySetInnerHTML={{
                      __html: customExcerpt,
                    }} />
                    <Link to={`/posts/${article.post_name}`}>
                      Read More
                    <FaChevronRight />
                    </Link>
                  </NewsItem>
                )
              })
            }
          </div>
          :
          <div className='container'>
            {
              recommended.map((article, index) => {
                const postContent = article.node.content.toString()
                const noHTML = postContent.replace(/<[^>]*>/g, '')
                const customExcerpt = noHTML.slice(0, 180)
                return (
                  <NewsItem key={index}>
                    <h4>
                      {article.node.title}
                    </h4>
                    <div dangerouslySetInnerHTML={{
                      __html: customExcerpt,
                    }} />
                    <Link to={`/posts/${article.node.slug}`}>
                      Read More
                    <FaChevronRight />
                    </Link>
                  </NewsItem>
                )
              })
            }
          </div>
        }
        <BtnLinkPrimary
          weblink='/news-resources'
        >
          View All
        </BtnLinkPrimary>
      </RelatedItems>
    )
  } else {
    return (
      <RelatedItems>
        <Title>{display} Articles</Title>
        {display === 'recommended' ?
          <div className='container'>
            {
              recommended.map((article, index) => {
                const postContent = article.content.toString()
                const noHTML = postContent.replace(/<[^>]*>/g, '')
                const customExcerpt = noHTML.slice(0, 180)
                return (
                  <NewsItem key={index}>
                    <h4>
                      {article.title}
                    </h4>
                    <div dangerouslySetInnerHTML={{
                      __html: customExcerpt,
                    }} />
                    <Link to={`/posts/${article.slug}`}>
                      Read More
                    <FaChevronRight />
                    </Link>
                  </NewsItem>
                )
              })
            }
          </div>
          :
          <div className='container'>
            {
              recommended.map((article, index) => {
                const postContent = article.node.content.toString()
                const noHTML = postContent.replace(/<[^>]*>/g, '')
                const customExcerpt = noHTML.slice(0, 180)
                return (
                  <NewsItem key={index}>
                    <h4>
                      {article.node.title}
                    </h4>
                    <div dangerouslySetInnerHTML={{
                      __html: customExcerpt,
                    }} />
                    <Link to={`/posts/${article.node.slug}`}>
                      Read More
                    <FaChevronRight />
                    </Link>
                  </NewsItem>
                )
              })
            }
          </div>
        }
        <BtnLinkPrimary
          weblink='/news-resources'
        >
          View All
        </BtnLinkPrimary>
      </RelatedItems>
    )
  }
};

export default RelatedPosts;
