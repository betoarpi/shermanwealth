import React from 'react';

const AboutMember = (props) => {
  const { name, jobTitle, bio, img } = props;

  return (
    <article className='about__member'>
      <h3>{name}</h3>
      <h6>{jobTitle}</h6>

      <div className='about__extract'>
        {bio}
        <a href='/'>
          Read more
          <i className='fas fa-chevron-down'> </i>
        </a>
      </div>

      <figure className='about__img'>
        <img src={img} alt={name} />
      </figure>
    </article>
  );
};

export default AboutMember;
