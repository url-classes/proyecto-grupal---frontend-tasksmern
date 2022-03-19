import React, { useState } from "react";
import { DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";
import useProyectos from "../hooks/useProyectos";


const Proyectos = () => {

  const { proyectos } = useProyectos();
 
  return (
    <>
      <h1 className="text-4xl text-center md:text-6xl mb-8">TUS PROYECTOS</h1>
      <div className="md:flex md:justify-start md:flex-wrap md:ml-16">
        <div className="border-r- border-b-3 border-l-3 border-slate-400 border-opacity-30 w-full mt-3 md:w-2/5 md:mt-6 shadow-lg md:mr-20 mb-8">
          <h2 className="text-2xl px-3 md:text-4xl inline mr-36 md:mr-72">Proyecto</h2>
          <hr className="border-slate-900 border-opacity-20 mt-4 mb-2"></hr>
          <p className="text-right pr-2"><i>Creador</i></p>
          <p className="py-3 px-2 text-xl md:text-2xl">Veniam magna cillum aliquip exercitation aute velit sint cupidatat consequat ea. Anim velit occaecat amet sit eu.</p>
          <p className="px-2 py-4 text-xl md:text-2xl">3/5/2022</p>
        </div>
        <div className="border-r- border-b-3 border-l-3 border-slate-400 border-opacity-30 w-full mt-3 md:w-2/5 md:mt-6 shadow-lg md:mr-20 mb-8">
          <h2 className="text-2xl px-3 md:text-4xl inline mr-36 md:mr-72">Proyecto</h2>
          <hr className="border-slate-900 border-opacity-20 mt-4 mb-2"></hr>
          <p className="text-right pr-2"><i>Creador</i></p>
          <p className="py-3 px-2 text-xl md:text-2xl">Veniam magna cillum aliquip exercitation aute velit sint cupidatat consequat ea. Anim velit occaecat amet sit eu.</p>
          <p className="px-2 py-4 text-xl md:text-2xl">3/5/2022</p>
        </div>
        <div className="border-r- border-b-3 border-l-3 border-slate-400 border-opacity-30 w-full mt-3 md:w-2/5 md:mt-6 shadow-lg md:mr-20 mb-8">
          <h2 className="text-2xl px-3 md:text-4xl inline mr-36 md:mr-72">Proyecto</h2>
          <hr className="border-slate-900 border-opacity-20 mt-4 mb-2"></hr>
          <p className="text-right pr-2"><i>Creador</i></p>
          <p className="py-3 px-2 text-xl md:text-2xl">Veniam magna cillum aliquip exercitation aute velit sint cupidatat consequat ea. Anim velit occaecat amet sit eu.</p>
          <p className="px-2 py-4 text-xl md:text-2xl">3/5/2022</p>
        </div>
      </div>    
    </>
  );
};

export default Proyectos;