// FALTA LA IMAGEN DEL CARRITO
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../cartContext/cartContext'


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return(
        <div className='cart'>
            <Link to="/cart">
                <span id='cart-counter'>{cartQuantity()}</span>
            </Link>
        </div>
    )
}

export default CartWidget