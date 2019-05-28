import React from "react"
import "./style.css"

function Projects() {
    return (
        <div>
            <div className="projectDiv">
                <a className="projectLink" href="https://cafe-del-sol-darek.herokuapp.com/"><img width="250" height="175" src="../images/cafeProject.PNG" alt="scrape"></img></a>
                <p>Application that allows restaurant owners to maintain and modify their own websites with a convenient and accessible admin portal.</p>
            </div>
            <div id="first" className="projectDiv">
                <a className="projectLink" href="https://game-jam2019.herokuapp.com/"><img width="250" height="175" alt="gameJam" src="../images/gameJam.PNG"></img></a>
                <p>Arcade style website that allows users to play minigames and add their highscore to a database. High scores are displayed on the website.</p>
            </div>
            <div className="projectDiv">
                <a className="projectLink" href="https://mysterious-woodland-91607.herokuapp.com/"><img width="250" height="175" src="../images/scrape.PNG" alt="scrape"></img></a>
                <p>Application that scrapes a website and displays articles. Users are able to save, delete, and comment on articles.</p>
            </div>
        </div>
    )
}

export default Projects