import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import '../css/chatPersonal.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useParams } from 'react-router-dom'
import clienteAxios from "../config/axios";

const ChatPersonal = () => {
    const params = useParams()
    const [chats, setChats] = useState([])
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
    }, [params.id]);
    return (
        <div>
            <div className='flex justify-between md:justify-around'>
                <ArrowBackIcon fontSize="large" />
                <h1 className='text-3xl md:text-5xl'>
                    Doug
                </h1>
                <EditIcon fontSize="large" />
            </div>
            <div className='my-3 md:my-5 bg-slate-200 contenido rounded-lg flex flex-col justify-end'>
                {chats.map((chat) => (
                    <div>
                        <div className='mx-2 md:mx-4 px-1 md:px-2 py-1 md:py-2 flex has-tooltip box-chat'>
                            <AccountCircleIcon />{chat.contenido}
                            <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>{chat.emisor.nombre}</span>
                        </div>

                    </div>
                ))}
                <input placeholder='Escribe un mensaje...' className='my-1 md:my-2 py-1 md:py-2 mx-2 md:mx-4 px-2 md:px-4 rounded-lg bg-slate-300 h-12 input-texto'></input>
            </div>
        </div >
    )
}

export default ChatPersonal