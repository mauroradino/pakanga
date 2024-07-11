import { useContext } from "react"
import Context from "../../context"
import "./CardCarrito.css"


const CardCarrito = ({ imagen, precio, titulo, id }) => {
    const { eliminarDelCarrito } = useContext(Context)
    return (
        <div className="cardCarrito">
            <img className="imagenCardCarrito" src={imagen} alt="imagen producto" />
            <div className="contenidoCardCarrito">
                <h2 className="tituloCardCarrito">{titulo}</h2>
                <button className="btnEliminar" onClick={() => eliminarDelCarrito(id)}>Eliminar</button>
            </div>
            <h3 className="precioCardCarrito">${precio}</h3>
        </div>
    )
}

export default CardCarrito