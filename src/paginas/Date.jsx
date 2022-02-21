import React, { useState } from "react";
import {DatePicker, TimePicker, DateTimePicker} from '@material-ui/pickers';

const Date = () => {
  //var today = new Date();
  //const date1 = new Date('December 17, 1995 03:24:00');
  const [fechaSeleccionada, cambiarFechaSelecionada] = useState(null);

  
   console.log(fechaSeleccionada)
   console.log(cambiarFechaSelecionada)

  return (
    <>
      <div className="contenedor">
        <div className="grupo">
          <label>Fecha</label>
          <DatePicker
            value={fechaSeleccionada}
            onChange={cambiarFechaSelecionada}
          />
        </div>

        <div className="grupo">
          <label>Hora</label>
          <TimePicker
            value={fechaSeleccionada}
            onChange={cambiarFechaSelecionada}
          />
        </div>

        <div className="grupo">
          <label>Fecha y Hora</label>
          <DateTimePicker
            value={fechaSeleccionada}
            onChange={cambiarFechaSelecionada}
          />
        </div>
      </div>
    </>
  );
};

export default Date;
