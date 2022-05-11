import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

a {
  color: #FF6060;
  text-decoration: none;
  &:hover{
    text-decoration-line: underline;
    color: #FF6060;
}
}
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle