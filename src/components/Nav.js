import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

class Nav extends Component {
  
  render() {
    return (
      <nav>
        <Scrollspy className="nav-list"
          items={ ['about', 'portfolio', 'contact'] } offset={ -200 }>
          <li>
            <a href={`#about`}>About</a>
            <a href={`#portfolio`}>Portfolio</a>
            <a href={`#contact`}>Contact</a>
            <a href={`https://docs.google.com/document/d/1rnKLGv9Pz8hbtlZFnhmpjAVmRgtdeURjkIdtgBEY_b4/edit?usp=sharing`}  target={"_blank"}>Resume</a>
          </li>
        </Scrollspy>
      </nav>
    )
  }
}

export default Nav;