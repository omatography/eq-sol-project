
//index.js only connects Home Component to div#root , now go to Home.js
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './styles.css'
ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

