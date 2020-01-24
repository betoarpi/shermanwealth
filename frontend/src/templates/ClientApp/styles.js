import styled from 'styled-components'

export const ClientAppGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 0;

  .gatsby-image-wrapper {
    width: 495px;
  }

  > .client-app-content {
    > .content {
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
  }
`

export const FeaturesAppGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;

  > div {
    max-width: 350px;
    > h4 {
      margin: 15px 0;
    }
    .gatsby-image-wrapper {
      width: 60px;
      display: block;
      margin: 0 auto;
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
