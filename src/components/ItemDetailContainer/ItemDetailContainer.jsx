// import { doc, getDoc } from "firebase/firestore"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { db } from "../../firebase/client"

// const ItemDetailContainer = () => {
//     const {id} = useParams()
//     const [producto, setProducto] = useState()

//     useEffect(() => {     

//         const productRef = doc(db, "produts", id)
//         getDoc(productRef)
//         .then(snapshot => {
//             if(snapshot.exists()){
//                 setProducto({
//                     id:snapshot.id,
//                     ...snapshot.data()
//                 })
//             }
//         })
//         .catch(e => console.error (e))
//     }, [id])
        
//     return(
//         <>
//             <h3>Producto: {producto?.title}</h3>
//             <p>Descripcion: {producto?.description}</p>
//         </>
//     )
// }

// export default ItemDetailContainer

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/itemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/client'
// import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const id = useParams().id


    useEffect(() => {
        const docRef = doc(db, "products", id)
        getDoc(docRef)
        .then((res) => {
            setItem(
                { ...res.data(), id: res.id }
            );
        })
    }, [id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer