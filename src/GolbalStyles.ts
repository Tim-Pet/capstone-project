import '@fontsource/montserrat'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --color-accent-light: #007bf580;
  --color-accent: #007BF5;
  --color-background-alt: #FFFFFF70;
  --color-background: linear-gradient(to right top, #ffffff, #fbfbfb, #f7f7f7, #f3f3f3, #efefef);
  --color-text-light: #50525470;
  --color-text: #505254;
}

* {
  box-sizing: border-box;
}

body {
  color: var(--color-text);
  font-family: 'Montserrat';
  font-weight: 400;
  margin: 0;
  padding: 0;
}
p, a {
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 26px;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 4px;
  line-height: 64px;
  margin: 20px 0 0 10px;
}

h2 {
  font-size: 32px;
  line-height: 40px;
}

a {
  color: var(--color-accent-light);
  letter-spacing: 1px;
  text-decoration: none;
}

input,
button,
textarea {
  font-size: inherit;
}
`
export default GlobalStyle
