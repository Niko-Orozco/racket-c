import React, { useState } from 'react';
import './Example.scss';
import Editor1 from '../TabCode/editores/EditorRacket';
import Editor2 from '../TabCode/editores/EditorC';

function Example(props) {
  var show = 0;
  var [count, setCount] = useState(0);
  count = (count != props.label)? 0 : count;
  return (
    <div className="ejemplo">
      <div className="ejemplo__editor">
        <Editor1 ejemplo={props.label} module={props.modules} cero={0}/>
      </div>
      <div>
        <button className="compiler__button" onClick={()=>setCount(count = props.label)}>
          Ir a C
        </button>
        <div className="spacing"></div>
        <a href={"/comparison/:"+props.modules+props.label} className="compiler__button">
          Comparar
        </a>
      </div>
      <div className="ejemplo__editor">
        <Editor2 ejemplo={count} module={props.modules} cero={0}/>
      </div>
    </div>
  );
}

export default Example;
