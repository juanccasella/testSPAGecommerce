import CartWidget from "../cartWidget/cartWidget"
import { NavLink } from 'react-router-dom'
import "./navBar.css"


const NavBar = () => {
    return(

        <div className='navbar'>
            <NavLink className='logo' to={'/products'}>SPAG tienda</NavLink>
            <NavLink to={"/products/Electrodomésticos"}>Electrodomésticos</NavLink>
            <NavLink to={"/products/Bazar"}>Bazar</NavLink>
            <NavLink to={"/products/Cafeteras"}>Cafeteras</NavLink>
            <NavLink to={"/products/Cuchillería"}>Cuchillería</NavLink>
            <CartWidget/>
        </div>
    )
}

export default NavBar
