import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FF6060;
    width: 100%;
    & a {
        font-size: 18px;
        margin-bottom: 50px;
        &:hover{
            text-decoration-line: underline;
            color: #FF6060;
        }
    }
`

const ErrorTitle = styled.h1`
    font-size: 288px;
    margin-bottom: 80px;
    @media screen and (max-width: 767px) {
        font-size: 140px;
        margin-bottom: 11px;
      }
`

const ErrorMessage = styled.p`
    font-size: 36px;
    margin-bottom: 133px;
    text-align: center;
    @media screen and (max-width: 767px) {
        font-size: 24px;
        padding-bottom
      }
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