import React, { Component } from 'react'
import Sources from './Sources';
import Headline from './Headline';
import './styles/Home.css';

let baseApiUrl = 'https://newsapi.org/v2';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      isLoaded: false,
      headlines: []
    };
  }

  componentDidMount() {
    let headlinesUrl = baseApiUrl + '/top-headlines?language=en&apiKey=' + this.props.apiKey;
    fetch(headlinesUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            headlines: result.articles
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { errors, isLoaded, headlines } = this.state;
    return (
      <div>
        <h2>Today's Headlines</h2>
        <div className="headlines">
          {headlines.map((headline) => (
            <Headline headline={headline} key={headline.title} />
          ))}
        </div>
      </div>
    )
  }
}
