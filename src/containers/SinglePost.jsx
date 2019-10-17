import React from 'react';
import MiniHero from '../components/MiniHero';
import SocialShare from '../components/SocialShare';
import RelatedPosts from '../components/RelatedPosts';

const SinglePost = () => {
  return (
    <>
      <MiniHero />
      <section className='single-post'>
        <h1>Post Title here</h1>
        <figure>
          <img src='/' alt='title' />
        </figure>
        <p>some content here</p>
      </section>
      <SocialShare />
      <RelatedPosts />
    </>
  );
};

export default SinglePost;
