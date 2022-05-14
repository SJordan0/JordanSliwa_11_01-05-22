import logo from '../../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Banner = styled.header`
    display: flex;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 25px;
    max-width: 100%;
    margin-bottom: 50px;
    & img{
        height: 75px;
    }
`

const Nav = styled.nav`
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 26px; 
    & a {
        padding: 25px 12px 0 12px;
        &:hover{
            text-decoration-line: underline;
            color: #FF6060;
        }
    }
`

function Header() {
    return (
        <Banner>
            <Link to="/">
                <img src={logo} alt="logo de kasa" />
            </Link>
            <Nav>
                <Link to="/">Accueil</Link>
                <Link to="/Infos">A propos</Link>
            </Nav>
        </Banner>
    )
}

export default Header