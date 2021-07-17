import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import TitlePage from './pages/Title';
import ForgotPasswordPage from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import GroupHomePage from './pages/GroupHome';
import GroupSettingsPage from './pages/GroupSettings';

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
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/group-home">
            <GroupHomePage />
          </Route>
          <Route exact path="/group-settings">
            <GroupSettingsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
