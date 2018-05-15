import React, { Component } from 'react'
import './styles/Home.css';

let baseApiUrl = 'https://newsapi.org/v2';

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   apiKey: props.apiKey
    // };
  }

  componentDidMount() {
    let headlinesUrl = baseApiUrl + '/top-headlines?language=en&apiKey=' + this.props.apiKey;
    fetch(headlinesUrl)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
      })
  }

  render() {
    return (
      <div>
        This is the home page
      </div>
    )
  }
}
