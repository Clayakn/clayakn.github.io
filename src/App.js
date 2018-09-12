import React, { Component } from 'react';
import reactIcon from './images/react-icon.png';
import nodejsIcon from './images/nodejs-icon.png';
import postgresqlIcon from './images/postgresql-icon.png';
import graphqlIcon  from './images/graphql-icon.png';
import chartjsIcon  from './images/chartjs-icon.png';
import reduxIcon  from './images/redux-icon.png';
import jestIcon  from './images/jest-icon.png';
import enzymeIcon  from './images/enzyme-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Andrew Nam</h1>
        <div className="main">
          <div className="box">
            <p>Description Here</p>
          </div>
          <div className="box icon">
          <img src={reactIcon} alt="React Icon"/>
          <p>React</p>
          <img src={nodejsIcon} alt="Node Icon"/>
          <p>Nodejs</p>
          <img src={postgresqlIcon} alt="PostgreSQL Icon"/>
          <p>PostgreSQL</p>
          <img src={graphqlIcon} alt="GraphQL Icon"/>
          <p>GraphQL</p>
          <img src={chartjsIcon} alt="Chartjs Icon"/>
          <p>Chartjs</p>
          <img src={reduxIcon} alt="Redux Icon"/>
          <p>Redux</p>
          <img src={jestIcon} alt="Jest Icon"/>
          <p>Jest</p>
          </div>
          <div className="box icon">
          <img src={enzymeIcon} alt="Enzyme Icon"/>
          <p>Enzyme</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
