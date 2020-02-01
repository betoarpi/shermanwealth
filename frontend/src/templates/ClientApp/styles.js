import styled from 'styled-components'

export const ClientAppGrid = styled.section`
  display: grid;
  gap:2rem;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 0;

  .gatsby-image-wrapper {
    width: 495px;
  }

  > .client-app-content {
    > .content {
      margin-bottom: 2rem;
      > h3 {
        font-weight: 400;
        margin-bottom: 15px;
        line-height: 1.5;
        max-width: 24rem;
      }

      > ul {
        margin-bottom: 25px;
      }
    }
    .btn {
      margin: 0 0 1rem;
    }
  }
  @media screen and (max-width: 767px) {
    grid-template-columns:1fr;
    text-align: center;

    > .client-app-content {
      > .content {
        > h3 {
          margin:0 auto;
        }
        >ul {
          display: inline-block;
        }
      }
      .btn {
        margin: 0 auto 1rem;
      }
    }

    .gatsby-image-wrapper {
      margin: 0 auto;
      width: 90%;
    }
  }
`

export const FeaturesAppGrid = styled.section`
  display: grid;
  gap:2rem;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;

  > div {
    max-width: 350px;
    display: grid;
    > h4 {
      margin: 15px 0;
    }
    .gatsby-image-wrapper {
      width: 60px;
      display: block;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 767px) {
    display: block;
    > div {
      margin: 0 auto 2rem;
    }
  }
`

export const GetStartedDiv = styled.div`
  > a {
    max-width: 260px;
    margin: 0 auto;
    display: block;
  }
`
