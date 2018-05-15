import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const App = (props) => (
  <div className="App">
    <Header />
    <Main apiKey={props.apiKey} />
  </div>
);

export default App;
