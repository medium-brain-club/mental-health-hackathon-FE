import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, button, input {
    font-family: 'Roboto';
  }

  button, input {
    font-size: 14px;
  }
`
