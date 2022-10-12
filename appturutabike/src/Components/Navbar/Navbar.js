import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
      <nav className="NavBar" >
          <div className='NavBar'>
            <Link to='/'>
              <h3>Tu Ruta Bike</h3>
            </Link>
          </div>
          <div className="Categories">
              <Link to='/category/santacruz' className="Option">Santa Cruz</Link>
              <Link to='/category/trek' className="Option">Trek</Link>
              <Link to='/category/juliana' className="Option">Juliana</Link>
          </div>
        <div>
            <CartWidget />
        </div>
        </nav>
    )
}

export default Navbar