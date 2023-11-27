import CartWidget from "../cartWidget/cartWidget"
import { NavLink } from 'react-router-dom'
import "./navBar.css"
import logo from "../../assets/images/logo.png"
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {

    return(
        <div className='navbar'>
            <NavLink to={'/products'}><img className='logoImg' src={logo} alt="" /></NavLink>
            <NavLink className='logoTexto' to={'/products'}>SPAG tienda</NavLink>
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
    )
}

export default NavBar

