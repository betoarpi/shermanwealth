import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: block;
  margin-top: 1rem;

  > button {
    max-width: 350px;
  }
`

export const Grid = styled.section`
  padding: 4rem 2rem;
  background-color: #F6FAFC;
  align-items: center;
  align-self: center;


  > .container {
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
  }

`
