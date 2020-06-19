import React, { Component } from 'react';
import './Navbar.scss';
import logo from '../../assets/img/logo.png';
import pdf from '../../assets/data/manual.pdf';
import { useHistory } from 'react-router-dom';

function Nav(props){
  const history = useHistory();
    return (
      <header className="Navbar">
        <div className="Navbar__logo">
          <img src={logo} width="30" alt="logo"></img>
          <a className="Navbar__link" onClick = {()=> history.push('/')}>
            Racket y C
          </a>
        </div>
        <nav className="Navbar__nav">
          <a className="Navbar__link Navbar__link--element" onClick = {()=> history.push('/menu')}>
            Módulos
          </a>
          <a className="Navbar__link Navbar__link--element" onClick={()=> history.push(`/modpractice1/:${props.mod}`)} >
            Práctica
          </a>
          <a className="Navbar__link Navbar__link--element" onClick = {()=> history.push('/')}>
            Inicio
          </a>
          <a className="Navbar__link Navbar__link--element" href = {pdf} target = "_blank">
            Manual
          </a>
        </nav>
      </header>
    );
}

class Navbar extends Component {
  render() {
    return(
          <Nav mod={this.props.mod} />
    );
    
  }
}
export default Navbar;
