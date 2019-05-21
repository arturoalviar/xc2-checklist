import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../Home";
import About from "../About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </HashRouter>
    );
  }
}

export default App;
