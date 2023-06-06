import React from 'react';
import './CampsiteCard.css';
import { Link } from 'react-router-dom';

function CampsiteCard({ campsite }) {
  return (
    <div className="campsite-card">
      <h1>{campsite.fullName}</h1>
      <p>Description: {campsite.description}</p>
      <ul>
        {campsite.activities.map(activity => <li key={activity.id}>{activity.name}</li>)}
      </ul>
    </div>
  );
}

export default CampsiteCard;
