import productosJSON from "../../assets/productos.json"
import Card from "../CardProducto/Card"
import "./GrupoCategoria.css"


const GrupoCategoria = ({ categoria }) => {
    return (
        <>
            <h2 className="titulo">{categoria}</h2>
            <div className="divProducto">
                {productosJSON.map((producto, index) => {
                    return (
                        producto.categoria === categoria ? <Card key={index} index={index} titulo={producto.titulo} precio={producto.precio} imagen={producto.imagen1} /> : null
                    )
                })}
            </div>
        </>
    )
}

export default GrupoCategoria