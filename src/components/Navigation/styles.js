import styled from 'styled-components';

const Nav = styled.nav`
  align-items: center;
  display: grid;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  grid-template:1fr / 1fr;
  max-width:100%;
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
        svg {
          margin: 0 0 -2px 8px;
        }
        :hover {
          color: var(--color-highlight_d1);
        }
      }
    }
  }

  .navigation__sub {
    display: none;
  }
`;

export default Nav;
