import { Link } from 'react-router-dom'
import "./item.css"

const Item = ({product}) => {
    return(
        <Link to={`/item/${product.id}`} className='cardItem'>
            <img src={product.image} alt={product.title} />
            <div>
                <h4>{product.title}</h4>
                <p>Precio: ${product.price}</p>
                <p>Categoria: {product.categoryId}</p>
            </div>
        </Link>
    )
}

export default Item
