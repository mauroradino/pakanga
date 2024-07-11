import bannerRecomendaciones from "../../assets/Recomendaciones De Lavado.png"
import "./Recomendaciones.css"


const Recomendaciones = () => {
    return (
        <img className="bannerRecomendaciones" src={bannerRecomendaciones} alt="recomendaciones de lavado" />
        /* <div className="divRecomendaciones">
             <h1 className="tituloRecomendaciones">Recomendaciones de Lavado</h1>
             <ul className="ulRecomendaciones">
                 <li className="liRecomendaciones">Girar la prenda antes de lavar</li>
                 <li className="liRecomendaciones">No usar lavandina</li>
                 <li className="liRecomendaciones">Lavar con agua fría</li>
                 <li className="liRecomendaciones">No usar secadora</li>
                 <li className="liRecomendaciones">No planchar directo la estampa</li>
             </ul>
         </div>*/
    )
}

export default Recomendaciones