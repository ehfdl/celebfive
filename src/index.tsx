import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { auth } from "./firebase";
import { GlobalStyle } from "./Global-style";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
