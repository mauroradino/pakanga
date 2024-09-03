import productosJSON from "../../assets/productos.json"
import Swal from "sweetalert2"
import "./Ticket.css"

const Ticket = ({ carrito }) => {
    let precioTotal = 0
    let arrayProductosMensaje = []
    carrito.map((compraProducto) => {
        let colorFormateado
        console.log(compraProducto.color)
        switch (compraProducto.color) {
            case "blue":
                colorFormateado = "azul";
                break
            case "#FFFF":
                colorFormateado = "blanco";
                break;
            case "white":
                colorFormateado = "blanco";
                break
            case "violet":
                colorFormateado = "violeta";
                break;
            case "black":
                colorFormateado = "negro";
                break;
            case "yellow":
                colorFormateado = "amarillo";
                break;
            case "red":
                colorFormateado = "rojo";
                break;
            case "brown":
                colorFormateado = "marron";
                break;
            case "gray":
                colorFormateado = "gris";
                break;
            case "lightblue":
                colorFormateado = "celeste";
                break
            case "orange":
                colorFormateado = "naranja";
                break
            case "green":
                colorFormateado = "verde";
                break;
            case "#000080":
                colorFormateado = "azul marino";
                break
            case "#556B2F":
                colorFormateado = "verde militar"
                break
            case "#F5F5DC":
                colorFormateado = "beige"
                break
            case "#FF00FF":
                colorFormateado = "fucsia"
                break
            case "#00FF00":
                colorFormateado = "verde lima";
                break
            case "#C71585":
                colorFormateado = "rosa viejo";
                break
            default:
                colorFormateado = "desconocido";
                break;
        }

        return (
            arrayProductosMensaje.push(`${productosJSON[compraProducto.numero].titulo} en talle ${compraProducto.talle} de color ${colorFormateado}.`)
        )
    })

    const mensaje = arrayProductosMensaje.join('\n')
    let message = `Hola Pakanga! acabo de realizar una compra, los productos son: ${mensaje}`
    const enviarMensaje = () => {
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
                const url = `https://api.whatsapp.com/send?phone=${+541135045728}&text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            }
        });
    };


    return (
        <div className="divTicket">
            <h1>Tus Productos: </h1>
            <ul>
                {carrito.map((compra, i) => {
                    precioTotal += parseInt(productosJSON[compra.numero].precio)
                    return (
                        <li className="liTicket" key={i}>
                            <h3>{productosJSON[compra.numero].titulo}:</h3>
                            <h4>${productosJSON[compra.numero].precio}</h4>
                        </li>
                    )
                })}
                <hr></hr>
                <h4 className="precioTotal">TOTAL: ${precioTotal}</h4>
            </ul>
            <button className="confirmarCompraBtn" onClick={enviarMensaje}>Confirmar compra</button>
        </div>
    )
}

export default Ticket
