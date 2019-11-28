import styled from 'styled-components';

const FeaturedInLogos = styled.section`
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

export default FeaturedInLogos;
