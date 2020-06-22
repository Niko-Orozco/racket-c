import React, { Component, useState } from 'react';
import './Practice.scss';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Tabs from '../../components/Tabs/Tabs.jsx';
import exercises from '../../assets/data/practicas.json';
import Editor2 from '../../components/EditorPractice/C'
import Editor1 from '../../components/EditorPractice/Racket'

function ejercicios(ejemplo, module) {
  var ejer;
  switch (ejemplo) {
    case 1:
      ejer = exercises[0][module]['1'];
      break;
    case 2:
      ejer = exercises[0][module]['2'];
      break;
    case 3:
      ejer = exercises[0][module]['3'];
      break;
  }
  return ejer;
}

function Edit(props){
  const { editors, urls } = props;
  if("/modpractice1/:modules" == editors){
    var dir = urls.replace('1', '2');
    return(
      <Editor2 url = {dir}></Editor2>
    );
  }else{
    var dir = urls.replace('2', '1');
    return(
      <Editor1 url = {dir}></Editor1>
    );
  }
}


function Practices(props) {
  //Declaración de la variable de estado active
  const { dat, editor, url } = props;
  const [active, setActive] = useState(0);
  const [currentActive, setCurrentActive] = useState(1);
  var name = dat.replace(':', '');
  const modul = name;
  return (
    <div className="Container">
      <Navbar mod={modul} />
      <div className="Practice">
        <h1 className="Practice__title">Herramienta de práctica</h1>
        <h5>
          En esta sección puedes desarrollar ejercicios prácticos para
          mejorar la comprensión del modulo estudiado.
        </h5>
        <br></br>
        <Tabs
          setCurrentActive={setCurrentActive}
          currentActive={currentActive}
          direction="row"
          index={3}
          type="Ejercicio"
        />
        <div className="Practice__content">
          {/* Cambio en las tabs */}
          <div className="Practice__text">
            {ejercicios(currentActive, modul)}
          </div>
          <div className="Practice__editor">
            <Edit editors={editor} urls={url}></Edit>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class Practice extends Component {
  render(){
    console.log()
    return (
      <div>
        <Practices dat={this.props.match.params.modules} editor={this.props.match.path} url={this.props.match.url}/>
      </div>
    );
  }
}
