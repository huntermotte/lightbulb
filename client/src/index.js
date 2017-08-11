import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
// import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// const routes = (
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//     </Route>
//   </Router
// );

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
