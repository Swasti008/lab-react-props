import React from 'react';
import Data from './components/DataComponent';
import './App.css';

function App() {
  // code here
  let dataContainer = Data();
  return <div className="fourimages">
    <h1>Kalvium gallary (App.jsx)</h1>
    {dataContainer.map((element) => (
      <img src={element.img} alt={element.id} className="eachElephant" />
    ))}
  </div>
}

export default App;
