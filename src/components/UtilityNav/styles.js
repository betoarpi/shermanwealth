import styled from 'styled-components';

export const Utility = styled.div`
  align-items: center;
  background: var(--color-primary_d1);
  color: white;
  display: grid;
  gap: 1rem;
  grid-column: 1 / span 2;
  grid-template-columns:320px 1fr max-content;
  padding: 0 1rem;
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
      padding:0 0.5rem;
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
    :hover {
      color: var(--color-secondary);
    }
  }
`;

export const Search = styled.form`
  display: grid;
  justify-content: end;
`;
