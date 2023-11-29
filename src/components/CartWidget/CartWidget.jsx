import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../cartContext/cartContext'
import iconCart from '../../assets/images/icons/iconCart.svg'
import "./cartWidget.css"


const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return(
        <div>
            <Link className="cart" to="/cart">
                <img src={iconCart} alt="" />
                <span className='counter' id='cart-counter'>{cartQuantity()}</span>
            </Link>
        </div>
    )
}

export default CartWidget