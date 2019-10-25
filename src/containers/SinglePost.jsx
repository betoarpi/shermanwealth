import React from 'react';
import { MiniHero } from '../components/Heros/index';
import SocialShare from '../components/SocialShare';
import RelatedPosts from '../components/RelatedPosts';

const SinglePost = () => {
  return (
    <>
      <MiniHero
        imgSrc='/'
      >
        Fancy text title
      </MiniHero>
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
