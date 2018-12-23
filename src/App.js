import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import page404 from './pages/page404';

import "tabler-react/dist/Tabler.css";
import "./override.css";

import SiteWrapper from "./components/SiteWrapper";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/team' component={Team}></Route>
          <Route component={page404}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
