import React, { Component, useState } from 'react';
import './Module.scss';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Tabs from '../../components/Tabs/Tabs.jsx';
import Example from '../../components/Content/Example';

function mods(module) {
  var name;
  switch (module) {
    case 'Expresiones':
      name = 'expresiones';
      break;
    case 'Estructuras de Secuencia':
      name = 'secuencia';
      break;
    case 'Estructuras de Selección':
      name = 'condicionales';
      break;
    case 'Estructuras de iteración':
      name = 'ciclos';
      break;
    case 'Cadenas y Caracteres':
      name = 'cadenas';
      break;
    case 'Vectores':
      name = 'vectores';
      break;
    case 'Matrices':
      name = 'matrices';
      break;
    case 'Estructuras de Datos':
      name = 'estructuras';
      break;
    case 'Funciones':
      name = 'funciones';
      break;
    case 'Composición de Funciones':
      name = 'composicion';
      break;
    case 'Procedimientos':
      name = 'procedimientos';
      break;
    case 'Modo gráfico':
      name = 'procedimientos';
      break;
  }
  return name;
}

function Modules(props) {
  //Declaración de la variable de estado active
  const { dat } = props;
  const [active, setActive] = useState(0);
  const [currentActive, setCurrentActive] = useState(1);
  var name = dat.replace(':', '');
  name = name.replace('#', '');
  const modul = mods(name);
  return (
    <div className="Container">
      <Navbar mod={modul} />
      <div className="Module">
        <h1 className="Module__title">{name}</h1>
        <Tabs
          setCurrentActive={setCurrentActive}
          currentActive={currentActive}
          direction="row"
          index={6}
          type="Ejemplo"
        />
        <Example label={currentActive} modules={modul} />
      </div>
    </div>
  );
}

export default class Module extends Component {
  render() {
    return (
      <div>
        <Modules dat={this.props.match.params.modules} />
      </div>
    );
  }
}
