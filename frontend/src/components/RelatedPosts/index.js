import React from 'react';
import { RelatedItems, Title } from './style'
import NewsItem from '../NewsItem/index'
import { BtnLinkPrimary } from '../Buttons/index'
import PostPlaceholder from '../../images/post-placeholder.jpeg'
import { Link } from 'gatsby'
import { FaChevronRight } from 'react-icons/fa'


const RelatedPosts = ({ display, recommended }) => {
  return (
    <RelatedItems>
      <Title>{display} Articles</Title>
      <div className='container'>
        {
          recommended.map((article, index) => {
            const postContent = article.post_content.toString()
            const noHTML = postContent.replace(/<[^>]*>/g, '')
            const customExcerpt = noHTML.slice(0, 180)
            return (
              <NewsItem
                title={article.post_title}
                url='/'
                imgSrc={PostPlaceholder}
              >
                <h4>
                  {article.post_title}
                </h4>
                <div dangerouslySetInnerHTML={{
                  __html: customExcerpt,
                }} />

                <Link to="#">
                  Read More
                  <FaChevronRight />
                </Link>
              </NewsItem>
            )
          })
        }
      </div>
      <BtnLinkPrimary
        weblink='/news-resources'
      >
        View All
      </BtnLinkPrimary>
    </RelatedItems>
  );
};

export default RelatedPosts;
