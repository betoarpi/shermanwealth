import styled from 'styled-components';

export const PersonaGrid = styled.div`
  display: grid;
  gap:4rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom:6rem;
  > article {
    max-width:initial;
    width: 100%;
    .persona__container {
      .btn {
        max-width:160px;
      }
    }
  }
  @media screen and (max-width:767px) {
    grid-template-columns: 1fr;
    margin:0 auto 4rem auto;
    max-width:500px;
  }
`;

export const PersonaModalContent = styled.article`
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows: max-content max-content;
  width:100%;
  header {
    height:320px;
    overflow: hidden;
    padding:4rem 5rem;
    position: relative;
    h2{
      bottom:2rem;
      color:white;
      font-weight:400;
      margin:0;
      position: absolute;
      left:4rem;
      z-index:1;
    }
    figure {
      height:100%;
      left:0;
      position: absolute;
      top:0;
      width: 100%;
      z-index:0;
      .gatsby-image-wrapper {
        height: 100%;
      }
      &:before {
        content:none;
      }
      &:after {
        background: linear-gradient(0deg, rgba(0,46,81,1) 5%, rgba(0,46,81,0) 100%);
        bottom:0;
        content: ' ';
        height:75%;
        left:0;
        position:absolute;
        width:100%;
        z-index:1;
      }
      img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }
  }
  .content-container {
    color:var(--color-primary);
    padding: 3rem 4rem 4rem;
    max-width:100%;
    p {
      &:last-of-type {
        margin-bottom:2rem;
      }
    }
    .btn {
      max-width:220px;
      width:100%;
    }
  }

  @media screen and (max-width: 767px) {
    header {
      height:360px;
      padding:0;
      h1 {
        bottom:0;
        left:0;
        padding: 2rem;
        width:100%;
      }
    }
    .content-container {
      padding:2rem;
      .btn {
        min-width:initial;
      }
    }
  }
  @media screen and (max-width: 479px) {
    header {
      height:13.75rem;
    }
  }
`;
