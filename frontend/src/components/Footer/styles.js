import styled from 'styled-components';

const MainFooter = styled.footer`
  background: var(--color-primary_d2);
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  .footer__container {
    display: grid;
    column-gap:1rem;
    grid-template: max-content 1fr / repeat(2, 1fr);
    margin: 0 2rem;
    max-width:100%;
    padding: 2rem 0 1.5rem 0;
    width:1200px;
  }
  .footer__col {
    display: grid;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    h3 {
      color: white;
      svg {
        margin-right: 0.5rem;
      }
    }
    address {
      font-style: normal;
      a{
        color: #67ABDE;
        font-weight: 400;
        :hover {
          color: var(--color-highlight);
        }
      }
    }
  }
  .footer__cta {
    align-content: center;
    display: grid;
    font-size: 1.125rem;
    gap: 1rem;
    grid-template: repeat(2, 62px) / 1fr;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-items: center;
    .btn {
      max-width: 420px;
    }
    button {
      display:flex;
      font-size:1.125rem;
      svg {
        margin-left:0.5rem;
      }
    }
  }
  .footer__copyright {
    border-top: 1px solid var(--color-primary_l2);
    grid-column: 1 / span 2;
    grid-row: 2 / 3;
    font-size:0.85rem;
    margin-top: 2rem;
    padding: 1.5rem 0 0;
    text-align: center;
    svg {
      display: inline-block;
      margin-bottom:-2.5px;
    }
    ul {
      display: inline-block;
      li {
        display: inline-block;
        &:before {
          content: ' | '
        }
      }
    }
    a {
      color: white;
      font-weight:400;
      :hover {
        color: var(--color-highlight_d1);
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .footer__container {
      grid-template-columns: 1fr 320px;
      .footer__cta {
        grid-template-rows: max-content max-content;
        .btn {
          font-size: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px){
    .footer__container {
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content max-content;
    }
    .footer__col, .footer__cta {
      grid-column: 1 / 2;
      text-align: center;
    }

    .footer__cta {
      grid-row: 2 / 3;
      margin-top: 1rem;
    }

    .footer__copyright {
      grid-row: 3 / 4;
    }
  }
`;

export default MainFooter;
