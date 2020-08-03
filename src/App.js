import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import setAuthToken from './utils/setAuthToken'
import './App.scss';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Landing } />
          <Route component={ Routes } />
        </Switch>

      </Router>
    </Provider>
  );
}

export default App;
