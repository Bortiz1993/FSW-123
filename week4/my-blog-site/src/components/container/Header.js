import {Link} from 'react-router-dom'

function Header () {
    return (
        <header className="link-colors" >
        <Link to="/">Home</Link>
        <Link to="./about">About</Link>
        <Link to="/contact">Contact</Link>
  
        </header>
    )
}

export default Header;