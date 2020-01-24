import styled from 'styled-components';

const FeaturedElement = styled.section`
  background: var(--color-highlight_l3);
  color: var(--color-primary);
  padding:4rem 2rem;
  text-align: center;
  > div {
    display: grid;
    gap: 8rem;
    grid-template-columns: repeat(3, 1fr);
    margin:0 auto;
    max-width:1200px;
  }
  article {
    display: grid;
    gap:1rem;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content max-content;
    justify-items: center;
    h4 {
      margin:0;
    }
    p {
      &:first-of-type {
        margin-top:0;
      }
      &:last-of-type {
        margin-bottom:0;
      }
    }
    img {
      grid-row:1 / 2;
    }
  }
  .btn {
    margin:0 auto;
    width:16.25rem;
  }
  @media screen and (max-width: 1023px) {
    > div {
      gap:4rem;
    }
  }
  @media screen and (max-width: 767px) {
    > div {
      gap:2rem;
      grid-template-columns: 1fr;
      margin-bottom:2rem;
    }
  }
`;

export default FeaturedElement;
