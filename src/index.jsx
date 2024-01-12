import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from "./AppClass";
import Data from './components/DataComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name='Kalvium gallary App.jsx' imgSrc={Data}/>
    <AppClass name='Kalvium gallary AppClass.jsx'imgSrc={Data}/>   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
