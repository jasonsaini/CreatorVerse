// src/pages/ShowCreators.js
import React from 'react';
import Card from '../components/Card';

const ShowCreators = ({ creators }) => {
  return (
    <div>
      <h1>All Content Creators</h1>
      <div className="creators-list">
        {creators.map(creator => (
          <Card
            key={creator.id}
            name={creator.name}
            url={creator.url}
            description={creator.description}
            imageURL={creator.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowCreators;
