import styled from 'styled-components';

const HeroMain = styled.section`
  background: var(--color-primary_l1);
  color:white;
  height:30rem;
  overflow: hidden;
  position: relative;
  padding-left: 23.5rem;
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

export default HeroMain;
