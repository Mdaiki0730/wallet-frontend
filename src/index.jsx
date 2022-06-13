import React from "react";
import ReactDOM from "react-dom";

import AppProvider from "./Provider";
import Router from "Router"

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
