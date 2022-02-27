import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {
    const {auth, cargando} = useAuth()
    console.log("esto es auth")
    console.log(auth)
    console.log(cargando)

    if(cargando) return 'cargando...'

  return (
    <>
      <div>RutaProtegida</div>

      {auth?.token ? <Outlet /> : <Navigate to="/"/> }
    </>
  )
};

export default RutaProtegida;
