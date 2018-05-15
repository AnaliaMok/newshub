import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

const App = () => (
  <div className="App">
    <Header />
    <Main apiKey="32639444434c45d5a51addf66164042d" />
  </div>
);

export default App;
