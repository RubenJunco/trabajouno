
import './App.css';
import logo from './Logo.png'; // Importa la imagen que quieres usar en la barra superior
import React from 'react';
//Aqui esta la barra superior


class BarraSuperior extends React.Component {
  render() {
    return (
      <div className="barra-superior">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Tank Inc.‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </h1>
        <input type="text" placeholder="Buscar..." />
        {/* Puedes agregar más contenido o componentes aquí, como botones de navegación */}
      </div>
    );
  }
}


export default BarraSuperior;



