import React from 'react';
import { Link } from 'react-router-dom';
import { MiniHero } from '../../components/Heros/index';
import NewsItem from '../../components/NewsItem/index';
import { BtnLinkPrimary } from '../../components/Buttons/index';
import NewsGrid from './styles';
import PostPlaceholder from '../../assets/img/post-placeholder.jpeg';
import NewsIcon from '../../assets/img/icons/icons8-news-100.png';

const News = () => {
  return (
    <>
      <MiniHero>
        <h1>News</h1>
        <img src={NewsIcon} alt='News icon' />
      </MiniHero>
      <NewsGrid className='container'>
        <header>
          <p>We feel that the more our clients understand the concept behind both their budget and their portfolio, the more likely they are to fully commit to the appropriate principles and mindset towards their holistic financial plan.</p>
          <p>Here are some categories to help you navigate easier:</p>
        </header>

        <nav>
          <ul className='noStylesList'>
            <li className='active'><Link to='/'>Blog</Link></li>
            <li><Link to='/'>Brad&apos;s Daily Reads</Link></li>
            <li><Link to='/'>Launch Podcast</Link></li>
            <li><Link to='/'>Beers with Brad</Link></li>
          </ul>
        </nav>

        <div className='news__grid'>
          <NewsItem
            title='Lorem ipsum dolor sit amet consectetur adipiscing elit'
            url='/'
            imgSrc={PostPlaceholder}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis voluptas odit quo tempore et accusantium sapiente culpa ipsum praesentium dolores aliquid, laborum corrupti? Nesciunt aperiam minus maiores saepe soluta!</p>
          </NewsItem>
          <NewsItem
            title='Lorem ipsum dolor sit amet consectetur adipiscing elit'
            url='/'
            imgSrc={PostPlaceholder}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis voluptas odit quo tempore et accusantium sapiente culpa ipsum praesentium dolores aliquid, laborum corrupti? Nesciunt aperiam minus maiores saepe soluta!</p>
          </NewsItem>
          <NewsItem
            title='Lorem ipsum dolor sit amet consectetur adipiscing elit'
            url='/'
            imgSrc={PostPlaceholder}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis voluptas odit quo tempore et accusantium sapiente culpa ipsum praesentium dolores aliquid, laborum corrupti? Nesciunt aperiam minus maiores saepe soluta!</p>
          </NewsItem>
          <NewsItem
            title='Lorem ipsum dolor sit amet consectetur adipiscing elit'
            url='/'
            imgSrc={PostPlaceholder}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis voluptas odit quo tempore et accusantium sapiente culpa ipsum praesentium dolores aliquid, laborum corrupti? Nesciunt aperiam minus maiores saepe soluta!</p>
          </NewsItem>
          <NewsItem
            title='Lorem ipsum dolor sit amet consectetur adipiscing elit'
            url='/'
            imgSrc={PostPlaceholder}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis voluptas odit quo tempore et accusantium sapiente culpa ipsum praesentium dolores aliquid, laborum corrupti? Nesciunt aperiam minus maiores saepe soluta!</p>
          </NewsItem>
          <NewsItem
            title='Lorem ipsum dolor sit amet consectetur adipiscing elit'
            url='/'
            imgSrc={PostPlaceholder}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, blanditiis voluptas odit quo tempore et accusantium sapiente culpa ipsum praesentium dolores aliquid, laborum corrupti? Nesciunt aperiam minus maiores saepe soluta!</p>
          </NewsItem>
        </div>
        <BtnLinkPrimary
          weblink='/'
        >
          Load More
        </BtnLinkPrimary>
      </NewsGrid>
    </>
  );
};

export default News;
