import React, { Component } from 'react';
import './Navbar.scss';
import logo from '../../assets/img/logo.png';
import pdf from '../../assets/data/manual.pdf';

class Navbar extends Component {
  
  module(){
    const mod = this.props.mod;
    return mod;
  }

  render() {
    return (
      <header className="Navbar">
        <div className="Navbar__logo">
          <img src={logo} width="30" alt="logo"></img>
          <a className="Navbar__link" href="/">
            Racket y C
          </a>
        </div>
        <nav className="Navbar__nav">
          <a className="Navbar__link Navbar__link--element" href="/menu">
            Módulos
          </a>
          <a className="Navbar__link Navbar__link--element" href={"/modpractice1/:"+this.module()}>
            Práctica
          </a>
          <a className="Navbar__link Navbar__link--element" href="/">
            Inicio
          </a>
          <a className="Navbar__link Navbar__link--element" href = {pdf} target = "_blank">
            Manual
          </a>
        </nav>
      </header>
    );
  }
}
export default Navbar;
