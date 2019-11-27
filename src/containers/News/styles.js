import styled from 'styled-components';

const NewsGrid = styled.section`
  > header {
    font-size: 1.125rem;
    text-align: center;
  }

  nav {
    ul {
      border-bottom: 1px solid var(--color-highlight_l1);
      border-top: 1px solid var(--color-highlight_l1);
      margin: 2rem 0 3rem 0;
      padding:0.5rem 0;
      text-align: center;
      li {
        border-right: 1px solid var(--color-highlight_l1);
        display: inline-block;
        padding:0 1rem;
        a {
          color: var(--color-primary);
        }
        &:not(.active){
          a {
            color: var(--color-highlight_d1);
            font-weight:400;
          }
        }
        &:last-child {
          border-right: none;
          padding-right:0;
        }
      }
    }
  }

  .news__grid {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 2rem;
  }

  > .btn {
    margin: 0 auto;
    max-width: 100%;
    width: 260px;
  }

  @media screen and (max-width:1023px){
    .news__grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width:767px){
    .news__grid {
      grid-template-columns: 320px;
      justify-content: center;
    }
  }
  @media screen and (max-width:579px){
    nav {
      ul {
        padding:0;
        li {
          border-bottom: 1px solid var(--color-highlight_l1);
          border-right: none;
          display: block;
          padding:0.25rem 0;
          &:last-child {
            border-bottom:none;
          }
        }
      }
    }
  }
  @media screen and (max-width:479px){
    .news__grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default NewsGrid;
