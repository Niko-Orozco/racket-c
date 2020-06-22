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
        width="450"
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
        width="450"
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

function Compare(props){
  return (
    <div className="Text-area__texts outline">
      <MonacoEditor
        width="295px"
        height="300px"
        language="java"
        value={props.code}
        options={{
          selectOnLineNumbers: false,
          lineNumbers: 'off',
          dragAndDrop: false,
          readOnly: true,
          minimap: {enabled: false},
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

  getData(num){
    var {module} = this.props;
    var n = this.getExercice(module);
    module = module.replace(n, '');
    var datas = (num == 1)? data[0][module][n]['1'] : (num == 2)? data[0][module][n]['2'] : data[0][module][n]['3'];
    return datas;
  }

  render() {
    const mod1 = new exp();
    const mod2 = new exp2();
    var {module} = this.props;
    var n = this.getExercice(module);
    module = module.replace(n, '');
    var d1 = this.getData(1);
    var d2 = this.getData(2);
    var d3 = this.getData(3);
    return (
      <div className="Steps_flex">
        <div className="Compare">
          <div className="Compare__spacing">
            <div className="Compare__between">
              <Racket code={mod1.ejemplos(parseInt(n), module)}></Racket>
            </div>
            <div className="Compare__between">
              <C code={mod2.ejemplos(parseInt(n), module)}></C>
            </div> 
          </div>
        </div>
        <div className="Text-area">
          <Compare code={d1}/>
          <div >
            <textarea id="exp1" className="Text-area__texts2 Text-area__texts2__font1" disabled >{d2}</textarea>
            <textarea id="exp2" className="Text-area__texts2 Text-area__texts2__font2" disabled >{d3}</textarea>
          </div>
        </div>
      </div>
    );
  }
}
