import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import '../css/chatPersonal.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useParams } from 'react-router-dom'
const ChatPersonal = () => {
    const params = useParams()
    let chat = obtenerChat(params.id)
    return (
        <div>
            <div className='flex items-center justify-between md:justify-around'>
                <ArrowBackIcon fontSize="large" />
                <h1 className='text-3xl md:text-5xl'>
                    {chat.nombreChat}
                </h1>
                <EditIcon fontSize="large" />
            </div>
            <div className='my-3 md:my-5 bg-slate-200 contenido rounded-lg flex flex-col justify-end'>
                <div className='mx-2 md:mx-4 px-1 md:px-2 py-1 md:py-2 flex has-tooltip box-chat'>
                    <AccountCircleIcon />{ultimoMensaje(chat.ultimoMensaje)}
                    <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>{chat.ultimoMensaje.emisor.nombre}</span>
                </div>
                <input placeholder='Escribe un mensaje...' className='my-1 md:my-2 py-1 md:py-2 mx-2 md:mx-4 px-2 md:px-4 rounded-lg bg-slate-300 h-12 input-texto'></input>
            </div>
        </div >
    )
}
const obtenerChat = (id) => {
    const chatJSON = localStorage.getItem(id)
    const chat = JSON.parse(chatJSON)
    return chat
}
const ultimoMensaje = (mensaje) => {
    if (mensaje != null) {
        return (
            <h1>{mensaje.contenido}</h1>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default ChatPersonal