// import styles from './styles.module.css'
// import { useEffect, useState } from 'react'
// import Item from '../item/item'
// import { useParams } from 'react-router-dom'
// import { db } from '../../firebase/client'
// import { collection, getDocs, where } from 'firebase/firestore'

// const ItemListContainer = ({greeting}) => {

//     const [products, setProducts] = useState([])
//     const [loading, setLoading] =useState(true)
    

//     useEffect(() => {

//         const productsFilterRef = quey(
//             collection(db, "products"),
//             where("categoryId", "==", "electrodomesticos"),
//         )

//         const productsRef = collection(db, "products")
        
//         getDocs(productsFilterRef)
//         .then(snapshot => {
//             setProducts(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
//         })
//         .catch(e => console.error(e))
//         .finally(() => setLoading(false))   
//     }, [])

//     return(
//         <div className={StyleSheet.container}>
//             {products.map((pr, index) => <Item producto={pr} key={index}/>)}
//         </div>
//     )
// }

// export default ItemListContainer
// import './itemListContainer.css'
import { useState, useEffect  } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/client.js'
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/itemList.jsx'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState('Productos')
    const categoria = useParams().categoryId

    useEffect(() => {
        const productosRef = collection(db, "products")

        const q = categoria ? query(productosRef, where("categoryId", "==", categoria)) : productosRef

        getDocs(q)
        .then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id}
                })
            )
        })
        setTitulo(
            categoria
        )

    }, [categoria])

    return(
        <div>
            <ItemList productos={productos} title={titulo} />
        </div>
    )
}

export default ItemListContainer