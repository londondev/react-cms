import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

const bootstrapApp=() =>{
    axios.get('http://localhost:8080/api').then(response => startApp(response.data)).catch(err => showError(err));
}


function startApp(menu){
    ReactDOM.render(<BrowserRouter><App menu={menu} /></BrowserRouter>, document.getElementById('root'));
    registerServiceWorker();
}

function showError(err){
    console.log('Cannot get menu');
}

bootstrapApp();
