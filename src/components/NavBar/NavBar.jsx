import React from 'react'
import './NavBar.css'
import CartWidget from'../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <>
            <nav>
                <a className='logo' href="">SPAG <span>Tienda</span></a>
                <a href="">Inicio</a>
                <a href="">Shop</a>
                <a href="">Contacto</a>
                <a href="">Info</a>
                <a href=""><CartWidget/></a>
            </nav>
        </>
    )
}

export default NavBar
