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
