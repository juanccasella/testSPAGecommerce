import { Link } from 'react-router-dom'
import "./item.css"



const Item = ({product}) => {
    return(
        <Link className='cardItem' to={`/item/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <div className='cardText'>
                <h4>{product.title}</h4>
                <p>Precio: ${product.price}</p>
            </div>
        </Link>
    )
}

export default Item
