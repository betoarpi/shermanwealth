import styled from 'styled-components';

export const Utility = styled.div`
  align-items: center;
  background: var(--color-primary_d1);
  color: white;
  display: grid;
  gap: 1rem;
  grid-column: 1 / span 2;
  grid-template-columns:320px 1fr max-content;
  padding: 0 0 0 1rem;
  justify-content: end;
  width: 100%;
  form {
    display: grid;
    grid-template-columns: 1fr 2rem;
    input {
      appearance: none;
      background: none;
      color: white;
      display: grid;
      text-align: right;
      outline: none;
      ::placeholder,
      :placeholder-shown,
      ::-webkit-input-placeholder {
        color: white;
      }
      ::-webkit-search-cancel-button {
        appearance: none;
      }
      :active, :focus {
        ::placeholder,
        :placeholder-shown,
        ::-webkit-input-placeholder {
          opacity:0.5;
        }
      }
    }
    button {
      background: none;
      color: white;
      display: grid;
      grid-column: 2 / 3;
      min-width: initial;
      padding:0 0.5rem;
      width:1rem;
    }
    
  }
  
  @media screen and (max-width: 1023px) {
    grid-template-columns:320px 1fr 45px;
    font-size:0.85rem;
    form {
      input {
        font-size:0.85rem;
      }
    }
    .btn {
      gap:0;
      grid-template-columns:1fr;
      font-size:0;
      min-width:initial;
      svg {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    /*display: flex;*/
    /*grid-column: 1 / 3;*/
    /*grid-template-columns:initial;*/
    /*justify-content: flex-end;*/
    grid-template-columns: max-content 1fr max-content;
    padding: 0;
    form {
      width:100%;
      input {
        padding: 0.3rem 0.5rem;
        width:100%;
        font-size:0.75rem;
      }
    }
    .btn {
      min-width: initial;
      width:45px;
    }
  }
`;

export const Telephone = styled.span`
  display: grid;
  gap:0.5rem;
  grid-template-columns: max-content 1fr;
  justify-self: start;
  a {
    color: white;
    font-weight:400;
    svg {
      display: none;
      margin: 0 0.5rem -2px 0;
    }
    :hover {
      color: var(--color-secondary);
    }
  }

  @media screen and (max-width: 767px) {
    font-size:0;
    a {
      font-size:0.85rem;
      svg {
        display: inline-block;
      }
    }
  }
`;

export const Search = styled.form`
  display: grid;
  justify-content: end;

  input {
    border: none;
  }
`;
