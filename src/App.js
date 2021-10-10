import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navabr from './Components/Layout/Navbar';
import User from './Components/Users/User';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
import Alert from './Components/Layout/Alert';
import About from './Components/Pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Particles from 'react-particles-js';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navabr />
            <div className="container">
            
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
