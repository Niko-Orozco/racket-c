import React from 'react';
import './Home.scss';
import Card from '../../components/Card/Card.jsx';
import data from '../../assets/data/card-info.json';
import Navbar from '../../components/Navbar/Navbar.jsx';

function Home() {
  return (
    <div className="Container">
      <Navbar mod = {'expresiones'}></Navbar>
      <div className="Home">
        {data.map(function (element) {
          return (
            <Card
              title={element.title}
              description={element.description}
              img={element.img}
              page={element.page}
              difficulty={element.difficulty}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
