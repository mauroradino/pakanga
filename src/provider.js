import React, { useState } from 'react';
import Swal from "sweetalert2"
import Context from './context';

const Provider = ({ children }) => {
    const [productoSeleccionado, setProductoSeleccionado] = useState(0);
    const [carrito, setCarrito] = useState([])
    const [logged, setLogged] = useState(false)
    const [valorGift, setValorGift] = useState(0)
    const id = carrito.length + 1

    const agregarAlCarro = (numero, talle, color) => {
        setCarrito((prevCarrito) => [
            ...prevCarrito,
            { numero, talle, color, id }
        ]);
        Swal.fire({
            icon: "success",
            title: "Producto agregado al carrito",
            timer: 1500
        })
    };


    const eliminarDelCarrito = (id) => {
        setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
    };



    const datos = { productoSeleccionado, valorGift, setValorGift, logged, setLogged, setProductoSeleccionado, carrito, agregarAlCarro, eliminarDelCarrito };

    return (
        <Context.Provider value={datos}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
