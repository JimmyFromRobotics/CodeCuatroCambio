import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App3 from './App3';
import App2 from './App2';
import data from './data/data';

//The app is now passing the data as a property
ReactDOM.render(<App3 data={data} />, document.getElementById('root'));
