import styled from 'styled-components'

export const RelatedItems = styled.aside`
  background: var(--color-highlight_l3);
  padding:4rem 0;
  > h2 {
    margin: 0 auto -2rem;
    text-align: center;
    padding: 0 2rem;
  }
  .container {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    > article {
      grid-template-rows: repeat(3, min-content);
      > h4 {
        margin-bottom: 1rem;
      }
      figure {
        &:before {
          border-color: transparent var(--color-highlight_l3) transparent transparent;
        }
      }
      > div {
        :after {
          content: '...'
        }
      }
    }
  }
  > .btn {
    margin: 0 auto;
    max-width: 100%;
    width: 260px;
  }
  @media screen and (max-width:1023px){
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width:767px){
    .container {
      grid-template-columns: 320px;
      justify-content: center;
    }
  }
  @media screen and (max-width:479px){
    .container {
      grid-template-columns: 1fr;
    }
  }
`;

export const Title = styled.h2`
  text-transform: capitalize;
`