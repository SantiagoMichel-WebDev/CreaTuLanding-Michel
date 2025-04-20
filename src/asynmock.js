const misProductos = [
    {id: "1", nombre: "Horizon Zero Dawn", stock: 15, precio: 500, img: "../public/img/VideoJuego.webp", idCat: "VideoJuegos"},
    {id: "2", nombre: "Consola PS5", stock: 10, precio: 200, img: "../public/img/ps5.png", idCat: "Consolas"},
    {id: "3", nombre: "Joystick PS5", stock: 20, precio: 300, img: "../public/img/joyps5.webp", idCat: "Accesorios"},
    {id: "4", nombre: "Joystick PS4", stock: 10, precio: 900, img: "../public/img/joyps4.png", idCat: "Accesorios"},
]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setInterval(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        },100)
    })
}