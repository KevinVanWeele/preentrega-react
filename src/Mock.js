const productos = [
    {
        id : 0,
        nombre : `Remera nike`,
        img : "img/remeranike.jpg",
        color : 'negra',
        detalles : `Remera nike`,
        precio : 2500,
    },
    {
        id : 1,
        nombre : `Buzo nike`,
        img : "img/buzonike.jpg",
        color : 'negra',
        detalles : `Buzo nike`,
        precio : 3500,
    },
    {
        id : 2,
        nombre : `Remera nike`,
        img : "img/chaleconike.jpg",
        color : 'negra',
        detalles : `Chaleco nike`,
        precio : 4500,
    },
    {
        id : 3,
        nombre : `Remera nike`,
        img : "img/camperanike.jpg",
        color : 'negra',
        detalles : `Campera nike`,
        precio : 5500,
    },
]


export const getFetch = new Promise((respuesta, rejected) => {
    let url = `www.productos.com.ar`

    if (url === `www.productos.com.ar`){

        setTimeout(() => {

            respuesta(productos);
        }, 2000);
    } else {
        rejected(`400 not found`)
    }
})

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 500)
    })
}