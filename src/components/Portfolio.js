import React, { Component } from 'react';
import cafeProject from "../images/cafeProject.PNG"
import scrape from "../images/scrape.PNG"
import gameJam from "../images/gameJam.PNG"

const projects = [
  {
    name: "Cafe Del Sol",
    imagePath: cafeProject,
    description: "Application that allows restaurant owners to maintain and modify their own websites with a convenient and accessible admin portal.",
    skills: "HTML, SCSS, Node.js, React.js, MongoDB, Express.js",
    URL: "https://cafe-del-sol-darek.herokuapp.com/"
  },
  {
    name: "Mongo Scraper",
    imagePath: scrape,
    description: "Application that allows restaurant owners to maintain and modify their own websites with a convenient and accessible admin portal.",
    skills: "HTML, CSS, jQuery, Yelp API",
    URL: "https://emilykradke.github.io/Project1/"
  },
  {
    name: "Game Jam",
    imagePath: gameJam,
    description: "Arcade style website that allows users to play minigames and add their highscore to a database. High scores are displayed on the website.",
    skills: "HTML, CSS, jQuery, Node.js, MySQL, Sequelize, Express.js",
    URL: "https://game-jam2019.herokuapp.com/"
  }
]


class Portfolio extends Component {
  constructor(props) {
    super(props);
    
    this.project1Ref = React.createRef();
    this.project2Ref = React.createRef();
    this.project3Ref = React.createRef();
    this.panelRefs = [this.project1Ref, this.project2Ref, this.project3Ref];
  }
  
  
  render() {

    return (
      <section id="portfolio" className="portfolio">
        <div className="portfolio-container">
          <h1 className="heading-l">Portfolio</h1>

          <div className="projects-container">
            {projects.map((project, i) => {
              return (
                <div className="project-block" key={i}
                  ref={i === 0 ? this.project1Ref : 
                        i === 1 ? this.project2Ref : 
                          i === 2 ? this.project3Ref : null}
                >
                  <a href={project.URL} className="project-img-link" target="_blank" rel="noopener noreferrer">
                    <img src={project.imagePath} alt="" />
                  </a>
                  <div className="project-details">
                    <h2 className="heading-m">{project.name}</h2>
                    <p className="description">{project.description}</p>
                    <p className="paragraph">{project.skills}</p>
                    <a href={project.URL} className="project-link" target="_blank" rel="noopener noreferrer">View project</a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>
    );
  }
}

export default Portfolio;