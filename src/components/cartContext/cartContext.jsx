import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

const initialCart = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(initialCart)

    const addToCart = (item, quantity) => {
        const itemAdded = {...item, quantity}

        const newCart = [...cart]
        const isInCart = newCart.find((product) => product.id === itemAdded.id)

        if(isInCart) {
            isInCart.quantity += quantity
        } else {
            newCart.push(itemAdded)
        }
        setCart(newCart)
    }

    const deleteProduct = (productId) => {
        const newCart = cart.filter((prod) => prod.id !== productId)
        setCart(newCart)
    }

    const cartQuantity = () => {
        return cart.length
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }
    
    const emptyCart = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return(
        <CartContext.Provider value={ {
            cart,
            addToCart,
            cartQuantity,
            totalPrice,
            emptyCart,
            deleteProduct
            } }>
            {children}
        </CartContext.Provider>
    )
}