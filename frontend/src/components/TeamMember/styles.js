import styled from 'styled-components';

const Member = styled.article`
  border-bottom: solid 2px var(--color-highlight_l2);
  display: grid;
  margin-bottom: 4rem;
  padding-bottom: 4rem;

  > div {
    p {
      :last-child {
        margin-bottom:0;
      }
    }
  }

  header {
    h3 {
      margin-bottom:0;
    }
    h6 {
      color: var(--color-text_l1);
      font-weight:400;
      margin-top:0;
    }
  }

  &:last-child{
    border:none;
    margin-bottom:0;
    padding-bottom:0;
  }

  @media screen and (min-width: 768px) {
    gap: 2rem;
    grid-template-columns: 360px 1fr;

    figure {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    &:nth-of-type(even){
      grid-template-columns: 1fr 360px;

      figure {
          grid-column: 2 / 3;
      }
    }
  }

  @media screen and (min-width: 1024px){
    grid-template-columns: 444px 1fr;

    &:nth-of-type(even){
      grid-template-columns: 1fr 444px;
    }
  }

  @media screen and (max-width: 767px) {
    gap:1rem;
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;

    figure{
      grid-row: 1 / 2;
      justify-content: center;
    }

    > div {
      grid-row: 2 / 3;
    }

    header {
      text-align: center;
    }
  }
`;

export default Member;