import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CrearProyecto from "../components/CrearProyecto";

import useProyectos from "../hooks/useProyectos";
import edit from "../img/1.svg";

const EditarProyecto = () => {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  const { nombre } = proyecto;

  if (cargando) return "Cargando...";

  return (
    <>
      <h1 className="font-black text-4xl">Editar Proyecto: {nombre}</h1>
      <div className=" grid grid-cols-3 gap-4 mt-16">
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
