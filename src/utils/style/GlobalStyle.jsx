import { createGlobalStyle } from 'styled-components'
import colors from './variables/colors'
import '../style/fonts.css'

const StyledGlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    font-family: "Arsenal", "Open Sans";
}

body {
  width: 100%;
}

a {
    text-decoration: none;
}

p {
    line-height: 1.5rem;
}
`

function GlobalStyle() {
  return (
    <StyledGlobalStyle />
  )
}

export default GlobalStyle