import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body #root {
  height: 100%;
}

body {
  background: ${props => props.theme.color.background};
  color: white;
  font: 400 16px Quicksand, sans-serif;
  
}
`
