import React from 'react';
import './Example.scss';
import Editor1 from '../TabCode/editores/EditorRacket';
import Editor2 from '../TabCode/editores/EditorC';

function Example(props) {
  return (
    <div className="ejemplo">
      <div className="ejemplo__editor">
        <Editor1 ejemplo={props.label} module={props.modules} />
      </div>
      <a href={"/comparison/:"+props.modules} className="compiler__button">
        Comparar
      </a>
      <div className="ejemplo__editor">
        <Editor2 ejemplo={props.label} module={props.modules} />
      </div>
    </div>
  );
}

export default Example;
