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

import { ProyectosProvider } from "./context/ProyectosProvider";
import Proyectos from "./paginas/Proyectos";
//import PrimarySearchAppBar from "./components/panel";
//import CrearProyecto from "./paginas/CrearProyecto";
import NuevoProyecto from "./paginas/NuevoProyecto";
import BadgeAvatars from "./paginas/Avatar";

import EditarPerfil from "./paginas/EditarPerfil";
import Proyecto from "./paginas/Proyecto";
import EditarProyecto from "./paginas/EditarProyecto";
import Perfil from "./paginas/Perfil";
import CambiarPassword from "./paginas/CambiarPassword";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <Routes>
            <Route path="Date" element={<Date />} />
            <Route path="Avatar" element={<BadgeAvatars />} />

            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path="CrearProyecto" element={<NuevoProyecto />} />
              <Route path="EditarPerfil" element={<Perfil />} />
              <Route path="Cambiar-Password" element={<CambiarPassword />} />
              <Route path=":id" element={<Proyecto />} />
              <Route path="editar/:id" element={<EditarProyecto />} />
            </Route>
          </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
