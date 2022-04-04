import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import useProyectos from "../hooks/useProyectos";
import Alerta from "./Alerta";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const CrearProyecto = () => {
  const [nombre, setNombre] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [cliente, setCliente] = React.useState("");

  const [fechaEntrega, setFechaEntrega] = React.useState(new Date());

  const [fechaInicio, setFechaInicio] = React.useState(new Date());

  const handleChange = (newValue) => {
    setFechaInicio(newValue);
  };

  const handleChange2 = (newValue) => {
    setFechaEntrega(newValue);
  };

  const { mostrarAlerta, alerta, submitProyecto, proyecto} = useProyectos();


  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setNombre(proyecto.nombre)
      setDescripcion(proyecto.descripcion)
      setCliente(proyecto.cliente)
      setFechaEntrega(proyecto.fechaEntrega)
      setFechaInicio(proyecto.fechaInicio)
    } 
  }, [params])

  const handleSubmit = async e => {
    e.preventDefault();

    if ([nombre, descripcion, fechaEntrega, cliente].includes('')){ 
      mostrarAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })

      return
    }

    // pasar los datos hacia el provaider
    await submitProyecto({nombre, descripcion, fechaEntrega, fechaInicio, cliente})

    setNombre('')
    setDescripcion('')
    setFechaEntrega('')
    setCliente('')
    setFechaEntrega(new Date())
    setFechaInicio(new Date())
  }

  const { msg } = alerta
  return (
    <>
      
      <form className="bg-white border-4 border-opacity-30 px-3 py-5 md:border-4 border-slate-400 md:px-16 md:py-14 md:mx-28"
        onSubmit={handleSubmit}
      >
        {msg && <Alerta alerta={alerta} />}
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="nombre"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            //required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <label
            htmlFor="nombre"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre del Proyecto
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="descripcion"
            id="descripcion"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            //required
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <label
            htmlFor="descripcion"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Descripción
          </label>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            //required
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
          <label
            htmlFor="floating_repeat_password"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nombre Cliente
          </label>
        </div>

        <div className="grid xl:grid-cols-2 xl:gap-6 mt-9">
          <div className="relative z-0 mb-6 w-full group">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateTimePicker
                  label="Fecha de Inicio"
                  value={fechaInicio}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateTimePicker
                  label="Fecha de Entrega"
                  value={fechaEntrega}
                  onChange={handleChange2}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-14 py-2.5 text-center"
        >
          Crear Proyecto
        </button>
      </form>
    </>
  );
};

export default CrearProyecto;
