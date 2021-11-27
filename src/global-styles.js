import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.txt};
    background: ${({ theme }) => theme.bgBody};
     transition: background-color 1s ease-in-out, color 1s ease-in-out; 
  }

`

export default GlobalStyle
