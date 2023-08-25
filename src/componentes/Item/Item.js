import React from 'react'

const Item =({prod}) => {
    return(

        <div>
            <div>
                <h2>{prod.nombre}</h2>
            </div>
            <div>
                <img src={prod.img} alt={prod.nombre} />
            </div>
            <div>
                <p>{prod.detalles}</p>
                <p>$ {prod.precio}</p>

                <button> Ver descripcion</button>
            </div>
        </div>
    )
}

export default Item