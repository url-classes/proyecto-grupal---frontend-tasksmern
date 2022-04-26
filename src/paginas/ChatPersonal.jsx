import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import '../css/chatPersonal.css'
const ChatPersonal = () => {
    return (
        <div>
            <div className='flex items-center justify-between md:justify-around'>
                <ArrowBackIcon fontSize="large" />
                <h1 className='text-3xl md:text-5xl'>
                    Chat de alguien
                </h1>
                <EditIcon fontSize="large" />
            </div>
            <div className='my-3 md:my-5 bg-slate-200 contenido rounded-lg flex flex-col justify-end'>
                <div>

                </div>
                <input placeholder='Escribe un mensaje...' className='my-3 md:my-5 py-1 md:py-2 mx-2 md:mx-4 px-2 md:px-4 rounded-lg bg-slate-300 h-12 input-texto'></input>
            </div>
        </div>
    )
}

export default ChatPersonal