import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

const Header=() => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <nav>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/test'>Test</Link></li>
            </ul>
        </nav>
      </header>
    )
}

export default Header;