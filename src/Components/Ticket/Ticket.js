import React, { useState } from "react";
import productosJSON from "../../assets/productos.json";
import Swal from "sweetalert2";
import { collection, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';
import "./Ticket.css";

const Ticket = ({ carrito }) => {
    const [codigo, setCodigo] = useState("");
    const [precioTotal, setPrecioTotal] = useState(
        carrito.reduce((total, compra) => total + parseInt(productosJSON[compra.numero].precio), 0)
    );

    let arrayProductosMensaje = [];
    carrito.forEach((compraProducto) => {
        let colorFormateado;
        switch (compraProducto.color) {
            case "#0000FF": colorFormateado = "azul"; break;
            case "#FFFFFF": colorFormateado = "blanco"; break;
            case "#8A2BE2": colorFormateado = "violeta"; break;
            case "#000000": colorFormateado = "negro"; break;
            case "yellow": colorFormateado = "amarillo"; break;
            case "#FF0000": colorFormateado = "rojo"; break;
            case "#808080": colorFormateado = "gris"; break;
            case "#87CEEB": colorFormateado = "celeste"; break;
            case "#FFA500": colorFormateado = "naranja"; break;
            case "#008000": colorFormateado = "verde"; break;
            case "#1E90FF": colorFormateado = "azulino"; break;
            case "#4B5320": colorFormateado = "verde militar"; break;
            case "#F5F5DC": colorFormateado = "beige"; break;
            case "#FF00FF": colorFormateado = "fucsia"; break;
            case "#32CD32": colorFormateado = "verde lima"; break;
            case "#C08081": colorFormateado = "rosa viejo"; break;
            case "#B7B7B7": colorFormateado = "melange"; break;
            case "#FFC0CB": colorFormateado = "rosa"; break;
            case "#40E0D0": colorFormateado = "turquesa"; break;
            case "#0F4C81": colorFormateado = "azul francia"; break;
            case "#8A9A5B": colorFormateado = "musgo"; break;
            case "#E6E6FA": colorFormateado = "lavanda"; break;
            case "#FAF3E0": colorFormateado = "natural"; break;
            case "#7CB9E8": colorFormateado = "aero"; break;
            case "#009950": colorFormateado = "benetton"; break;
            case "#EAE0C8": colorFormateado = "perla"; break;
            case "#800000": colorFormateado = "bordo"; break;
            case "#D1E231": colorFormateado = "pera"; break;
            case "#00FFCC": colorFormateado = "verde agua"; break;
            case "#C8A2C8": colorFormateado = "lila"; break;
            case "#D2B48C": colorFormateado = "tostada"; break;
            case "#C19A6B": colorFormateado = "camel"; break;
            case "#E5D5C5": colorFormateado = "crudo"; break;
            case "#FFDAB9": colorFormateado = "durazno"; break;
            case "#FA8072": colorFormateado = "salmon"; break;
            case "#00FFFF": colorFormateado = "aqua"; break;
            case "#808000": colorFormateado = "oliva"; break;
            case "#E5E5E5": colorFormateado = "dior"; break;
            case "#274E13": colorFormateado = "verde ingles"; break;
            case "#F3E5AB": colorFormateado = "vainilla"; break;
            default: colorFormateado = "desconocido"; break;

        }
        arrayProductosMensaje.push(`${productosJSON[compraProducto.numero].titulo} en talle ${compraProducto.talle} de color ${colorFormateado}.`);
    });

    const getCodigo = (e) => {
        setCodigo(e.target.value);
    };

    const enviarMensaje = async () => {
        if (codigo !== "") {
            const q = query(collection(db, "codigosGift"), where("codigo", "==", codigo));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const docSnapshot = querySnapshot.docs[0];
                const { monto } = docSnapshot.data();
                const nuevoTotal = precioTotal - monto;
                setPrecioTotal(nuevoTotal);
                Swal.fire({
                    title: "Código de descuento aplicado",
                    text: `Se ha aplicado un descuento de $${monto}. El total es ahora $${nuevoTotal}.`,
                    icon: "success"
                }).then(async () => {
                    try {
                        const docRef = doc(db, "codigosGift", docSnapshot.id);
                        await deleteDoc(docRef);
                        confirmarCompra(monto);
                    } catch (error) {
                        Swal.fire({
                            title: "Error",
                            text: "Hubo un problema al eliminar el código de descuento.",
                            icon: "error"
                        });
                    }
                });
            } else {
                Swal.fire({
                    title: "Código de descuento inválido",
                    text: "Por favor, ingrese un código válido.",
                    icon: "error"
                });
            }
        } else {
            confirmarCompra();
        }
    };

    const confirmarCompra = (monto = 0) => {
        const mensaje = arrayProductosMensaje.join('\n');
        const message = `Hola Pakanga! Acabo de realizar una compra. Los productos son: ${mensaje}. El total es de: $${precioTotal}. ${codigo ? `Tengo un código de descuento de: $${monto}` : ""}`;
        Swal.fire({
            title: "¿Quieres confirmar la compra?",
            text: "Serás redirigido a nuestro WhatsApp",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgb(24, 185, 24)",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, confirmar compra"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Muchas gracias por tu compra!",
                    text: "Compra confirmada.",
                    icon: "success"
                });
                const url = `https://api.whatsapp.com/send?phone=${+541135045728}&text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            }
        });
    };

    return (
        <div className="divTicket">
            <h1>Tus Productos: </h1>
            <ul>
                {carrito.map((compra, i) => (
                    <li className="liTicket" key={i}>
                        <h3>{productosJSON[compra.numero].titulo}:</h3>
                        <h4>${productosJSON[compra.numero].precio}</h4>
                    </li>
                ))}
                <hr />
                <input onChange={getCodigo} className="inputCodigo" placeholder="Código de descuento" />
                <h4 className="precioTotal">TOTAL: ${precioTotal}</h4>
            </ul>
            <button className="confirmarCompraBtn" onClick={enviarMensaje}>Confirmar compra</button>
        </div>
    );
}

export default Ticket;
