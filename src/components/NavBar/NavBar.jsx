import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import "./navBar.css"
import logoBlanco from "../../assets/images/logos/logoBlanco.png"
import Dropdown from 'react-bootstrap/Dropdown';
import CartWidget from '../cartWidget/CartWidget';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='navbar'>
            <NavLink className='logoTexto' to={'/products'}><img src={logoBlanco} alt="" /> SPAG tienda</NavLink>
            <div className={`navBarDerecha ${showMenu ? 'show' : ''}`}>
                <NavLink className="navLink" to={'/'}>Inicio</NavLink>
                <NavLink className="navLink" to={'/products'}>Todos los productos</NavLink>
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
                <CartWidget />
            </div>
            <div className="menuIcon" onClick={toggleMenu}>
                Menú
            </div>
        </div>
    );
};


export default NavBar

