import React, { Component } from 'react'
import './styles/Home.css';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      baseApiUrl: 'https://newsapi.org/v2',
      apiKey: props.apiKey
    };
  }
  render() {
    return (
      <div>
        This is the home page
      </div>
    )
  }
}
