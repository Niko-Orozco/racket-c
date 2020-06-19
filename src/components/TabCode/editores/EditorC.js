import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import './editor-style.scss';
import data from '../../../assets/code/codigos.json';
import Ciclos from '../../../LogicModel/ciclos';
import Condi from '../../../LogicModel/condicionales';
import Vect from '../../../LogicModel/vectores';
import Matrices from '../../../LogicModel/Matrices';
import Cadenas from '../../../LogicModel/Cadenas';
import Estructuras from '../../../LogicModel/Struct';
import Funciones from '../../../LogicModel/Funciones';
import Composicion from '../../../LogicModel/ComposicionFunciones';
import Procedimientos from '../../../LogicModel/Procedimientos';
import Expresiones from '../../../LogicModel/expresiones';
import Secu from '../../../LogicModel/secuencia';
import Empty from '../../../LogicModel/Empty';
import MonacoEditorsd from "@etclabscore/react-monaco-editor";

const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false });

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.one = 0
    this.two = 0
    this.i = 0
  }

  ejemplos(ejemplo, module) {
    var code;
    switch (ejemplo) {
      case 1:
        code = data[0][module]['1b']['codigo'];
        break;
      case 2:
        code = data[0][module]['2b']['codigo'];
        break;
      case 3:
        code = data[0][module]['3b']['codigo'];
        break;
      case 4:
        code = data[0][module]['4b']['codigo'];
        break;
      case 5:
        code = data[0][module]['5b']['codigo'];
        break;
      case 6:
        code = data[0][module]['6b']['codigo'];
        break;
      default: code = "";
    }
    return code;
  }

  handleEditorDidMount = (editor) => { };

  handleChange = (ev, value) => {
    //if you want to get de text of efitor
  };

  onSubmit = (e) => {
    var moduls;



    switch (this.props.module) {
      case 'expresiones':
        moduls = new Expresiones();
        break;
      case 'secuencia':
        moduls = new Secu();
        break;
      case 'condicionales':
        moduls = new Condi();
        break;
      case 'ciclos':
        moduls = new Ciclos();
        break;
      case 'cadenas':
        moduls = new Cadenas();
        break;
      case 'vectores':
        moduls = new Vect();
        break;
      case 'matrices':
        moduls = new Matrices();
        break;
      case 'estructuras':
        moduls = new Estructuras();
        break;
      case 'funciones':
        moduls = new Funciones();
        break;
      case 'composicion':
        moduls = new Composicion();
        break;
      case 'procedimientos':
        moduls = new Procedimientos();
        break;
      case 'Modo gráfico':
        moduls = new Vect();
        break;
      default: moduls = new Empty();
    }

    switch (this.props.ejemplo) {
      case 1:
        document.getElementById('output2').value = moduls.uno(this.one, this.two, this.thrid, this.four, this.five);
        break;
      case 2:
        document.getElementById('output2').value = moduls.dos(this.one, this.two, this.thrid, this.four, this.five);
        break;
      case 3:
        document.getElementById('output2').value = moduls.tres(this.one, this.two, this.thrid, this.four, this.five);
        break;
      case 4:
        document.getElementById('output2').value = moduls.cuatro(this.one, this.two, this.thrid, this.four, this.five);
        break;
      case 5:
        document.getElementById('output2').value = moduls.cinco(this.one, this.two, this.thrid, this.four, this.five);
        break;
      case 6:
        document.getElementById('output2').value = moduls.seis(this.one, this.two, this.thrid, this.four, this.five);
        break;
    }
  };

  onKeyDownHandler() {
    var input;
    var capture = window.event.keyCode;
    if (capture == 13) {

      input = document.getElementById('in2').value
      document.getElementById('in2').value = ""
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
      <div className="compiler compiler--left">
        <div className="compiler__editor monaco-theme">
          <MonacoEditor
            height="400px"
            language="c"
            value={code}
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
        <input className="compiler__input" type="text" id="in2" onKeyDown={() => this.onKeyDownHandler()}></input>
        <button className="compiler__button" onClick={this.onSubmit}>
          Ejecutar
        </button>
      </div>
    );
  }
}
