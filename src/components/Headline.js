import React from 'react';
import './styles/Headline.css';

let placeholderImg = "http://via.placeholder.com/768x432";

const Headline = ({headline}) => (
  <a href={headline.url} target="_blank" rel="nofollow" className="headlines__headline">
    <span className="headlines__headline__source">{headline.source.name}</span>
    <div className="headlines__headline__image-container">
      <img src={headline.urlToImage === null || headline.urlToImage === "self" ? placeholderImg : headline.urlToImage} alt={headline.title}/>
    </div>
    <h3 className="headlines__headline__title">{headline.title.replace(/<(.|\n)*?>/g, '')}</h3>
    <p className="headlines__headline__excerpt">{headline.description.substr(0, 150)}{headline.description.length > 150 ? <span>...</span> : ''}</p>
  </a>
);

export default Headline;
