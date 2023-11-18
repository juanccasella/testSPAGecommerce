import CartWidget from "../cartWidget/cartWidget"
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return(

        <div className='navbar'>
            <NavLink to={'/products'}>SPAG tienda</NavLink>
            <NavLink to={"/products/electrodomésticos"}>Electrodomésticos</NavLink>
            <NavLink to={"/products/bazar"}>Bazar</NavLink>
            <NavLink to={"/products/cafeteras"}>Cafeteras</NavLink>
            <NavLink to={"/products/cuchilleria"}>Cuchillería</NavLink>
            <CartWidget/>
        </div>
    )
}

export default NavBar
