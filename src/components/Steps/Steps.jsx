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

  getData = (e) => {
    var {module} = this.props;
    document.getElementById('steps').value = data[0][module]['1']['1'];
    document.getElementById('exp1').value = data[0][module]['1']['2'];
    document.getElementById('exp2').value = data[0][module]['1']['3'];
  }

  render() {
    const mod1 = new exp();
    const mod2 = new exp2();
    var {module} = this.props;
    return (
      <div className="Compare">
        <Racket code={mod1.ejemplos(1, module)}></Racket>
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
        <C code={mod2.ejemplos(1, module)}></C>
      </div>
    );
  }
}
