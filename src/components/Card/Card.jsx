import React, { Component } from 'react';
import './Card.scss';
import { useHistory } from 'react-router-dom';

function getLabelColor(difficulty) {
  switch (difficulty) {
    case 'Principiante':
      return '#5cb85c';
    case 'Medio':
      return '#f0ad4e';
    case 'Avanzado':
      return '#337ab7';
    case 'Elemental':
      return '#5bc0de';
  }
}

function Modul(props){
  const history = useHistory();
  return (
    <div className="Card">
      <img className="Card__img" src={props.img} alt="Clases" />
      <div className="Card__text">
        <h4 className="Card__text--title">{props.title}</h4>
        <p
          className="Card__text--difficulty"
          style={{
            color: getLabelColor(props.difficulty),
            fontWeight: 'bold',
          }}
        >
          {props.difficulty}
        </p>
        <p className="Card__text--description">{props.description}</p>
      </div>
      <div className="Card__link">
        <a onClick = {()=> history.push(props.page)}>Iniciar tema</a>
      </div>
    </div>
  );
}

class Card extends Component {
  render() {
    return (
      <Modul img={this.props.img} title={this.props.title} difficulty={this.props.difficulty} description={this.props.description} page={this.props.page}/>
    );
  }
}

export default Card;
