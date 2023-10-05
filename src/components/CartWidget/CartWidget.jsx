import React from "react";
import Carrito from '../../assets/images/carrito.svg'

const CartWidget = () => {
    
    return(
        <img src={Carrito} alt="" />
        // <div><i className="fas fa-cart-plus" style="color: #000000;"></i></div>
    )
}

export default CartWidget;