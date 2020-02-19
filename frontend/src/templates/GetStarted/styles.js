import styled from 'styled-components';

export const BookAppointment = styled.section`
  h2.container__title {
    margin-bottom:0.5rem;
  }
  .container__title + h4 {
    color: var(--color-primary_l2);
    margin-bottom:2rem;
    text-align: center;
  }
`;

export const ContactUs = styled.section`
  display: grid;
  gap:2rem;
  grid-template-columns: 1fr 1fr;

  article {
    .container__title {
      margin-bottom:1rem;
      text-align: left;
    }
    .contact__info {
      display:grid;
      gap: 0.5rem;
      grid-template-columns:1rem 1fr;
      font-style:normal;
      margin-bottom: 1rem;

      a {
        color: inherit;
        font-weight:400;
      }

      svg {
        margin-top: 0.25rem;
      }
    }
    .btn {
      margin: 1rem 0;
    }
  }

  form {
    display: grid;
    gap:0.5rem;
    grid-template-rows: repeat(10, max-content);
    h3 {
      text-align: center;
    }
    label {
      span {
        color: var(--color-danger);
        margin-left:0.25rem;
      }
    }
    input, textarea {
      width:100%;
    }

    textarea {
      height: 180px;
    }

    button {
      justify-self: start;
      background: var(--color-primary);
      color: white;
      font-size:1rem;
      max-width:160px;
      margin:1rem 0;
      :hover {
        background: var(--color-primary_l1);
        color:white;
      }
      :active {
        background: var(--color-primary_d1);
        color:white;
      }
    }
  }

  .success {
    display: grid;
    gap: 1rem;
    grid-template-rows: max-content max-content;
    justify-items: center;
    margin: 1rem 0;
    transition: opacity 1s ease-in-out;
    width: 100%;

    svg {
      fill: var(--color-secondary);
      height: 48px;
      width: 48px;
    }

    p {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 767px){
    grid-template-columns:1fr;
    form {
      h3 {
        text-align: left;
      }
    }
  }
`;