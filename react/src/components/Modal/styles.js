import styled from 'styled-components';

const ModalElement = styled.div`
  background-color: rgba(0,46,81, 0.8);
  display:block;
  height:100%;
  left:0;
  position: fixed;
  top:0;
  width:100%;
  z-index:100;
  .modal {
    &__container {
      background-color: white;
      clip-path: polygon(0% 0%, calc(100% - 4rem) 0, 100% 4rem, 100% 100%, 0% 100%);
      display: grid;
      margin:4rem auto 0 auto;
      max-width:720px;
      position: relative;
      width:calc(100% - 4rem);
    }
    &__close {
      appearance: none;
      background: none;
      color:white;
      cursor: default;
      display: flex;
      font-size: 2rem;
      justify-content:flex-end;
      left: 50%;
      max-width:752px;
      padding:0;
      position: absolute;
      top:3rem;
      transform: translateX(-50%);
      width:calc(100% - 4rem);
      &:active, &:focus {
        outline: none;
      }
      svg {
        cursor: pointer;
        display: grid;
        grid-column: 2 / 3;
      }
    }
  }

  @media screen and (max-width: 767px) {
    overflow-y: scroll;
  }
`;

export default ModalElement;
