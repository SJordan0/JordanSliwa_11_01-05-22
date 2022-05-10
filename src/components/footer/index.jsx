import logo from '../../assets/logo-dark.png'
import styled from 'styled-components'

const FooterStyle = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: black;
    color: white;
    padding-top: 30px;
    padding-bottom: 30px;
    & img {
        height: 50px;
        width: 120px;
        padding-bottom: 20px;
        object-fit: cover;
    }
    & p{
        font-size: 20px;
    }
`

function Footer() {
    return (
    <FooterStyle>
        <img src={logo} alt='' />
        <p>© 2020 Kasa. All rights reserved</p>
    </FooterStyle>
);
}

export default Footer