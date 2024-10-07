import { useContext } from "react";
import Context from "../../context";
import Ticket from "../Ticket/Ticket";
import CardCarrito from "../CardCarrito/CardCarrito";
import ProductosJSON from "../../assets/productos.json";
import CarritoVacio from "../CarritoVacio/CarritoVacio";
import "./ContenidoCarrito.css";

const ContenidoCarrito = () => {
    const { carrito } = useContext(Context);
    return (
        <div className="divContenidoCarrito">
            {carrito.length !== 0 ? (
                <>
                    <div className="cardsCarrito">
                        {carrito.map((compra) => {
                            const producto = ProductosJSON[compra.numero];
                            return (
                                <CardCarrito
                                    key={compra.id}
                                    id={compra.id}
                                    titulo={producto.titulo}
                                    precio={producto.precio}
                                    imagen={producto.imagen1}
                                    color={compra.color}
                                    talle={compra.talle}
                                />
                            );
                        })}
                    </div>
                    <Ticket carrito={carrito} />
                </>
            ) : (
                <CarritoVacio />
            )}
        </div>
    );
};

export default ContenidoCarrito;
