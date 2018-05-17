import React from 'react';
import './styles/Headline.css';

let placeholderImg = "http://via.placeholder.com/768x432";

const Headline = ({headline}) => (
  <a href={headline.url} className="headlines__headline">
    <span className="headlines__headline__source">{headline.source.name}</span>
    <div className="headlines__headline__image-container">
      <img src={headline.urlToImage === null ? placeholderImg : headline.urlToImage} alt={headline.title}/>
    </div>
    <h3 className="headlines__headline__title">{headline.title}</h3>
  </a>
);

export default Headline;
