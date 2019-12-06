import styled from 'styled-components';

export const PersonasContainer = styled.section`
  display: grid;
  gap:2rem;
  grid-template-columns: repeat(3, 1fr);
  margin:0 auto;
  max-width:1200px;
  padding:4rem 2rem 2rem;
  .persona {
    &__title {
      padding-left: 3rem;
      position:relative;
      ::before {
        background: var(--color-primary);
        clip-path: polygon(2rem 2rem, 2rem 0, 0 0);
        content: ' ';
        height:2rem;
        left:0;
        position: absolute;
        top:0;
        width:2rem;
        z-index:2;
      }
    }
    &:nth-child(6n+1){
      .persona__title {
        color: var(--color-primary_d2);
        ::before {
          background: var(--color-primary_d2);
        }
      }
    }
    &:nth-child(6n+2){
      .persona__title {
        color: var(--color-primary_d1);
        ::before {
          background: var(--color-primary_d1);
        }
      }
    }
    &:nth-child(6n+4){
      .persona__title {
        color: var(--color-primary_l1);
        ::before {
          background: var(--color-primary_l1);
        }
      }
    }
    &:nth-child(6n+5){
      .persona__title {
        color: var(--color-primary_l2);
        ::before {
          background: var(--color-primary_l2);
        }
      }
    }
    &:nth-child(6n+6){
      .persona__title {
        color: var(--color-highlight_d1);
        ::before {
          background: var(--color-highlight_d1);
        }
      }
    }
  }

  .btn {
    grid-column: 2 / 3;
    margin:0 auto;
    max-width: 260px;
  }

  @media screen and (max-width:767px){
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width:479px){
    grid-template-columns: 1fr;
  }
`;

export const OurCommitmentElement = styled.section`
  background: var(--color-highlight_l3);
  padding:4rem 2rem;
  article {
    display:grid;
    gap: 2rem;
    grid-template-columns: 1fr 2fr;
    margin:0 auto;
    max-width:1200px;
    .logos {
      align-content: center;
      display: grid;
      gap: 2rem;
      grid-template-columns:1fr;
      grid-template-rows: max-content max-content;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      justify-content: center;
    }
    .commitment {
      grid-column: 2 / 3;
    }
  }
  @media screen and (max-width: 767px){
    article {
      grid-template-columns: 1fr;
      .logos, .commitment {
        grid-column: initial;
        grid-row: initial;
      }
      .logos {
        align-content: center;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        img {
          display: inline-flex;
          height:100%;
          margin:1rem;
        }
      }
    }
  }
`;

export const ServicesContainer = styled.section`
  display: grid;
  gap:2rem;
  grid-template-columns: repeat(3, 1fr);
  margin:0 auto;
  max-width:1200px;
  padding:4rem 2rem 2rem;

  > .btn {
    grid-column: 2 / 3;
    margin: 0 auto;
    max-width: 100%;
    width: 260px;
  }

  @media screen and (max-width:767px){
    grid-template-columns: 1fr 1fr;
    >.btn {
      grid-column: 1 / span 2;
    }
  }
  
  @media screen and (max-width:479px){
    grid-template-columns: 1fr;
    >.btn {
      grid-column: 1 / 2;
      width:100%;
    }
  }
`;

export const FeaturedInLogos = styled.section`
  background: var(--color-highlight_l3);
  padding:0 2rem;
  .logos {
    align-items: center;
    display:grid;
    gap: 2rem;
    grid-template-columns: repeat(6, 1fr);
    img {
      mix-blend-mode:luminosity;
    }
  }

  @media screen and (max-width:767px){
    .logos {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media screen and (max-width:479px){
    .logos {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const RiskTolerance = styled.section`
  text-align: center;
`;
