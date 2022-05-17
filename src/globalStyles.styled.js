import { createGlobalStyle } from "styled-components";

 const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyle

