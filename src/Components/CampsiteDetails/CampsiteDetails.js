import React from 'react';
import './CampsiteDetails.css';
import { useParams } from 'react-router-dom';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

function CampsiteDetails({ campsites }) {
  const { id } = useParams();
  const campsite = campsites.find(campsite => campsite.id === id)

  if (!campsite) {
    return <div className="loading">Loading your campsite details...</div>;
  }

  return (
    <div className="campsite-details">
      <h1>{campsite.name}</h1>
      <p>{campsite.description}</p>
      <section className="photos-section">
        <PhotoGallery photos={campsite.images}/>
      </section>
      {campsite.accessibility.additionalInfo && <p><strong>Additional Information: </strong>{campsite.accessibility.additionalInfo}</p>}
      <section className="rv-info">
        <h2>RV and Trailer Information:</h2>
        {campsite.accessibility.rvAllowed === "1" && <p><strong>RV Allowed:</strong> Yes</p> || <p>RV Allowed: No</p>}
        {campsite.accessibility.rvMaxLength > 0 && <p><strong>RV Max Length: </strong> {campsite.accessibility.rvMaxLength}ft</p>}
        {campsite.accessibility.trailerAllowed === "1" && <p><strong>Trailer Allowed: </strong> Yes</p> || <p>Trailer Allowed: No</p>}
        {campsite.accessibility.trailerMaxLength > 0 && <p><strong>Trailer Max Length: </strong>{campsite.accessibility.trailerMaxLength}ft</p>}
        {campsite.accessibility.rvInfo !== "N/A" && <p>{campsite.accessibility.rvInfo}</p>}
      </section>  
    </div>
  );
}

export default CampsiteDetails;
