import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  color: #333;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

input,
button,
textarea {
  font-size: inherit;
}
`
export default GlobalStyle
