import { Link } from 'react-router-dom'
import './styles.css'

export default function Header (){
    return (
        <header>
            <h1>Minha Página HTML Básica</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>Sobre</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

