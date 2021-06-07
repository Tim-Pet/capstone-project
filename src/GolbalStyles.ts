import { createGlobalStyle } from 'styled-components'
import './assets/fonts/Montserrat/Montserrat-Regular.ttf'
import './assets/fonts/Montserrat/Montserrat-Thin.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
  url("./assets/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
}

:root {
  --color-accent: #007BF5;
  --color-accent-light: #007bf570;
  --color-background: linear-gradient(to right top, #ffffff, #fbfbfb, #f7f7f7, #f3f3f3, #efefef);
  --color-background-alt: #FFFFFF70;
  --color-text: #505254;
  --color-text-light: #50525470;
}

* {
  box-sizing: border-box;
}

body {
  color: var(--color-text);
  font-family: Montserrat, sans-serif;
  font-weight: 400;
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
