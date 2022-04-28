import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../css/crearChat.css'
const CrearChat = () => {
    function handleClass(e) {
        if (e.target === document.getElementById('tab1')) {
            document.getElementById('tab1').classList.add('activar')
            document.getElementById('tab1').classList.remove('apagado')
            document.getElementById('tab2').classList.remove('activar')
            document.getElementById('tab2').classList.add('apagado')
        } else {
            document.getElementById('tab2').classList.add('activar')
            document.getElementById('tab2').classList.remove('apagado')
            document.getElementById('tab1').classList.remove('activar')
            document.getElementById('tab1').classList.add('apagado')
        }

    }
    return (
        <div>
            <div>
                <div className='text-center'>
                    <h1 className='text-3xl md:text-5xl '>Crear Chat</h1>
                </div>
                <div className="text-sm font-medium text-center text-gray-500">
                    <ul className="flex flex-wrap -mb-px flex justify-around">
                        <li className="mr-2">
                            <Link to="/admin/CrearChat/NuevoIndividual" className="activar" onClick={handleClass} id="tab1">Nuevo mensaje</Link>
                        </li>
                        <li className="mr-2">
                            <Link to="/admin/CrearChat/NuevoGrupal" className="apagado" onClick={handleClass} id="tab2">
                                Nuevo chat grupal
                            </Link>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    )
}
export default CrearChat