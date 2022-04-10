import AdminNav from "../components/AdminNav";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";

const CambiarPassword = () => {
  const { guardarPassword } = useAuth();
  const [alerta, setAlerta] = useState({});
  const [password, setPassword] = useState({
    pwd_actual: "",
    pwd_nuevo: "",
  });

  const handleSumit = async (e) => {
    e.preventDefault();
    if (Object.values(password).some((campo) => campo === "")) {
      setAlerta({
        msg: "Todos los campos son obligatorio",
        error: true,
      });
      return;
    }

    if (password.pwd_nuevo.length < 6) {
      setAlerta({
        msg: "La contraseña debe tener mínimo 6 caracteres",
        error: true,
      });
    } else {
      const respuesta = await guardarPassword(password);

      setAlerta(respuesta);
    }
  };

  const { msg } = alerta;

  return (
    <>
      <AdminNav />
      <h2 className="font-black text-3xl text-center mt-10">
        Cambiar Contraseña
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modifica tu {""}{" "}
        <span className="text-indigo-600 font-bold">Contraseña aqui</span>
      </p>

      <form
        className="bg-white border-4 border-opacity-30 px-3 py-5 md:border-4 border-slate-400 md:px-16 md:py-14 md:mx-28 mt-10"
        onSubmit={handleSumit}
      >
        {msg && <Alerta alerta={alerta} />}
        <div className="grid xl:grid-cols-2 xl:gap-6 mt-9">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="pwd_actual"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) =>
                setPassword({
                  ...password,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="nombre"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contraseña Actual
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="password"
              name="pwd_nuevo"
              id="web"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) =>
                setPassword({
                  ...password,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="descripcion"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nueva Contraseña
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold
          bg-indigo-600 text-white text-center mt-5 flex gap-2 items-center justify-center"
        >
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Actualizar Password
        </button>
      </form>
    </>
  );
};

export default CambiarPassword;
