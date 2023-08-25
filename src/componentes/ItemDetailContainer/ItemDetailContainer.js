import { useState, useEffect} from 'react';
import { getProductById } from '../../Mock'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect (() => {
        getProductById ('1')

        .then (response => {

            setProduct(response)
        })

        .catch(err => {
            console.err(err)
        })
    }, [])
    return(
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer;