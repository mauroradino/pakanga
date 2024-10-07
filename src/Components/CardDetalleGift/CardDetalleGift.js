import React, { useContext, useState } from 'react'
import imagen from "../../assets/logo.webp"
import Context from '../../context'
import Swal from 'sweetalert2'
import "./CardDetalleGift.css"
const CardDetalleGift = () => {
    const [error, setError] = useState(false)
    const { valorGift, setValorGift } = useContext(Context)

    const valorChange = (e) => {
        setValorGift(e.target.value)
    }

    const message = `Hola Pakanga! Quiero comprar una Gift Card de: $${valorGift}`

    const comprarGift = () => {
        if (valorGift < 12000) {
            setError(true)
        }
        else {
            Swal.fire({
                title: "Queres confirmar la compra?",
                text: "Te redirigiras a nuestro Whatsapp",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "rgb(24, 185, 24)",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, confirmar compra"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Muchas gracias por tu compra!",
                        text: "compra confirmada.",
                        icon: "success"
                    });
                    const url = `https://api.whatsapp.com/send?phone=${+541125821249}&text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                }
            });

            setError(false)
        }
    }
    return (
        <div className="detailCardDiv">
            <img className="imagenDetalleProducto" src={imagen} alt="imagen del producto" />
            <div className="contenidosDetalle">
                <h2 className="tituloGiftDetalle">Gift Card</h2>
                <h3 className="descripcionGiftDetalle">Comprá una Gift Card y canjeala como código de descuento</h3>
                {error === true ? <p className="errorMessage">El valor minimo es de $12000</p> : null}
                <div className='divInputValor'>
                    <label className='labelValorGift'>Valor de la Gift Card:</label>
                    <input className='inputValor' onChange={(e) => valorChange(e)} type='number' min={10000} />
                </div>
                <button onClick={() => comprarGift()} className="productoDetalleBtn">Comprar Gift Card</button>
            </div>
        </div>
    )
}

export default CardDetalleGift
