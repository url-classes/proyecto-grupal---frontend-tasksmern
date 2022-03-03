import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="md:w-80 lg:w-56 px-5 py-10 bg-slate-500 text-white">
        <p className="text-xl font-bold">Hola: Taskmern</p>

        <Link
            to="crear-proyecto"
            className="bg-indigo-600 w-full p-3 text-white uppercase
            font-bold block mt-5 text-center rounded-lg
            "
        > Nuevo Proyecto
        </Link>

    </aside>
  )
}

export default Sidebar