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
            <img className="detailImg" src={item.image} alt={item.title} />
            <div className="descriptionContainer">
                <h3 className="detailTitle">{item.title}</h3>
                <p className="detailCategory">Categoria: {item.categoryId}</p>
                <p className="detailDescription">{item.description}</p>
                <p>${item.price}</p>
                <ItemCount quantity={quantity} sumar={sumar} restar={restar} addToCart={() => {addToCart(item, quantity)}}/>
                <p>Stock: {item.stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail