import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import PostItem from './styles';

const NewsItem = (props) => {
  const { title, children, url, imgSrc } = props;
  return (
    <PostItem>
      <h4>{title}</h4>
      {children}
      <a href={url}>
        Read More
        <FaChevronRight />
      </a>
      <figure>
        {imgSrc &&
          <img src={imgSrc} alt={title} />}
      </figure>
    </PostItem>
  );
};

export default NewsItem;
