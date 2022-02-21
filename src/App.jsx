import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import  NuevoPassword  from "./paginas/NuevoPassword";
import Date from "./paginas/Date";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="Date" element={<Date/>} />
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>} />
          <Route path="registrar" element={<Registrar/>} />
          <Route path="olvide-password" element={<OlvidePassword/>} />
          <Route path="olvide-password/:token" element={<NuevoPassword/>} />
          <Route path="confirmar/:id" element={<ConfirmarCuenta/>} />
          
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
