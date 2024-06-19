// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftbar/page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <LeftBar />
    <App />
  </React.StrictMode>
);
