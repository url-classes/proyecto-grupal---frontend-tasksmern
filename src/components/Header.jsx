import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between">
            <h2 className="text-4xl text-indigo-600 font-black 
            text-center">
                Tasks
                <span className="text-slate-800">Mern</span>
            </h2>
            <input 
                type="search"
                placeholder="Buscar Proyecto"
                className="rounded-lg lg:w-96 block p-2 border"
            />

            <div className="flex items-center gap-4">

            <Link
                    to="/chat"
                    className="font-bold uppercase"
                >Chat
                </Link>

                <Link
                    to="/proyectos"
                    className="font-bold uppercase"
                >Proyecto
                </Link>

                <Link
                    to="/proyectos"
                    className="font-bold uppercase"
                >Tareas
                </Link>

                <Link
                    to="/proyectos"
                    className="font-bold uppercase"
                >Perfil
                </Link>

                <button 
                    type=""
                    className="text-white text-sm bg-indigo-600 p-3
                    rounded-md uppercase font-bold"
                >
                    Cerrar Sesión
                </button>


            </div>

        </div>

    </header>
  )
}

export default Header