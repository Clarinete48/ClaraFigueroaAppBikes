import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return(
        <nav>
        <div>
            <h1>Tu Ruta Bike</h1>
        </div>
        <div>
         <button>Santa Cruz</button>
            <button>Trek</button>
            <button>Juliana</button>
        </div>
        <div>
            <CartWidget />
        </div>
        </nav>
    )
}

export default Navbar