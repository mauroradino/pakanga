import { useContext } from "react"
import ProductosJSON from "../../assets/productos.json"
import DetailCard from "../../Components/DetailCard/DetailCard"
import Context from "../../context"
import "./Details.css"


const Details = () => {
    const { productoSeleccionado } = useContext(Context)
    console.log("PRODUCTO SELECCCIONADO", productoSeleccionado)
    const producto = ProductosJSON[productoSeleccionado]
    console.log("PRODUCTO", producto)
    return (
        <main className="mainDetallesPage">
            <DetailCard index={productoSeleccionado} talles={producto.talles} colores={producto.colores} imagen1={producto.imagen1} imagen2={producto.imagen2} precio={producto.precio} descripcion={producto.descripcion} titulo={producto.titulo} />
        </main>
    )
}
export default Details