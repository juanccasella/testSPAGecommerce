// import styles from './styles.module.css'
// import { Link } from 'react-router-dom'

// const Item = ({producto}) => {

//     return(
//         <div className={styles.card}>
//             <h3>{producto.title}</h3>
//             <p>$ {producto.price}</p>
//             <Link to={`/item/${producto.id}`}>Ver producto</Link>
//         </div>
//     )
// }

// export default Item
// import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return(
        <div className="cards">
            <img className='card-img' src={product.image} alt={product.title} />
            <div>
                <h4>{product.title}</h4>
                <p>Precio: USD ${product.price}</p>
                <p>Categoria: {product.categoryId}</p>
                <Link className='ver-mas' to={`/item/${product.id}`}>Ver Más</Link>
            </div>
        </div>
    )
}

export default Item