import styled from 'styled-components';

export const PersonaItem = styled.article`
  height: 270px;
  max-width: 500px;
  position: relative;
  width:100%;
  * {
    position: relative;
    z-index:1;
  }
  h4 {
    font-weight:400;
  }
  div.persona__container {
    background: var(--color-highlight);
    clip-path: polygon(0% 0%, calc(100% - 3rem) 0, 100% 3rem, 100% 100%, 0% 100%);
    color: var(--color-primary);
    margin:3rem 0;
    padding:2rem;
    position: absolute;
    right:0;
    text-align: right;
    width:265px;
  }
  figure {
    left:0;
    height:100%;
    position:absolute;
    top:0;
    width:calc(100% - 4rem);
    z-index:0;
    img {
      left:0;
      height:100%;
      object-fit: cover;
      position:absolute;
      top:0;
      width:100%;
    }
  }
  @media screen and (max-width: 479px) {
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows: max-content max-content;
    height: initial;
    figure {
      display:grid;
      grid-row:1 / 2;
      left:initial;
      height:300px;
      position:relative;
      top:initial;
      width: 100%;
      z-index:0;
    }
    div.persona__container {
      display:grid;
      grid-row:2 / 3;
      margin:-100px auto 0 auto;
      position: initial;
      right:initial;
    }
  }
`;

export const PersonaGrid = styled.div`
  display: grid;
  gap:4rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom:4rem;
  > article {
    max-width:initial;
    width: 100%;
  }
  @media screen and (max-width:767px) {
    grid-template-columns: 1fr;
    margin:0 auto 4rem auto;
    max-width:500px;
  }
`;
