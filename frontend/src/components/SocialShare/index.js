import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope, FaChevronLeft } from 'react-icons/fa'
import { BtnLinkLight } from '../Buttons/index'

const SocialShareElement = styled.aside`
  background: var(--color-primary);
  color: white;
  .container {
    display: grid;
    grid-template-columns: 1fr max-content;
    padding: 2rem 2rem;
  }
  nav {
    display: grid;
    ul {
      display: grid;
      color: white;
      gap: 1rem;
      grid-auto-columns: max-content;
      grid-template-rows:1fr;
      li {
        align-items: center;
        display: grid;
        font-size: 1.25rem;
        grid-row: 1 / 2;
        line-height:1;
        a {
          color: white;
          &:hover {
            color: var(--color-secondary);
          }
        }
        &:first-child {
          font-size: 1rem;
          font-weight:700;
        }
      }
    }
  }

  @media screen and (max-width: 767px){
    .container {
      gap:1rem;
      grid-template-columns:1fr;
      justify-items: center;
    }
  }
`;

const SocialShare = () => {
  return (
    <SocialShareElement>
      <div className='container'>
        <nav>
          <ul className='noStylesList'>
            <li>Share this post</li>
            <li>
              <Link to='/'><FaFacebookF /></Link>
            </li>
            <li>
              <Link to='/'><FaTwitter /></Link>
            </li>
            <li>
              <Link to='/'><FaLinkedin /></Link>
            </li>
            <li>
              <Link to='/'><FaEnvelope /></Link>
            </li>
          </ul>
        </nav>

        <BtnLinkLight
          weblink='/'
        >
          <FaChevronLeft />
          <span>Go Back</span>
        </BtnLinkLight>
      </div>
    </SocialShareElement>
  );
};

export default SocialShare;
