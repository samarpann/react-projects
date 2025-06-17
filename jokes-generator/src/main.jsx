import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import { AuthProvider } from "./context/AuthContext";
import { JokeProvider } from "./context/JokeContext";
import "./index.css";
import App from "../../Tailwind/src/App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
);
