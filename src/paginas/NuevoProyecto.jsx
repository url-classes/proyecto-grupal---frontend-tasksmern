import CrearProyecto from "../components/CrearProyecto";
import edit from "../img/2.svg";

const NuevoProyecto = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Crear Proyecto</h1>

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

export default NuevoProyecto;
