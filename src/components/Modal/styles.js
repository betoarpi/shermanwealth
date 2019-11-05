import styled from 'styled-components';

const ModalElement = styled.div`
  background-color: rgba(0,46,81, 0.5);
  display:block;
  height:100%;
  left:0;
  position: fixed;
  top:0;
  width:100%;
  z-index:100;
  .modal__container {
    background-color: white;
    display: grid;
    margin:2rem auto 0 auto;
    max-width:900px;
    padding:2rem;
    width:100%;
  }
`;

export default ModalElement;
