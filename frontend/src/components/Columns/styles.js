import styled from 'styled-components'

export const TwoColumns = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width:767px) {
    grid-template-columns: 1fr;
  }
`

export const ThreeClumns = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width:767px) {
    grid-template-columns: 1fr;
  }
`

export const FourColumns = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width:767px) {
    grid-template-columns: 1fr;
  }
`
