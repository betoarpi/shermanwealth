import styled from 'styled-components';

export const MainHeader = styled.header`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 1fr max-content;
  padding-bottom:1rem;
  width: 100%;
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    grid-template-columns: 150px 1fr;
  }
  @media screen and (max-width: 1023px) {
    grid-template-columns: 180px 1fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: max-content 1fr;
    img {
      max-width:120px;
    }
  }
`;

export const Image = styled.img`
  display: grid;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  max-width: 100%;
`;
