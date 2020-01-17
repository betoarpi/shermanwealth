import React from 'react'
import FeaturedContent from './styles'

const FeaturedContentBlock = ({ featured_content_block }) => {
  return (
    <>
      {featured_content_block.map((block) => (
        <FeaturedContent key={block.id}>
          <figure>
            <img src={block.image.source_url} alt='' />
          </figure>
          <div dangerouslySetInnerHTML={{ __html: block.content }} />
        </FeaturedContent>
      ))}
    </>
  );
};

export default FeaturedContentBlock;
