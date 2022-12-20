import './css/nav.css'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <div className='navegador'>
    <details>
    <summary></summary>
    <nav className="menu">

        <Link to="/Home"> Home</Link>
        <Link to="/Weather"> Weather</Link>
        <a href="#link">Links</a>
        <a href="#link">Contact</a>
    </nav>
    </details>
    
        </div>
    )
}
