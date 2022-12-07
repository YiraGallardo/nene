import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [elMenuEstaActivo, ponerElMenuEstaActivo] = useState(false);
  const menuClic = () => {
    ponerElMenuEstaActivo(!elMenuEstaActivo);
  };
  return (
    <div>
      <div className="seccion-1">
        <div className="header-content">
          {!elMenuEstaActivo && (
            <div className="hamburguesa" onClick={menuClic}>
              <div className="linea"></div>
              <div className="linea"></div>
              <div className="linea"></div>
            </div>
          )}

          {elMenuEstaActivo && (
            <div className="menu">
              <a href="/">CONTACTO</a>
              <a href="/">DIRECCIÓN</a>
              <a href="/">MENU</a>
            </div>
          )}

          <div className="logo-img">
            <img src="img/logo.png" alt="Logo NENE" />
            <div className="slogan">
              <h1>ANTOJITOS NACIONALES</h1>
            </div>
          </div>
        </div>
        <div className="box-scroll">
          SCROLL
          <div className="flecha-img">
            <img src="img/flecha.png" alt="scroll"></img>
          </div>
        </div>
      </div>
      <div className="seccion-2">
        <div className="texto">
          SOMOS<br></br>UNA<br></br>LONCHERIA<br></br>PAL<br></br>DIARIO.
        </div>
        <div className="adornos-img">
          <img src="img/background-1.jpg" alt="back"></img>
        </div>
      </div>
      <div className="seccion-3">
        <div className="provechito-img">
          <img src="img/provechito.jpg" alt="provechito-imagen"></img>
        </div>
        <div className="pulpo-img">
          <img src="img/pulpo.jpg" alt="pulpo-imagen"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
