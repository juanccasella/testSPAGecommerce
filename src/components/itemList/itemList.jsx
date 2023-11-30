import Item from '../item/item'
import "./itemList.css"

const ItemList = ({productos, title}) => {
    const todosTitle = title || "Todos los productos";

    return (
        <div>
            <h2 className='title'>{todosTitle}</h2>
            <div className='itemList'>
                {productos.map((prod) =>
                    <Item key={prod.id} product={prod}/>
                )}
            </div>
        </div>
    )
}

export default ItemList