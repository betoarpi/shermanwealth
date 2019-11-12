import React from 'react';
import SinglePostElement from './styles';
import SocialShare from '../../components/SocialShare';
import RelatedPosts from '../../components/RelatedPosts';
import PostPlaceholder from '../../assets/img/post-placeholder.png';

const SinglePost = () => {
  return (
    <>
      <SinglePostElement>
        <article className='container'>
          <h1>
            What The Shift In The Federal Reserve Language Means For You
          </h1>
          <figure>
            <img src={PostPlaceholder} alt='Post Title' />
          </figure>
          <p>some content here</p>
        </article>
      </SinglePostElement>
      <SocialShare />
      <RelatedPosts />
    </>
  );
};

export default SinglePost;
