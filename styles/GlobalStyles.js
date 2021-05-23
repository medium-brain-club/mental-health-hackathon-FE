import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-family: 'Roboto';
  }

  button, input, textarea {
    font-size: 16px;
  }
`
