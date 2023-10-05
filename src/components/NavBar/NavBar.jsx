import CartWidget from '../cartWidget/cartWidget'
import './styles.module.css'

const NavBar = () => {
    
    return (
        <>
            <nav>
                <a className='home' href="">SPAG <span>Tienda</span></a>
                <ul>
                    <li href="">Inicio</li>
                    <li href="">Shop</li>
                    <li href="">Contacto</li>
                    <li href="">Info</li>
                    <li href=""><CartWidget/></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
