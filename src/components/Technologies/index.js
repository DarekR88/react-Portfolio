import React from "react"
import "./style.css"

function Technologies() {
    return (
        <div>
            <h1>Technologies that I have learned and use regularly.</h1>
            <a href="https://www.javascript.com/"><img width="100" alt="javaScript" src="./images/javascriptimg.jpg"></img></a>
            <a href="https://reactjs.org/"><img width="100" alt="reactlink" src="./images/react.png"></img></a>
            <a href="https://nodejs.org/en/"><img width="100" alt="nodelink" src="./images/nodeimage.png"></img></a>
            <a href="https://www.mysql.com/"><img width="100" alt="sql" src="./images/sql.png"></img></a>
            <a href="http://docs.sequelizejs.com/"><img width="100" alt="sequelize" src="./images/sequelizeLogo.png"></img></a>
            <a href="https://www.mongodb.com/"><img width="100" alt="mongo" src="./images/mongo.png"></img></a>
            <a href="https://github.com/"><img width="100" alt="githubimg" src="./images/gitHub.png"></img></a>
            <a href="https://mongoosejs.com/" className="mongooseLink"><p className="mongooseText">mongoose</p></a>

        </div>
    )
}

export default Technologies;