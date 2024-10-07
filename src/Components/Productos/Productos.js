import CardGift from "../CardGift/CardGift"
import GrupoCategoria from "../GrupoCategoria/GrupoCategoria"
import "./Productos.css"

const Productos = () => {
    return (
        <>
            <CardGift />
            <GrupoCategoria categoria="Buzos" />
            <GrupoCategoria categoria="Remeras" />
            <GrupoCategoria categoria="Chombas" />
            <GrupoCategoria categoria="Accesorios" />
            <GrupoCategoria categoria="Otros Productos" />
        </>
    )
}
export default Productos