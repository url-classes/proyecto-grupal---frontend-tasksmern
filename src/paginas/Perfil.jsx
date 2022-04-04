import EditarPerfil from "./EditarPerfil";
import edit from "../img/3.svg";

const Perfil = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Editar Perfil</h1>

      <div className=" grid grid-cols-3 gap-4 mt-16">
        <div className="md:col-span-2 col-span-3">
          <EditarPerfil />
        </div>

        <div className="md:col-span-1 col-span-3">
          <img className="" src={edit} />
        </div>
      </div>
    </>
  );
};

export default Perfil;