
import { useState, useEffect  } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/client.js'
import { useParams } from 'react-router-dom';
import ItemList from '../itemList/itemList.jsx'
import "./ItemListContainer.css"

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
        <div className='itemListContainer'>
            <ItemList className='itemContainer' productos={productos} title={titulo} />
        </div>
    )
}

export default ItemListContainer