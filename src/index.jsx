import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import imageData from "./components/data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={imageData} />
  </React.StrictMode>
);
