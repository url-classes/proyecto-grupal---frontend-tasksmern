import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
//import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import PrimarySearchAppBar from "../components/Header";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  console.log("esto es auth");
  console.log(auth);
  console.log(cargando);

  if (cargando) return "cargando...";

  return (
    <>
      {auth._id ?  
      (
        <div className="bg-gray-100">
          <PrimarySearchAppBar />
          <div className="md:flex md:min-h-screen">
            <Sidebar />
            <main className="p-10 flex-1">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RutaProtegida;
