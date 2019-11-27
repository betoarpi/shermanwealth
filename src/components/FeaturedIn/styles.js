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
`;

export default FeaturedInLogos;
