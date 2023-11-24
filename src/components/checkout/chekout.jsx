// import { useContext, useState } from "react"
// import { Link } from "react-router-dom"
// import { CartContext } from "../cartContext/cartContext"
// import { collection, addDoc} from "firebase/firestore"
// import { db } from "../../firebase/client"
// import { useForm } from "antd/es/form/Form"

// const Checkout = () => {

//     const [orderId, setOrderId] = useState("")
//     const {cart, totalPrice, emptyCart} = useContext(CartContext)
//     const { register, handleSubmit } = useForm();

//     const comprar = (data) => {
//         const order = {
//             cliente: data,
//             productos: cart,
//             total: totalPrice()
//         }

//         const pedidosRef = collection(db, "orders")
//         addDoc(pedidosRef, order)
//         .then((doc) => {
//             setOrderId(doc.id)
//             emptyCart()
//         })
//     }

//     if(orderId){
//         return(
//             <div>
//                 <h1>Muchas gracias por tu compra!❤️</h1>
//                 <p>Te llegara un mail con toda la info de tu compra👌</p>
//                 <p>Numero de orden de compra: {orderId}</p>
//                 <Link to="/products">Volver a la tienda🛒</Link>
//             </div>
//         )
//     }

//     return (
//         <div>
//             <h1>Finaliza tu compra</h1>
//             <form onSubmit={handleSubmit(comprar)}>
            
//                 <input type="text" placeholder="Ingresa tu nombre y apellido" {...register("nombre")} required/>
//                 <input type="email" placeholder="Ingresa tu email" {...register("email")} required/>
//                 <input type="phone" placeholder="Ingresa tu teléfono" {...register("telefono")} required/>

//                 <button type="submit">Comprar</button>
//             </form>
//         </div>
//     )
// }

// export default Checkout

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/client";

const Checkout = () => {
const [orderId, setOrderId] = useState("");
const { cart, totalPrice, emptyCart } = useContext(CartContext);

const comprar = async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    const data = new FormData(e.target);
    const order = {
        cliente: {
        nombre: data.get("nombre"),
        email: data.get("email"),
        telefono: data.get("telefono"),
    },
        productos: cart,
        total: totalPrice(),
    };

    const pedidosRef = collection(db, "orders");
    try {
        const doc = await addDoc(pedidosRef, order);
        setOrderId(doc.id);
        emptyCart();
    } catch (error) {
        console.error("Error al agregar la orden a Firestore:", error);
    }
};

    if (orderId) {
    return (
    <div>
        <h1>Muchas gracias por tu compra!❤️</h1>
        <p>Te llegará un mail con toda la info de tu compra👌</p>
        <p>Numero de orden de compra: {orderId}</p>
        <Link to="/products">Volver a la tienda🛒</Link>
    </div>
);
}

    return (
        <div>
        <h1>Finaliza tu compra</h1>
        <form onSubmit={comprar}>
            <input type="text" placeholder="Ingresa tu nombre y apellido" name="nombre" required />
            <input type="email" placeholder="Ingresa tu email" name="email" required />
            <input type="tel" placeholder="Ingresa tu teléfono" name="telefono" required />
            <button type="submit">Comprar</button>
        </form>
        </div>
    );
};

export default Checkout;