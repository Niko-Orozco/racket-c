import React from 'react';
import './Start.scss';
import Navbar from '../../components/Navbar/Navbar.jsx';
import logo from '../../assets/img/logos.png';
import Footer from '../../components/Footer/Footer';
import { useHistory } from 'react-router-dom';

function Start() {
  const history = useHistory();
  return (
    <div>
      <div className="Container">
        <Navbar mod={'expresiones'}></Navbar>
        <div className="info">
          <div className="info__text">
            <h3 className="info__text--title">
              Guía de comparación de lenguaje Racket y C
            </h3>
            <p className="info__text--description">
              Este sitio web tiene como objetivo ser un instrumento que sirva de
              apoyo a los estudiantes de la Universidad Tecnológica de Pereira
              para el aprendizaje del lenguaje de programación C a través de
              conocimientos previos de Scheme, también conocido como Racket. En
              esta herramienta se podrán encontrar variedad de ejemplos con los
              que el estudiante podrá mejorar su nivel de abstracción y obtener
              el conocimiento de una manera práctica.
            </p>
            <h3 className="info__text--title">Información Adicional</h3>
            <p className="info__text--description">
              Este sitio web cuenta con 12 modulos, cada modulo cuenta con
              ejemplos practicos sobre determinados temas, el estudiante es
              libre de escoger a cual modulo quiere ingresar, nuestra
              recomendación es que antes de ingresar a un modulo, visite el
              modulo previo, para asi poder obtener un mejor entendimiento de
              los temas que va a ver en el modulo al que desea entrar.
            </p>
              <button className="btn" onClick={()=> history.push('/menu')}>¡Aprende más!</button>
          </div>
          <div className="info__image">
            <img src={logo} alt="logos"></img>
          </div>
        </div>
      </div>
      <hr className="footer"></hr>
      <Footer/>
    </div>
  );
}

export default Start;
