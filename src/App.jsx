import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PanelTotal from "./PanelTotal";
import UltimoDetalle from "./UltimoDetalle";
import PanelCategorias from "./PanelCategorias";
import ListadoProductos from "./ListadoProductos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <PanelTotal />
        <UltimoDetalle />
        <PanelCategorias />
        <ListadoProductos />
      </div>
    </>
  );
}

export default App;
