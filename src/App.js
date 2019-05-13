import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Blurb from "./components/Blurb";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Blurb />
        <Projects />
        <Technologies />
        <Footer />
      </div>
    );
  }
}

export default App;
