import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterPage from './components/register-page';
import LoginPage from './components/login-page';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="mainNav">
          <button><Link to={'/'}>Home</Link></button>
          <button><Link to={'/register'}>Register</Link></button>
          <button><Link to={'/login'}>Login</Link></button>
        </nav>

        <div>{this.props.children}</div>

      </div>
    );
  }
}

export default App;
