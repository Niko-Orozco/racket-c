import React, { Component } from 'react'
import MonacoEditor from "@etclabscore/react-monaco-editor";
import { Button } from '@material-ui/core';
import './editor-stryle.scss';
var request = require('request');

  
export default class Editor extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          code: ';type your code ..'
        };
    }

    handleEditorDidMount = (editor) => {
 
    }

    handleChange = (ev, value) => {
        this.state.code = value;
    }

    onSubmit = e => {
        var code = "(define (as) (display \"Hola mundo\" ))(as)"

        var program = {
            script :  code ,
            language: "racket",
            versionIndex: "0",
            clientId: "237cd0dc0f02b9a668c4000460721b20",
            clientSecret:"76777aa762c873f7ae610049fc069bf1f2c1989def4954f4cb5151139587775f"
        };
        request({
            url: 'https://api.jdoodle.com/v1/execute',
            method: "POST",
            json: program
        },
        function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('Salida: ', body);
        });
    }

    render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true,
        };
        return (
            <div>
                <div className="monaco-theme">
                    <MonacoEditor 
                            
                            width="600px" 
                            height="400px" 
                            language="scheme"
                            value={code} 
                            options={options}
                            onChange={this.handleChange}
                            editorDidMount={this.handleEditorDidMount}
                    />
                </div>
                <div>
                    <textarea id = "output" className = "text-area" placeholder="output" disabled/>
                </div>
                <Button variant="outlined" color="primary" onClick ={this.onSubmit} >
                    Run
                </Button>
            </div>
        )
    }
}
