import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}

a {
  color: #FF6060;
  text-decoration: none;
}

button {
  border: none;
  background: none;
}

li{
  list-style-type: none;
}
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle