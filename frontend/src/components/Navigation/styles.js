import styled from 'styled-components';

export const Nav = styled.nav`
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
      margin:0 0.75rem;
      &:not(:last-child) {
        a {
          color: var(--color-primary);
          text-decoration: none;
          padding: 5px;
          :hover {
            color: var(--color-highlight_d1);
          }
          svg {
            margin: 0px 0px -2px 8px;
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
      &:nth-last-child(2),
      &:nth-last-child(3) {
        > div.sub-nav {
          margin-left: -150px;
        }
      }
      > div.sub-nav {
        display: none;
        position: absolute;
        background: #F6FAFC;
        border: 1px solid #D9EAF2;
        z-index: 99;
        padding: 45px;
        margin: 1rem 1rem 0 -150px;
        box-shadow: -5px 5px rgba(169, 171, 172, .3);

        > div {
          grid-template-columns: 1fr  max-content;
        }

        &:before {
          content: ' ';
          display: block;
          height: 1.45rem;
          left: 0;
          position:absolute;
          top: -1.45rem;
          width: 100%;
        }

        h4 {
          font-weight:800;
          margin-top:0;
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
          padding-left: 2rem;
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


export const MobileNav = styled.nav`
  height: 100vh;
  left: -300px;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  width: 300px;
  z-index: 99;

  > ul {
    list-style: none;
    padding: 0;
    margin:0;
    > li {
      > a {
        width: 100%;
        color: white;
        padding: 10px 10px 10px 0;
        display: block;
        &:hover {
          text-decoration: none;
        }

        &[aria-current="page"] {
          color: var(--color-secondary);
          text-decoration: underline;
        }
      }
      &.dropdown {
        width: 100%;
        color: white;
        padding: 10px;
        display: block;
        font-weight: 700;
        transition: all 0.2s ease-in-out;

        > a {
          width:80%;
          padding:0;
        }

        > ul {
          list-style: none;
          padding: 1rem;
          transition: all 0.2s ease-in-out;

          > li {
            border-bottom: 1px solid var(--color-primary_l1);

            &:last-child {
              border: none;
              padding-bottom:0;
              > a {
                padding-bottom: 0;
              }
            }

            > a {
              color: white;
              display: block;
              font-weight:400;
              padding: 10px;
              width: 100%;
              &:hover {
                background: var(--color-secondary);
                text-decoration: none;
              }
            }
          }
        }

        &:hover {
          text-decoration: none;
          cursor: pointer;
          background-color: var(--color-primary_d2);
        }
      }
      &:not(.btn-cta) {
        /* background: var(--color-primary_d1); */
        border-bottom: 1px solid var(--color-primary_d1);
        position: relative;
        padding-left: 2rem;
        svg {
          position: absolute;
          right:1rem;
          top:1rem;
          &:before {
            background: red;
            content:' ';
            position: absolute;
            height:2rem;
            width: 2rem;
          }
        }
      }
      &.btn-cta {
        width:100%;
        a {
          background: var(--color-secondary);
          color: white;
          font-weight: 400;
          padding: 0.5rem 1.5rem;
          text-align: center;
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
    }
  }

  .title {
    color: white;
    font-size:1.75rem;
    padding: 0 2rem;
    margin-bottom:1rem;
  }

  .close-btn {
    background: transparent;
    color: white;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: right;
  }

`
