import AdminNav from "../components/AdminNav";



const CardAvatar = () => (
  <article className="bg-[#1C1F4A] row-span-2 rounded-lg overflow-hidden text-white">
    <section className="overflow-hidden p-4 bg-[#5847EB] text-white rounded-lg">
      <img
        src="https://png.pngtree.com/png-vector/20190625/ourlarge/pngtree-business-male-user-avatar-vector-png-image_1511454.jpg"
        alt=""
        className="rounded-full border-4 border-gray-400 w-16 mb-7"
      />
      <div className="fonts pb-12">
        <p className="font-thin">Lorem, ipsum dolor.</p>
        <h2 className="text-5xl">Jeremy Robson</h2>
      </div>
    </section>
    <section className="p-4">
      <ul>
        <li>Daily</li>
        <li>Weeken</li>
        <li>Montly</li>
      </ul>
    </section>
  </article>
);

const CardWork = ({ bgColor }) => (
  <article
    className={`grid grid-rows-3 ${
      bgColor || "bg-black"
    } rounded-b-xl rounded-t-lg text-white`}
  >
    <div className="row-span-1 bg-svg" />
    <div className="p-4 bg-[#1C1F4A] row-span-2 rounded-lg hover:cursor-pointer hover:bg-white/30">
      <div className="flex justify-between">
        <h5>Work</h5>
        <p>lorem</p>
      </div>
      <h3 className="text-4xl">32hrs</h3>
      <p>Last work - lorem</p>
    </div>
  </article>
);

const EditarPerfil = () => {
  return (
    <>
      <AdminNav />
      <div className="grid place-content-center mt-10 md:py-0">
        <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 container mx-auto">
          <CardAvatar />
          <CardWork bgColor="bg-gradient-to-r from-orange-400 to-yellow-500" />
          <CardWork bgColor="bg-gradient-to-r from-blue-500 to-cyan-500" />
          <CardWork bgColor="bg-gradient-to-r from-purple-500 to-pink-500" />
          <CardWork bgColor="bg-gradient-to-r from-green-500 to-blue-500" />
          <CardWork bgColor="bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          <CardWork bgColor="bg-gradient-to-r from-orange-400 to-yellow-500" />
        </div>
      </div>
      <form className="bg-white border-4 border-opacity-30 px-3 py-5 md:border-4 border-slate-400 md:px-16 md:py-14 md:mx-28 mt-10">
        <div className="grid xl:grid-cols-2 xl:gap-6 mt-9">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="nombre"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="nombre"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="url"
              name="descripcion"
              id="descripcion"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="descripcion"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Sitio web
            </label>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 xl:gap-6 mt-9">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Telefono
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Correo Electronico
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center"
        >
          Guardar Cambios
        </button>
      </form>
    </>
  );
};

export default EditarPerfil;
