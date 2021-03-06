import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Sources from './Sources';

const Main = (props) => (
  <main>
  <Switch>
    <Route exact path='/' render={ () => 
      (<Home apiKey={props.apiKey} />)
    }/>
    <Route exact path='/sources' render={ () => 
      (<Sources apiKey={props.apiKey} />)
    }/>
  </Switch>  
  </main>
);

export default Main;