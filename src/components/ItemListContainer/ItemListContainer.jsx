import './styles.module.css'
import { useEffect, useState } from 'react'
import Item from '../item/item'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const url = id ?  `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products`
        fetch(url)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setProducts(json)
            })
            .catch(error => console.error(error))
            console.log(id)      
    }, [id])

    return(
        <div className={StyleSheet.container}>
            {products.map((pr, index) => <Item producto={pr} key={index}/>)}
        </div>
    )
}

export default ItemListContainer