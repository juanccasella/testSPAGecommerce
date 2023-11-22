import { Link } from 'react-router-dom'
import "./item.css"

const Item = ({product}) => {
    return(
        <div>
            <img src={product.image} alt={product.title} />
            <div>
                <h4>{product.title}</h4>
                <p>Precio: ${product.price}</p>
                <p>Categoria: {product.categoryId}</p>
                <Link className='verMas' to={`/item/${product.id}`}>Ver Más</Link>
            </div>
        </div>
    )
}

export default Item