import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.txt};
    background: ${({ theme }) => theme.bgBody};
     transition: background-color 1s ease-in-out, color 1s ease-in-out; 
  }

  *{
    box-sizing: border-box;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  /*.slide {
    opacity: 0;
    transition-duration: .5s ease;
  }

  .active {
    opacity: 1;
    transition-duration: .5s;
    transform: scale(1.08);
  }*/

`

export default GlobalStyle
