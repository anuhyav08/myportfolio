import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Contact from './contactme';  

const Main = () =>(
<Switch>
    <Route exact path="/myportfolio" component={AboutMe}/>
    <Route exact path="/aboutme" component = {AboutMe}/>
    <Route exact path = "/projects" component = {Projects}/>
    <Route exact path = "/resume" component = {Resume}/>
    <Route exact path = "/contact" component = {Contact}/>
</Switch>
)

export default Main;
