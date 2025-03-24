import "./CartWidget.css"

const CartWidget = () => {

    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/6811/6811628.png"

  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="Imagen de un carrito" />
    </div>
  )
}

export default CartWidget