import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap');
    font-size: 16px;
  }
  
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --color-primary: #002E51;
    --color-primary_d1: #00223B;
    --color-primary_d2: #00111E;
    --color-primary_l1: #2E5470;
    --color-primary_l2: #5C7A90;

    --color-secondary: #34CB08;
    --color-secondary_d1: #30B908;
    --color-secondary_d2: #269406;
    --color-secondary_l1: #58D434;
    --color-secondary_l2: #7DDD61;

    --color-text: #4D4F50;
    --color-text_l1: #636567;
    --color-text_l2: #787B7D;
    --color-text_l3: #909394;
    --color-text_l4: #A9ABAC;

    --color-highlight: #CEE5F2;
    --color-highlight_d1: #548BB4;
    --color-highlight_l1: #D9EAF2;
    --color-highlight_l2: #E8F3F9;
    --color-highlight_l3: #F6FAFC;

    --font-family: 'Open Sans', sans-serif;
  }
  
  body {
    color: var(--color-text);
    font: normal normal 400 1rem/1.5 var(--font-family);
    margin:0;
  }

  h1 {
    font-size: 3.052rem;
    font-weight: 800;
  }
  
  h2 {
    font-size: 2.441rem;
    font-weight: 400;
  }
  
  h3 {
    font-size: 1.953rem;
    font-weight: 800;
  }
  
  h4 {
    font-size: 1.563rem;
    font-weight: 700;
  }
  
  h5 {
    font-size: 1.25rem;
    font-weight: 700;
  }
  
  h6 {
    font-size: 1rem;
    font-weight: 700;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-primary_d1);
    margin: 0 0 0.5rem;
  }

  a {
    color: var(--color-highlight_d1);
    font-weight: 700;
    text-decoration: none;
    :hover {
      color: var(--color-primary);
      text-decoration: underline;
    }
  }

  input {
    border: none;
    font-family: var(--font-family);
    font-size:1rem;
    :active, :focus {
      outline: none;
    }
  }

  button, .btn {
    align-content: center;
    align-items: center;
    appearance: none;
    border: none;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: max-content max-content;
    font-weight: 400;
    justify-content: center;
    margin:0;
    min-width:180px;
    max-width: 100%;
    padding: 0.44rem 1rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    :hover {
      cursor: pointer;
      text-decoration: none;
    }
  }

  figure {
    margin:0;
    position: relative;
    img {
      box-shadow: -5px 5px 0 var(--color-highlight_l1);
      width:100%;
      z-index:0;
    }
    ::before {
      content: ' ';
      display: block;
      height: 0;
      position: absolute;
      right:0;
      top:0;
      border-style: solid;
      border-width: 0 4rem 4rem 0;
      border-color: transparent white transparent transparent;
      width: 0;
      z-index:1;
    }
  }

  img {
    max-width:100%;
  }

  .noStylesList {
    list-style: none;
    margin:0;
    padding:0;
  }

  #app {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width:100%;
  }

  .container {
    margin:0 auto;
    max-width:1200px;
    padding: 4rem 2rem;
    &__title {
      margin-bottom:2rem;
      text-align: center;
    }
  }
`;

export const FontExtraBold = css`
  font: normal normal 800 var(--font-family);
`;

export const FontBold = css`
  font: normal normal 700 var(--font-family);
`;
