import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: block;
  margin-top: 1rem;

  > button {
    font-size: 1rem;
    font-weight: 700;
    max-width: 380px !important;
    padding:1rem;
  }
`

export const Grid = styled.section`
  align-items: center;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;

  > .image-container {
    margin: 0 auto;
    > img {
      float: left;
      margin-right: 1rem;
    }

    > .title {
      margin: 15px;
    }

    @media(min-width: 768px) {
      margin: 0;
    }
  }

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
