import React, { useState } from "react";
import { DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";
import useProyectos from "../hooks/useProyectos";
import PreviewProyecto from "../components/PreviewProyecto";


const Proyectos = () => {

  const { proyectos } = useProyectos({});
  console.log(proyectos)
 
  return (
    <>
      <h1 className="text-4xl text-center font-black mb-4">TUS PROYECTOS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5">
        {proyectos.length ? 
        proyectos.map(proyecto => (
           <PreviewProyecto
            key={proyecto._id}
            proyecto={proyecto}
           />
        ))
        : <p
         className="text-center text-gray-700 uppercase p-5">No hay proyectos</p> }
      </div>
      
    </>
  );
};

export default Proyectos;