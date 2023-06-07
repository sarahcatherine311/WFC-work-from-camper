import React from 'react';
import './CampsiteCard.css';
import { Link } from 'react-router-dom';

function CampsiteCard({ campsite }) {
  let imageSrc
  if(!campsite.images[0]) {
    imageSrc = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
  } else {
    imageSrc = campsite.images[0].url
  }

  return (
    <div className="campsite-card">
      <img className="campsite-img" src={imageSrc}/>
      <h3 className="campsite-name">{campsite.name}</h3>
    </div>
  );
}

export default CampsiteCard;
