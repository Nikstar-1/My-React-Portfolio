//import logo from './logo.svg';
import React from 'react'
import '.../App.css';
import Nav from './components/Nav.js'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';



  function App() {
  return (
  <div className="App">
  <Nav />
  <About />
  <Portfolio />
  <Contact />
  </div>
  )
  }
  

  export default App;
  