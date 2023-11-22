const ItemCount = ({quantity, sumar, restar, addToCart}) => {

    return (
        <div>
            <div>
                <button onClick={restar}>-</button>
                <p>{quantity}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount