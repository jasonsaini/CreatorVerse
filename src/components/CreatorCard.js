// src/components/Card.js
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Optional: Import a CSS file for styling

const Card = ({ name, url, description, imageURL }) => {
  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={`${name}`} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <a href={url} className="card-url" target="_blank" rel="noopener noreferrer">Visit Channel</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string, // Optional
};

export default Card;
