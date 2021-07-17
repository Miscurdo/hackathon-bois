import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// import LoginPage from './pages/Login';
import TitlePage from './pages/Title';
import Dashboard from './pages/Dashboard';

const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <TitlePage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
