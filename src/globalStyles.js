import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --text-light: #ffffff;
    --text-dark: #464646;
    --text-orange: #fdb03d;
    --primary-color: #ff4e16;
    --secondary-color: #fdb03d;
    --tertiary-color: #fee3bb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: var(--text-dark);
    font-size: 14px;
    font-weight: 400;
  }

  input, button {
    border: none;
    outline: none;
  }

  section {
    padding: 50px 10%;

    > h2 {
      font-size: 2em;
      margin-bottom: .5em;

      span {
        color: var(--text-orange);
      }
    }

    > p {
      span {
        color: var(--text-orange);
      }
    }
  }

  h1 {
    font-size: 3.5em;
    font-weight: 500;
  }
`;

export default GlobalStyles;
