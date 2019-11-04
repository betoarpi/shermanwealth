import styled from 'styled-components';

const WorkWithUsElement = styled.section`
  background: var(--color-highlight_l3);
  color: var(--color-primary);
  padding:4rem 0;
  article {
    display:grid;
    gap:5rem;
    grid-template-columns: max-content 1fr;
    margin:0 auto;
    max-width:1200px;
    header {
      display: grid;
      gap:1rem;
      grid-template-columns: 10.5rem max-content;
      grid-template-rows: 1fr;
      position: relative;
      &:before {
        content:' ';
        background: var(--color-highlight);
        clip-path: polygon(10.5rem 10.5rem, 10.5rem 0, 0 0);
        height:10.5rem;
        left:0;
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        width:10.5rem;
        z-index:0;
      }
      h2 {
        align-self: center;
        color: var(--color-primary_d2);
        grid-column: 2 / 3;
        font-weight:800;
      }
      img {
        align-self: center;
        grid-column: 1 / 2;
        grid-row:1 / 2;
        margin:0 auto;
        position: relative;
        z-index:1;
      }
    }
    div {
      padding:0 2rem;
      a {
        max-width:350px;
      }
    }
  }
  @media screen and (max-width: 1023px){
    article {
      gap:2rem;
    }
  }
  @media screen and (max-width: 767px){
    article {
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content;
      header {
        grid-template-columns: 7.5rem max-content;
        margin:0 2rem;
        &:before {
          clip-path: polygon(7.5rem 7.5rem, 7.5rem 0, 0 0);
          height:7.5rem;
          width:7.5rem;
        }
        h2 {
          font-size:1.8rem;
        }
        img {
          max-width:80px;
        }
      }
    }
  }
`;

export default WorkWithUsElement;
