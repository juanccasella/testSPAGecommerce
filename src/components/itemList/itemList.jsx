import Item from '../item/item'
import "./itemList.css"

const ItemList = ({productos, title}) => {

    return (
        <div>
            <h2>{title}</h2>
            <div className='itemList'>
                {productos.map((prod) =>
                <Item key={prod.id} product={prod}/>
                )}
            </div>
        </div>
    )
}

export default ItemList