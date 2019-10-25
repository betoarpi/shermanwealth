import React from 'react';
import { Link } from 'react-router-dom';
import { MiniHero } from '../components/Heros/index';
import NewsItem from '../components/NewsItem';
import { BtnLinkPrimary } from '../components/Buttons/index';

const News = () => {
  return (
    <>
      <MiniHero
        imgSrc='/'
      >
        Fancy text title
      </MiniHero>
      <section className='news'>
        <article>
          <p>We feel that the more our clients understand the concept behind both their budget and their portfolio, the more likely they are to fully commit to the appropriate principles and mindset towards their holistic financial plan.</p>
          <p>Here are some categories to help you navigate easier:</p>
        </article>

        <nav className='mews__nav'>
          <ul>
            <li><Link to='/'>Blog</Link></li>
            <li><Link to='/'>Brad&apos;s Daily Reads</Link></li>
            <li><Link to='/'>Launch Podcast</Link></li>
            <li><Link to='/'>Beers with Brad</Link></li>
          </ul>
        </nav>

        <div className='news__grid'>
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
          Load More
        </BtnLinkPrimary>
      </section>
    </>
  );
};

export default News;
