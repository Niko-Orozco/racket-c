import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  getLabelColor(difficulty) {
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

  render() {
    return (
      <div className="Card">
        <img className="Card__img" src={this.props.img} alt="Clases" />
        <div className="Card__text">
          <h4 className="Card__text--title">{this.props.title}</h4>
          <p
            className="Card__text--difficulty"
            style={{
              color: this.getLabelColor(this.props.difficulty),
              fontWeight: 'bold',
            }}
          >
            {this.props.difficulty}
          </p>
          <p className="Card__text--description">{this.props.description}</p>
        </div>
        <div className="Card__link">
          <a href={this.props.page}>Iniciar tema</a>
        </div>
      </div>
    );
  }
}

export default Card;
