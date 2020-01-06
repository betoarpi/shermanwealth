import styled from 'styled-components'

export const SubmitForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  > .input-div {
    margin-bottom: 20px;
    > label {
      display: block;
      width: 100%;
      > sup {
        color: red;
      }
    }
    > input {
      display: block;
      width: 100%;
    }
  }
`

export const NewsletterMessage = styled.section`
  max-width: 500px;
  min-height: 400px;
  margin: 0 auto;
  display: grid;

  > div  {
    display: block;
    margin: 0 auto;
    text-align: center;
    justify-self: center;
    align-self: center;
    > svg {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
  }
`
