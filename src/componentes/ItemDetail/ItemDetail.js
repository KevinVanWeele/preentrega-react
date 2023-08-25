import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ({ id, nombre, img, color, detalles, precio }) => {
    return(
        <article>
        <header>
            <h2>{nombre}</h2>
        </header>
        <picture>
            <img src={img} alt={nombre}/>
        </picture>
        <section>
            <p>descripcion: {detalles}
            </p>
            <p>color: {color}
            </p>
            <p>precio: ${precio}
            </p>
        </section>
        <footer> <ItemCount initial={1} onAdd={(quantity) => console.log('Cantidad agregada')} /></footer>
        </article>
    )
}

export default ItemDetail;