// LoginAdmin.js
import React, { useContext, useState } from 'react'
import { auth } from '../../firebase'  // Importa la instancia de autenticación
import { signInWithEmailAndPassword } from "firebase/auth";  // Importa el método de inicio de sesión
import Swal from 'sweetalert2';
import "./LoginAdmin.css"
import Context from '../../context';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
    const [email, setEmail] = useState("")
    const { setLogged } = useContext(Context)
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const changeMail = (e) => {
        setEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const IniciarSesion = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setLogged(true)
                Swal.fire({
                    title: "Sesión Iniciada",
                    icon: "success"
                })
                navigate("/dashboard")
            })
            .catch(error => {
                console.log(error.message);
                setLogged(false)
                Swal.fire({
                    icon: "error",
                    title: "Error al iniciar sesión"
                })
            });
    }

    return (
        <div className='divLogin'>
            <h1 className='tituloLogin'>Inicia Sesión</h1>
            <div className='divInput'>
                <label>Correo Electronico</label>
                <input onChange={changeMail} className='inputMail' type='email' placeholder='nombre@pakanga.com' />
            </div>
            <div className='divInput'>
                <label>Contraseña</label>
                <input onChange={changePassword} className='inputMail' type='password' />
            </div>
            <button onClick={IniciarSesion} className='loginBtn'>Iniciar Sesión</button>
        </div>
    )
}

export default LoginAdmin
