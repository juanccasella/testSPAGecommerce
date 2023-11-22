import Item from '../item/item'

const ItemList = ({productos, title}) => {

    return (
        <div>
            <h2>{title}</h2>
            <div>
                {productos.map((prod) =>
                <Item key={prod.id} product={prod}/>
                )}
            </div>
        </div>
    )
}

export default ItemList