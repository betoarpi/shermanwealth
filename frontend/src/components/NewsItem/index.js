import React from 'react'

import PostItem from './styles'

const NewsItem = ({ children }) => {
  return (
    <PostItem>
      {children}
    </PostItem>
  );
};

export default NewsItem