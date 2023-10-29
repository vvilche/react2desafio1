import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


function Navbar () {
  const logo = <FontAwesomeIcon icon={faCakeCandles} />
  return (
    <header className='header'>
      {/* links al logo */}
      <div className="logo-container">
        <p className='text-logo'>Happy Cake</p>
        <p className='icon-logo'>{logo}</p>
      </div>

      {/* links de navegación */}
      <nav>
        <ul className="nav-container">
          <li>
          <Link to="/">Home</Link>
          
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
            
          </li>
      
        
        </ul>
      </nav>

    </header>
  )
}

export default Navbar;
