import React from "react";
import Imagen1 from '../../assets/img/logo.png'
export const FooterApp = () => {
    return (
      <div className="footer mt-4">
      <div className="row d-flex align-items-center m-0 bg-light text-dark p-2 row-cols-md-3 row-cols-sm-1 justify-content-between">
      <div className="footer-izquierda d-flex justify-content-center align-items-center p-2">
          <a><img src={Imagen1} className="logo"></img></a>
        </div>
        <div className="footer-centro text-center p-2">
          <p>Jhon Sebastian Navas Chafuelan</p>
          <p><strong>Dirigido a:</strong> Alejandro Guespud</p>
          <p>CBI Palmira</p>
          <p>ADSI 2341224</p>
        </div>
        <div className="footer-derecha">
          <div className="datos_sena d-flex justify-content-center align-items-center p-2">
          <a><img src={Imagen1} className="logo"></img></a>
          </div> 
        </div>
      </div>
        <div className="row m-0 p-3 footer-abajo text-center text-dark text-wrap">
          <small> ©2022 <strong>Sebastian Navas</strong> - Todos los derechos reservados</small>
        </div>
      </div>
    );
  };