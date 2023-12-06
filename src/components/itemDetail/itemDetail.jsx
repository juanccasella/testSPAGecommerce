import { useContext, useState } from "react"
import ItemCount from '../itemCount/itemCount'
import { CartContext } from "../cartContext/cartContext"
import "./itemDetail.css"


const ItemDetail = ( {item} ) => {
    
    const { cart, addToCart } = useContext(CartContext)
    const[quantity, setQuantity] = useState(1)
    const restar = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }
    const sumar = () => {
        quantity < item.stock && setQuantity(quantity + 1)
    }

    return (
        <div  className="itemDetailContainer">
            <div className="detailContainer">
                <img src={item.image} alt="" />
                <div className="detail">
                    <h3 className="detailTitle">{item.title}</h3>
                    <p className="detailCategory">Categoria: {item.categoryId}</p>
                    <h3>Descripción del producto</h3>
                    <p>{item.description}</p>
                    <ItemCount quantity={quantity} sumar={sumar} restar={restar} addToCart={() => {addToCart(item, quantity)}}/>
                    <h4>Precio ${item.price}</h4>
                    <h4>Stock: {item.stock}</h4>
                </div>   
            </div>
        </div>
    )
}

export default ItemDetail