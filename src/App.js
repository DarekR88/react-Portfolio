import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Blurb from "./components/Blurb";
import Contact from "./components/Contact"


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Blurb />
        <Projects />
        <Technologies />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
