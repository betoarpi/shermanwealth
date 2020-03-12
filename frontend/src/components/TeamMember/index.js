import React from 'react';
import Member from './styles';
import Img from 'gatsby-image'

const TeamMember = (props) => {
  const { name, jobTitle, children, img, isPreview = false } = props;
  
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
        {
          !isPreview
            ? <Img fluid={img} alt={name} />
            : <img src={img} alt={name} />
        }
      </figure>
    </Member>
  );
};

export default TeamMember;