import './styles.module.css'
import { useEffect, useRef, useState } from 'react'
import Item from '../item/item'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = 'https://fakestoreapi.com/products'
        fetch(url)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setProducts(json)
            })
            .catch(error => console.error(error))
    }, [])

    return(
        <div className={StyleSheet.container}>
            {products.map((pr, index) => <Item producto={pr} key={index}/>)}
        </div>
    )
}

export default ItemListContainer