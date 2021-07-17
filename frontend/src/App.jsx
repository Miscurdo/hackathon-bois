import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import TitlePage from './pages/Title';
import ForgotPasswordPage from './pages/ForgotPassword';

const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <TitlePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
