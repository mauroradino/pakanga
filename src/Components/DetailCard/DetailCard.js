import { useContext, useState } from "react"
import Context from "../../context"
import "./DetailCard.css"


const DetailCard = ({ titulo, colores, descripcion, precio, index, talles, imagen1 }) => {
    const { agregarAlCarro } = useContext(Context)
    const [talle, setTalle] = useState("")
    const [color, setColor] = useState("")

    return (
        <div className="detailCardDiv">
            <img className="imagenDetalleProducto" src={imagen1} alt="imagen del producto" />
            <div className="contenidosDetalle">
                <h2 className="nombreProducto">{titulo}</h2>
                <h3 className="descripcionProducto">{descripcion}</h3>
                <div className="selector-container">
                    <label for="talles" className="selector-title">Talle:</label>
                    <select onChange={(e) => { setTalle(e.target.value) }} id="talles" className="selector">
                        <option defaultValue="no seleccionado">-----</option>
                        {talles.map(talle => {
                            return (
                                <option value={talle}>{talle}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="divSelector">
                    {colores.map((colorMap, i) => {
                        return (
                            <button id={i} className="color" onClick={() => { setColor(colorMap) }} style={{
                                backgroundColor: colorMap,
                                boxShadow: colorMap === color ? '0 4px 8px rgba(0, 0, 0, 0.7)' : 'none',
                                transform: colorMap === color ? 'translateY(-2px)' : 'none',
                                transition: 'transform 0.2s ease-in-out'
                            }}></button>
                        )
                    }
                    )}
                </div>
                <h4 className="precioProducto">Precio: ${precio}</h4>
                <button onClick={() => { agregarAlCarro(index, talle, color) }} className="productoDetalleBtn">Agregar al carrito</button>
            </div>
        </div >
    )
}

export default DetailCard