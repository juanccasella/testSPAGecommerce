import { useContext, useState } from "react"
import { CartContext } from "../cartContext/cartContext"
import { useForm } from "antd/es/form/Form"
import { collection, addDoc  } from "firebase/firestore"
import { db } from "../../firebase/client"
// import './Checkout.css'
import { Link } from "react-router-dom"

const Checkout = () => {

    const [orderId, setOrderId] = useState("")

    const { cart, totalPrice, emptyCart } = useContext(CartContext)

    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
        const order = {
            cliente: data,
            productos: cart,
            total: totalPrice()
        }

        const pedidosRef = collection(db, "orders")
        addDoc(pedidosRef, order)
        .then((doc) => {
            setOrderId(doc.id)
            emptyCart()
        })
    }

    if(orderId){
        return(
            <div className="order-fin">
                <h1>Muchas gracias por tu compra!</h1>
                <p>Te contactaremos via email para coordinar la entrega en 2 dias hábiles.</p>
                <p>Tu número de pedido es: {orderId}</p>
                <Link to="/products">Volver a la tienda</Link>
            </div>
        )
    }

    return (
        <div className="order">
            <h1>Finalizar compra</h1>
            <form className="form" onSubmit={handleSubmit(comprar)}>
                
                <input type="text" placeholder="Ingresa tu nombre y apellido" {...register("nombre")} required/>
                <input type="email" placeholder="Ingresa tu email" {...register("email")} required/>
                <input type="phone" placeholder="Ingresa tu teléfono" {...register("telefono")} required/>

                <button className="buy" type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout