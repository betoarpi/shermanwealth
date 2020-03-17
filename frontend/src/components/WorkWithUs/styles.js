import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: block;
  margin-top: 1rem;

  > button {
    font-size: 1rem;
    font-weight: 400;
    max-width: 380px !important;
    padding:1rem;
  }
`

export const Grid = styled.section`
  align-items: center;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  gap:2rem;
  > .image-container {
    margin: 0 auto;
    > img {
      float: left;
      margin-right: 1rem;
    }

    > .title {
      margin: 15px;
    }

    @media(min-width: 992px) {
      margin: 0;
    }
  }

  @media(min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media(max-width: 991px) {
    > .image-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items:center;
    }
  }

  @media(max-width: 479px) {
    > .image-container {
      grid-template-columns: 100px 1fr;
    }
  }
`
