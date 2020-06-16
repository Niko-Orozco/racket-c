import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@material-ui/core';
import './editor-stryle.scss';

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

function Compilador(codes) {
  var request = require('request');
  var code = '(define (as) (display "Hola mundo" ))(as)';

  var program = {
    script: code,
    language: 'c',
    versionIndex: '0',
    clientId: '8f9c26a7f056ded89e3f109ae74f1b0b',
    clientSecret:
      'ae66fd112bd964eb20ce28b8e41df99885b774cc78f3fa4627d3fe547ff177ac',
  };
  request(
    {
      url: 'https://api.jdoodle.com/v1/execute',
      method: 'POST',
      json: program,
    },
    function (error, response, body) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log(code);
      //document.getElementById("output").value = body['output'];
      console.log('Salida: ', body);
    }
  );
}

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '//type your code ..',
    };
  }

  handleEditorDidMount = (editor) => {};

  handleChange = (ev, value) => {
    this.state.code = value;
  };

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      minimap: {
        enabled: false,
      },
    };
    return (
      <div>
        <div className="monaco-theme">
          <MonacoEditor
            width="600px"
            height="400px"
            language="c"
            value={code}
            options={options}
            onChange={this.handleChange}
            editorDidMount={this.handleEditorDidMount}
          />
        </div>
        <div>
          <textarea
            id="output"
            className="text-area"
            placeholder="output"
            disabled
          />
        </div>
        <Button
          variant="outlined"
          color="primary"
          onClick={Compilador(this.state.code)}
        >
          Run
        </Button>
      </div>
    );
  }
}
