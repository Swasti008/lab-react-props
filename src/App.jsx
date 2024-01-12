import React from 'react';
import './App.css';

function App(props) {
  // code here
  let dataContainer = props.imgSrc;
  console.log(dataContainer)
  return( <div className="fourimages">
    <h1>{props.name}</h1>
    {dataContainer.map((element) => (
      <img src={element.img} alt={element.id} className="eachElephant" />
    ))}
  </div>)
}

export default App;
