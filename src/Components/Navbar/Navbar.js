import logo from "../../assets/logo.webp"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { useContext } from "react"
import Context from "../../context"


const Navbar = () => {
    const { carrito } = useContext(Context)

    return (
        <div>
            <div className="divMensajeHeader">
                <p className="mensajeHeader">El precio (por unidad) incluye el estampado</p>
            </div>
            <header>
                <Link to="/"><img src={logo} className="logoNav" alt="logo nav" /></Link>
                <div className="divCarrito">
                    <Link to="/carrito">
                        <p className="cantidadCarritoP">{carrito.length}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                    </Link>
                </div>
            </header>
        </div>
    )
}
export default Navbar