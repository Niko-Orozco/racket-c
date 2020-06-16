import React, { Component } from 'react';
import data from '../../assets/data/practicas.json';


export default class tabpane extends Component {

  ejercicios(ejemplo, module){
    var ejer;
    switch (ejemplo) {
      case 1:
        ejer = data[0][module]['1'];
        break;
      case 2:
        ejer = data[0][module]['2'];
        break;
      case 3:
        ejer = data[0][module]['3'];
        break;
    }
    return ejer;
  }

  render() {
    const { num, dat } = this.props;
    return (
      <div>
        <h1> { this.ejercicios(num, dat) } </h1>
      </div>
    )
  }
}
