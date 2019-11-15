import React from 'react';
import NewsItem from '../NewsItem/index';
import { BtnLinkPrimary } from '../Buttons/index';
import RelatedItems from './styles';
import PostPlaceholder from '../../assets/img/post-placeholder.jpeg';

const RelatedPosts = () => {
  return (
    <RelatedItems>
      <h2>Recommended Articles</h2>
      <div className='container'>
        <NewsItem
          title='Lorem ipsum dolor sit amet consectetur adipiscing elit'
          url='/'
          imgSrc={PostPlaceholder}
        >
          <p>Proin semper, neque vel tincidunt feugiat, nulla risus lacinia metus, at ornare ex purus quis quam. Suspendisse ut tincidunt augue, bibendum maximus lectus. Cras ut enim blandit nibh dapibus fermentum in quis quam. Mauris facilisis vehicula tincidunt. Donec ac mauris venenatis</p>
        </NewsItem>
        <NewsItem
          title='Lorem ipsum dolor sit amet consectetur adipiscing elit'
          url='/'
          imgSrc={PostPlaceholder}
        >
          <p>Proin semper, neque vel tincidunt feugiat, nulla risus lacinia metus, at ornare ex purus quis quam. Suspendisse ut tincidunt augue, bibendum maximus lectus. Cras ut enim blandit nibh dapibus fermentum in quis quam. Mauris facilisis vehicula tincidunt. Donec ac mauris venenatis</p>
        </NewsItem>
        <NewsItem
          title='Lorem ipsum dolor sit amet consectetur adipiscing elit'
          url='/'
          imgSrc={PostPlaceholder}
        >
          <p>Proin semper, neque vel tincidunt feugiat, nulla risus lacinia metus, at ornare ex purus quis quam. Suspendisse ut tincidunt augue, bibendum maximus lectus. Cras ut enim blandit nibh dapibus fermentum in quis quam. Mauris facilisis vehicula tincidunt. Donec ac mauris venenatis</p>
        </NewsItem>
      </div>
      <BtnLinkPrimary
        weblink='/'
      >
        View All
      </BtnLinkPrimary>
    </RelatedItems>
  );
};

export default RelatedPosts;
