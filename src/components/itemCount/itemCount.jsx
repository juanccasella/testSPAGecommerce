import "./itemCount.css"

const ItemCount = ({quantity, sumar, restar, addToCart}) => {

    return (
        <div className="counter">
            <div className="counterSumaResta">
                <button className="counterBoton" onClick={restar}>-</button>
                <p className="counterNumero">{quantity}</p>
                <button className="counterBoton" onClick={sumar}>+</button>
            </div>
            <button className="counterAgregar" onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
