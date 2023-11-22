import { useContext, useState } from "react"
import ItemCount from '../itemCount/itemCount'
import { CartContext } from "../cartContext/cartContext"


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
            <div>
                <div>
                <img src={item.image} alt={item.title} />
                </div>
                <div>
                    <h3>{item.title}</h3>
                    <p>Categoria: {item.categoryId}</p>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                    <p>Stock: {item.stock}</p>
                    <ItemCount quantity={quantity} sumar={sumar} restar={restar} addToCart={() => {addToCart(item, quantity)}}/>
                </div>
            </div>
    )
}

export default ItemDetail