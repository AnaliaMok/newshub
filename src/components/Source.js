import React from 'react';

const Source = ({source}) => (
  <a className="source" href={source.url} target="blank" rel="nofollow">
    <h2 className="source__name">{source.name}</h2> 
    <p className="source__description">{source.description}</p>
    <div className="source__description-box">
      <span className="source__description-box__category">{source.category}</span>
      <span className="source__description-box__country">{source.country}</span>
    </div>
  </a>
);

export default Source;
