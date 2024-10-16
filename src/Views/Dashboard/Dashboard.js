import React, { useContext, useState } from 'react'
import { db } from '../../firebase'
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import Context from '../../context'
import "./Dashboard.css"
import Swal from 'sweetalert2';

const Dashboard = () => {
    const { logged } = useContext(Context)
    const [monto, setMonto] = useState(0)

    function generarSecuenciaAleatoria() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let resultado = '';
        const caracteresLength = caracteres.length;
        for (let i = 0; i < 10; i++) {
            resultado += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
        }
        Swal.fire({
            title: `El codigo generado es: ${resultado}`
        })
        return resultado;
    }

    const montoChange = (e) => {
        setMonto(e.target.value)
    }


    const generarCard = async (monto) => {
        let codigoValido = false;
        let codigo;

        while (!codigoValido) {
            codigo = generarSecuenciaAleatoria();

            // Verifica si el código ya existe en la base de datos
            const q = query(collection(db, "codigosGift"), where("codigo", "==", codigo));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                codigoValido = true;
            }
        }

        // Si el código es válido, agrégalo a la base de datos
        try {
            await addDoc(collection(db, "codigosGift"), {
                codigo: codigo,
                monto: monto
            });
        } catch (e) {
        }
    }


    return (
        logged ? (
            <main className='mainDashboard'>
                <div className='divDashboard'>
                    <label>Ingresá el monto de la Gift Card: </label>
                    <input className='inputMonto' onChange={montoChange} type='number' />
                    <button className='buttonGenerar' onClick={() => generarCard(monto)}>Generar Card</button>
                </div>
            </main>
        ) : null
    )
}

export default Dashboard
