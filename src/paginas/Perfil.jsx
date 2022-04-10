import EditarPerfil from "./EditarPerfil";
import edit from "../img/3.svg";
import useAuth from "../hooks/useAuth";

const Perfil = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Editar Perfil</h1>

      <EditarPerfil />
    </>
  );
};

export default Perfil;
