import './styles.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../cartWidget/cartWidget'

function Navbar() {

    const arrayDeCategorias = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]

    return (
        <div className='navbar'>
            <NavLink to={'/'} className='logo'>SPAG Tienda</NavLink>
            {arrayDeCategorias.map((cat, index) =>
            <NavLink to={`/category/${cat}`} key={index}>{cat}</NavLink>)}
            <CartWidget />
        </div>
    )
}


export default Navbar



