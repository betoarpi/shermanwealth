import React from 'react';
import NewsItem from './NewsItem';
import { BtnLinkPrimary } from './Buttons/index';

const RelatedPosts = () => {
  return (
    <aside className='related-posts'>
      <h2>Recommended Articles</h2>
      <div className='related-posts__container'>
        <NewsItem
          title='News Title'
          description={[<p>Some description here</p>]}
          url='/'
          imgSrc='/'
        />
        <NewsItem
          title='News Title'
          description={[<p>Some description here</p>]}
          url='/'
          imgSrc='/'
        />
        <NewsItem
          title='News Title'
          description={[<p>Some description here</p>]}
          url='/'
          imgSrc='/'
        />
      </div>
      <BtnLinkPrimary
        weblink='/'
      >
        View All
      </BtnLinkPrimary>
    </aside>
  );
};

export default RelatedPosts;
