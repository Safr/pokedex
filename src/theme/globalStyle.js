import { injectGlobal } from 'styled-components';
import { bgColor, mainColor, red, white } from './variables';
import media from './media';

/* esint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,700&amp;subset=cyrillic');
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    min-width: 320px;
    min-height: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.2;
    color: ${mainColor};
    font-family: Lora, serif;
    background-color: ${bgColor};
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    font-weight: 300;
  }

  figure {
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    outline: 0;
    text-decoration: none;
    color: ${mainColor};

    &:hover {
      text-decoration: none;
      color: #424753;
    }
  }

  label {
    user-select: none;
  }

  input {
    outline: none;
  }

  table {
    max-width: 700px;
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    border: 1px solid ${mainColor};
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
    ${media.tablet`
      margin: 0 auto;
    `}
  }

  tr {
    border-bottom: 1px solid ${mainColor};
  }

  td {
    padding: 7px;
    
    &:nth-child(2n) {
      width: 7%;
      color: ${white};
      text-align: center;
      background-color: ${red};
    }
  }
`;
