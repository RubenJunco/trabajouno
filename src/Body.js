import React from 'react';
import T1 from './T90.jpg';
import './App.css';

//Aqui esta el resto del cuerpo

// Definir el componente contenedor
class Contenedor extends React.Component {
    render() {
      return (
        <div className="contenedor">
          {/* El contenido del contenedor */}
          {this.props.children}
          <button onClick={this.handleClick} className='botonT1' >Ver Mas</button>
        </div>
      );
    }
  }
  


// Uso del componente contenedor
function App() {
    return (
      <Contenedor>
        <h1>ESPACIO 1</h1>
        <p>BOBOBOBOBOBOBOB</p>
      </Contenedor>,
      <Contenedor>
       <h1>ESPACIO 2</h1>
       <p>BLBLBLBLBLBLB</p>
      </Contenedor>,
      <Contenedor>
       <h1>TANQUE T-90</h1>
       <p>Es un carro de combate ruso de cuarta generación, utilizado principalmente por las Fuerzas Terrestres de Rusia, además de otros países.</p>
       <img src={T1} alt="T1" className="T1" />

      </Contenedor>
    );
  }

  export default App;