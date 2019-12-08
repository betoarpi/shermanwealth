import styled from 'styled-components';

export const HeroMain = styled.section`
  background: var(--color-primary_l1);
  color:white;
  height:30rem;
  overflow: hidden;
  position: relative;
  padding-left: 30rem;
  width:100%;
  ::before {
    background: linear-gradient(90deg, rgba(46,84,112,1) 33%, rgba(46,84,112,0) 100%);
    content:' ';
    height:100%;
    left:0;
    position: absolute;
    top:0;
    width:100%;
    z-index:1;
  }
  ::after {
    background:white;
    clip-path: polygon(30.125rem 30.125rem, 0 30.125rem, 0 0);
    content:' ';
    left:0;
    height: 100%;
    position: absolute;
    top:0;
    width: 100%;
    z-index:1;
  }
  h1 {
    color: white;
    display: inline-block;
    font-size:4.5rem;
    line-height:1;
    position:relative;
    top:50%;
    transform: translateY(-50%);
    z-index:2;
    span {
      font-size: 3rem;
      font-weight:400;
    }
    svg {
      display: block;
      margin: 1rem auto 0 auto;
      width:2.875rem;
    }
  }
  .gatsby-image-wrapper {
    left:0 !important;
    height:100% !important;
    position: absolute !important;
    top:0 !important;
    width:100% !important;
    z-index:0 !important;
    img {
      left:0 !important;
      height:100% !important;
      object-fit: cover !important;
      position: absolute !important;
      top:0 !important;
      width:100% !important;
      z-index:0 !important;
    }
  }
  img {
    left:0;
    height:100%;
    object-fit: cover;
    position: absolute;
    top:0;
    width:100%;
    z-index:0;
  }
  .triangle {
    background: var(--color-primary);
    clip-path: polygon(17.5rem 17.5rem, 17.5rem 0, 0 0);
    height:17.5rem;
    left:2rem;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    width:17.5rem;
    z-index:2;
  }

  @media screen and (max-width: 1023px) {
    height: 22.5rem;
    padding-left:17.5rem;
    ::after {
      clip-path: polygon(22.625rem 22.625rem, 0 22.625rem, 0 0);
    }
    h1 {
      font-size: 3.5rem;
      span {
        font-size: 2.35rem;
      }
    }
    .triangle {
      clip-path: polygon(11.25rem 11.25rem, 11.25rem 0, 0 0);
      height:11.25rem;
      width:11.25rem;
    }
  }
  
  @media screen and (max-width: 767px) {
    height: 16.25rem;
    padding-left:13rem;
    ::after {
      clip-path: polygon(16.375rem 16.375rem, 0 16.375rem, 0 0);
    }
    h1 {
      font-size: 2.25rem;
      span {
        font-size: 1.375rem;
      }
    }
    .triangle {
      clip-path: polygon(130px 130px, 130px 0, 0 0);
      height:130px;
      width:130px;
    }
  }
  
  @media screen and (max-width: 767px) {
    padding-left:0;
    ::before {
      background: var(--color-primary_l1);
      opacity:0.5;
    }
    ::after {
      content: none;
    }
    h1 {
      left:50%;
      text-align: center;
      transform: translate(-50%, -50%)
    }
    .triangle {
      display: none;
    }
  }
`;

