import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/auth'
import './App.scss';
import Header from './containers/Header/Header';
import { Routes } from './containers/routing/Routes';
import Login from './containers/Login/Login';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={ store }>
      <Router>
        <Header />
        <div className="content-wrapper">
          <Switch>
            <Route exact path='/' component={ Login } />
            <Route component={ Routes } />
          </Switch>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
