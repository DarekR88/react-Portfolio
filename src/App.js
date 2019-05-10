import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <h1>Hi, My name is Darek Radke.</h1>
        <p className="blurb">I am a full stack website developer.</p>
        <Projects />
        <Technologies />
        <Footer />
      </div>
    );
  }
}

export default App;
