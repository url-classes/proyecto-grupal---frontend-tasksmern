import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/index.css";
import App from "./App";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from 'date-fns/locale/es';

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <App />
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
