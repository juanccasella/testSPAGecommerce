import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../cartWidget/cartWidget'
import './styles.module.css'

function Navbar() {

    const arrayDeCategorias = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]

    return (
        <div className={StyleSheet.navbar}>
        <NavLink to={'/'}>SPAG Tienda</NavLink>
            {arrayDeCategorias.map((cat, index) =>
            <NavLink to={`/category/${cat}`} className={Navbar} key={index}>{cat}</NavLink>)}
            <CartWidget />
        </div>
    )
}


export default Navbar


// const NavBar = () => {

//     const arrayDeCategorias = [
//         "electronics",
//         "jewelery",
//         "men's clothing",
//         "women's clothing"
//         ]

//     return (
//         <>
//         <div className='navbar'>
//         <div className='btnnav'><NavLink to={'/'} className={Navbar}>INICIO</NavLink></div>
//             {arrayDeCategorias.map((cat, index) =>
//             <NavLink to={`/category/${cat}`} className={Navbar} key={index}>{cat}</NavLink>)}
//             <CartWidget />
//         </div>
//         </>
//     )
// }

// //                 {/* {arrayDeCategorias.map((cat,index) => <li key={index}>{cat}</li>)} */}


// export default NavBar
