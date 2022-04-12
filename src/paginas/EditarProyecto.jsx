import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CrearProyecto from "../components/CrearProyecto";
import Swal from "sweetalert2";

import useProyectos from "../hooks/useProyectos";
import edit from "../img/1.svg";

const EditarProyecto = () => {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando, eliminarProyecto } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  const { nombre } = proyecto;
  const handleClick = () => {

    Swal.fire({
      title: 'Seguro desea Eliminar este proyecto?',
      text: `${nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, deseo eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProyecto(params.id)
        Swal.fire(
          'Eliminado!',
          'Proyecto eliminado correctamente.',
          'success'
        )
      }
    })
  }

  



  if (cargando) return "Cargando...";

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-black text-4xl">Editar Proyecto: {nombre}</h1>
        <div className="flex items-center gap-2 text-gray-800 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <button onClick={handleClick} className="uppercase font-bold text-red-600">Eliminar</button>
        </div>
      </div>

      <div className=" grid grid-cols-3 gap-4 mt-16 items-center">
        <div className="md:col-span-2 col-span-3">
          <CrearProyecto />
        </div>

        <div className="md:col-span-1 col-span-3">
          <img className="" src={edit} />
        </div>
      </div>
    </>
  );
};

export default EditarProyecto;
