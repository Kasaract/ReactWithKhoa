import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import State from './components/State';
import Popup from './components/Popup';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/state" component={State}/>
          <Route path="/popup" component={Popup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;