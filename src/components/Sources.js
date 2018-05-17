import React, { Component } from 'react'
import Source from './Source';
import './styles/Sources.css';

let baseApiUrl = 'https://newsapi.org/v2';

export default class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
      isLoaded: false,
      sources: []
    };
  }

  componentDidMount() {
    let sourcesUrl = baseApiUrl + '/sources?apiKey=' + this.props.apiKey;
    fetch(sourcesUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            sources: result.sources
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
    const { errors, isLoaded, sources } = this.state;
    return (
      <div className="sources-page__container">
        <h2 className="sources__header">Our Sources</h2>
        <div className="sources">
        {sources.map( (source) => (
          <Source source={source} key={source.id}/>
        ))}
        </div>
      </div>
    )
  }
}
