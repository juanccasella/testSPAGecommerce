import { useContext } from "react"
import { CartContext } from "../cartContext/cartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, totalPrice, emptyCart, deleteProduct } = useContext(CartContext)

    return (
        <div className="cart-container">
            <h1>Carrito</h1>

        <div className="cart-products">
            {
                cart.map((prod) => (
                    <div className="cart-details" key={prod.id}>
                        <img src={prod.image} alt={prod.title} />
                        <div>
                        <h3>{prod.title}</h3>
                        <p>Precio unit: ${prod.price}</p>
                        <p>Precio total: ${prod.price * prod.quantity}</p>
                        <p>Cantidad: {prod.quantity}</p>
                        <div className="details-buttons">
                            <button onClick={() => deleteProduct(prod.id)}>x</button>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
            {   cart.length > 0 ?
                <>
                    <h2>Precio total: ${totalPrice()}</h2>
                <div className="cart-buy">
                    <Link to="/products" >Ver más productos</Link>
                    <button onClick={emptyCart}>Vaciar carrito</button>
                    <Link to="/checkout">Finalizar compra</Link>
                </div>
                </> :
                <div className="empty">
                <h2>El carrito esta vacio</h2>
                <Link to="/products" >Volver a la tienda</Link>
                </div>
            }
        </div>
    )
}

export default Cart