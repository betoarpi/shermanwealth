import styled from 'styled-components';

const SocialLinks = styled.ul`
  li {
    display: inline-block;
    margin: 1rem 1rem 1rem 0;
    a {
      color: inherit;
      &:hover {
        color: var(--color-secondary)
      }
    }
  }
`;

export default SocialLinks;
