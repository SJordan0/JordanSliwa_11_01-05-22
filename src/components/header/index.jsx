import logo from '../../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Banner = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 25px;
    max-width: 100%;
    margin-bottom: 50px;
    & img{
        height: 75px;
    }

    @media screen and (max-width: 767px) {

    padding-left: 25px;
    padding-right: 25px;

    img {
        height: 55px;
    }
}
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    font-size: 26px; 
    & a {
        padding: 0px 12px;
        &:hover{
            text-decoration-line: underline;
            color: #FF6060;
        }
    }

    @media screen and (max-width: 767px) {
        font-size: 18px;
        & a{
            padding: 0 5px;
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