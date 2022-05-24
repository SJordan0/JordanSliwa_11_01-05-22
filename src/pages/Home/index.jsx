import styled from 'styled-components'
import logo from '../../assets/background-home.png'
import Thumb from '../../components/Thumb'

const Content = styled.div`
    padding: 0 50px; 

    @media screen and (max-width: 767px) {
        padding: 0 25px;
    }
`

const Affiche = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    & img {
        height : 220px;
        width: 100%;
        border-radius: 25px;
        object-fit: cover;
        filter: brightness(70%);
    }
    & p{
        position: relative;
        bottom: 140px;
        font-size: 48px;
        color: white;
    }

    @media screen and (max-width: 767px) {

        img{
            height: 111px;
        }

        p{
            font-size: 24px;
            bottom: 70px;
        }
    }
`

function Home() {
    return (
        <Content>
            <Affiche>
                <img src={logo} alt='' />
                <p>Chez vous, partout et ailleurs</p>
            </Affiche>
            <Thumb />
        </Content>
    ) 
}

export default Home