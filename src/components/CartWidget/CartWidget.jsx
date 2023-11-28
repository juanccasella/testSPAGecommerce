// FALTA LA IMAGEN DEL CARRITO
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../cartContext/cartContext'
import iconCart from '../../assets/images/icons/iconCart.svg'


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return(
        <div>
            <Link to="/cart">
                <img src={iconCart} alt="" />
                <span id='cart-counter'>{cartQuantity()}</span>
            </Link>
        </div>
    )
}

export default CartWidget