import React from 'react'
import { useNavigate } from 'react-router-dom';
import imagen from "../../assets/logo.webp"
import "./CardGift.css"
const CardGift = () => {
    const navigate = useNavigate();
    const verMas = () => {
        navigate("/detalle-gift")
    }
    return (
        <div className="card cardGift">
            <img className="imagenProducto" src={imagen} alt="imagen producto" />
            <h2 className="nombreProducto">Gift Card</h2>
            <button onClick={() => verMas()} className="productoBtn">Ver más</button>
        </div>
    )
}

export default CardGift
