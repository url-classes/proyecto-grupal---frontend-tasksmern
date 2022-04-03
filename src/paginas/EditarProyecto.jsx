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
      <div className=" md:grid md:grid-cols-1 mt-12 gap-10 p-5 items-center">
        <div className="">
          <CrearProyecto />
        </div>

        <div className="flex justify-center img-edit ">
          <img className="" src={edit} />
        </div>
      </div>
    </>
  );
};

export default EditarProyecto;
