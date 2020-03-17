import styled from 'styled-components';

export const PersonasContainer = styled.section`
  .personas__container__grid {
    display: grid;
    column-gap:6rem;
    grid-template-columns: repeat(3, 1fr);
    margin:0 auto;
    max-width:1200px;
    padding:0 2rem 4rem 2rem;
    row-gap:3rem;
  }
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

  @media screen and (max-width:1023px){
    .personas__container__grid {
      column-gap: 2rem;
      row-gap:2rem;
    }
  }

  @media screen and (max-width:767px){
    .personas__container__grid {
      grid-template-columns: 1fr 1fr;
    }
    .btn {
      grid-column: 1 / 3;
    }
  }
  
  @media screen and (max-width:479px){
    .personas__container__grid{
      grid-template-columns: 1fr;
      padding: 3rem 2rem;
    }
    .btn {
      grid-column: 1 / 2;
    }
  }
`;

export const OurCommitmentElement = styled.section`
  /* background: var(--color-highlight_l3); */
  padding:4rem 2rem;
  article {
    display:grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    margin:0 auto;
    max-width:1200px;
    .logos {
      align-items: center;
      display: grid;
      gap: 3rem;
      grid-template-columns: max-content max-content;
      grid-template-rows: max-content;
      justify-content: center;
      text-align: center;

      img {
        margin:0;
      }

      .gatsby-image-wrapper {
        display: grid;
        margin-bottom: 15px;
        width: 280px;
        picture {
          img {
            object-fit: contain !important;
          }
        }
      }
    }
    .commitment {
      > * {
        &:first-child {
          margin-top:0;
        }
      }
    }
  }
  @media screen and (max-width: 767px){
    article {
      .logos, .commitment {
        grid-template-columns: 1fr;
        justify-items: center;
      }
    }
  }
`;

export const ServicesContainer = styled.section`
  > h2 {
    text-align: center;
    margin-bottom: 0;
  }
  > div {
    display: grid;
    column-gap:4rem;
    grid-template-columns: repeat(3, 1fr);
    margin:0 auto;
    max-width:1200px;
    padding: 2rem 2rem 4rem;
    row-gap: 2rem;

    article {
      &:last-child {
        justify-self: center;
      }
    }

    > .btn {
      grid-column: 2 / 3;
    }

    @media screen and (max-width:1023px){
      column-gap: 2rem;
      row-gap:2rem;
    }

    @media screen and (max-width:767px){
      grid-template-columns: 1fr 1fr;
      >.btn {
        grid-column: 1 / 2;
      }
    }
    
    @media screen and (max-width:479px){
      grid-template-columns: 1fr;
      padding: 3rem 2rem;
      >.btn {
        grid-column: 1 / 2;
        max-width:100%;
      }
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

export const FindMyRiskNumber = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  text-align: center;

  > a {
    margin: 0 auto;
    max-width: 260px;
  }

  > .btn {
    margin:2rem auto 0;
  }
`
