import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import setAuthToken from './utils/setAuthToken'
import './App.scss';
import Header from './containers/Header/Header';
import { Routes } from './components/routing/Routes';
import Login from './containers/Login/Login';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ Login } />
          <Route component={ Routes } />
        </Switch>

      </Router>
    </Provider>
  );
}

export default App;
