import ItemCount from '../ItemCount/ItemCount';
import React, { useEffect, useState} from 'react';
import { getFetch } from '../../Mock';
import ItemList from '../ItemList/ItemList'
const ItemListContainer = ({ greating }) => {

    const [Productos, setProductos] = useState([])

    useEffect(()=>{
        getFetch
        .then((respuesta) => setProductos(respuesta))
        .catch(err => console.log(err))
    }, [] )

    const onAdd = (quantity) => {
        console.log(` Compraste ${quantity} unidades`);
    }

    return (
        <div>
            <h1>{greating}</h1>
            <ItemCount initial={3} stock={5} onAdd={onAdd} />
            <ItemList Prod = {Productos}/>
        </div>
    )
}
export default ItemListContainer