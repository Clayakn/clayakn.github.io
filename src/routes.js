import React from 'react';

// components 
import WebProjects from './components/WebProjects';
import Home from './components/Home';

import { Switch, Route } from 'react-router-dom';


export default (
    <Switch>
        <Route exact path="/portfolio/" component={Home}/>
        <Route exact path="/webProjects" component={WebProjects}/>
    </Switch>
)