import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Ejemplos from '../../components/TabCode/tabcodeexample';
import './Compiler.scss';

export default class Compiler extends Component {
  render() {
    return (
      <div className="Container">
        <Navbar></Navbar>
        <div className="Compiler">
          <div>
            <h2 className="Compiler__title">Condicionales</h2>
          </div>
          <div className="Compiler__body">
            <Ejemplos />
          </div>
        </div>
      </div>
    );
  }
}
