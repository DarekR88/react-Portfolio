import React, { Component } from 'react';

import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Home from "./Home";
import Contact from "./Contact"


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <Home />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
