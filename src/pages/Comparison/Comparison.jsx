import React, { Component } from 'react';
import './Comparison.scss';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Steps from '../../components/Steps/Steps.jsx';


export default class Comparsion extends Component {
  getNum(mod){
    var val = mod.charAt(mod.length-1);
    return val;
  }

  onSubmit = (e) => {
    window.history.back();
  }

  render() {
    var modules = this.props.match.params.modules.replace(':', '');
    modules = modules.replace('#', '');
    var n = this.getNum(modules);
    return (
      <div className="Module">
        <div className="Module__pad">
          <Navbar mod={modules.replace(n, '')} />
        </div> 
        <h1 className="Module__title">Racket vs C</h1>
        <Steps module = {modules}></Steps>
        <div className="pad">
          <button className="_button" onClick = {this.onSubmit}>
            Regresar
          </button>
        </div>
      </div>
    );
  }
}
