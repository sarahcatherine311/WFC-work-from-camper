import React from 'react';
import './CampsiteCard.css';
import { Link } from 'react-router-dom';

function CampsiteCard({ campsite }) {
  return (
    <div className="campsite-card">
      <img className="campsite-img" src={campsite.images[0].url}/>
      <h3 className="campsite-name">{campsite.fullName}</h3>
    </div>
  );
}

export default CampsiteCard;
