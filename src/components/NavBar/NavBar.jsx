import CartWidget from "../cartWidget/cartWidget"
import { NavLink } from 'react-router-dom'
import "./navBar.css"


const NavBar = () => {
    return(

        <div className='navbar'>
            <NavLink className='logo' to={'/products'}>SPAG tienda</NavLink>
            <NavLink to={"/products/electrodomésticos"}>Electrodomésticos</NavLink>
            <NavLink to={"/products/bazar"}>Bazar</NavLink>
            <NavLink to={"/products/cafeteras"}>Cafeteras</NavLink>
            <NavLink to={"/products/cuchillería"}>Cuchillería</NavLink>
            <CartWidget/>
        </div>
    )
}

export default NavBar
