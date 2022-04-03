import React, { useState } from "react";
import { DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";
import PersonIcon from '@mui/icons-material/Person';

const Proyectos = () => {
 
  return (
    <>
      <h1 className="text-4xl text-center md:text-6xl mb-8">TUS PROYECTOS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5">
        <div className="border-r- border-b-3 border-l-3 border-slate-400 border-opacity-30 mt-3 md:mt-6 shadow-lg mb-8">
          <h2 className="text-2xl px-3 md:text-4xl inline">Proyecto</h2>
          <div className="grid justify-items-end">
            <div className="d-inline">
              <PersonIcon></PersonIcon>
            </div>
          </div>
          <p className="py-3 px-2 text-xl md:text-2xl">Veniam magna cillum aliquip exercitation aute velit sint cupidatat consequat ea. Anim velit occaecat amet sit eu.</p>
          <hr className="border-slate-900 border-opacity-20 mt-4 mb-2 col-span-2"></hr>
          <div className="grid grid-cols-2 gap-2">
            <div className="px-1 text-sm md:text-lg">
              Fecha inicio
            </div>
            <div className="px-1 text-sm md:text-lg text-red-600">
              Fecha entrega
            </div>
            <div className="px-1 text-xl md:text-2xl mb-2">
              3/5/2022
            </div>
            <div className="px-1 text-xl md:text-2xl text-red-600 mb-2">
              4/5/2022
            </div>
          </div>
        </div>
        <div className="border-r- border-b-3 border-l-3 border-slate-400 border-opacity-30 mt-3 md:mt-6 shadow-lg mb-8">
          <h2 className="text-2xl px-3 md:text-4xl inline">Proyecto</h2>
          <div className="grid justify-items-end">
            <div className="d-inline">
              <PersonIcon></PersonIcon>
              <PersonIcon></PersonIcon>
            </div>
          </div>
          <p className="py-3 px-2 text-xl md:text-2xl">Veniam magna cillum aliquip exercitation aute velit sint cupidatat consequat ea. Anim velit occaecat amet sit eu.</p>
          <hr className="border-slate-900 border-opacity-20 mt-4 mb-2 col-span-2"></hr>
          <div className="grid grid-cols-2 gap-2">
            <div className="px-1 text-sm md:text-lg">
              Fecha inicio
            </div>
            <div className="px-1 text-sm md:text-lg text-lime-500">
              Fecha entrega
            </div>
            <div className="px-1 text-xl md:text-2xl mb-2">
              3/5/2022
            </div>
            <div className="px-1 text-xl md:text-2xl text-lime-500 mb-2">
              4/5/2022
            </div>
          </div>
        </div>
        <div className="border-r- border-b-3 border-l-3 border-slate-400 border-opacity-30 mt-3 md:mt-6 shadow-lg mb-8">
          <h2 className="text-2xl px-3 md:text-4xl inline">Proyecto</h2>
          <div className="grid justify-items-end">
            <div className="d-inline">
              <PersonIcon></PersonIcon>
              <PersonIcon></PersonIcon>
              <PersonIcon></PersonIcon>
              <PersonIcon></PersonIcon>
            </div>
          </div>
          <p className="py-3 px-2 text-xl md:text-2xl">Veniam magna cillum aliquip exercitation aute velit sint cupidatat consequat ea. Anim velit occaecat amet sit eu.</p>
          <hr className="border-slate-900 border-opacity-20 mt-4 mb-2 col-span-2"></hr>
          <div className="grid grid-cols-2 gap-2">
            <div className="px-1 text-sm md:text-lg">
              Fecha inicio
            </div>
            <div className="px-1 text-sm md:text-lg text-lime-500">
              Fecha entrega
            </div>
            <div className="px-1 text-xl md:text-2xl mb-2">
              3/5/2022
            </div>
            <div className="px-1 text-xl md:text-2xl text-lime-500 mb-2">
              4/5/2022
            </div>
          </div>
        </div>
      </div>        
    </>
  );
};

export default Proyectos;