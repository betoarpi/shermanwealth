import styled from 'styled-components'

export const InnerNav = styled.ul`
  list-style: none;
  border-left: 1px solid lightgray;

  > li {
    text-align: left;
    > a {
      font-weight: 400;
      color: gray !important;

      :hover {
        color: var(--color-primary) !important;
      }

      &[aria-current="page"] {
        background: none !important;
        color: var(--color-primary) !important;
      }
    }
  }
`

export const InnerNavGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > h4 {
    text-transform: capitalize;
    text-align: left;
  }
`
