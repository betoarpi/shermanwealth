import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap');
  @import url('https://fonts.googleapis.com/css?family=IM+Fell+DW+Pica+SC&display=swap');
  
  html {
    font-size: 16px;
  }
  
  * {
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
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

    --color-danger: #E61717;

    --font-family: 'Open Sans', sans-serif;
    --font-blockquote: 'IM Fell DW Pica SC', serif;
  }
  
  body {
    color: var(--color-text);
    font: normal normal 400 1rem/1.5 var(--font-family);
    margin:0;
  }

  h1 {
    font-size: 3.052rem;
    font-weight: 800;
    @media screen and (max-width: 767px) {
      font-size: 1.802rem;
    }
  }
  
  h2 {
    font-size: 2.441rem;
    font-weight: 400;
    @media screen and (max-width: 767px) {
      font-size: 1.602rem;
    }
  }
  
  h3 {
    font-size: 1.953rem;
    font-weight: 700;
    @media screen and (max-width: 767px) {
      font-size: 1.424rem;
    }
  }
  
  h4 {
    font-size: 1.563rem;
    font-weight: 700;
    margin-bottom: 1rem;
    @media screen and (max-width: 767px) {
      font-size: 1.266rem;
    }
  }
  
  h5 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  h6 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-primary_d1);
    line-height: 1.25;
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

  p {
    &:first-of-type {
      &:first-child {
        margin-top:0;
      }
    }
    &:last-of-type {
      &:last-child {
        margin-bottom:0;
      }
    }
  }

  main {
    overflow: hidden;
  }

  label {
    color:var(--color-highlight_d1);
    font-weight:700;
  }
  input, textarea {
    border: 1px solid var(--color-highlight_l1);
    color: var(--color-primary_d1);
    font-family: var(--font-family);
    font-size:0.875rem;
    padding: 0.5rem;
    &:active, &:focus {
      border-color:var(--color-highlight_d1);
    }
  }

  /* input, textarea {
    border: none;
    font-family: var(--font-family);
    font-size:1rem;
    :active, :focus {
      outline: none;
    }
  } */

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
    margin:0 0 1rem;
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
    :last-of-type {
      margin-bottom:0;
    }
    @media screen and (max-width: 479px) {
      display: block;
      max-width: 100%;
      min-width:initial;
      svg {
        margin: 0 0 -0.1rem 0.5rem;
      }
    }
  }
  .button-cta {
    appearance: none;
    background: var(--color-secondary);
    color: white;
    border: none;
    font-weight: 400;
    margin:0 0 1rem;
    min-width:180px;
    max-width: 100%;
    padding: 0.44rem 2em;
    text-align: center;
    text-transform: uppercase;
    :hover {
      background: var(--color-secondary_l1);
      color:white;
      cursor: pointer;
      text-decoration: none;
    }
    :last-of-type {
      margin-bottom:0;
    }
    :active {
      background: var(--color-secondary_d1);
      color:white;
    }
  }

  figure {
    margin:0 0 2rem;
    position: relative;
    img {
      box-shadow: -5px 5px 0 var(--color-highlight_l1);
      width:100%;
      z-index:1;
    }
    ::before {
      content: ' ';
      display: block;
      height: 0;
      position: absolute;
      right:-1px;
      top:-1px;
      border-style: solid;
      border-width: 0 4rem 4rem 0;
      border-color: transparent white transparent transparent;
      width: 0;
      z-index:2;
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
    position: relative;

    > * {
      &:first-child {
        margin-top:0;
      }
    }

    :nth-child(odd){
      color: var(--color-primary_d1);
      > * {
        position: relative;
        z-index:1;
      }
      ::before {
        background-color: var(--color-highlight_l3);
        content:' ';
        display: block;
        height:100%;
        left:50%;
        position:absolute;
        top:0;
        transform: translateX(-50%);
        width:1000%;
        z-index:0;
      }
    }

    &__title {
      text-align: center;
      margin-bottom:2rem;
      svg {
        display: block;
        fill: var(--color-primary_l2);
        margin:1rem auto 0 auto;
      }
    }

    button, .btn {
      max-width: 260px;
      margin:0 auto;
    }
  }

  .danger-text {
    color: var(--color-danger);
  }

  ::selection {
    background: var(--color-secondary_l2);
    color: white;
  }

  /* 404 Page*/
  .error-404 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;

    .title {
      font-size:3.052rem;
      line-height:1;
      margin:0 auto;
      position: relative;
      span {
        font-weight: 400;
        font-size:1.5em;
        left: 50%;
        position: absolute;
        top:0;
        transform: translateX(-50%);
      }
      strong {
        line-height: 0.9;
        font-size: 5em;
        font-weight:700;
      }
      @media screen and (max-width: 919px) {
        font-size: 1.802rem;
      }
    }

    .warning {
      align-items: center;
      display: grid;
      justify-content: center;
      .icon {
        font-size: 20rem;
        opacity:0.2;
      }
      @media screen and (max-width: 919px) {
        font-size: 12rem;
      }
    }

    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      .warning {
        display: none;
      }
    }
  }

  /* Mobile Nav Styles */
  body {
    background: var(--color-primary);
  }
  #___gatsby {
    &.menu-active {
      transform: translateX(300px);
    }
  }
  #gatsby-focus-wrapper {
    background: white;
  }

  /* == WordPress WYSIWYG Editor Styles == */

  .entry-content img {
    margin: 0 0 1.5em 0;
  }

  .alignleft, img.alignleft {
    margin-right: 1.5em;
    float: left;
    @media screen and (max-width: 579px){
      clear: both;
      display: block;
      float:none;
      height: auto;
      margin: 0 auto 1rem;
    }
  }

  .alignright, img.alignright {
    margin-left: 1.5em;
    float: right;
    @media screen and (max-width: 579px){
      clear: both;
      display: block;
      float:none;
      height: auto;
      margin: 0 auto 1rem;
    }
  }

  .aligncenter, img.aligncenter {
    margin-right: auto;
    margin-left: auto;
    display: block;
    clear: both;
  }

  .alignnone, img.alignnone {
    /* not sure about this one */
  }
  .wp-caption {
    margin-bottom: 1.5em;
    text-align: center;
    padding-top: 5px;
  }

  .wp-caption img {
    border: 0 none;
    padding: 0;
    margin: 0;
  }

  .wp-caption p.wp-caption-text {
    line-height: 1.5;
    font-size: 10px;
    margin: 0;
  }

  .wp-smiley {
    margin: 0 !important;
    max-height: 1em;
  }

  .container article blockquote,
  article blockquote,
  blockquote {
    background: var(--color-highlight_l3);
    border-bottom: 1px solid var(--color-highlight);
    border-top: 1px solid var(--color-highlight);
    color: var(--color-primary_l1);
    font-size:1.25rem;
    margin: 2rem 0;
    padding: 2rem 5rem 2rem 2rem;
    position: relative;
    &:after {
      content: '"';
      color: var(--color-highlight_l1);
      font-size:8rem;
      font-family: var(--font-blockquote);
      font-weight:900;
      right:1rem;
      line-height:1;
      height:55px;
      position:absolute;
      bottom:1rem;
    }
    @media screen and (max-width: 479px){
      padding: 2rem 2rem 5rem;
    }
  }

  blockquote.left {
    text-align: right;
    width: 33%;
    float: left;
  }

  blockquote.right {
    text-align: left;
    width: 33%;
    float: right;
  }

  .mobile_active {
    overflow: hidden;
  }
`;

export const FontExtraBold = css`
  font: normal normal 800 var(--font-family);
`;

export const FontBold = css`
  font: normal normal 700 var(--font-family);
`;
