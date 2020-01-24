import styled from 'styled-components'

const WhoWeServeElement = styled.section`
  font-size:1.25rem;
  text-align:center;
  > p {
    &:first-child {
      margin-bottom: 3rem;
    }
  }
  .persona {
    height: 270px;
    max-width: 500px;
    position: relative;
    width:100%;
    h4 {
      font-weight:400;
    }
    div.persona__container {
      background: var(--color-highlight);
      bottom:-2rem;
      clip-path: polygon(0% 0%, calc(100% - 3rem) 0, 100% 3rem, 100% 100%, 0% 100%);
      color: var(--color-primary);
      max-width:100%;
      padding:2rem;
      position: absolute;
      right:0;
      text-align: right;
      width:calc(100% - 2rem);
      z-index:1;
      .btn {
        display: inline-block;
        justify-self:end;
      }
    }
    figure {
      left:0;
      height:100%;
      position:absolute;
      top:0;
      width:calc(100% - 4rem);
      z-index:0;
      img {
        border:1px solid var(--color-highlight_l1);
        left:0;
        height:100%;
        object-fit: cover;
        position:absolute;
        top:0;
        width:100%;
      }
    }
    @media screen and (max-width: 479px) {
      display:grid;
      grid-template-columns:1fr;
      grid-template-rows: max-content max-content;
      height: initial;
      figure {
        display:grid;
        grid-row:1 / 2;
        left:initial;
        height:300px;
        position:relative;
        top:initial;
        width: 100%;
        z-index:0;
        img {
          box-shadow:none;
        }
      }
      div.persona__container {
        display:grid;
        grid-row:2 / 3;
        margin:-100px auto 0 auto;
        position: initial;
        right:initial;
        width:100%;
      }
    }
  }
`;

export default WhoWeServeElement;