export const HeroStandard = styled.section`
  background: var(--color-primary_l1);
  color:white;
  height:386px;
  overflow: hidden;
  position: relative;
  padding-left: 300px;
  width:100%;
  ::before {
    background: linear-gradient(90deg, rgba(46,84,112,1) 50%, rgba(46,84,112,0) 100%);
    content:' ';
    height:100%;
    left:0;
    max-width:1366px;
    position: absolute;
    top:0;
    width:100%;
    z-index:1;
  }
  ::after {
    background:white;
    clip-path: polygon(30.125rem 30.125rem, 0 30.125rem, 0 0);
    content:' ';
    left:0;
    height: 100%;
    position: absolute;
    top:0;
    width: 100%;
    z-index:1;
  }
  h2 {
    color: white;
    display: inline-block;
    font-weight:700;
    position:relative;
    top:50%;
    transform: translateY(-50%);
    width: calc(100% - 360px);
    z-index:2;
    span {
      font-size: 3rem;
      font-weight:400;
    }
    svg {
      display: block;
      margin: 1rem auto 0 auto;
      width:2.875rem;
    }
  }
  .gatsby-image-wrapper {
    left:0 !important;
    height:100% !important;
    position: absolute !important;
    top:0 !important;
    width:100% !important;
    z-index:0 !important;
    img {
      left:0 !important;
      height:100% !important;
      object-fit: contain !important;
      object-position: right !important;
      position: absolute !important;
      top:0 !important;
      width:100% !important;
      z-index:0 !important;
    }
  }
  img {
    left:0;
    height:100%;
    object-fit: contain;
    object-position: right;
    position: absolute !important;
    top:0;
    width:100%;
    z-index:0;
  }
  .triangle {
    background: var(--color-primary_l2);
    clip-path: polygon(17.5rem 17.5rem, 17.5rem 0, 0 0);
    height:210px;
    left:2rem;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    width:210px;
    z-index:2;
  }
  @media screen and (max-width: 1259px) {
    h2 {
      width: calc(100% - 1rem);
    }
  }
  @media screen and (max-width: 1023px) {
    height: 16rem;
    padding-left:12.5rem;
    ::after {
      clip-path: polygon(16.125rem 16.125rem, 0 16.125rem, 0 0);
    }
    h2 {
      font-size: 1.5rem;
    }
    .triangle {
      clip-path: polygon(8rem 8rem, 8rem 0, 0 0);
      height:8rem;
      width:8rem;
    }
  }
  
  @media screen and (max-width: 767px) {
    height: 10.5rem;
    padding-left:0;
    ::after {
      clip-path: polygon(16.375rem 16.375rem, 0 16.375rem, 0 0);
    }
    ::before {
      background: var(--color-primary_l1);
      opacity:0.5;
    }
    ::after {
      content: none;
    }
    h2 {
      font-size:1.125rem;
      left:50%;
      padding: 0 2rem;
      text-align: center;
      transform: translate(-50%, -50%);
    }
    img {
      object-fit: cover;
    }
    .triangle {
      display: none;
    }
  }
`;

export const HeroMini = styled.section`
  background: var(--color-primary_l1);
  color:white;
  height:220px;
  overflow: hidden;
  position: relative;
  padding-left: 220px;
  width:100%;
  ::before {
    background: linear-gradient(90deg, rgba(46,84,112,1) 50%, rgba(46,84,112,0) 100%);
    content:' ';
    height:100%;
    left:0;
    max-width:1366px;
    position: absolute;
    top:0;
    width:100%;
    z-index:1;
  }
  ::after {
    background:white;
    clip-path: polygon(220px 220px, 0 220px, 0 0);
    content:' ';
    left:0;
    height: 100%;
    position: absolute;
    top:0;
    width: 100%;
    z-index:1;
  }
  h1 {
    color: white;
    display: inline-block;
    position:relative;
    top:50%;
    transform: translateY(-50%);
    width: calc(100% - 360px);
    z-index:2;
    span {
      font-size: 3rem;
      font-weight:400;
    }
    svg {
      display: block;
      margin: 1rem auto 0 auto;
      width:2.875rem;
    }
  }
  img {
    background: var(--color-primary_l1);
    background-blend-mode:normal;
    right:5%;
    height:100px;
    object-fit: contain;
    object-position: right;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    width:100px;
    z-index:0;
  }
  .triangle {
    background: var(--color-primary_d1);
    clip-path: polygon(110px 110px, 110px 0, 0 0);
    height:110px;
    left:1.5rem;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    width:110px;
    z-index:2;
  }
  @media screen and (max-width: 1259px) {
    h1 {
      width: calc(100% - 1rem);
    }
  }
  @media screen and (max-width: 1023px) {
    height: 10rem;
    padding-left:10rem;
    ::after {
      clip-path: polygon(16.125rem 16.125rem, 0 16.125rem, 0 0);
    }
    h1 {
      font-size: 1.5rem;
    }
    .triangle {
      clip-path: polygon(5rem 5rem, 5rem 0, 0 0);
      height:5rem;
      left:1rem;
      width:5rem;
    }
  }
  
  @media screen and (max-width: 767px) {
    height: 6rem;
    padding-left:0;
    ::after {
      clip-path: polygon(16.375rem 16.375rem, 0 16.375rem, 0 0);
    }
    ::before {
      background: var(--color-primary_l1);
      opacity:0.5;
    }
    ::after {
      content: none;
    }
    h1 {
      left:50%;
      padding: 0 2rem;
      text-align: center;
      transform: translate(-50%, -50%);
    }
    img {
      height:3rem;
      object-fit: cover;
      width:3rem;
    }
    .triangle {
      display: none;
    }
  }
`;
