import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import './editor-stryle.scss';
const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
        code: ';type your code ..'
    };
  }

  handleEditorDidMount = (editor) => {};

  handleChange = (ev, value) => {
    //if you want to get de text of efitor
  };

  onSubmit = (e) => {
    
  };

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      readOnly: true,
      minimap: {
        enabled: false,
      },
    };
    return (
      <div className="compiler">
        <div className="compiler__editor monaco-theme">
          <MonacoEditor
            height="400px"
            language="scheme"
            value={code}
            options={options}
            onChange={this.handleChange}
            editorDidMount={this.handleEditorDidMount}
          />
        </div>
        <textarea
          id="output"
          className="compiler__output"
          placeholder="output"
          disabled
        />
        <button className="compiler__button" onClick={this.onSubmit}>
          Ejecutar
        </button>
      </div>
    );
  }
}
