import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from '@material-ui/core/CssBaseline';
import MyCssBaseline from './MyCssBaseline'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <MyCssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
