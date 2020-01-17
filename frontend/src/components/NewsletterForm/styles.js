import styled from 'styled-components'

export const SubmitForm = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 60px;

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

  > button {
    max-width: 350px;
    margin: 0 auto;
  }

  > .checks-grid {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 2rem;

    >  div > div.checks-div {
      margin-bottom: 1rem;

      > label {
        display: block;
        margin-bottom: 0.5rem;
      }

      span {
        margin-left: 0.5rem;
      }
    }

    @media(min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export const HeaderForm = styled.div`
  > img {
    float: left;
    margin-right: 2rem;
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
