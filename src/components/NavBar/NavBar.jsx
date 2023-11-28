import CartWidget from "../cartWidget/cartWidget"
import { NavLink } from 'react-router-dom'
import "./navBar.css"
import logoNegro from "../../assets/images/logos/logoNegro.png"
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {

    return(
        <div className='navbar'>
            <NavLink className='logoTexto' to={'/products'}><img src={logoNegro} alt="" /> SPAG tienda</NavLink>
            <div className="navBarDerecha">
                <NavLink to={'/'}>Inicio</NavLink>
                <Dropdown>
                    <Dropdown.Toggle className="DropDown" id="dropdown-basic">
                        Productos
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/products/Electrodomésticos">Electrodomésticos</Dropdown.Item>
                        <Dropdown.Item href="/products/Bazar">Bazar</Dropdown.Item>
                        <Dropdown.Item href="/products/Cafeteras">Cafeteras</Dropdown.Item>
                        <Dropdown.Item href="/products/Cuchillería">Cuchillería</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <CartWidget/>
            </div>
        </div>
    )
}

export default NavBar

