import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Context from "../../context"
import "./Card.css"


const Card = ({ titulo, imagen, precio, index }) => {
    const { setProductoSeleccionado } = useContext(Context);
    const navigate = useNavigate();

    const verMas = (index) => {
        setProductoSeleccionado(index);
        navigate('/details');
    };

    return (
        <div key={index} className="card">
            <img className="imagenProducto" src={imagen} alt="imagen producto" />
            <h2 className="nombreProducto">{titulo}</h2>
            <h3 className="precioProducto">Precio: ${precio}</h3>
            <button onClick={() => verMas(index)} className="productoBtn">Ver más</button>
        </div>
    )
}
export default Card