import styled from 'styled-components'
import logo from '../../assets/background-infos.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const Content = styled.div`
    padding: 0 50px 0 50px; 
`

const Affiche = styled.div`
    img {
        height : 220px;
        width: 100%;
        border-radius: 25px;
        object-fit: cover;
        filter: brightness(70%);
        margin-bottom: 30px;
    }
`

const Liste = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Deroulant = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    width: 85%;
    height: 50px;
    background-color: #FF6060;    
    border-radius: 8px;
    margin-bottom: 30px;
    & h2 {
        padding-left: 20px;
        color: white;
        font-size: 24px;
    }
    & svg {
        color: white;
        font-size: 32px;
        padding-right: 10px;
        cursor: pointer;
    }
`

const Button = styled.button`
    border: none;
    background-color: #FF6060;
`

const Texte = styled.div`
    display: none;
    position: absolute;
    background-color: #F6F6F6;
    width: 100%;
    border-radius: 0 0 8px 8px;
    font-size: 24px;
    color: #FF6060;
`

function Infos() {
    return (
        <Content>
            <Affiche>
                <img src={logo} alt='' />
            </Affiche>
            <Liste>
                <Deroulant>
                    <h2>Fiabilité</h2>
                    <Button>
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </Button>
                    <Texte>
                        <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                        </p>
                    </Texte>
                </Deroulant>
                <Deroulant>
                    <h2>Respect</h2>
                    <Button>
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </Button>
                    <Texte>
                        <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                        </p>
                    </Texte>
                </Deroulant>
                <Deroulant>
                    <h2>Service</h2>
                    <Button>
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </Button>
                    <Texte>
                        <p>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                        </p>
                    </Texte>
                </Deroulant>
                <Deroulant>
                    <h2>Responsabilité</h2>
                    <Button>
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </Button>
                    <Texte>
                        <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                        </p>
                    </Texte>
                </Deroulant>
            </Liste>
        </Content>
    )
}

export default Infos