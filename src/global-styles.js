import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.txt};
    background: ${({ theme }) => theme.bgBody};
    transition: background-color 1s ease-in-out, color 1s ease-in-out; 
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  *{
    box-sizing: border-box;
  }

`

export default GlobalStyle
