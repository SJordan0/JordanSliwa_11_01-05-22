import Card from '../../components/Thumb'
import styled from 'styled-components'
import logo from '../../assets/background-home.png'

const Content = styled.div`
    padding: 0 50px 0 50px; 
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
`

function Home() {
    return (
        <Content>
            <Affiche>
                <img src={logo} alt='' />
                <p>Chez vous, partout et ailleurs</p>
            </Affiche>
            <Card />
        </Content>
    ) 
}

export default Home