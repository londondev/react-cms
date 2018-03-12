import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import Navigation from './navigation';

const Header=({menu}) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <Navigation menu = {menu}/>
      </header>
    )
}

export default Header;