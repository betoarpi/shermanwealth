import React from 'react';

const NewsItem = (props) => {
  const { title, description, url, imgSrc } = props;
  return (
    <article>
      <h4>{title}</h4>
      {description}
      <a href={url}>
        Read More
        <i className='fas fa-chevron-right'> </i>
      </a>
      <figure>
        <img src={imgSrc} alt={title} />
      </figure>
    </article>
  );
};

export default NewsItem;
