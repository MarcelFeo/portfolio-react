import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #414059;
    --black: #2E2E40;
    --blue: #5A56BF;
    --purple: #635EF2;
    --pink: #F2AEAE;
    --white: #F2F2F2;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  // 16px -> padrão
  html {
    @media (max-width: 1000px) {
      font-size: 93.75%; // 15px
    }
     @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  // REM -> 1rem = font-size
  body {
    background: #414059;
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;