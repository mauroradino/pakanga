import Productos from "../../Components/Productos/Productos"
import Recomendaciones from "../../Components/Recomendaciones/Recomendaciones"
import "./Home.css"


const Home = () => {
    return (
        <main className="mainHome">
            <Productos />
            <Recomendaciones />
        </main>
    )
}

export default Home