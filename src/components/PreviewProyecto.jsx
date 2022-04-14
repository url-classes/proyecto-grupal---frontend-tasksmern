import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import useProyectos from "../hooks/useProyectos";
const PreviewProyecto = ({ proyecto }) => {

  
  const { nombre, _id, cliente, colaboradores, descripcion, createdAt, fechaEntrega } = proyecto;
  let cantidadColaboradores = colaboradores.length
  cantidadColaboradores = colaboradoresCantidad(cantidadColaboradores)
  let contenido = descripcion
  contenido = obtenerContenido(contenido)
  const hoy = new Date()
  let fechaFinalizar = fechaEntrega
  fechaFinalizar = obtenerFecha(hoy, fechaEntrega.slice(0, 10))
  return (
    <div className='border-r- border-b-3 border-l-3 border-slate-400 border-opacity-30 mt-2 shadow-lg mb-2 px-2'>
      <div className="grid content-center h-16">
        <h2 className="text-xl md:text-xl">
          {nombre}
        </h2>
      </div>
      <div className='grid grid-cols-2'>
        <div>
          <Link to={`${_id}`}> 
            <MoreHorizIcon></MoreHorizIcon>
          </Link>
        </div>
        <div className="grid justify-items-end">
          <div className="d-inline">
            {cantidadColaboradores}
          </div>
        </div>
      </div>
      <div className="grid h-32 content-between">
        <p className="pt-2 text-lg text-gray-600">
          {contenido}
        </p>
        <p className="text-base text-cyan-700">
          {proyecto.creador}
        </p>
      </div>
      <hr className="border-slate-900 border-opacity-20 mt-0 mb-2 col-span-2"></hr>
      <div className="grid grid-cols-2 gap-2">
        <div className="px-1 text-base md:text-sm">
          Fecha inicio
        </div>
        <div className="px-1 text-base md:text-sm">
          Fecha entrega
        </div>
        <div className="px-1 text-base md:text-sm mb-2">
          {createdAt.slice(0, 10)}
        </div>
        {fechaFinalizar}
      </div>
    </div>
  );
};
const colaboradoresCantidad = (cantidad) => {
  //ya que mostraremos al creador del proyecto junto con los colaboradores
  let cantidadColaboradores = []
  if(cantidad <= 3){
    for(let i = 0; i < cantidad; i++){
      cantidadColaboradores.push(<PersonIcon key={i} />)
    }
  }else{
    for(let i = 0; i < 3; i++){
      cantidadColaboradores.push(<PersonIcon key={i} />)
    }
    cantidadColaboradores.push(<PeopleAltIcon key={7} />)
  }
  return cantidadColaboradores
}
const obtenerContenido = (contenido) => {
  if(contenido.length > 100){
    contenido = contenido.substr(0, 90)
    contenido += " ..."
  }
  return contenido
}
const obtenerFecha = (fechaActual, fechaFinalizar) =>{
  const unDia = 1000 * 60 * 60 * 24
  let fechaEntrega = fechaFinalizar
  fechaFinalizar = new Date(fechaFinalizar)
  //console.log(fechaActual, fechaFinalizar)
  let diferencia = fechaFinalizar - fechaActual
  diferencia = Math.floor(diferencia/unDia)
  if(diferencia <= 1){
    return(
      <div className="px-1 text-base md:text-sm text-red-600 mb-2">
        {fechaEntrega.slice(0, 10)}
      </div>
    )
  }else{
    return(
      <div className="px-1 text-base md:text-sm text-lime-500 mb-2">
        {fechaEntrega.slice(0, 10)}
      </div>
    )
  }
}
export default PreviewProyecto;