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
    address {
      display:grid;
      gap: 0.5rem;
      grid-template-columns:1rem 1fr;
      font-style:normal;

      a {
        color: inherit;
        font-weight:400;
      }

      svg {
        margin-top: 0.25rem;
      }
    }
  }

  form {
    display: grid;
    gap:0.5rem;
    grid-template-rows: repeat(6, max-content);
    h3 {
      text-align: center;
    }
    label {
      span {
        margin-left:0.25rem;
      }
      input, textarea {
        width:100%;
      }
      :last-of-type {
        margin-bottom:1rem;
      }
    }
    button {
      font-size:1rem;
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
