import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Sources from './Sources';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/sources' component={Sources}/>
  </Switch>  
);

export default Main;