import React from 'react'
import FeaturedContent from './styles'

const FeaturedContentBlock = ({ featured_content_block }) => {
  return (
    <>
      {
        featured_content_block.map((block) => {
          const image = block.image.mediaItemUrl
            ? block.image.mediaItemUrl
            : block.image.source_url
          return block.image
            ? (
              <FeaturedContent key={block.image.id}>
                <figure>
                  <img src={image} alt='' />
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
