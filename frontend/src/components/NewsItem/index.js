import React from 'react'

import PostItem from './styles'

const NewsItem = ({ children, itemClass }) => {
  return (
    <PostItem className={itemClass ? itemClass : ''}>
      {children}
    </PostItem>
  );
};

export default NewsItem