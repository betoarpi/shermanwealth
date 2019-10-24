import styled from 'styled-components';

export const MainHeader = styled.header`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 1fr max-content;
  width: 100%;
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
