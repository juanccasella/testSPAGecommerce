import './styles.module.css'
import { useEffect, useRef, useState } from 'react'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const promesa = new Promise((resolve,reject) => {
        const productosArray = [
            {name: "Cuchillo", precio: 15000, id: 1},
            {name: "Olla", precio: 20000, id: 2},
            {name: "Tabla", precio: 5000, id: 3},
            {name: "Batidor", precio: 2500, id: 4},
            {name: "Afilador", precio: 8000, id: 5},
        ]

        setTimeout (() =>{
            productosArray.length > 0 ? resolve(productosArray) : reject({data: [], message: "No hay stock disponible"})
        }, 4000)
    })
    
    useEffect(() => {
        promesa
        .then(res => {
            console.table(res)
            setProducts(res)
        }) //Una vez que nos aseguremos de que el console esta OK, puedo sacar el console.log por el valor nuevo setProducts (BUENA PRACTICA)
        .catch(error => console.error(error.message))
    }, [])

    return(
        <>
            <h2 className='saludo'>{greeting}</h2>
            {products.map(prod => <p key={prod.id}>{prod.name} {prod.precio}</p> )}
            {/* cualquier nombre (en este caso abreviacion de product) */}
        </>
    )
}

export default ItemListContainer