import styled from 'styled-components'

export const BlogGrid = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 2rem;
  
  @media screen and (max-width:1023px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width:767px){
    grid-template-columns: 320px;
    justify-content: center;
  }
  @media screen and (max-width:479px){
    grid-template-columns: 1fr;
  }
`

export const BlogList = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  margin-bottom: 2rem;
`

export const PaginationGrid = styled.div`
  > ul.pagination {
    list-style: none;
    display: block;
    text-align: center;
    width: 100%;

    >li {
      display: inline;

      > a {
        border-right: 1px solid var(--color-highlight_l2);
        font-size: 1.125rem;
        font-weight:400;
        padding: 0.5rem 1rem;
        :hover {
          cursor: pointer;
        }
      }

      &:first-child,
      &:last-child,
      :nth-last-child(2){
        border:none;
      }
      &:first-child,
      &:last-child {
        svg {
          margin-bottom: -3px;
        }
      }

      &.active{
        > a {
          background: var(--color-highlight_l3);
          color: var(--color-primary);
          font-weight:700;
        }
      }
    }

    > li.previous.disabled {
      display: none;
    }
  }
`