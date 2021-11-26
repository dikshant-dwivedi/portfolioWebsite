import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.bg};
    background: ${({ theme }) => theme.txt};
  }
`

export default GlobalStyle
