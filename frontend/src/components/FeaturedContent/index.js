import React from 'react'
import FeaturedContent from './styles'

const FeaturedContentBlock = ({ featured_content_block }) => {
  return (
    <>
      {
        featured_content_block.map((block) => {
          return block.image
            ? (
              <FeaturedContent key={block.image.id}>
                <figure>
                  <img src={block.image.source_url} alt='' />
                </figure>
                <div dangerouslySetInnerHTML={{ __html: block.content }} />
              </FeaturedContent>
            )
            : (
              <FeaturedContent key={block.id}>
                <figure>
                  <img src='https://via.placeholder.com/350x150' alt='' />
                </figure>
                <div dangerouslySetInnerHTML={{ __html: block.content }} />
              </FeaturedContent>
            )
        })
      }
    </>
  );
};

export default FeaturedContentBlock;
