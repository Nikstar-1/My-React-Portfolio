import React from "react";
import "./App.css";
//import background from "./components/images/Background.png";

import Container from "react-bootstrap/Container";
import Nav from "./components/Nav.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer.";
import SocialFollow from "./components/SocialFollow";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/About" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
          <Route path="/SocialFollow" component={SocialFollow} />
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
