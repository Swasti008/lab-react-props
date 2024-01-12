import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from "./AppClass";
import elephant from "./images/elephant.jpeg";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name='Kalvium gallary App.jsx' imgSrc={elephant}/>
    <AppClass name='Kalvium gallary AppClass.jsx'imgSrc={elephant}/>   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
