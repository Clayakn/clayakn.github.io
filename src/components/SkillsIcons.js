import React from 'react';

// images
import chartjsIcon  from '../images/chartjs-icon.png';
import cssIcon  from '../images/css-icon.png';
import enzymeIcon  from '../images/enzyme-icon.png';
import es6Icon  from '../images/es6-icon.jpg';
import expressIcon  from '../images/express-icon.png';
import gitIcon  from '../images/git-icon.png';
import graphqlIcon  from '../images/graphql-icon.png';
import htmlIcon  from '../images/html-icon.png';
import javascriptIcon  from '../images/javascript-icon.png';
import jestIcon  from '../images/jest-icon.png';
import nodejsIcon from '../images/nodejs-icon.png';
import postgresqlIcon from '../images/postgresql-icon.png';
import postmanIcon  from '../images/postman-icon.png';
import reactIcon from '../images/react-icon.png';
import reduxIcon  from '../images/redux-icon.png';
import restfulapiIcon  from '../images/restfulapi-icon.png';
import sassIcon  from '../images/sass-icon.png';


export default function SkillsIcons() {
    return (
        <React.Fragment>
          <div className="skillsicons_container icons">
          <h1>Skills</h1>
            <div className="skillsicons">
              <div className="skillsicons_logo">
                <img src={chartjsIcon} alt="Chartjs Icon"/>
                <p>Chartjs</p>
              </div>
              <div className="skillsicons_logo">
                <img src={cssIcon} alt="CSS Icon"/>
                <p>CSS</p>
              </div>
              <div className="skillsicons_logo">
                <img src={enzymeIcon} alt="Enzyme Icon"/>
                <p>Enzyme</p>
              </div>
              <div className="skillsicons_logo">
                <img src={es6Icon} alt="Es6 Icon"/>
                <p>Es6</p>
              </div>
              <div className="skillsicons_logo">
                <img src={expressIcon} alt="Express Icon"/>
                <p>Express</p>
              </div>
              <div className="skillsicons_logo">
                <img src={gitIcon} alt="Git Icon"/>
                <p>Git</p>
              </div>
              <div className="skillsicons_logo">
                <img src={graphqlIcon} alt="GraphQL Icon"/>
                <p>GraphQL</p>
              </div>
              <div className="skillsicons_logo">
                <img src={htmlIcon} alt="HTML Icon"/>
                <p>HTML</p>
              </div>
              <div className="skillsicons_logo">
                <img src={javascriptIcon} alt="Javascript Icon"/>
                <p>Javascript</p>
              </div>
              <div className="skillsicons_logo">
                <img src={jestIcon} alt="Jest Icon"/>
                <p>Jest</p>
              </div>
              <div className="skillsicons_logo">
                <img src={nodejsIcon} alt="Node Icon"/>
                <p>Nodejs</p>
              </div>
              <div className="skillsicons_logo">
                <img src={postgresqlIcon} alt="PostgreSQL Icon"/>
                <p>PostgreSQL</p>
              </div>
              <div className="skillsicons_logo">
                <img src={postmanIcon} alt="Postman Icon"/>
                <p>Postman</p>
              </div>
              <div className="skillsicons_logo">
                <img src={reactIcon} alt="React Icon"/>
                <p>React</p>
              </div>
              <div className="skillsicons_logo">
                <img src={reduxIcon} alt="Redux Icon"/>
                <p>Redux</p>
              </div>
              <div className="skillsicons_logo">
                <img src={restfulapiIcon} alt="RestfulAPI Icon"/>
                <p>RESTful API</p>
              </div>
              <div className="skillsicons_logo">
                <img src={sassIcon} alt="Sass Icon"/>
                <p>Sass</p>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}