import styled from 'styled-components';

export const MainHeader = styled.header`
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 1fr max-content;
  width: 100vw;
`;

export const Image = styled.img`
  display: grid;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  max-width: 100%;
`;
