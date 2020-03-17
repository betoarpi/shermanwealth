import React from 'react'

import { PostList } from './styles'

const NewsItem = ({ children, itemClass }) => {
  return (
    <PostList className={itemClass}>
      {children}
    </PostList>
  );
};

export default NewsItem