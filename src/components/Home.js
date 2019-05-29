import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section id="about" className="home">
        <div className="home-container">
          <h1 className="heading-l"><span className="loud">Darek Radke</span></h1>
          <h2 className="heading-l">Full-stack Website Developer</h2>
          {/* <p className="paragraph">This is description 1.</p> */}
        </div>
      </section>
    );
  }
}

export default Home;