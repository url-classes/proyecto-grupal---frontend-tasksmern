import React, { useEffect, useState } from 'react'
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta"
import { useNavigate } from 'react-router-dom'
const NuevoIndividual = () => {
    const [usuarios, setUsuarios] = useState([])
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState([])
    const [usuarioID, setusuarioID] = useState("")
    const { auth } = useAuth();
    const [alerta, setAlerta] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };
                const { data } = await clienteAxios.get("/usuarios/usuarioAll", config);
                setUsuarios(data)
            } catch (error) {
                console.log(error);
            }
        };
        obtenerUsuarios()
    }, []);
    const [usuarioMostrar, setUsuarioMostrar] = useState([])
    function handlePress(e) {
        let usuariosMatch = []
        console.log("Los usuarios son: ", usuarios)
        //console.log(e.target.value, auth.email)
        if (e.target.value != "") {
            usuarios.map((usuario) => (
                usuario.email != auth.email
                    ? usuario.email.includes(e.target.value)
                        ? usuariosMatch.push(usuario)
                        : null
                    : null
            ))
        }
        setUsuarioMostrar(usuariosMatch)
    }
    function handleChat(e) {
        let id
        console.log(e.target.textContent)
        usuarios.map((usuario) => (
            usuario.email === e.target.textContent
                ? id = usuario._id
                : null
        ))
        setUsuarioSeleccionado(e.target.textContent)
        document.getElementById('inputMensaje').value = e.target.textContent
        setusuarioID(id)
    }
    function handleEstilo(e) {
        e.target.classList.add('bg-indigo-200', 'cursor-pointer')
    }
    function handleQuitarEstilo(e) {
        e.target.classList.remove('bg-indigo-200', 'cursor-pointer')
    }
    function handleEnviarChat(e) {
        if (usuarioID != "") {
            document.getElementById('inputMensaje').value = ''
            setUsuarioSeleccionado('')
            console.log(usuarioID)
            const crearChat = async () => {
                try {
                    const token = localStorage.getItem("token");
                    if (!token) return;
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    };
                    let bodyContent = {
                        "usuarioId": `${usuarioID}`
                    }
                    const { data } = await clienteAxios.post("/chat", bodyContent, config);
                    //console.log(`/admin/chat/${data._id}`)
                    navigate(`/admin/chat/${data._id}`)
                } catch (error) {
                    console.log(error);
                }
            };
            crearChat()
        } else {
            setAlerta({
                msg: "Seleccionar el usuario a crear el chat",
                error: true
            })
            setTimeout(() => {
                setAlerta({});
            }, 3000);
        }
    }
    const { msg } = alerta
    return (
        <div className='mt-4 md:ml-32 xl:ml-48'>
            <input placeholder='Buscar contacto...' className='my-1 md:my-2 py-1 md:py-2 w-full px-2 md:w-9/12 rounded-lg bg-slate-300 h-12 input-texto' onChange={handlePress} id="inputMensaje"></input>
            <div id="MostrarContactos">{
                usuarioMostrar.slice(0, 4).map((usuario) => (
                    <div className='w-fit rounded-lg py-2 my-2 px-2' onClick={handleChat} onMouseEnter={handleEstilo} onMouseLeave={handleQuitarEstilo} key={usuario._id}>{usuario.email}</div>
                ))
            }</div>
            <button id="CrearChat" className='bg-indigo-600 text-white px-10 py-3 rounded-lg mt-4 my-4' onClick={handleEnviarChat}>Crear Chat</button>
            {usuarioSeleccionado != ""
                ? <span className='px-2 md:px-4 py-2 block md:inline bg-indigo-200 rounded-lg mx-2'>{usuarioSeleccionado}</span>
                : null
            }
            {msg && <Alerta alerta={alerta} />}
        </div >
    )
}

export default NuevoIndividual