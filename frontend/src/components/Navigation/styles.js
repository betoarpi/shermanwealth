import styled from 'styled-components';

const Nav = styled.nav`
  position: relative;

  .navigation__sub {
    display: none;
  }

  .navigation__mobile {
    display: none;
  }

  /* Desktop Navigation Styles */
  @media screen and (min-width: 1024px) {
    align-items: center;
    display: grid;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    grid-template:1fr / 1fr;
    max-width:100%;
    padding-top:1rem;
    width:100%;

    > ul {
      display:inline-block;
      list-style: none;
      margin: 1rem;
      padding:0;
      text-align: right;

      @media screen and (max-width: 767px){
        display:none;
      }
    }

    > ul > li {
      display: inline-block;
      margin:0 1rem;
      &:not(:last-child) {
        a {
          color: var(--color-primary);
          text-decoration: none;
          padding: 5px;
          svg {
            margin: 0 0 -2px 8px;
          }
          :hover {
            color: var(--color-highlight_d1);
          }
          &[aria-current="page"] {
            color: var(--color-highlight_d1);
            text-decoration: underline;
          }
        }
      }
      &.btn-cta {
        a {
          background: var(--color-secondary);
          color: white;
          font-weight: 400;
          padding: 0.5rem 1.5rem;
          text-transform: uppercase;
          :hover {
            background: var(--color-secondary_l1);
            color:white;
            text-decoration: none;
          }
          :active {
            background: var(--color-secondary_d1);
            color:white;
          }
        }
      }
      > div.sub-nav {
        display: none;
        position: absolute;
        background: #F6FAFC;
        border: 1px solid #D9EAF2;
        z-index: 99;
        padding: 45px;
        margin-right: 15px;
        margin-left: -45px;
        box-shadow: -5px 5px rgba(169, 171, 172, .3);

        h4 {
          font-weight:800;
          padding:0 2rem 0 3rem;
          position: relative;
          ::before {
            background: var(--color-secondary);
            clip-path: polygon(2rem 2rem, 2rem 0, 0 0);
            content: ' ';
            height:2rem;
            left:0;
            position: absolute;
            top:0;
            width:2rem;
            z-index:2;
          }
        }

        ul {
          li {
            margin-bottom: 0.25rem;
            &:last-child {
              margin-bottom: 0;
            }
            a {
              color: var(--color-text) !important;
              font-weight:700;
              transition: all 0.25s ease-in-out;
              &:hover{
                color: var(--color-primary) !important;
              }
              &[aria-current="page"] {
                color: var(--color-highlight_d1) !important;
              }
            }
          }
        }
      }

      &:hover {
        > div.sub-nav {
          display: block;
        }
      }
    }
  }

  /* Mobile Navigation Styles */
  @media screen and (max-width: 1023px) {
    > ul {
      display: none;
    }
    .navigation__mobile {
      color: var(--color-primary);
      display: block;
      font-size: 2rem;
      position: absolute;
      right: 1rem;
      top: calc(50% + 0.5rem);
      transform: translateY(-50%);
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default Nav;
