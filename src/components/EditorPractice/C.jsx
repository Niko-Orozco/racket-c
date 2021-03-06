import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import './editor-style.scss';
import MonacoEditors from "@etclabscore/react-monaco-editor";

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export default class Editor extends Component {
  constructor(props) {
    super(props);
  }

  handleEditorDidMount = (editor) => {};

  handleChange = (ev, value) => {
    //if you want to get de text of efitor
  };

  onSubmit = (e) => {
    document.getElementById('output1').value = "Compilador en mantenimiento";
  };

  

  render() {
    const code = '//type code here';
    const options = {
      selectOnLineNumbers: true,
      readOnly: false,
      minimap: {
        enabled: false,
      },
    };
    return (
      <div className="compiler compiler--left">
        <div className="compiler__editor monaco-theme">
          <MonacoEditor
            height="400px"
            language="c"
            value={code}
            theme = "twilight"
            options={options}
            onChange={this.handleChange}
            editorDidMount={this.handleEditorDidMount}
          />
        </div>
        <textarea
          id="output1"
          className="compiler__output"
          placeholder="output"
          disabled
        />
        <div className="rows">
          <button className="compiler__button" onClick={this.onSubmit}>
            Ejecutar
          </button>
        </div>
      </div>
    );
  }
}
