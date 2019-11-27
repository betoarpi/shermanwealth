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

  @media screen and (max-width:767px){
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width:479px){
    grid-template-columns: 1fr;
  }
`;

export const ServicesContainer = styled.section`
  display: grid;
  gap:2rem;
  grid-template-columns: repeat(3, 1fr);
  margin:0 auto;
  max-width:1200px;
  padding:4rem 2rem 2rem;
  article {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    h3 {
      padding-left: 4rem;
      position:relative;
      ::before {
        background: var(--color-primary);
        clip-path: polygon(3rem 3rem, 3rem 0, 0 0);
        content: ' ';
        height:3rem;
        left:0;
        position: absolute;
        top:0;
        width:3rem;
        z-index:2;
      }
    }
    &:nth-child(6n+1){
      h3 {
        color: var(--color-primary_d2);
        ::before {
          background: var(--color-primary_d2);
        }
      }
    }
    &:nth-child(6n+2){
      h3 {
        color: var(--color-primary_d1);
        ::before {
          background: var(--color-primary_d1);
        }
      }
    }
    &:nth-child(6n+4){
      h3 {
        color: var(--color-primary_l1);
        ::before {
          background: var(--color-primary_l1);
        }
      }
    }
    &:nth-child(6n+5){
      h3 {
        color: var(--color-primary_l2);
        ::before {
          background: var(--color-primary_l2);
        }
      }
    }
    &:nth-child(6n+6){
      h3 {
        color: var(--color-highlight_d1);
        ::before {
          background: var(--color-highlight_d1);
        }
      }
    }
  }

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

export const RiskTolerance = styled.section`
  text-align: center;
`;
