import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import data from '../../assets/code/comparaciones.json';
import exp from '../TabCode/editores/EditorRacket';
import exp2 from '../TabCode/editores/EditorC';
import './Steps.scss';
const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });


function Racket(props) {
  return (
    <div className="outline">
      <MonacoEditor
        width="400"
        height="400"
        language="scheme"
        value={props.code}
        options={{
          selectOnLineNumbers: true,
          readOnly: true,
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
}

function C(props) {
  return (
    <div className="outline">
      <MonacoEditor
        width="400"
        height="400"
        language="c"
        value={props.code}
        options={{
          selectOnLineNumbers: true,
          readOnly: true,
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
}

export default class Steps extends Component {

  getExercice(mod){
    var val = mod.charAt(mod.length-1);
    return val;
  }

  getData = (e) => {
    var {module} = this.props;
    var n = this.getExercice(module);
    module = module.replace(n, '');
    document.getElementById('steps').value = data[0][module][n]['1'];
    document.getElementById('exp1').value = data[0][module][n]['2'];
    document.getElementById('exp2').value = data[0][module][n]['3'];
  }

  render() {
    const mod1 = new exp();
    const mod2 = new exp2();
    var {module} = this.props;
    var n = this.getExercice(module);
    module = module.replace(n, '');
    return (
      <div className="Compare">
        <Racket code={mod1.ejemplos(parseInt(n), module)}></Racket>
        <div className="Compare__text-area">
          <textarea id="steps" className="texts" disabled />
          <div>
            <textarea id="exp1" className="texts2" disabled />
            <textarea id="exp2" className="texts2" disabled />
          </div>
          <a href = "#" className="compiler__button" onClick = {this.getData}>
              Comparar
          </a>
        </div>
        <C code={mod2.ejemplos(parseInt(n), module)}></C>
      </div>
    );
  }
}
