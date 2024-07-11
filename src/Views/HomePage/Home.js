import Productos from "../../Components/Productos/Productos"
import Recomendaciones from "../../Components/Recomendaciones/Recomendaciones"
import BannerInicio from "../../assets/BannerInicio.png"
import "./Home.css"


const Home = () => {
    return (
        <main className="mainHome">
            <div className="divBanner">
                <img src={BannerInicio} className="bannerInicio" alt="banner" />
            </div>
            <Productos />
            <Recomendaciones />
        </main>
    )
}

export default Home