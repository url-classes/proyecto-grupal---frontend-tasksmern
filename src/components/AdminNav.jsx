import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <nav className="flex gap-6">
      <Link to="/admin/EditarPerfil" className="font-bold uppercase text-gray-500">
        Perfil
      </Link>

      <Link
        to="/admin/Cambiar-password"
        className="font-bold uppercase text-gray-500"
      >
        Cambiar Password
      </Link>
    </nav>
  );
};

export default AdminNav;
