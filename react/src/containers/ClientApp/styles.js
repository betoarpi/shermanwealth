import styled from 'styled-components';
import Check from '../../assets/img/icons/check.png';

const ClientAppContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr max-content;
  
  &.container {
    padding-bottom: 0;
  }

  article {
    ul {
      list-style: none;
      padding-left:0;
      li {
        background: url(${Check});
        background-size: 1rem;
        background-position: 0 7px;
        background-repeat: no-repeat;
        padding-left:1.5rem;
      }
    }
    .btn {
      justify-content: start;
      svg {
        margin-right:0.5rem;
      }
    }
  }

  img {
    align-self: end;
  }

  @media screen and (max-width: 1023px){
    grid-template-columns: 1fr 380px;
  }
  @media screen and (max-width: 767px){
    gap:2rem;
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    article {
      .btn {
        display:block;
        margin-left: auto;
        margin-right: auto;
        text-align:left;
      }
    }
  }
`;

export default ClientAppContainer;
