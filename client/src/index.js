import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import RegisterPage from './components/register-page';
import LoginPage from './components/login-page';
import Learn from './components/learn';
import Home from './components/home';
import Profile from './components/profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/learn" component={Learn} />
        <Route path="/profile" component={Profile} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
