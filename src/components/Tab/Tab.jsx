import React from 'react';
import './Tab.scss';

export default function Tab({ onClick, name, currentActive, index }) {
  return (
    <div
      onClick={() => onClick(index)}
      className={`tab__button ${
        currentActive === index && 'tab__button--active'
      }`}
    >
      <i className="fa fa-sitemap "></i> {name}
    </div>
  );
}
