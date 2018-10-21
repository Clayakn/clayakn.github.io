import React from 'react';
import SkillsIcons from './SkillsIcons';

// images 
import nutritionHomePic from '../images/nutritionmadeeasy-home-page.png';
import whosbringingwhatHomePic from '../images/whosbringingwhat-home-page.png';



export default function WebProjects() {
    return (
        <React.Fragment>
            <div className="webprojects_container">
                <SkillsIcons/>
            </div>
            <div className="webprojects_container">
                <div className="webprojects_project_container">
                    <h1>Projects</h1>
                    <div className="webprojects_project">
                        <div className="webprojects_project_title">
                            <h3>Project Name</h3>
                            <p>Nutrition Made Easy</p>
                            <img id="nutritionmadeeasy_home_photo" src={nutritionHomePic} alt="Home page for Nutrition Made Easy Website"/>
                        </div>
                        <div className="webprojects_project_description">
                            <h3>Framework</h3>
                            <p>Front-end: React | Server: Express in Nodejs | Back-end: PostgreSQL in Heroku </p>
                            <h3>Technologies & Libraries</h3>
                            <p>Auth0 | Axios | Chartjs | Digital Ocean | Postman | React-router-dom | Redux | Sass </p>
                            <h3>Description</h3>
                            <p>Single-Page Application created to calculate nutritional values of food and create meal plans based on nutritional values.</p>
                            <h3>Key Features</h3>
                            <li>Display key information about six major groups of nutrition</li>
                            <li>Create a mealplan by obtaining food items through USDA Nutrition API</li>
                            <li>Display total nutritional content of your mealplan through numbers and Chartjs</li>
                        </div>
                        <div className="webprojects_project_list">
                            <h3>Links</h3>
                            <a className='webprojects_project_name' href="https://nutritionmadeeasy.us">Website</a>
                            <a className='webprojects_project_name' href="https://github.com/Clayakn/personal-project-devmtn">Github</a>
                            {/* <p>*Photos of Project on Github</p> */}
                        </div>
                    </div>
                    <div className="webprojects_project">
                        <div className="webprojects_project_title">
                            <h3>Project Name</h3>
                            <p>Whos Bringing What</p>
                            <img id="whosbringingwhat_home_photo" src={whosbringingwhatHomePic} alt="Home page for Whos Bringing What Website"/>
                        </div>
                        <div className="webprojects_project_description">
                            <h3>Framework</h3>
                            <p>Front-end: React | Server: Express in Nodejs | Back-end: PostgreSQL in Heroku </p>
                            <h3>Technologies & Libraries</h3>
                            <p> Apollo | Auth0 | Axios | Cypress | Digital Ocean | Enzyme | GraphQL | Jest | Lodash | Nodemailer | Postman | React-app-rewire-hot-loader | React-google-maps | React-router-dom | Redux | Sass | Sinon </p>
                            <h3>Description</h3>
                            <p>Single-Page Application created to display events an user is attending on Facebook and items that a user wants to bring to that event so that other users going to that same event could see what items are already being brought. </p>
                            <h3>Key Features</h3>
                            <li>Utilizes Facebook API to request events an user is attending on Facebook</li>
                            <li>Shares information Facebook event and displays location with React-Google-Maps</li>
                            <li>Allows user to create list of items for others to bring if user is the host of the event on Facebook, other users invited to the event could then assign themselves items to be brought</li>
                        </div>
                        <div className="webprojects_project_list">
                            <h3>Links</h3>
                            <a className='webprojects_project_name' href="https://whosbringingwhat.org">Website</a>
                            <a className='webprojects_project_name' href="https://github.com/Zakery1/whos-bringing-what">Github</a>
                            {/* <p>*Photos of Project on Github</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}