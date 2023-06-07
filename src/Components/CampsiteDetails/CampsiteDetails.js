import React from 'react';
import './CampsiteDetails.css';
import { Link } from 'react-router-dom';

function CampsiteDetails({ campsite }) {
  return (
    <div className="campsite-details">
      <h1>{campsite.fullName}</h1>
      <p>Description: {campsite.description}</p>
      <div className="activities-section">
       <h2>Activities:</h2>
       <ul className="campsite-activities">
          {campsite.activities.map(activity => <li key={activity.id}>{activity.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CampsiteDetails;
