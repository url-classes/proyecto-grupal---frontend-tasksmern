import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";

import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import NuevoPassword from "./paginas/NuevoPassword";
import Date from "./paginas/Date";
import { AuthProvider } from "./context/AuthProvider";
import  Proyectos  from "./paginas/Proyectos";
//import PrimarySearchAppBar from "./components/panel";
import CrearProyecto from "./paginas/CrearProyecto";
import BadgeAvatars from "./paginas/Avatar";

import EditarPerfil from "./paginas/EditarPerfil";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="Date" element={<Date />} />
          <Route path="Avatar" element={<BadgeAvatars />} />
         
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
          </Route>

          <Route path="/admin" element={<RutaProtegida />}>
             <Route index element={<Proyectos />}/>
             <Route path="CrearProyecto" element={<CrearProyecto />}/> 
             <Route path="EditarPerfil" element={<EditarPerfil />}/> 
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
