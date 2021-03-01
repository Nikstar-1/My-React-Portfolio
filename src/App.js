//import logo from './logo.svg';
import React from 'react'
import './App.css'

import Nav from './components/Nav.js'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


  function App() {
  return (
    <Router>
  <div className="App">
  <Nav />
  <Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/About" component={About}/>
  <Route path="/Portfolio" component={Portfolio}/>
  <Route path="/Contact" component={Contact}/>
  </Switch>
  </div>
  </Router>
  )
  }
  
  const Home = () => (
    <div>
      <h1>Home Page</h1>
    </div>
  )

  export default App;
  