import { useContext } from "react"
import Context from "../../context"
import { colorsFormat } from "../../colorsFormat"
import CloudinaryComponent from "../../cloudinary"
import "./CardCarrito.css"


const CardCarrito = ({ imagen, talle, color, precio, titulo, id }) => {
    const { eliminarDelCarrito } = useContext(Context)
    let colorFormateado = colorsFormat(color);
    return (
        <div className="cardCarrito">
            {/* <img className="imagenCardCarrito" src={imagen} alt="imagen producto" /> */}
            <CloudinaryComponent className="imagenCardCarrito" imagen={imagen} />
            <div className="contenidoCardCarrito">
                <h2 className="tituloCardCarrito">{titulo}</h2>
                <h3 className="textoTalleColor">Talle: {talle}</h3>
                <h3 className="textoTalleColor">Color: {colorFormateado}</h3>
                <button className="btnEliminar" onClick={() => eliminarDelCarrito(id)}>Eliminar</button>
            </div>
            <h3 className="precioCardCarrito">${precio}</h3>
        </div>
    )
}

export default CardCarrito