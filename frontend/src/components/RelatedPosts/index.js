import React from 'react';
import styled from 'styled-components'
import NewsItem from '../NewsItem/index'
import { BtnLinkPrimary } from '../Buttons/index'
import PostPlaceholder from '../../images/post-placeholder.jpeg'

const RelatedItems = styled.aside`
  background: var(--color-highlight_l3);
  padding:4rem 0;
  > h2 {
    margin: 0 auto -2rem;
    text-align: center;
    padding: 0 2rem;
  }
  .container {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    > article {
      figure {
        &:before {
          border-color: transparent var(--color-highlight_l3) transparent transparent;
        }
      }
    }
  }
  > .btn {
    margin: 0 auto;
    max-width: 100%;
    width: 260px;
  }
  @media screen and (max-width:1023px){
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width:767px){
    .container {
      grid-template-columns: 320px;
      justify-content: center;
    }
  }
  @media screen and (max-width:479px){
    .container {
      grid-template-columns: 1fr;
    }
  }
`;

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
