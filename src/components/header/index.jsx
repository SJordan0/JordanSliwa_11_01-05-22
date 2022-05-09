import logo from '../../assets/logo.png'
import '../../styles/Header.css'

function Header() {
    return (
        <div className='banner'>
            <img src={logo} alt="logo de kasa" />
            <nav>
                <h2>Accueil</h2>
                <h2>A propos</h2>
            </nav>
        </div>
    )
}

export default Header