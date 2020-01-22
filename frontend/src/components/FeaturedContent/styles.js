import styled from 'styled-components'

const FeaturedContent = styled.div`
  align-items:center;
  background: var(--color-highlight_l2);
  box-shadow: -5px 5px 0 var(--color-highlight);
  clip-path: polygon(-5px 0, calc(100% - 3rem) 0, 100% 3rem, 100% calc(100% + 5px), -5px calc(100% + 5px));
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 2rem 0;
  position: relative;

  figure {
    position: relative;
    min-height: 320px;
    height: 100%;
    img {
      bottom:0;
      box-shadow: none;
      left:0;
      height: 100%;
      object-fit: cover;
      position: absolute;
      right:0;
      top:0;
      width: 100%;
    }
    &:before {
      content: none;
    }
  }
  > div {
    padding: 2rem;
    
    > * {
      &:first-child {
        margin-top:0;
      }
      &:last-child {
        margin-bottom:0;
      }
    }
  }

  &:nth-child(odd){
    clip-path: polygon(3rem 0, 100% 0, 100% calc(100% + 5px), -5px calc(100% + 5px), -5px 3rem);
    grid-template-columns: 2fr 1fr;
    figure {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
    > div {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
  }
  &:first-child {
    margin-top:0;
  }

  @media screen and (max-width: 991px){
    grid-template-columns: 1fr 1fr;
    &:nth-child(odd) {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 729px) {
    grid-template-columns: 1fr;
    &:nth-child(odd) {
      grid-template-columns: 1fr;
      figure, > div {
        grid-column: initial;
        grid-row: initial;
      }
    }
  }
`

export default FeaturedContent;
