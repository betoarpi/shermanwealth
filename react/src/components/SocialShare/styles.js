import styled from 'styled-components';

const SocialShareElement = styled.aside`
  background: var(--color-primary);
  color: white;
  .container {
    display: grid;
    grid-template-columns: 1fr max-content;
    padding: 3rem 2rem;
  }
  nav {
    display: grid;
    ul {
      display: grid;
      color: white;
      gap: 1rem;
      grid-auto-columns: max-content;
      grid-template-rows:1fr;
      li {
        align-items: center;
        display: grid;
        font-size: 1.25rem;
        grid-row: 1 / 2;
        line-height:1;
        a {
          color: white;
          &:hover {
            color: var(--color-secondary);
          }
        }
        &:first-child {
          font-size: 1rem;
          font-weight:700;
        }
      }
    }
  }

  @media screen and (max-width: 767px){
    .container {
      gap:1rem;
      grid-template-columns:1fr;
      justify-items: center;
    }
  }
`;

export default SocialShareElement;
