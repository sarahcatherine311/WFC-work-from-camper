import React from 'react';
import './CampsiteDetails.css';
import { useParams } from 'react-router-dom';

function CampsiteDetails({ campsites }) {
  const { id } = useParams();
  console.log(id)
  const campsite = campsites.find(campsite => campsite.id === id)
  console.log(campsite)

  return (
    <div className="campsite-details">
      <h1>{campsite.fullName}</h1>
      <p>{campsite.description}</p>
      <section className="photos-section">
        {campsite.images.map(image => <img className="image" key={image.title} src={image.url} alt={image.altText}/>)}
      </section>
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
