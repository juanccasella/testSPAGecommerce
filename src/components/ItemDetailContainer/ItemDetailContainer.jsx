import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail/itemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/client'

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