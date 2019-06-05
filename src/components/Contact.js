import React, { Component } from 'react';
import darek from '../images/darek.jpg';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact-container">
          <h1 className="heading-l">Contact</h1>
          <div className="contact-inner">
            <img className="profile-img" src={darek} alt="darek-radke"/>
            <div className="details">
              <p className="paragraph">
                  I recently discovered my passion for website development and I am constantly researching ways to increase my expertise and knowledge.
              </p>
              <p className="paragraph">
                  Technologies I have learned and work with on a regular basis:
              </p>
              <div className="skills-block">
                <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                </ul>
                <ul>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Mongoose</li>
                  <li>Sequelize</li>
                </ul>
              </div>
              <p className="paragraph">
                I aim to create unique UI/UX experiences focused on utility and adaptivity.
              </p>
              <p className="paragraph">
                E-mail: Dradmclad@gmail.com
              </p>
              <p className="paragraph">
                Phone: (408) 761-4606
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;