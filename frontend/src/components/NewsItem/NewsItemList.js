import React from 'react'

import { PostList } from './styles'

const NewsItem = ({ children }) => {
  return (
    <PostList>
      {children}
    </PostList>
  );
};

export default NewsItem