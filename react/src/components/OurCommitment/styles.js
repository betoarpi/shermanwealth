import styled from 'styled-components';

const OurCommitmentElement = styled.section`
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

export default OurCommitmentElement;
