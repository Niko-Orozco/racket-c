import React, { Component } from 'react';
import './Comparison.scss';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Steps from '../../components/Steps/Steps.jsx';


export default class Comparsion extends Component {
  render() {
    var modules = this.props.match.params.modules.replace(':', '');
    modules = modules.replace('#', '');
    return (
      <div className="Container">
        <Navbar mod={modules} />
        <h1 className="Module__title">Racket vs C</h1>
        <Steps module = {modules}></Steps>
      </div>
    );
  }
}
