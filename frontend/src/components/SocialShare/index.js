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
    &:before {
      content: none;
    }
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

const SocialShare = ({ path, title }) => {
  const BASE_URL = process.env.API_URL
  return (
    <SocialShareElement>
      <div className='container'>
        <nav>
          <ul className='noStylesList'>
            <li>Share this post</li>
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}${path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/intent/tweet?text=${title}&url=${BASE_URL}${path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${BASE_URL}${path}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <Link to='/'><FaEnvelope /></Link>
            </li>
          </ul>
        </nav>

        <BtnLinkLight weblink='/news-resources'>
          <FaChevronLeft />
          <span>Go Back</span>
        </BtnLinkLight>
      </div>
    </SocialShareElement>
  );
};

export default SocialShare;
