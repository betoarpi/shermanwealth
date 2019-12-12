import styled from 'styled-components'

const BlogNavigation = styled.nav`
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
      a:not([aria-current='page']) {
        color: var(--color-highlight_d1);
        font-weight:400;
      }
      &:last-child {
        border-right: none;
        padding-right:0;
      }
    }
  }
  @media screen and (max-width: 767px){
    ul {
      border-bottom: 1px solid var(--color-highlight);
      border-top: 1px solid var(--color-highlight);
      padding:0;
      li {
        border-bottom: 1px solid var(--color-highlight_l2);
        border-right: none;
        display: block;
        padding:0.25rem 0;
        &:last-child {
          border-bottom:none;
        }
      }
    }
  }
`

export default BlogNavigation;