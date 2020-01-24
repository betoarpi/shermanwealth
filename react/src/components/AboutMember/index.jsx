import React from 'react';
import Member from './styles';

const AboutMember = (props) => {
  const { name, jobTitle, children, img } = props;

  return (
    <Member>

      <div>
        <header>
          <h3>{name}</h3>
          <h6>{jobTitle}</h6>
        </header>

        {children}
      </div>

      <figure>
        <img src={img} alt={name} />
      </figure>
    </Member>
  );
};

export default AboutMember;
