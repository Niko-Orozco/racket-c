import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import './editor-style.scss';


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
    
  };

  

  render() {
    const code = ';type code here';
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
            language="scheme"
            value={code}
            theme = "twilight"
            options={options}
            onChange={this.handleChange}
            editorDidMount={this.handleEditorDidMount}
          />
        </div>
        <textarea
          id="output2"
          className="compiler__output"
          placeholder="output"
          disabled
        />
        <div >
          <a className="compiler__button" href={this.props.url}>
            Ir a C
          </a>
          <button className="compiler__button" onClick={this.onSubmit}>
            Ejecutar
          </button>
        </div>
      </div>
    );
  }
}
