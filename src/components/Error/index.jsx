import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FF6060;
    & a {
        font-size: 18px;
        padding-bottom: 50px;
    }
`

const ErrorTitle = styled.h1`
    font-size: 288px;
    padding-bottom: 80px;
`

const ErrorMessage = styled.p`
    font-size: 36px;
    padding-bottom: 182px;
`

function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>404</ErrorTitle>
            <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </ErrorWrapper>
    )
}

export default Error