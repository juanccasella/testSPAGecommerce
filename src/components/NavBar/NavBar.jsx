import CartWidget from '../cartWidget/cartWidget'
import './styles.module.css'

const NavBar = () => {
    
    const arrayDeCategorias = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
        ]

    return (
        <div className={StyleSheet.navbar}>
            <nav>
                <a className='home' href="">SPAG <span>Tienda</span></a>
                {arrayDeCategorias.map((cat,index) => <li key={index}>{cat}</li>)}
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar
