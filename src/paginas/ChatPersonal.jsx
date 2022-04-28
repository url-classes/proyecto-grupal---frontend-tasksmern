import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import '../css/chatPersonal.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useParams } from 'react-router-dom'
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";
const ChatPersonal = () => {
    const params = useParams()
    const [chats, setChats] = useState([])
    const [usuario, setUsuario] = useState([])
    const { auth } = useAuth();
    useEffect(() => {
        const obtenerChatsPersonales = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

                const { data } = await clienteAxios.get(`/mensajes/${params.id}`, config);
                setChats(data)
            } catch (error) {
                console.log(error);
            }
        };
        obtenerChatsPersonales()

        const obtenerUsuario = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) return;

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

                const { data } = await clienteAxios.get(`/chat`, config);
                setUsuario(data)
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };
        obtenerUsuario()
    }, [params.id]);

    function handlePress(event) {
        if (event.key === 'Enter') {
            const enviarMensaje = async () => {
                try {
                    const token = localStorage.getItem("token");
                    if (!token) return;
                    let bodyContent = {
                        "contenido": `${document.getElementById('inputMensaje').value}`,
                        "chatId": `${params.id}`,
                    }
                    const config = {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    };

                    const { data } = await clienteAxios.post(`/mensajes/`, bodyContent, config);
                } catch (error) {
                    console.log(error);
                }
            };
            enviarMensaje()
            document.getElementById('inputMensaje').value = ""
        }
    }
    return (
        <div>
            <div className='flex justify-between md:justify-around text-center'>
                <ArrowBackIcon fontSize="large" />
                {/* <h1 className='text-3xl md:text-5xl'>{chat.nombreChat}</h1> */}
                {usuario.map((chat) => (
                    chat._id === params.id
                        ? chat.esChatGrupal === true
                            ? <h1 className='text-3xl md:text-5xl'>{chat.nombreChat}</h1>
                            : chat.usuarios[0].nombre != auth.nombre
                                ? <h1 className='text-3xl md:text-5xl'>{chat.usuarios[0].nombre}</h1>
                                : <h1 className='text-3xl md:text-5xl'>{chat.usuarios[1].nombre}</h1>
                        : null
                ))}

                <EditIcon fontSize="large" />
            </div>
            <div className='my-3 md:my-5 bg-slate-200 contenido rounded-lg flex flex-col justify-end'>
                {chats.map((chat) => (
                    <div>
                        {auth.nombre == chat.emisor.nombre
                            ? <div className='flex justify-end'>
                                <div className='mx-2 md:mx-4 px-1 md:px-2 py-1 md:py-2 flex has-tooltip box-chat'>
                                    <AccountCircleIcon />{chat.contenido}
                                    <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-emerald-500 -mt-8'>{chat.emisor.nombre}</span>
                                </div>
                            </div>
                            : <div className='mx-2 md:mx-4 px-1 md:px-2 py-1 md:py-2 flex has-tooltip box-chat'>
                                <AccountCircleIcon />{chat.contenido}
                                <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-emerald-500 -mt-8'>{chat.emisor.nombre}</span>
                            </div>}
                    </div>
                ))}
                <input placeholder='Escribe un mensaje...' className='my-1 md:my-2 py-1 md:py-2 mx-2 md:mx-4 px-2 md:px-4 rounded-lg bg-slate-300 h-12 input-texto' onKeyPress={handlePress} id="inputMensaje"></input>
            </div>
        </div >
    )
}

export default ChatPersonal