import { createGlobalStyle } from "styled-components";

 const GlobalStyle = createGlobalStyle`
  
  :root {
    //font-family
    --font-primary: 'Bellefair', serif;
    --font-secondary: 'Barlow Condensed', sans-serif;
    --font-tertiary: 'Barlow', sans-serif;

    //font-size
    --fs-150: 9.375rem; // not used
    --fs-100: 6.25rem; // not used
    --fs-80: 5rem;
    --fs-56: 3.5rem; // not used
    --fs-32: 2rem; // not used
    --fs-28: 1.75rem;
    --fs-24: 1.5rem;
    --fs-20: 1.25rem;
    --fs-16: 1rem;
    --fs-15: .9375rem;
    --fs-14: .875rem;

    //colors
    --dark-rift: #0b0d17;
    --icy-plains: #d0d6f9;
    --white: #fff;
    --transparent-dark: rgba(11, 13, 23, .95);

    --primary-text-color: var(--icy-plains);
    --secondary-text-color: var(--white);
    --tertiary-text-color: var(--dark-rift);
    --navbar-bg: var(--transparent-dark);
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  h1, h2, p, ul {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyle

