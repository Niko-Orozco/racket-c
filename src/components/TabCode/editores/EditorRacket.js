import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import './editor-style.scss';
import data from '../../../assets/code/codigos.json';
import Ciclos from '../../../LogicModel/ciclos';
import Condi from '../../../LogicModel/condicionales';
import Vect from '../../../LogicModel/vectores';
import Expresiones from '../../../LogicModel/expresiones';
import Secu from '../../../LogicModel/secuencia';
import Cads from '../../../LogicModel/Cadenas';
import { render } from 'react-dom';
const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.one = 0
    this.two = 0
    this.thrid = 0
    this.four = 0
    this.five = 0
    this.i = 0
  }

  ejemplos(ejemplo, module) {
    var code;
    switch (ejemplo) {
      case 1:
        code = data[0][module]['1']['codigo'];
        break;
      case 2:
        code = data[0][module]['2']['codigo'];
        break;
      case 3:
        code = data[0][module]['3']['codigo'];
        break;
      case 4:
        code = data[0][module]['4']['codigo'];
        break;
      case 5:
        code = data[0][module]['5']['codigo'];
        break;
      case 6:
        code = data[0][module]['6']['codigo'];
        break;
    }
    return code;
  }

  handleEditorDidMount = (editor) => { };

  handleChange = (ev, value) => {
    //if you want to get de text of efitor
  };

  onSubmit = (e) => {
    var modul;

    switch (this.props.module) {
      case 'expresiones':
        modul = new Expresiones();
        break;
      case 'secuencia':
        modul = new Secu();
        break;
      case 'condicionales':
        modul = new Condi();
        break;
      case 'ciclos':
        modul = new Ciclos();
        break;
      case 'cadenas':
        modul = new Cadenas();
        break;
      case 'vectores':
        modul = new Vect();
        break;
      case 'matrices':
        modul = new Matrices();
        break;
      case 'estructuras':
        modul = new Estructuras();
        break;
      case 'funciones':
        modul = new Funciones();
        break;
      case 'composicion':
        modul = new Composicion();
        break;
      case 'procedimientos':
        modul = new Procedimientos();
        break;
      case 'Modo gráfico':
        modul = new Vect();
        break;
      default: modul = new Empty();
    }

    switch (this.props.ejemplo) {
      case 1:
        document.getElementById('output').value = modul.uno(this.one, this.two, this.thrid, this.four, this.five);
        break;
      case 2:
        document.getElementById('output').value = modul.dos(this.one, this.two, this.thrid, this.four, this.five);
        break;
      case 3:
        document.getElementById('output').value = modul.tres(this.one, this.two, this.thrid, this.four, this.five);
        break;
      case 4:
        document.getElementById('output').value = modul.cuatro(this.one, this.two, this.thrid, this.four, this.five);
        break;
      case 5:
        document.getElementById('output').value = modul.cinco(this.one, this.two, this.thrid, this.four, this.five);
        break;
      case 6:
        document.getElementById('output').value = modul.seis(this.one, this.two, this.thrid, this.four, this.five);
        break;
    }
  };

  onKeyDownHandler() {
    var input = 0;
    var capture = window.event.keyCode;
    if (capture == 13) {
      input = document.getElementById('in1').value
      document.getElementById('in1').value = ""
      var numero = parseInt(input)

      this.i++

      switch (this.props.module) {
        case 'expresiones':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
              }
              break;
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
              }
              break;
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
              }
              break;
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
              }
              break;
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
              }
              break;
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
              }
              break;
            ///poner un default
          }
          break;
        case 'secuencia':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }
          break;
        case 'condicionales':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }
          break;
        case 'ciclos':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }
          break;
        case 'cadenas':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }

          break;
        case 'vectores':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }

          break;
        case 'matrices':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }

          break;
        case 'estructuras':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }

          break;
        case 'funciones':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }

          break;
        case 'composicion':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }

          break;
        case 'procedimientos':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }

          break;
        case 'Modo gráfico':
          switch (this.props.ejemplo) {
            case 1:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 2:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 3:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 4:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 5:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
            case 6:
              switch (this.i) {
                case 1:
                  this.one = numero
                  break
                case 2:
                  this.two = numero
                  break
                case 3:
                  this.thrid = numero
                  break
                case 4:
                  this.four = numero
                  break
                case 5:
                  this.five = numero
                  break
              }
              break
          }

          break;
      }
    }
  }

  render() {
    this.i = this.props.cero;
    const code = this.ejemplos(this.props.ejemplo, this.props.module);
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
        <input className="compiler__input" type="text" id="in1" onKeyDown={() => this.onKeyDownHandler()}></input>
        <button className="compiler__button" onClick={this.onSubmit}>
          Ejecutar
        </button>
      </div>
    );
  }
}
