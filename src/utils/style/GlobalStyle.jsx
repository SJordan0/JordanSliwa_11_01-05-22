import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle