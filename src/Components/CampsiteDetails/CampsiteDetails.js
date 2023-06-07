import React from 'react';
import './CampsiteDetails.css';
import { useParams } from 'react-router-dom';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

function CampsiteDetails({ campsites }) {
  const { id } = useParams();
  const campsite = campsites.find(campsite => campsite.id === id)

  if (campsite) {
    return (
      <div className="campsite-details">
        <h1>{campsite.name}</h1>
        <p>{campsite.description}</p>
        <section className="photos-section">
          <PhotoGallery photos={campsite.images}/>
        </section>
        {campsite.accessibility.additionalInfo && <p><strong>Additional Information: </strong>{campsite.accessibility.additionalInfo}</p>}
        <div className='rv-and-amenities'>
          <section className="rv-info">
            <h2>RV and Trailer Information:</h2>
            {campsite.accessibility.rvAllowed === "1" && <p><strong>RV Allowed:</strong> Yes</p> || <p><strong>RV Allowed:</strong> No</p>}
            {campsite.accessibility.rvMaxLength > 0 && <p><strong>RV Max Length: </strong> {campsite.accessibility.rvMaxLength}ft</p>}
            {campsite.accessibility.trailerAllowed === "1" && <p><strong>Trailer Allowed: </strong> Yes</p> || <p><strong>Trailer Allowed: </strong> No</p>}
            {campsite.accessibility.trailerMaxLength > 0 && <p><strong>Trailer Max Length: </strong>{campsite.accessibility.trailerMaxLength}ft</p>}
            {campsite.accessibility.rvInfo !== "N/A" && <p><strong>Additional Information: </strong>{campsite.accessibility.rvInfo}</p>}
          </section>
          <section className="amenities-info">
            <h2>Amenities:</h2>
            <div className='amenities'>
              {campsite.amenities.internetConnectivity.includes("Yes") && <p><strong>Internet Connectivity:</strong> Yes</p>}
              {campsite.amenities.cellPhoneReception.includes("Yes") && <p><strong>Cell Phone Reception:</strong> Yes</p> || <p><strong>Cell Phone Reception:</strong> No</p>}
              {campsite.amenities.potableWater.length >= 1 && <p><strong>Potable Water:</strong> Yes</p> || <p><strong>Potable Water:</strong> No</p>}
              {campsite.amenities.showers.length >= 1 && <p><strong>Showers:</strong> Yes</p> || <p><strong>Showers:</strong> No</p>}
              {campsite.amenities.laundry.includes("Yes") && <p><strong>Laundry:</strong> Yes</p> || <p><strong>Laundry:</strong> No</p>}
              {campsite.amenities.toilets.length >= 1 && <p><strong>Toilets:</strong> Yes</p> || <p><strong>Toilets:</strong> No</p>}
              {campsite.amenities.dumpStation.includes("Yes") && <p><strong>Dump Station:</strong> Yes</p> || <p><strong>Dump Station:</strong> No</p>}
              {campsite.amenities.trashRecyclingCollection.includes("Yes") && <p><strong>Trash and Recycling:</strong> Yes</p> || <p><strong>Trash and Recycling:</strong> No</p>}
              {campsite.amenities.campStore.includes("Yes") && <p><strong>Camp Store:</strong> Yes</p> || <p><strong>Camp Store:</strong> No</p>}
              {campsite.amenities.firewoodForSale.includes("Yes") && <p><strong>Firewood For Sale:</strong> Yes</p> || <p><strong>Firewood For Sale:</strong> No</p>}
              {campsite.amenities.iceAvailableForSale.includes("Yes") && <p><strong>Ice For Sale:</strong> Yes</p> || <p><strong>Ice For Sale:</strong> No</p>}
              {campsite.amenities.foodStorageLockers.includes("Yes") && <p><strong>Food Storage Lockers:</strong> Yes</p> || <p><strong>Food Storafe Lockers:</strong> No</p>}
              {campsite.amenities.staffOrVolunteerHostOnsite.includes("Yes") && <p><strong>Staff or Volunteer Onsite:</strong> Yes</p> || <p><strong>Staff or Volunteer Onsite:</strong> No</p>}
            </div>
          </section>  
        </div>
      </div>
    );
  }
}

export default CampsiteDetails;
